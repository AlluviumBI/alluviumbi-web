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

Scrap is known on the floor and missing in the pack. That gap is cash, not a chart preference.

Quality already counts what got thrown away. Finance still books a yield story that never saw the bin. The COO hears the real number in a huddle, and the CFO hears a smoother one two weeks later. Same plant, two companies.

![Black-and-white metal scrap bins and offcuts on a factory floor](/blog/manufacturing-scrap-never-makes-the-pack-hero.jpg)

## This is not inventory cash, and it is not downtime speed

On-hand, turns, and dead stock are working capital, and [inventory is cash](/blog/inventory-is-cash-slow-stock-reporting) already tells that story. Scrap is not a warehouse aging file. It is material and labor you already spent that will never ship.

Late insight on downtime and scrap *as a clock on the line* is covered in [Every Minute Counts](https://www.alluviumbi.com/blog/slow-bi-costs-manufacturing-downtime). Shift-level grain is covered in [ops still runs the plant from spreadsheets](/blog/ops-still-runs-the-plant-from-spreadsheets).

This post is about getting quality yield into the finance pack: first-pass, rework, and scrap cost. If quality lives in QMS and MES, finance lives in the GL, and the pack only shows “COGS,” you are managing yield by folklore. The broader consulting picture is in [Power BI for manufacturing](/blog/power-bi-for-manufacturing-reporting-consulting). The specific miss here is scrap that never graduates from the clipboard into a measure finance will defend.

If scrap is real at 6:30 a.m. and absent from the board file, you are not being conservative. You are hiding cash that already left.

## Why scrap never makes the pack

Quality codes live in a system finance does not read. Reasons are free text and lots are not tracked. Rework gets booked as labor instead of yield. The pack wants a clean margin tile, so someone rolls scrap into “other manufacturing variance” and hopes nobody asks.

ERP may record a scrap transaction, but the model often knows quantity without value, standard cost without the bin, or the plant total without the line. The pack gets built from the GL, which is honest about dollars and silent about why. Quality’s side file arrives late and is left out because “that is ops.”

The fight that follows in the room is [why Power BI reports show different numbers](/blog/why-power-bi-reports-show-different-numbers). Missing scrap puts that fight on the calendar every month.

## What missing scrap costs

1. **You buy more of what you already threw away.** Without a current view of scrap by SKU or by line in the same model as inventory, buyers replenish as if yield were 100%. Material leaves twice, and working capital does not care that quality “already knew.”

2. **Margin becomes a mystery variance.** Finance sees COGS move and cannot say how much was scrap versus mix versus purchase price. The meeting argues over the waterfall while the bin was already counted. You paid for a pack that cannot name waste.

3. **Rework hides as utilization.** Crews look busy, but output does not move. If rework hours never sit next to scrap quantity, the COO gets a labor story and the CFO gets a yield story. Neither one is complete.

4. **Customer quality and internal scrap never meet.** Returns and floor scrap often live in two systems. A plant can look “in control” internally while the customer pays for the rest. A pack that shows only internal codes is a partial confession.

5. **Kaizen runs on last month’s clipboard.** Improvement meetings need a trusted trend at the line and reason-code level. A quarterly extract into Excel is a eulogy, and you cannot fund a countermeasure from a file that is already stale.

6. **The pack trains leaders to ignore the floor.** If the official file never shows scrap, leaders learn that quality is a local hobby. Trust in the model dies first on the measures that were too messy to include, and adoption of the rest of the app follows: [nobody opens the dashboard](/blog/nobody-opens-the-dashboard).

You do not need a vendor’s promised savings to act. If the plant can point at a bin and the pack cannot point at a measure, the cost is already running.

Keep the grain honest. Show scrap quantity and cost, first-pass yield with a signed definition, a short reason list, line and item, and rework hours next to scrap. Do not dump the whole QMS onto a page. The plant needs daily numbers, and a stamped weekly view works for the ELT as long as it uses the same definition.

## How to get scrap into the pack

1. **Write the yield sentence.** State what is included, what is excluded, standard or actual, and at which operation it is captured. If quality and finance will not sign the same sentence, do not put a tile in the pack. You will only export the argument.

2. **Build one model that quality and finance both use.** MES, QMS, and ERP feed scrap quantity, cost, and reason into the same semantic model as production and COGS. Do not leave quality in a side workspace labeled “ops only.” The pack reads the product, and the product has to include waste.

3. **Value it on purpose.** Quantity without money is a floor metric. Money without quantity is a GL plug. You need both. If standard cost is what finance will defend, say so, and do not mix in actuals through a quiet DAX branch.

4. **Promote the measure, not a screenshot.** Scrap in the pack should be a certified measure with a steward, usually operations with finance consulted. It should not be a pasted image of a quality dashboard. Certification without a written definition is still fog, as [measures nobody can explain](/blog/measures-nobody-can-explain) shows.

5. **Give the ELT an exception list and the plant the detail.** Leadership sees rate, cost, and the SKUs or lines that moved. The plant drills down to shift and reason. If the exec page is a 4,000-row NC log, it will get pulled from the pack and you will be back to silence.

6. **Connect the pack instead of pasting the clipboard.** The yield slide can stay formatted in Excel if it must, as long as it points at the model. If someone still types last week’s scrap from a printout, that is a process break, not a tooling gap.

If the model is a transaction dump, tune it with [dashboard optimization](https://www.alluviumbi.com/power-bi-dashboard-optimization-ai-insights). Ownership of the measure and the refresh belongs in [Managed Data & AI Advisory](/managed-advisory-retainer). Copies of quality files without a steward are a [governance](https://www.alluviumbi.com/blog/the-hidden-costs-of-poor-power-bi-governance-and-how-to-fix-it) problem.

## What good looks like

The huddle and the pack use the same yield sentence. They may use different grain, but never different truths. A CFO can ask what scrap cost this week and get a stamped number, not a promise to “pull quality.”

Rework shows up as a loop to close, not as proud utilization. The bin still exists, but it is no longer the only system of record.

## Frequently asked questions

**Is this an OEE dashboard?**
No. OEE is a line clock. This is yield into finance: scrap cost, first-pass, and rework, in the pack.

**Do we need a new QMS first?**
Not to get scrap quantity and cost from the systems you already have into one model.

**Will a tile reduce scrap by itself?**
No. A shared number stops you from processing waste in the dark. The countermeasure still has to run.

## Get started with Alluvium

You need scrap and yield on the same clock as the rest of the pack.

Want to find where floor scrap still dies before it reaches finance? [Book a session](/contact). We’ll map one yield sentence and the measures the pack should finally carry. Or start with a [Free Model Health check](/power-bi-model-health).

<!-- wordcount: 1202 -->
