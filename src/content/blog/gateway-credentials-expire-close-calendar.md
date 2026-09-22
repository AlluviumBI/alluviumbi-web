---
title: "Gateway Credentials Expire. Your Close Calendar Doesn't Care"
description: "Expired Power BI gateway passwords and OAuth silently kill refresh. Put credential rotation on the close calendar—not only HA monitoring."
pubDate: 2026-09-22
tags:
  - Power BI
  - Gateway
  - Credentials
  - Close Risk
draft: false
---

The gateway VM is up. CPU is fine. High availability shows two members online.

Refresh still fails at 2 a.m. Or worse: it never starts because stored credentials expired, and the first human notice is yesterday's numbers on the flash.

Password and OAuth expiry on the gateway is a silent refresh killer. It is distinct from host monitoring. Your close calendar does not care that the box looked healthy.

![Black-and-white vault door wheel and heavy locking bolts](/blog/gateway-credentials-expire-close-calendar-hero.svg)

## Healthy box, dead credentials

Mid-market manufacturers still route ERP, MES, SQL, and file shares through an on-prem data gateway. Someone stored a service account password or an OAuth token when the dataset was first published. Then attention moved to visuals.

Ninety days later the password policy rotates. Or the OAuth client secret ages out. Or the account was disabled when an employee left. The gateway service keeps running. Authentication to the source does not.

This sits next to [the on-prem gateway as close risk](/blog/on-prem-gateway-close-risk-you-dont-monitor) and [the 7 a.m. surprise](/blog/gateway-refresh-7am-surprise). HA and CPU alerts do not catch credential decay. [Refresh failures are a close risk](/blog/refresh-failures-are-a-close-risk)—credential expiry is how those failures arrive without a dramatic outage.

Treat credential age like a close dependency. Not like an IT footnote.

## Why this miss keeps recurring

Credentials live in the Service and on the gateway path. Owners think "IT has the password vault." IT thinks "analytics owns the dataset." Nobody owns the rotation date on the close checklist.

OAuth and cloud source tokens fail differently than SQL passwords. The error text is opaque. Support starts in the report queue.

Personal accounts get used "just for the pilot." Pilots become production. When the person leaves, close week discovers it.

Certificate and machine-account changes travel with patch windows. They collide with refresh windows. Same morning, different root cause than disk-full—and the monitoring dashboard still looks green.

## The costs of credential expiry off the calendar

1. **Close opens on last good data without a drama.** No smoking VM. No capacity spike. Just authentication errors and a pack that quietly aged one day.

2. **Plant stand-ups run stale.** First shift trusts the board until someone notices scrap did not move. Trust drops before the ticket finds the right owner.

3. **Time burns in the wrong queue.** "Report broken" becomes model debugging, then capacity checks, then gateway host checks, then finally credential screens. Hours move. The calendar does not.

4. **HA theater fails the wrong test.** Redundant gateways with the same expired secret fail together. Failover without credential hygiene is synchronized failure.

5. **Emergency resets create the next outage.** Someone updates one dataset's credentials and misses the sibling models on the same source. Half the pack revives. Half stays dead. Confusion multiplies.

6. **Shadow extracts return.** Ops emails a CSV "until gateway is fixed." Dual truth reappears—same pattern as [people still email Excel](/blog/we-paid-for-power-bi-people-still-email-excel).

7. **Security and close fight each other.** Aggressive password policy without a coordinated Power BI rotation schedule guarantees month-end collisions. Neither side is wrong. The handshake is missing.

8. **Ownership stays tribal.** Only one admin knows which gateway connection maps to which source account. They are out. Close week invents archaeology.

## How to fix it: put credentials on the close calendar

1. **Inventory gateway connections for close-critical datasets.** Source type, auth method (password, Windows, OAuth), account name, last rotated, next due. If you cannot list it, you cannot schedule it.

2. **Name a credential owner and a backup.** Distinct from the VM owner when needed. Someone who can rotate secrets, update the Service, and confirm the first refresh. Put both names beside close contacts.

3. **Add credential age to the pre-close checklist.** The week before close: flag anything expiring inside thirty days. Rotate early on purpose. Do not discover expiry on day two of close.

4. **Prefer durable service identities over people.** Service accounts or managed identities with documented owners. Ban personal accounts on datasets that feed flash or stand-up. Pilots that go live must swap identity first.

5. **Align rotation with security policy—on a shared calendar.** When AD or IdP forces a ninety-day password change, Power BI update is part of that change ticket—not a surprise the next morning. Same for OAuth client secrets.

6. **Test refresh after every rotation.** Not "saved credentials." A successful refresh to a canary or non-prod dataset, then to production. Prove the path. Same discipline as post-change checks in [gateway close risk](/blog/on-prem-gateway-close-risk-you-dont-monitor).

7. **Alert on auth failures as business pages.** Credential errors on close-critical datasets should wake the credential owner, not sit in a generic gateway log. Tie to the [refresh failure playbook](/blog/refresh-failures-are-a-close-risk).

8. **Document the runbook on one page.** Where secrets live. Which datasets share a connection. Order of update. Who confirms. How to roll back. Tribal knowledge fails at 6:40 a.m.

9. **Separate credential health from host health in status reviews.** CPU green and auth red must both be visible. A single "gateway OK" slide hides the silent killer.

10. **Review near-misses after each close.** Which refreshes failed or were manually rescued because of auth? Promote those sources onto the rotation calendar with earlier reminders. Shrink surprise.

## What good looks like

The close calendar lists credential due dates next to ERP extract owners and gateway host checks. Rotations happen in the quiet week. Overnight auth failures page a human who already knows which connection to open.

HA still matters. Disk still matters. Credentials sit beside them as a first-class dependency. Mornings stop teaching the lesson.

## A practical monthly rhythm

First Monday: export or review gateway connection ages for finance and plant datasets. Flag thirty-day expiry.

Mid-month: rotate anything due before the next close. Run canary refresh. Update the inventory date.

Week before close: confirm no close-critical connection is inside a seven-day expiry window. If security must rotate during close week, schedule the Power BI update in the same change window with a named confirmer.

That rhythm is short when the estate is clean. It is shorter than a blank flash.

Do not wait for perfect secret-management automation. Start with a spreadsheet of close-critical connections, owners, and due dates. Automate reminders next. The first win is a close week where nothing expired overnight.

## Prove one source end-to-end

Pick the ERP or SQL connection behind the flash. Document account, method, and due date. Rotate on purpose in a mid-month window. Confirm every dependent dataset refreshes. Write the minutes into the runbook.

Then extend the pattern to MES and file shares. Breadth without a proven path recreates tribal fixes.

Leaders should ask: "When does the gateway credential for the close pack expire, and who updates Power BI the same day?" If nobody can answer, the calendar is incomplete.

## Executive takeaway

Gateway credentials expire on their own schedule. The close calendar will not wait.

Host monitoring and HA do not catch auth decay. Inventory connections, name owners, rotate before close, and alert on authentication failures like business outages. Then a healthy gateway box stops hiding an expired key.

Need a 30-minute credential and gateway risk pass on the datasets your close depends on? [Contact Alluvium](https://www.alluviumbi.com/contact). We will map close-critical connections, rotation gaps, and the checklist items that keep overnight refresh from waking up to yesterday.
