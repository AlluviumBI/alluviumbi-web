---
title: "Gateway Credentials Expire. Your Close Calendar Doesn't Care"
description: "Expired Power BI gateway passwords and OAuth tokens silently kill refresh. Put credential rotation on the close calendar, not just HA monitoring."
pubDate: 2026-09-22
tags:
  - Power BI
  - Gateway
  - Credentials
  - Close Risk
draft: false
---

The gateway VM is up. CPU is fine. High availability shows two members online.

Refresh still fails at 2 a.m. Or worse, it never starts because the stored credentials expired, and the first human notice is yesterday's numbers on the flash.

Password and OAuth expiry on the gateway is a silent refresh killer. Your close calendar does not care that the box looked healthy.

![Black-and-white vault door wheel and heavy locking bolts](/blog/gateway-credentials-expire-close-calendar-hero.svg)

## Healthy box, dead credentials

Mid-market manufacturers still route ERP, MES, SQL, and file shares through an on-prem data gateway. Someone stored a service account password or an OAuth token when the dataset was first published. Then attention moved to visuals.

Ninety days later the password policy rotates, or the OAuth client secret ages out, or the account gets disabled when an employee leaves. The gateway service keeps running. Authentication to the source does not.

This sits next to [the on-prem gateway as close risk](/blog/on-prem-gateway-close-risk-you-dont-monitor) and [the 7 a.m. surprise](/blog/gateway-refresh-7am-surprise). [Refresh failures are a close risk](/blog/refresh-failures-are-a-close-risk), and credential expiry is how those failures arrive without a dramatic outage.

Treat credential age as a close dependency, not an IT footnote.

## Why this miss keeps recurring

Credentials live in the Service and on the gateway path. Business owners think "IT has the password vault." IT thinks "analytics owns the dataset." Nobody owns the rotation date on the close checklist.

OAuth tokens fail differently than SQL passwords, with opaque error text, so support starts in the report queue.

Personal accounts get used "just for the pilot," and pilots become production. When that person leaves, close week finds out.

Certificate and machine-account changes travel with patch windows, and those collide with refresh windows. It is the same bad morning as a full disk with a different root cause, and the monitoring dashboard still looks green.

## The costs of credential expiry off the calendar

1. **Close opens on last good data without any drama.** There is no smoking VM and no capacity spike, just authentication errors and a pack that quietly aged one day.

2. **Plant stand-ups run stale.** First shift trusts the board until someone notices scrap did not move. Trust drops before the ticket finds the right owner.

3. **Time burns in the wrong queue.** "Report broken" turns into model debugging, then capacity checks, then gateway host checks, and only then credential screens. The calendar does not move.

4. **HA theater fails the wrong test.** Redundant gateways with the same expired secret fail together. Failover without credential hygiene is synchronized failure.

5. **Emergency resets create the next outage.** Someone updates one dataset's credentials and misses the sibling models on the same source. Half the pack revives and half stays dead.

6. **Shadow extracts return.** Ops emails a CSV "until gateway is fixed," and dual truth reappears. It is the same pattern as [export to Excel becoming the adoption metric](/blog/export-to-excel-is-the-adoption-metric).

7. **Security and close fight each other.** An aggressive password policy without a coordinated Power BI rotation schedule guarantees month-end collisions. The handshake is missing.

8. **Ownership stays tribal.** Only one admin knows which gateway connection maps to which source account. When they are out, close week turns into archaeology.

## How to fix it: put credentials on the close calendar

1. **Inventory gateway connections for close-critical datasets.** Record source type, auth method (password, Windows, OAuth), account name, last rotated, and next due. If you cannot list it, you cannot schedule it.

2. **Name a credential owner and a backup.** They can be separate from the VM owner. Pick someone who can rotate secrets, update the Service, and confirm the first refresh, and put both names beside the close contacts.

3. **Add credential age to the pre-close checklist.** The week before close, flag anything expiring inside thirty days and rotate it early on purpose. Do not discover expiry on day two of close.

4. **Prefer durable service identities over people.** Use service accounts or managed identities with documented owners. Ban personal accounts on datasets that feed the flash or stand-up, and make pilots swap identity before they go live.

5. **Align rotation with security policy on a shared calendar.** When AD or the IdP forces a ninety-day password change, the Power BI update belongs in that same change ticket, not in a surprise the next morning. The same goes for OAuth client secrets.

6. **Test refresh after every rotation.** "Saved credentials" is not proof. Run a successful refresh on a canary or non-prod dataset, then on production. This is the same post-change discipline described in [gateway close risk](/blog/on-prem-gateway-close-risk-you-dont-monitor).

7. **Alert on auth failures as business pages.** Credential errors on close-critical datasets should wake the credential owner, not sit in a generic gateway log. Tie them to the [refresh failure playbook](/blog/refresh-failures-are-a-close-risk).

8. **Document the runbook on one page.** Cover where secrets live, which datasets share a connection, the order of updates, who confirms, and how to roll back. Tribal knowledge fails at 6:40 a.m.

9. **Separate credential health from host health in status reviews.** CPU green and auth red must both be visible. A single "gateway OK" slide hides the silent killer.

10. **Review near-misses after each close.** Find the refreshes that failed or were rescued by hand because of auth, and move those sources onto the rotation calendar with earlier reminders.

## What good looks like

The close calendar lists credential due dates next to ERP extract owners and gateway host checks. Rotations happen in the quiet week. Overnight auth failures page a person who already knows which connection to open.

HA and disk still matter, and credentials sit beside them as a first-class dependency.

## A practical monthly rhythm

On the first Monday, export or review gateway connection ages for finance and plant datasets and flag anything within thirty days of expiry.

Mid-month, rotate anything due before the next close, run a canary refresh, and update the inventory date.

The week before close, confirm no close-critical connection is inside a seven-day expiry window. If security must rotate during close week, schedule the Power BI update in the same change window with a named confirmer.

Do not wait for perfect secret-management automation. Start with a spreadsheet of close-critical connections, owners, and due dates, then automate reminders. The first win is a close week where nothing expired overnight.

## Prove one source end to end

Pick the ERP or SQL connection behind the flash. Document the account, method, and due date. Rotate it on purpose in a mid-month window, confirm every dependent dataset refreshes, and write the steps into the runbook.

Then extend the pattern to MES and file shares.

Leaders should ask: "When does the gateway credential for the close pack expire, and who updates Power BI the same day?" If nobody can answer, the calendar is incomplete.

## Executive takeaway

Gateway credentials expire on their own schedule, and the close calendar will not wait.

Inventory connections, name owners, rotate before close, and alert on authentication failures like business outages. Then a healthy gateway box stops hiding an expired key.

Want a credential and gateway risk pass on the datasets your close depends on? [Book a session](/contact). We will map close-critical connections, rotation gaps, and the checklist items that keep overnight refresh from waking up to yesterday. Or start with a [free Model Health check](/power-bi-model-health).
