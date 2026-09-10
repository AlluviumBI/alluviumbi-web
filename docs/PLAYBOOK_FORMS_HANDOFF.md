# Netlify Forms → Playbook handoff (Matt)

**Function:** `https://www.alluviumbi.com/.netlify/functions/playbook-handoff`  
**Form name:** `quickstart-playbook` only  
**Auth to function:** none (no JWS). Outbound wake uses Bearer `PLAYBOOK_WAKE_TOKEN`.  
**Env:** Matt already set `PLAYBOOK_WAKE_URL` + `PLAYBOOK_WAKE_TOKEN` on Netlify.

Simpler cousin of Model Health handoff — no file upload, no Outlook, no scoring. Parses Forms webhook and POSTs a wake envelope to CoS.

---

## Matt steps (after function ships)

1. **Forms notification URL**  
   Site → Forms → Form notifications → Add notification → **Outgoing webhook**  
   - Event: New form submission  
   - Form: **`quickstart-playbook` only** (not “All forms”)  
   - URL: `https://www.alluviumbi.com/.netlify/functions/playbook-handoff`  
   - Method: `POST`  
   - No custom JWS / signed payload required

2. **Clear-cache deploy**  
   If env vars were set before this function existed, trigger a **clear cache and deploy site** so the function runtime sees `PLAYBOOK_WAKE_*`.

3. **Self-test**
   ```bash
   # Contract probe — want wakeArmed: true
   curl -sS "https://www.alluviumbi.com/.netlify/functions/playbook-handoff"

   # Fake Forms body (optional)
   curl -sS -X POST "https://www.alluviumbi.com/.netlify/functions/playbook-handoff" \
     -H "Content-Type: application/json" \
     -d '{
       "id": "test-playbook-1",
       "form_name": "quickstart-playbook",
       "created_at": "2026-09-10T17:00:00.000Z",
       "data": {
         "email": "test@example.com",
         "name": "Test User",
         "company": "Alluvium"
       }
     }'
   ```
   Expect **202** with `parsed.email` and `wake.woke: true` when env is live.

4. Submit once from the live quickstart-playbook form and confirm CoS receives `quickstart_playbook_submission`.

---

## Wake envelope (what CoS gets)

```json
{
  "schema_version": 1,
  "event": "quickstart_playbook_submission",
  "received_at": "ISO",
  "payload": {
    "submission_id": "...",
    "email": "...",
    "name": "...",
    "company": "...",
    "timestamp": "...",
    "form_name": "quickstart-playbook"
  }
}
```

Headers on wake POST: `Authorization: Bearer <PLAYBOOK_WAKE_TOKEN>`, `Content-Type: application/json`, `X-Alluvium-Event: quickstart_playbook_submission`.

Without env: function still returns **202** parse-only with `wake.woke: false`.
