/**
 * Model Health handoff — Netlify Function
 *
 * Ownership (locked 2026-09-08):
 * - This function does NOT send the score email.
 * - Model Health bot sends score email via Outlook (matt@alluviumbi.com):
 *     To = form field `email` on that submission only; From/BCC on MH side.
 * - Site job: accept Forms webhook and forward binding fields to the bot.
 *
 * Form HTML names on /power-bi-model-health:
 *   form-name = "model-health" (hidden)
 *   bot-field (honeypot)
 *   email (work email → score To)
 *   file (multipart upload)
 *
 * Env (handoff only — not mailer):
 *   MODEL_HEALTH_BOT_ID   default ccffd784-93b8-4aa5-8bc7-8e8a7e7d4d4a
 *   MODEL_HEALTH_WAKE_URL optional POST endpoint that accepts the wake JSON
 *   MODEL_HEALTH_WAKE_TOKEN optional Bearer / shared secret for that endpoint
 *   MODEL_HEALTH_WAKE_DRY_RUN=1  build + optionally write fixture; never POST
 *   MODEL_HEALTH_WAKE_FIXTURE_PATH  where dry-run writes JSON (default /tmp/…)
 *
 * Without WAKE_URL + WAKE_TOKEN this function parses + returns 202 and does
 * not call any agent wake API (fail-safe offline / pre-wire).
 *
 * Curl contract (after deploy): see docs/MH_WAKE_PAYLOAD.md
 * Forms UI steps: docs/MH_FORMS_WEBHOOK_SETUP.md
 */

import { writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import { mkdir } from "node:fs/promises";

const DEFAULT_BOT_ID = "ccffd784-93b8-4aa5-8bc7-8e8a7e7d4d4a";
const EXPECTED_FORM = "model-health";
const WAKE_SCHEMA_VERSION = 1;
const DEFAULT_FIXTURE_PATH = "/tmp/mh-wake-dry-run-latest.json";

const EXPECTED_FIELDS = [
  "submission_id (Forms id / number)",
  "email (form field email)",
  "fileUrl (Forms file URL/path)",
  "timestamp (created_at) optional",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(statusCode, body, extraHeaders = {}) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
      ...extraHeaders,
    },
    body: JSON.stringify(body),
  };
}

function headerGet(headers, name) {
  if (!headers) return null;
  const want = name.toLowerCase();
  for (const [k, v] of Object.entries(headers)) {
    if (String(k).toLowerCase() === want) return Array.isArray(v) ? v[0] : v;
  }
  return null;
}

function isTruthyFlag(v) {
  if (v == null) return false;
  const s = String(v).trim().toLowerCase();
  return s === "1" || s === "true" || s === "yes" || s === "on";
}

/** Dry-run when env set, or request opts in via query/header (never wakes). */
export function isDryRun(event) {
  if (isTruthyFlag(process.env.MODEL_HEALTH_WAKE_DRY_RUN)) return true;
  const q = event?.queryStringParameters || {};
  if (isTruthyFlag(q.dry_run) || isTruthyFlag(q.dryRun)) return true;
  const h =
    headerGet(event?.headers, "x-alluvium-dry-run") ||
    headerGet(event?.headers, "x-dry-run");
  return isTruthyFlag(h);
}

function decodeBody(event) {
  if (!event.body) return null;
  const raw = event.isBase64Encoded
    ? Buffer.from(event.body, "base64").toString("utf8")
    : event.body;
  try {
    return JSON.parse(raw);
  } catch {
    // Netlify sometimes posts application/x-www-form-urlencoded to functions
    if (typeof raw === "string" && raw.includes("=") && !raw.trim().startsWith("{")) {
      const params = new URLSearchParams(raw);
      const obj = {};
      for (const [k, v] of params.entries()) obj[k] = v;
      return obj;
    }
    return { _parseError: true, _rawPreview: String(raw).slice(0, 200) };
  }
}

/** Unwrap Netlify Dev / notification wrappers: { payload: {...} } or bare submission. */
function unwrapSubmission(body) {
  if (!body || typeof body !== "object") return null;
  // Common Netlify notification / Zapier-style wrappers
  if (body.payload && typeof body.payload === "object") return body.payload;
  if (body.data && body.data.payload && typeof body.data.payload === "object") {
    return body.data.payload;
  }
  if (body.submission && typeof body.submission === "object") return body.submission;
  return body;
}

function pickFileUrl(data) {
  if (!data || typeof data !== "object") return null;
  const direct = data.file ?? data.upload ?? data.model_file ?? data.attachment;
  if (typeof direct === "string" && direct.trim()) return direct.trim();
  if (direct && typeof direct === "object") {
    const url = direct.url || direct.path || direct.href || direct.download_url;
    if (typeof url === "string" && url.trim()) return url.trim();
  }
  if (Array.isArray(direct) && direct.length) {
    const first = direct[0];
    if (typeof first === "string" && first.trim()) return first.trim();
    if (first && typeof first === "object") {
      const url = first.url || first.path || first.href;
      if (typeof url === "string" && url.trim()) return url.trim();
    }
  }
  // Fallback: first http(s) value whose key looks file-like
  for (const [k, v] of Object.entries(data)) {
    if (/file|upload|attachment|zip|bim|tmdl/i.test(k) && typeof v === "string" && /^https?:\/\//i.test(v)) {
      return v;
    }
  }
  return null;
}

