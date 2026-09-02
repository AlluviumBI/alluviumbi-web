---
title: "Refresh Failures Are a Close Risk, Not an IT Ticket"
description: "A failed 6am refresh is a finance event. Treat it like close risk, not a help-desk queue."
pubDate: 2026-06-12
tags:
  - Power BI
  - Finance
  - Operations
draft: false
---

A failed 6 a.m. refresh is a finance event. Treat it like close risk, not a help-desk queue.

If the pack is what the ELT uses to run Monday, stale data is not an inconvenience. It is an unowned control.

![Black-and-white frozen waterfall and ice on a rocky stream](/blog/refresh-failures-are-a-close-risk-hero.jpg)

## Freshness is an executive control

Controllers already live by calendars. Trial balance. Flash. Pack. Board. They know what “late” costs. We wrote the scavenger-hunt version in [Why Month-End Still Takes a Week](/blog/why-month-end-still-takes-a-week).

This piece is the other clock: the scheduled refresh that was supposed to make that pack honest. When it fails, and nobody with a P&L is accountable, you do not have an IT ticket. You have a close process with a hole in it.

The later “7 a.m. surprise” story in this series is the operator morning: stand-up, plant huddle, a gateway that coughed. Here the question is exec. Who owns freshness. What is the SLA. Who is paged. What does the user see when the number is stale. Who is allowed to present yesterday as today.

IT should still fix plumbing. Finance should still own whether the number is fit to use. [A project with no owner](/blog/power-bi-project-has-no-owner) is how both sides assume the other is watching.

## What a refresh SLA has to say

“Daily” is not an SLA. Daily at 6 a.m. in which timezone, with a success definition, a stall definition, and a human, is an SLA.

Success is not “the job started.” Success is the certified model current through the agreed grain—yesterday’s shipments, last night’s invoices—before the first meeting that uses it.

Stall is not “we will look when someone complains.” Stall is: job failed or did not finish by T+30 minutes. Then a person is paged. Not a shared inbox that wakes up at 9.

The SLA can be tighter in close week. It can be looser on a sandbox. Certified products do not get sandbox treatment. If everything is “best effort,” nothing is.

Write it down next to the steward’s name. Put it on the workspace. If the only place it lives is a vendor’s default schedule, you do not have a control. You have a setting.

## The costs of treating refresh as a ticket

1. **Close uses a number nobody labeled.** The pack goes out. The model is Tuesday’s. Nobody says so. Leadership prices, ships, or hires on a silent lag. That is worse than a late pack. A late pack is visible. A stale pack looks on time.

2. **Finance rebuilds under the clock.** When the dashboard is wrong, the controller pastes. You are back to reporting drag. The platform did not fail as a visual. It failed as a clock. Analysts spend the morning reconstructing what refresh was supposed to deliver.

3. **Two actuals return to the room.** Ops has a screen that did refresh. Finance has a file that did not. The meeting starts with whose day it is. Same tax as [reports that show different numbers](/blog/why-power-bi-reports-show-different-numbers), with a timestamp as the villain.

4. **Help-desk SLAs are the wrong clock.** A ticket that “responds in four hours” is useless at 6:12 a.m. on close Thursday. Queue math is for printers. Freshness is for the P&L. If the page group is the service desk, you have already lost the morning.

5. **Nobody is paged, so nobody learns.** Failures that only show up when a VP asks are not managed. They are folklore. You cannot improve a gateway, a source lock, or a capacity collision you never recorded as an incident.

6. **Trust erodes faster than you can re-license.** People stop opening the certified report because last month it lied once. They go back to the workbook they ran themselves. [Adoption](/blog/nobody-opens-the-dashboard) dies on freshness, not on color.

## What not to do

Do not turn this into a gateway tutorial. Executives do not need to know the appliance. They need to know it has an owner and a page path.

Do not buy a new platform to avoid naming a freshness owner. A lake that nobody watches at 6 a.m. fails the same way. [Fabric vs Power BI](/blog/fabric-vs-power-bi-for-a-ceo) is a platform choice. It is not an alarm clock.

Do not hide failure with a screenshot from yesterday. If the meeting needs a number, say the as-of. Paste is how stale becomes official.

Do not alert only the developer who left six months ago. Alerts follow roles, not heroes.

## How to fix it

1. **Name freshness as a close control.** Put refresh success on the same list as “trial balance ready.” The controller and the refresh owner both see it. If finance is not in the loop until the pack is pretty, you are still treating this as IT.

2. **Write the SLA in one paragraph.** Product. Window. Timezone. Success. Page path. Close-week override. Sandbox excluded. Get it signed by the steward and the platform owner. Short is fine. Vague is not.

3. **Page a human, not a ticket pile.** Primary and backup. On-call that matches close, not only business hours. The first alert is: job failed or missed the window. The second is: source system locked or capacity throttled—whatever your team already knows as the usual causes. Keep the runbook with operations. Keep the exec rule simple: someone competent is awake to the failure before the ELT is.

4. **Show stale on purpose.** If the model did not land, the report should not look fresh. A banner. An as-of timestamp that is large enough to read in a meeting. Hide-the-lag is how people present Tuesday as Wednesday. Users should see the control fail. Shame the process, not the analyst.

5. **Define the fallback before 6 a.m.** What does the pack use if refresh is down. Last good certified extract, labeled. A delay of the meeting. A flash from finance with an as-of. Pick it when you are calm. Do not invent it on the call. Fallback that is an unlabeled spreadsheet is how a second truth sneaks in. Keep [SSOT](/blog/single-source-of-truth-is-a-decision) even when the clock breaks: label working paper as working paper.

6. **Review failures like you review close comments.** Monthly: how many missed windows on certified products. What was the cause. What changed. Quarterly: is the SLA still the right clock for the meetings you actually run. Incidents that never reach the steward will never get funded.

Delivery still has to treat refresh as part of done. A page that cannot meet its SLA is not a shipped product: [analytics programs fail in delivery](/blog/analytics-programs-fail-in-delivery).

## What good looks like

Monday’s pack has an as-of that matches the SLA. When it does not, the room sees a banner and a named owner is already working it.

The help desk is not the first call. The on-call is.

Finance does not discover staleness from a VP. They discovered it at 6:20.

You still have failures. Sources lock. Networks blip. The difference is accountability and visibility. Close risk you can see is manageable. Close risk that looks like a successful dashboard is not.

## Get started

Move refresh off the ticket queue and onto the close calendar. Write the SLA. Name who is paged. Show stale when you are stale.

Need a 30-minute look at whether your certified models actually have a freshness owner? [Contact Alluvium](/contact). We will map SLA, alerting, and banners—not a gateway class.

[Book a 30-minute consult](/contact).

<!-- wordcount: 1235 -->
