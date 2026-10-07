---
title: "The Hidden Cost of Waiting on IT for Every Report"
description: "Licenses are paid and a variance cut still waits weeks. Lock-down creates shadow Excel. Wide-open creates five margins."
pubDate: 2026-05-06
tags:
  - Power BI
  - Self-Service
  - IT
draft: false
---

IT is the queue and finance is the requester. The number the CFO wanted last Tuesday arrives as a ticket, not as a filter.

![Black-and-white empty road disappearing into fog](/blog/hidden-cost-waiting-on-it-for-reports-hero.jpg)

## The bottleneck is the operating model

People search “self-service Power BI vs IT bottleneck” because they have lived both failures.

**Lock-down.** Every new cut is a development request and workspace access is tight. Analysts cannot add a region slicer without a sprint. The business learns to wait, or to leave.

**Wide-open.** Anyone can publish and anyone can define margin. By quarter-end you have five margins and three revenues, and the meeting starts with whose report is certified.

Neither is self-service. One is a help desk. The other is a garage.

Mid-market teams swing between the two and rarely design the middle: one trusted model with self-serve on top.

This is not “let everyone build dashboards,” and it is not a chatbot on an unowned model. Product names will not save you. The model is the product, and the report is the brochure.

If the room already has three numbers, that is a definition fight, covered in [why Power BI reports show different numbers](/blog/why-power-bi-reports-show-different-numbers). If copies and access have no owner, that is [governance](/blog/the-hidden-costs-of-poor-power-bi-governance-and-how-to-fix-it). This post is about the queue.

## What the wait actually costs

1. **Decisions slip a cycle.** A margin question that needed a cut by customer or plant waits for capacity, and pricing and mix decisions move to next month’s meeting. The cost is delay, not a license line.

2. **Shadow Excel comes back.** If the official path is a ticket, someone exports and builds the cut in a workbook. You paid for a platform and kept the version-control problem, and finance still closes in files. [Excel vs Power BI](/blog/excel-vs-power-bi-financial-reporting) covers the paste split. This is the *request* split.

3. **IT becomes a report factory.** Engineers who should own pipelines and the model spend sprints on “add a slicer.” The backlog never clears and the model never gets better, because tickets hide the real work.

4. **Five definitions of the same KPI.** Wide-open publishing feels fast until leadership compares files. Each author meant well, but none of them shared a measure, and trust dies in the comparison.

5. **Talent walks around the system.** Good analysts will not wait three weeks for a cut they could filter themselves. They leave the workspace and take the numbers with them. Adoption looks like a training problem when it is a permission problem.

6. **Audit and access get sloppy.** Lock-down that is too slow gets bypassed with forwarded files. Wide-open that is too loose puts sensitive grain in the wrong inbox. Both fail a simple question: who is allowed to see this, and who is allowed to change it?

Slow or unused canvases are a different job, handled by [dashboard optimization](https://www.alluviumbi.com/power-bi-dashboard-optimization-ai-insights). A program with no owner is a strategy problem, covered in [aligning BI with business goals](/blog/power-bi-strategy-alignment).

## Hybrid: one trusted model, self-serve on top

Self-service that works is narrow.

IT, or a BI owner, is responsible for the semantic model: relationships, official measures, refresh, and row-level access. That layer is not a free-for-all.

The business is responsible for exploring *from* that model. That means filters, personal views, Excel connected to the same actuals, and departmental pages that cannot redefine margin.

You can call that certified or endorsed. The label does not matter. The rule does: **change the measure in one place, or do not change it.**

Finance can self-serve on a trusted actuals layer and still keep statements in Excel. That is not a contradiction. It is how close work actually runs.

Manufacturers who need plant cuts without a ticket use the same pattern. Do not confuse this with line-speed dashboards, which are the subject of [Every Minute Counts](/blog/slow-bi-costs-manufacturing-downtime). This article is about the request queue.

## How to fix it without a CoE theater

You do not need a steering committee named Center of Excellence. You need a boundary and a published path.

1. **Name the official model.** Pick one workspace or app for the numbers leadership will argue from, and one owner who can say no when someone wants a second margin. Write down the measures the business already fights about.

2. **Split build rights from explore rights.** Most people need to filter, drill, and export a governed view. A few people need to publish. Almost nobody needs to fork the model. If everyone can publish, you chose wide-open. If nobody can filter, you chose the ticket queue.

3. **Publish an app, not a folder of files.** Viewers open one app instead of hunting workspaces or collecting pbix attachments. The app is how you stop “which report is live.”

4. **Give analysts a sanctioned sandbox.** Self-service dies if the only options are wait or rebel. A sandbox that *reads* the official model, through a composite or live connection, lets people try cuts without minting a new source of truth. Promote what works instead of copying the model into ten workbooks.

5. **Time-box the remaining tickets.** Some requests are real model changes: a new grain, a new source, a new official KPI. Those belong in a short, visible backlog, not a black hole. A request to slice what already exists should not be a ticket at all.

6. **Retire the shadow path on purpose.** When a cut is available in the app, stop fulfilling it by email. If people keep exporting, ask whether the grain is wrong, the refresh is late, or the access is still too tight. Fix that instead of adding another report.

If you cannot tell a decision metric from a departmental curiosity, map it in a [Data & AI Strategy Roadmap](/analytics-ai-strategy-roadmap). Making the change stick is the job of [Data Project Management & Change Leadership](https://www.alluviumbi.com/data-project-management-change-leadership), and ongoing measure ownership sits in [Managed Data & AI Advisory](/managed-advisory-retainer).

## What good self-service feels like

A controller needs variance by region. They open the app, filter, and drill. They do not wait three weeks, and they do not invent a fourth margin.

IT is not idle. IT is protecting the model, the refresh, and the access. That is the work that pays off, and slicer tickets were never the job.

If the only way to get a cut is through a developer, you do not have BI. You have a custom-report shop with nicer charts.

## Frequently asked questions

**Is self-service Power BI better than IT-built reports?**
Neither works alone. The point is the hybrid: an IT-owned model with business-owned exploration.

**Why do we still wait on IT if we have licenses?**
Because publish rights and model ownership were never split. Licenses do not create a path. They create seats.

**Won’t self-service create five margins?**
It will if people can fork measures. Lock the calculation and open the filters.

**Should every analyst have a Pro license?**
Not automatically. Put viewers on one trusted app and buy authoring seats for the people who actually publish. Seat waste is covered in [You Paid for the Licenses](/blog/unused-power-bi-licenses).

**Do we need a new platform for this?**
No. You need one official model and a rule about who can change it.

## Get started with Alluvium

You do not need a wider queue. You need one model the business can explore without minting a second truth.

Want to see where tickets still sit in front of a filter? [Book a session](/contact). We’ll map one official model and who should explore it, not a lock-down program. Or start with a [free Model Health check](/power-bi-model-health).

<!-- wordcount: 1220 -->