/**
 * Canonical wake envelope POSTed to MODEL_HEALTH_WAKE_URL (or written in dry-run).
 * schema_version lets CoS/MH evolve without breaking parsers.
 */
export function buildWakeEnvelope(wakeFields) {
  const bot_id = wakeFields.bot_id || process.env.MODEL_HEALTH_BOT_ID || DEFAULT_BOT_ID;
  return {
    schema_version: WAKE_SCHEMA_VERSION,
    bot_id,
    event: "model_health_submission",
    received_at: new Date().toISOString(),
    payload: {
      submission_id: wakeFields.submission_id,
      email: wakeFields.email,
      fileUrl: wakeFields.fileUrl,
      timestamp: wakeFields.timestamp,
      form_name: wakeFields.form_name || EXPECTED_FORM,
    },
  };
}

/**
 * Parse Netlify Forms webhook / notification shaped payload into MH binding fields.
 * Observed shapes (Netlify form_submission / submission_created):
 *   { id, number, email, data: { email, file, ... }, created_at, form_name, ... }
 * File uploads typically appear as URL strings under data.file.
 */
export function parseFormsWebhook(body) {
  const submission = unwrapSubmission(body);
  if (!submission || submission._parseError) {
    return {
      ok: false,
      error: "unparseable_body",
      details: submission?._rawPreview || null,
    };
  }

  const data =
    submission.data && typeof submission.data === "object"
      ? submission.data
      : submission.form_data && typeof submission.form_data === "object"
        ? submission.form_data
        : {};
  const formName =
    submission.form_name ||
    submission.formName ||
    data["form-name"] ||
    data.form_name ||
    null;

  const submission_id =
    submission.id != null
      ? String(submission.id)
      : submission.number != null
        ? String(submission.number)
        : data.submission_id != null
          ? String(data.submission_id)
          : null;

  const emailRaw =
    (typeof data.email === "string" && data.email) ||
    (typeof submission.email === "string" && submission.email) ||
    null;
  const email = emailRaw ? emailRaw.trim() : null;

  const fileUrl = pickFileUrl(data);
  const timestamp =
    submission.created_at ||
    data.created_at ||
    submission.received_at ||
    submission.createdAt ||
    null;

  const honeypot = data["bot-field"] || data.bot_field || "";
  if (typeof honeypot === "string" && honeypot.trim()) {
    return { ok: false, error: "honeypot_filled", formName };
  }

  const missing = [];
  if (!submission_id) missing.push("submission_id");
  if (!email) missing.push("email");
  if (!fileUrl) missing.push("fileUrl");

  const invalid = [];
  if (email && !EMAIL_RE.test(email)) invalid.push("email");
  if (fileUrl && !/^https?:\/\//i.test(fileUrl) && !fileUrl.startsWith("/")) {
    // Allow absolute http(s) or site-relative path; reject empty/garbage
    invalid.push("fileUrl");
  }

  const wake = {
    submission_id,
    email,
    fileUrl,
    timestamp,
    form_name: formName || EXPECTED_FORM,
    bot_id: process.env.MODEL_HEALTH_BOT_ID || DEFAULT_BOT_ID,
    source: "netlify-forms-webhook",
  };

  return {
    ok: missing.length === 0 && invalid.length === 0,
    missing,
    invalid,
    formName,
    wake,
    // Pass-through hints for CoS debug after first live webhook
    _debug: {
      hasData: Boolean(submission.data || submission.form_data),
      topKeys: Object.keys(submission).slice(0, 24),
      dataKeys: Object.keys(data).slice(0, 24),
    },
  };
}

async function writeWakeFixture(envelope) {
  const path =
    process.env.MODEL_HEALTH_WAKE_FIXTURE_PATH || DEFAULT_FIXTURE_PATH;
  try {
    await mkdir(dirname(path), { recursive: true });
    await writeFile(path, JSON.stringify(envelope, null, 2) + "\n", "utf8");
    return { written: true, path };
  } catch (err) {
    return {
      written: false,
      path,
      error: String(err && err.message ? err.message : err),
    };
  }
}

