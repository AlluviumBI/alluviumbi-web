/**
 * Playbook handoff — Netlify Function
 *
 * Simpler cousin of model-health-handoff.mjs.
 * Accepts Netlify Forms webhook for form `quickstart-playbook` and wakes CoS
 * via PLAYBOOK_WAKE_URL + PLAYBOOK_WAKE_TOKEN (Bearer).
 *
 * No Outlook, no scoring, no fileUrl required.
 *
 * Env:
 *   PLAYBOOK_WAKE_URL    optional POST endpoint for the wake JSON
 *   PLAYBOOK_WAKE_TOKEN  optional Bearer shared secret
 *
 * Without both URL + TOKEN: parse + 202 with wake.woke false (fail-safe).
 *
 * Forms notification URL:
 *   https://www.alluviumbi.com/.netlify/functions/playbook-handoff
 * Docs: docs/PLAYBOOK_FORMS_HANDOFF.md
 */

const EXPECTED_FORM = "quickstart-playbook";
const WAKE_SCHEMA_VERSION = 1;
const WAKE_EVENT = "quickstart_playbook_submission";

const EXPECTED_FIELDS = [
  "submission_id (Forms id / number)",
  "email (data.email)",
  "name (data.name)",
  "company (data.company)",
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

function decodeBody(event) {
  if (!event.body) return null;
  const raw = event.isBase64Encoded
    ? Buffer.from(event.body, "base64").toString("utf8")
    : event.body;
  try {
    return JSON.parse(raw);
  } catch {
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
  if (body.payload && typeof body.payload === "object") return body.payload;
  if (body.data && body.data.payload && typeof body.data.payload === "object") {
    return body.data.payload;
  }
  if (body.submission && typeof body.submission === "object") return body.submission;
  return body;
}

function strField(...candidates) {
  for (const c of candidates) {
    if (typeof c === "string" && c.trim()) return c.trim();
  }
  return null;
}

/**
 * Parse Netlify Forms webhook for quickstart-playbook.
 * Shape: { id, number, data: { email, name, company }, created_at, form_name }
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

  const email = strField(data.email, submission.email);
  const name = strField(data.name, submission.name);
  const company = strField(data.company, submission.company);
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

  const invalid = [];
  if (email && !EMAIL_RE.test(email)) invalid.push("email");

  const wake = {
    submission_id,
    email,
    name,
    company,
    timestamp,
    form_name: formName || EXPECTED_FORM,
    source: "netlify-forms-webhook",
  };

  return {
    ok: missing.length === 0 && invalid.length === 0,
    missing,
    invalid,
    formName,
    wake,
    _debug: {
      hasData: Boolean(submission.data || submission.form_data),
      topKeys: Object.keys(submission).slice(0, 24),
      dataKeys: Object.keys(data).slice(0, 24),
    },
  };
}

export function buildWakeEnvelope(wakeFields) {
  return {
    schema_version: WAKE_SCHEMA_VERSION,
    event: WAKE_EVENT,
    received_at: new Date().toISOString(),
    payload: {
      submission_id: wakeFields.submission_id,
      email: wakeFields.email,
      name: wakeFields.name,
      company: wakeFields.company,
      timestamp: wakeFields.timestamp,
      form_name: wakeFields.form_name || EXPECTED_FORM,
    },
  };
}

async function maybeWake(wakePayload) {
  const envelope = buildWakeEnvelope(wakePayload);
  const url = process.env.PLAYBOOK_WAKE_URL;
  const token = process.env.PLAYBOOK_WAKE_TOKEN;

  if (!url || !token) {
    return {
      attempted: false,
      woke: false,
      reason:
        "PLAYBOOK_WAKE_URL and/or PLAYBOOK_WAKE_TOKEN not set — parse-only, no wake",
      envelope,
    };
  }

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "X-Alluvium-Event": WAKE_EVENT,
      "X-Alluvium-Schema-Version": String(WAKE_SCHEMA_VERSION),
    },
    body: JSON.stringify(envelope),
  });

  const text = await res.text().catch(() => "");
  return {
    attempted: true,
    woke: res.ok,
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
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
      body: "",
    };
  }

  if (event.httpMethod === "GET") {
    return json(200, {
      ok: true,
      parseReady: true,
      wakeArmed: Boolean(
        process.env.PLAYBOOK_WAKE_URL && process.env.PLAYBOOK_WAKE_TOKEN,
      ),
      formName: EXPECTED_FORM,
      schemaVersion: WAKE_SCHEMA_VERSION,
      event: WAKE_EVENT,
      expectedFields: EXPECTED_FIELDS,
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

  const body = decodeBody(event);

  // Fail soft on bad JSON / empty body
  if (!body || body._parseError) {
    console.warn("[playbook-handoff] soft-fail unparseable body", body?._rawPreview);
    return json(202, {
      ok: true,
      softFail: true,
      error: "unparseable_body",
      wake: { attempted: false, woke: false, reason: "unparseable_body" },
      expectedFields: EXPECTED_FIELDS,
    });
  }

  const parsed = parseFormsWebhook(body);

  if (!parsed.ok) {
    if (parsed.error === "honeypot_filled") {
      return json(200, { ok: true, ignored: "honeypot_filled" });
    }
    // Soft: missing/invalid still 202 parse-only so Forms retries don't loop hard
    console.warn("[playbook-handoff] parse incomplete", {
      error: parsed.error,
      missing: parsed.missing,
      invalid: parsed.invalid,
      formName: parsed.formName,
    });
    return json(202, {
      ok: false,
      error: parsed.error || (parsed.invalid?.length ? "invalid_fields" : "missing_fields"),
      missing: parsed.missing || [],
      invalid: parsed.invalid || [],
      expectedFields: EXPECTED_FIELDS,
      formName: parsed.formName,
      debug: parsed._debug || null,
      wake: { attempted: false, woke: false, reason: "parse_incomplete" },
    });
  }

  if (parsed.formName && parsed.formName !== EXPECTED_FORM) {
    console.warn(
      "[playbook-handoff] unexpected form_name:",
      parsed.formName,
      "(expected",
      EXPECTED_FORM + ")",
    );
    return json(422, {
      ok: false,
      error: "unexpected_form_name",
      formName: parsed.formName,
      expected: EXPECTED_FORM,
    });
  }

  if (!parsed.formName) {
    console.warn(
      "[playbook-handoff] form_name missing — accepting as",
      EXPECTED_FORM,
    );
  }

  let wakeResult;
  try {
    wakeResult = await maybeWake(parsed.wake);
  } catch (err) {
    wakeResult = {
      attempted: true,
      woke: false,
      reason: "wake_fetch_failed",
      error: String(err && err.message ? err.message : err),
    };
  }

  return json(202, {
    ok: true,
    parsed: {
      submission_id: parsed.wake.submission_id,
      email: parsed.wake.email,
      name: parsed.wake.name,
      company: parsed.wake.company,
      timestamp: parsed.wake.timestamp,
      form_name: parsed.wake.form_name,
    },
    wake: wakeResult,
    next: wakeResult.woke
      ? "CoS woken — quickstart_playbook_submission delivered"
      : "Parse-only — set PLAYBOOK_WAKE_URL + PLAYBOOK_WAKE_TOKEN then re-POST",
    expectedFields: EXPECTED_FIELDS,
  });
}
