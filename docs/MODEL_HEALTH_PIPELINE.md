# Model Health pipeline (Forms-first)

Offline stub for Thu ship. **Preferred path: Netlify Forms** (notification/webhook) — **not R2**.

## Ownership (locked 2026-09-08)

| Piece | Owner |
|-------|--------|
| Netlify Form on `/power-bi-model-health` (email + file) | **Webby / site** |
| Client gates 7 MB / reject `.pbix` / cache warn | **Webby / site** |
| Success page copy | **Webby / site** |
| Handoff payload: `submission_id` + `email` + file URL/path | **Webby function stub → CoS wire** |
| Score email **To** = form `email` on that submission only | **Model Health bot** |
| Score email **From/BCC** via Outlook (`matt@alluviumbi.com`) | **Model Health bot** — **not** Netlify |
| Lead awareness of new submits | Via handoff wake / MH side |

**Netlify does not send the score email.**

## Form field names (confirm for CoS QA)

| HTML `name` | Role |
|-------------|------|
| `form-name` (hidden) | Always `model-health` (Netlify form id) |
| `bot-field` | Honeypot (hidden) |
| `email` | Work email → becomes score email **To** |
| `file` | Model metadata upload (multipart) |

Form element: `name="model-health"`, `method="POST"`, `enctype="multipart/form-data"`, `data-netlify="true"`, `data-netlify-honeypot="bot-field"`, `action="/model-health-success"`.

`submission_id` is **not** a form field — Netlify Forms assigns it; webhook/notification must pass it through to the handoff (and thus to Model Health) so **To** binds to the correct submission.

## Flow

1. User submits on `/power-bi-model-health`.
2. Client gates: reject `.pbix`, reject over **7 MB**, warn on cache-looking names (`.pbi` / `.abf`).
3. Netlify Forms stores submission + file (Forms POST ~**8 MB**; client stays 7 MB).
4. Redirect `/model-health-success` — **“Check your email for the score”**.
5. CoS wires Forms **notification** or **webhook** → `/.netlify/functions/model-health-handoff`.
6. Handoff (later, non-stub) forwards **`submission_id` + `email` + file URL/path** and wakes Model Health bot `ccffd784-93b8-4aa5-8bc7-8e8a7e7d4d4a`.
7. Model Health scores and sends Outlook score email (**To** = that submission’s `email`; From/BCC on MH/Outlook).

```
submit → Netlify Forms (file) → notification/webhook → handoff
      → Model Health bot scores → Outlook score email (MH owns send)
```

## Limits

| Layer | Limit |
|-------|-------|
| Client gate | 7 MB; reject `.pbix`; cache filename warn |
| Netlify Forms POST | ~8 MB |

## READY (site stubs — offline tree)

- [x] Form `model-health` multipart + Netlify attrs + honeypot + hidden `form-name`
- [x] Fields: `email`, `file` (+ `bot-field`, `form-name`)
- [x] Client gates unchanged
- [x] Dedicated success page; form `action=/model-health-success`
- [x] Function `netlify/functions/model-health-handoff.mjs` — **parses** Forms webhook → `{submission_id, email, fileUrl, timestamp}`; wakes only if `MODEL_HEALTH_WAKE_URL` + `MODEL_HEALTH_WAKE_TOKEN` set; otherwise 202 parse-only (no agent call)
- [x] Wake contract doc `docs/MH_WAKE_PAYLOAD.md` (curl-able)
- [x] Dry-run fixture mode + `scripts/mh-wake-dry-run.mjs` + `docs/fixtures/wake-dry-run-latest.json`
- [x] Forms webhook UI steps `docs/MH_FORMS_WEBHOOK_SETUP.md`
- [x] Thu validate list `docs/THU_VALIDATE_CHECKLIST.md` (incl. anonymous fileUrl GET / fail-closed)
- [x] Fail-closed send QA: `docs/SEND_QA_CHECKLIST.md` + `scripts/model-health-send-qa.py`
- [x] `netlify.toml` `functions = "netlify/functions"`
- [x] Pipeline + mailer ownership docs

## CoS wiring steps (open — post-deploy)

1. After Thu GO deploy: confirm Forms lists `model-health` with file support.
2. Wire Forms notification/webhook → `/.netlify/functions/model-health-handoff`.
3. Confirm webhook includes **submission id**, **email**, **file URL**, timestamp; align parser.
4. Replace stub: wake bot `ccffd784-93b8-4aa5-8bc7-8e8a7e7d4d4a` with that payload (MH sends Outlook mail — no Netlify mailer keys for score).
5. Matt self-tests from secondary email: **To** must match form `email` only.
6. Smoke under 7 MB zip; `.pbix` / oversized stay client-rejected.
7. No R2 for this path. No production push until Thu CoS GO + Scribe 4.

## Out of scope (this offline polish)

- Live bot wake credentials on Netlify, production deploy, git push, R2, Netlify-sent score email, Outlook send from this tree.
