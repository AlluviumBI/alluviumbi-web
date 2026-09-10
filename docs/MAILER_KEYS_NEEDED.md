# Mailer ownership (Model Health)

**Locked 2026-09-08 (Matt / CoS):** score email is **full prod** from **Model Health via Outlook** (`matt@alluviumbi.com`).

## What Webby / Netlify does **not** do

- Does **not** send the score email
- Does **not** need Resend or Graph keys on the Netlify site for score delivery
- Earlier “stub both Outlook Graph and Resend on Netlify” plan is **superseded** for score mail

## What Model Health owns

| Item | Rule |
|------|------|
| **To** | Form field `email` on **that** submission only |
| **From / BCC** | Outlook via Model Health (`matt@alluviumbi.com`) |
| Self-test | Matt tests from a secondary email; To must bind to form `email` |

HTML score template reference (MH side): `alluvium-model-health-spike/dry-run-out/email-report-v2.html`.

## What the site handoff must pass

So Model Health can bind **To** correctly:

1. `submission_id` — Netlify Forms submission id
2. `email` — form field `email`
3. File URL/path — Forms-stored upload

See `MODEL_HEALTH_PIPELINE.md`, `MH_WAKE_PAYLOAD.md`, and `netlify/functions/model-health-handoff.mjs`.

## Optional Netlify env (handoff only — not mailer)

| Env var | Purpose |
|---------|---------|
| `MODEL_HEALTH_BOT_ID` | `ccffd784-93b8-4aa5-8bc7-8e8a7e7d4d4a` (default in code) |
| `MODEL_HEALTH_WAKE_URL` | POST target that wakes MH with the handoff JSON |
| `MODEL_HEALTH_WAKE_TOKEN` | Bearer shared secret for wake calls |
| `MODEL_HEALTH_WAKE_DRY_RUN` | Optional `1` = build/write wake fixture; never POST |
| `MODEL_HEALTH_WAKE_FIXTURE_PATH` | Optional dry-run write path (default `/tmp/mh-wake-dry-run-latest.json`) |
| (future) webhook shared secret | Verify Forms → function calls |

Without `MODEL_HEALTH_WAKE_URL` + `MODEL_HEALTH_WAKE_TOKEN` the function **parses only** and returns 202 with `wake.woke: false` (safe offline / pre-wire).

Do not put Outlook/Resend secrets in this repo for Netlify score sending — that path is retired.

## Fail-closed send QA (MH / CoS)

- Checklist: `docs/SEND_QA_CHECKLIST.md` (also under skill folder)
- Script: `scripts/model-health-send-qa.py` — exit 0 only if gates pass; do not send on exit 1

See also: `MH_FORMS_WEBHOOK_SETUP.md`, `THU_VALIDATE_CHECKLIST.md`.
