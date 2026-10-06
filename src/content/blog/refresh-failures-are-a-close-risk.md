---
title: "Refresh Failures Are a Close Risk, Not an IT Ticket"
description: "A failed 6 a.m. refresh is a finance event. Treat it as close risk, not a help-desk queue."
pubDate: 2026-06-12
tags:
  - Power BI
  - Finance
  - Operations
draft: false
---

A failed 6 a.m. refresh is a finance event. Treat it as close risk, not a help-desk queue.

If the ELT runs Monday off the pack, stale data is not an inconvenience. It is an unowned control.

![Black-and-white frozen waterfall and ice on a rocky stream](/blog/refresh-failures-are-a-close-risk-hero.jpg)

## Freshness is an executive control

Controllers already live by calendars: trial balance, flash, pack, board. They know what “late” costs. We covered the scavenger-hunt version in [Why Month-End Still Takes a Week](/blog/why-month-end-still-takes-a-week).

This piece is about the other clock, the scheduled refresh that was supposed to keep that pack honest. When it fails and nobody with a P&L is accountable, you do not have an IT ticket. You have a close process with a hole in it.

The [7 a.m. surprise](/blog/gateway-refresh-7am-surprise) piece in this series covers the operator morning: stand-up, plant huddle, a gateway that coughed. This one is for executives. Who owns freshness? What is the SLA? Who gets paged, what does the user see when the number is stale, and who is allowed to present yesterday as today?

IT should still fix the plumbing. Finance should still own whether the number is fit to use. [A project with no owner](/blog/power-bi-project-has-no-owner) is how each side assumes the other is watching.

## What a refresh SLA has to say

“Daily” is not an SLA. Daily at 6 a.m. in a named timezone, with a success definition, a stall definition, and a human, is an SLA.

Success is not “the job started.” Success means the certified model is current through the agreed grain, such as yesterday’s shipments and last night’s invoices, before the first meeting that uses it.

Stall is not “we will look when someone complains.” Stall means the job failed or did not finish by T+30 minutes, and then a person is paged. That person is not a shared inbox that wakes up at 9.

The SLA can be tighter in close week and looser on a sandbox. Certified products do not get sandbox treatment. If everything is “best effort,” nothing is.

Write it down next to the steward’s name and put it on the workspace. If the only place it lives is a vendor’s default schedule, you do not have a control. You have a setting.

## The costs of treating refresh as a ticket

1. **Close uses a number nobody labeled.** The pack goes out on Tuesday’s model and nobody says so. Leadership prices, ships, or hires on a silent lag. That is worse than a late pack, because a late pack is visible and a stale pack looks on time.

2. **Finance rebuilds under the clock.** When the dashboard is wrong, the controller pastes, and you are back to reporting drag. The platform did not fail as a visual. It failed as a clock, and analysts spend the morning reconstructing what refresh was supposed to deliver.

3. **Two actuals return to the room.** Ops has a screen that refreshed. Finance has a file that did not. The meeting starts with an argument over whose day it is. It is the same tax as [reports that show different numbers](/blog/why-power-bi-reports-show-different-numbers), with a timestamp as the villain.

4. **Help-desk SLAs are the wrong clock.** A ticket that “responds in four hours” is useless at 6:12 a.m. on close Thursday. Queue math is for printers. Freshness is for the P&L. If the service desk is the page group, you have already lost the morning.

5. **Nobody is paged, so nobody learns.** Failures that only surface when a VP asks are not managed. They are folklore. You cannot fix a gateway, a source lock, or a capacity collision you never recorded as an incident.

6. **Trust erodes faster than you can re-license.** People stop opening the certified report because it lied once last month, and they go back to the workbook they run themselves. [Adoption](/blog/nobody-opens-the-dashboard) dies on freshness, not on color.

## What not to do

Do not turn this into a gateway tutorial. Executives do not need to know the appliance. They need to know it has an owner and a page path.

Do not buy a new platform to avoid naming a freshness owner. A lake nobody watches at 6 a.m. fails the same way. [Fabric vs Power BI](/blog/fabric-vs-power-bi-for-a-ceo) is a platform choice, not an alarm clock.

Do not hide a failure behind yesterday’s screenshot. If the meeting needs a number, state the as-of. Pasting is how stale becomes official.

Do not send alerts only to the developer who left six months ago. Alerts follow roles, not heroes.

## How to fix it

1. **Name freshness as a close control.** Put refresh success on the same list as “trial balance ready,” where both the controller and the refresh owner see it. If finance is not in the loop until the pack is pretty, you are still treating this as IT.

2. **Write the SLA in one paragraph.** Cover the product, window, timezone, success, page path, close-week override, and the sandbox exclusion. Have the steward and the platform owner sign it. Short is fine. Vague is not.

3. **Page a human, not a ticket pile.** Name a primary and a backup, with on-call that matches close and not only business hours. The first alert says the job failed or missed the window. The second covers your usual causes, such as a locked source system or throttled capacity. Keep the runbook with operations and keep the executive rule simple: someone competent knows about the failure before the ELT does.

4. **Show stale on purpose.** If the model did not land, the report should not look fresh. Use a banner and an as-of timestamp big enough to read across a meeting room. Hiding the lag is how people present Tuesday as Wednesday. Let users see the control fail, and blame the process, not the analyst.

5. **Define the fallback before 6 a.m.** Decide what the pack uses if refresh is down: the last good certified extract with a label, a delayed meeting, or a finance flash with an as-of. Pick it while you are calm, not on the call. An unlabeled spreadsheet as fallback is how a second truth sneaks in. Keep [SSOT](/blog/single-source-of-truth-is-a-decision) even when the clock breaks, and label working paper as working paper.

6. **Review failures the way you review close comments.** Monthly, count missed windows on certified products, their causes, and what changed. Quarterly, ask whether the SLA is still the right clock for the meetings you actually run. Incidents that never reach the steward never get funded.

Delivery still has to treat refresh as part of done. A page that cannot meet its SLA is not a shipped product, which is why [analytics programs fail in delivery](/blog/analytics-programs-fail-in-delivery).

## What good looks like

Monday’s pack has an as-of that matches the SLA. When it does not, the room sees a banner and a named owner is already working the problem. The on-call gets the first call, not the help desk, and finance spots staleness at 6:20 instead of hearing about it from a VP.

You will still have failures. Sources lock and networks blip. The difference is accountability and visibility. Close risk you can see is manageable. Close risk that looks like a successful dashboard is not.

## Get started

Move refresh off the ticket queue and onto the close calendar. Write the SLA, name who gets paged, and show stale when you are stale.

Want to know whether your certified models actually have a freshness owner? [Book a session with Alluvium](/contact). We will map the SLA, alerting, and banners. It is not a gateway class. To check the model itself, start with a [free Model Health check](/power-bi-model-health).

<!-- wordcount: 1276 -->