async function maybeWakeBot(wakePayload, { dryRun = false } = {}) {
  const envelope = buildWakeEnvelope(wakePayload);

  if (dryRun) {
    const fixture = await writeWakeFixture(envelope);
    return {
      attempted: false,
      woke: false,
      dryRun: true,
      reason: "dry_run — wake JSON built; no POST to MODEL_HEALTH_WAKE_URL",
      envelope,
      fixture,
    };
  }

  const url = process.env.MODEL_HEALTH_WAKE_URL;
  const token = process.env.MODEL_HEALTH_WAKE_TOKEN;
  if (!url || !token) {
    return {
      attempted: false,
      woke: false,
      dryRun: false,
      reason:
        "MODEL_HEALTH_WAKE_URL and/or MODEL_HEALTH_WAKE_TOKEN not set — parse-only, no wake",
      envelope,
    };
  }

  // TODO (CoS post-Thu): confirm Cursor/agent wake endpoint accepts this JSON.
  // Contract documented in docs/MH_WAKE_PAYLOAD.md — curl-able once env is set.
  // Smallest bridge (if no native bot wake yet): point WAKE_URL at a webhook.site /
  // Make.com / Slack incoming / CoS routine URL that logs or forwards the envelope.
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "X-Alluvium-Bot-Id": envelope.bot_id,
      "X-Alluvium-Event": envelope.event,
      "X-Alluvium-Schema-Version": String(envelope.schema_version),
    },
    body: JSON.stringify(envelope),
  });

  const text = await res.text().catch(() => "");
  return {
    attempted: true,
    woke: res.ok,
    dryRun: false,
    status: res.status,
    bodyPreview: text.slice(0, 300),
    envelope,
  };
}

export async function handler(event) {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers":
          "Content-Type, Authorization, X-Alluvium-Dry-Run, X-Dry-Run",
      },
      body: "",
    };
  }

  if (event.httpMethod === "GET") {
    // Curl-able contract probe (no secrets)
    return json(200, {
      ok: true,
      stub: false,
      parseReady: true,
      wakeArmed: Boolean(
        process.env.MODEL_HEALTH_WAKE_URL && process.env.MODEL_HEALTH_WAKE_TOKEN,
      ),
      dryRunEnv: isTruthyFlag(process.env.MODEL_HEALTH_WAKE_DRY_RUN),
      botId: process.env.MODEL_HEALTH_BOT_ID || DEFAULT_BOT_ID,
      schemaVersion: WAKE_SCHEMA_VERSION,
      expectedFields: EXPECTED_FIELDS,
      formFields: {
        formName: EXPECTED_FORM,
        email: "email",
        file: "file",
        honeypot: "bot-field",
        hiddenFormName: "form-name",
      },
      scoreMailOwner: "Model Health via Outlook (not Netlify)",
      docs: [
        "docs/MH_WAKE_PAYLOAD.md",
        "docs/MH_FORMS_WEBHOOK_SETUP.md",
        "docs/THU_VALIDATE_CHECKLIST.md",
      ],
    });
  }

  if (event.httpMethod !== "POST") {
    return json(
      405,
      {
        ok: false,
        error: "Method not allowed",
        expectedFields: EXPECTED_FIELDS,
      },
      { Allow: "GET, POST, OPTIONS" },
    );
  }

  const dryRun = isDryRun(event);
  const body = decodeBody(event);
  const parsed = parseFormsWebhook(body);

  if (!parsed.ok) {
    return json(parsed.error === "honeypot_filled" ? 200 : 422, {
      ok: false,
      error: parsed.error || (parsed.invalid?.length ? "invalid_fields" : "missing_fields"),
      missing: parsed.missing || [],
      invalid: parsed.invalid || [],
      expectedFields: EXPECTED_FIELDS,
      formName: parsed.formName,
      debug: parsed._debug || null,
      scoreMailOwner: "Model Health via Outlook (not Netlify)",
    });
  }

  if (parsed.formName && parsed.formName !== EXPECTED_FORM) {
    return json(422, {
      ok: false,
      error: "unexpected_form_name",
      formName: parsed.formName,
      expected: EXPECTED_FORM,
    });
  }

  let wakeResult;
  try {
    wakeResult = await maybeWakeBot(parsed.wake, { dryRun });
  } catch (err) {
    wakeResult = {
      attempted: true,
      woke: false,
      dryRun,
      reason: "wake_fetch_failed",
      error: String(err && err.message ? err.message : err),
    };
  }

  // 202 = accepted for processing; wake may still be pending env / CoS wire
  return json(202, {
    ok: true,
    dryRun,
    parsed: {
      submission_id: parsed.wake.submission_id,
      email: parsed.wake.email,
      fileUrl: parsed.wake.fileUrl,
      timestamp: parsed.wake.timestamp,
    },
    wake: wakeResult,
    botId: parsed.wake.bot_id,
    next: wakeResult.woke
      ? "Model Health bot woken — MH scores + Outlook send"
      : dryRun
        ? "Dry-run: wake envelope in response (+ fixture if writable); no live wake"
        : "Credentials missing or wake failed — hold; CoS set MODEL_HEALTH_WAKE_URL + MODEL_HEALTH_WAKE_TOKEN then re-POST; MH owns Outlook score email",
    expectedFields: EXPECTED_FIELDS,
    scoreMailOwner: "Model Health via Outlook (not Netlify)",
  });
}
