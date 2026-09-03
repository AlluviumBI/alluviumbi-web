---
title: "Why Manufacturing Scrap Data Never Makes the Pack"
description: "Scrap is known on the floor and missing in the pack. That gap is cash, not a chart preference."
pubDate: 2026-07-24
tags:
  - Power BI
  - Manufacturing
  - Quality
draft: false
---

Scrap is known on the floor. It is missing in the pack. That gap is cash, not a chart preference.

Quality already counts what they threw away. Finance still books a yield story that never saw the bin. The COO hears the number in a huddle. The CFO hears a smoother one two weeks later. Same plant. Two companies.

![Black-and-white metal scrap bins and offcuts on a factory floor](/blog/manufacturing-scrap-never-makes-the-pack-hero.jpg)

## This is not inventory cash, and it is not downtime speed

On-hand, turns, and dead stock are working capital. That story is already told: [inventory is cash](/blog/inventory-is-cash-slow-stock-reporting). Scrap is not a warehouse aging file. It is material and labor you already spent that will never ship.

Late insight on downtime and scrap *as a clock on the line* is [Every Minute Counts](https://www.alluviumbi.com/blog/slow-bi-costs-manufacturing-downtime). Do not retread speed. Shift grain is [ops still runs the plant from spreadsheets](/blog/ops-still-runs-the-plant-from-spreadsheets).

This post is quality yield into the finance pack: first-pass, rework, scrap cost. If quality lives in QMS and MES, finance lives in the GL, and the pack only has “COGS,” you are managing yield by folklore. The consulting shape is [Power BI for manufacturing](/blog/power-bi-for-manufacturing-reporting-consulting). The miss here is scrap that never graduates from the clipboard into a measure finance will defend.

[Judgment:] if scrap is real at 6:30 a.m. and absent in the board file, you are not being conservative. You are hiding cash that already left.

## Why scrap never makes the pack

Quality codes live in a system finance does not read. Reasons are free text. Lots are not. Rework is booked as labor, not as yield. The pack wants a clean margin tile, so someone rolls scrap into “other manufacturing variance” and hopes nobody asks.

ERP may know a scrap transaction. The model often knows quantity without value, standard without the bin, or plant total without the line. Then the pack is built from the GL, which is honest about dollars and silent about why. Quality’s side file arrives late and is not invited because “that is ops.”

That fight in the room is [why Power BI reports show different numbers](/blog/why-power-bi-reports-show-different-numbers). Scrap is how you schedule it every month.

## What missing scrap costs

1. **You buy more of what you already threw away.** Without a current scrap-by-SKU or scrap-by-line view in the same model as inventory, buyers replenish as if yield were 100%. Material leaves twice. Working capital does not care that quality “already knew.”

2. **Margin is a mystery variance.** Finance sees COGS move and cannot say how much was scrap versus mix versus purchase price. The meeting argues the waterfall. The bin was already counted. You paid for a pack that cannot name waste.

3. **Rework hides as utilization.** Crews look busy. Output does not. If rework hours never join scrap quantity in one sentence, the COO gets a labor story and the CFO gets a yield story. Neither is complete.

4. **Customer quality and internal scrap never meet.** Returns and floor scrap are often two systems. A plant can look “in control” internally while the customer pays for the rest. The pack that only shows internal codes is a partial confession.

5. **Kaizen runs on last month’s clipboard.** Improvement meetings need a trusted trend at line and reason code. A quarterly extract into Excel is a eulogy. You cannot fund a countermeasure from a file that is already stale.

6. **The pack trains leaders to ignore the floor.** If the official file never shows scrap, leaders learn that quality is a local hobby. Trust in the model dies first on the measures that were too messy to include. Adoption of the rest of the app follows: [nobody opens the dashboard](/blog/nobody-opens-the-dashboard).

You do not need a vendor’s promised savings to act. If the plant can point at a bin and the pack cannot point at a measure, the cost is already operating.

Keep grain honest: scrap quantity and cost, first-pass with a signed sentence, a short reason list, line and item, rework hours next to scrap. Do not dump the QMS onto a page. Daily for the plant; a stamped weekly for ELT if it is the same definition.

## How to get scrap into the pack

1. **Name the yield sentence.** Include this. Exclude that. Standard or actual. Capture at which operation. Write it. If quality and finance will not sign the same sentence, do not put a tile in the pack. You will only export the argument.

2. **One model that quality and finance both consume.** MES, QMS, and ERP feed scrap quantity, cost, and reason into the same semantic model as production and COGS. Do not leave quality in a side workspace named “ops only.” The pack reads the product. The product must include waste.

3. **Value it on purpose.** Quantity without money is a floor metric. Money without quantity is a GL plug. Both belong. If standard cost is what finance will defend, say so. Do not mix actuals in a quiet DAX branch.

4. **Promote the measure, not a screenshot.** Scrap in the pack is a certified measure with a steward—usually operations with finance consulted—not a pasted photo of a quality dashboard. Certification without a sentence is still fog: [measures nobody can explain](/blog/measures-nobody-can-explain).

5. **Exception list for ELT, grain for the plant.** Leadership sees rate, cost, and the SKUs or lines that moved. The plant drills to shift and reason. If the exec page is a 4,000-row NC log, it will be removed from the pack and you will be back to silence.

6. **Connect the pack. Do not paste the clipboard.** The yield slide can stay formatted in Excel if it must. Point it at the model. If someone still types last week’s scrap from a printout, that is a process break, not a tooling gap.

If the model is a transaction dump, tune it: [dashboard optimization](https://www.alluviumbi.com/power-bi-dashboard-optimization-ai-insights). Ownership of the measure and the refresh sits in [Managed Data & AI Advisory](/managed-advisory-retainer). Copies of quality files without a steward are [governance](https://www.alluviumbi.com/blog/the-hidden-costs-of-poor-power-bi-governance-and-how-to-fix-it).

## What good looks like

The huddle and the pack use the same yield sentence. They may use different grain. They do not use different truths.

A CFO can ask what scrap cost this week and get a stamped number, not a promise to “pull quality.”

Rework is visible as a loop, not as proud utilization.

The bin still exists. It is no longer the only system of record.

## Frequently asked questions

**Is this an OEE dashboard?**
No. OEE is a line clock. This is yield into finance: scrap cost, first-pass, rework, in the pack.

**Do we need a new QMS first?**
Not to get scrap quantity and cost from the systems you already have into one model.

**Will a tile reduce scrap by itself?**
No. A shared number lets you stop processing waste in the dark. The countermeasure still has to run.

## Get started with Alluvium

You do not need a promised savings figure. You need scrap and yield on the same clock as the rest of the pack.

Need a 30-minute look at where floor scrap still dies before finance? [Contact Alluvium](/contact). We’ll map one yield sentence and the measures the pack should finally carry.

[Book a 30-minute consult](/contact).

<!-- wordcount: 1202 -->
