---
title: "Why Ops Still Runs the Plant From Spreadsheets"
description: "The dashboard missed the shift grain, so supervisors went back to Excel. That is a model problem, not a culture problem."
pubDate: 2026-06-22
tags:
  - Power BI
  - Manufacturing
  - Operations
draft: false
---

The dashboard missed the shift grain, so supervisors went back to Excel. That is a model problem, not a culture problem.

You can train people on Power BI until the posters fade. If the page cannot answer the line at the huddle, for this shift, this cell, and this crew, the clipboard wins. Ops is not stubborn. Ops is busy.

![Black-and-white factory aisle between heavy machinery, no people](/blog/ops-still-runs-the-plant-from-spreadsheets-hero.jpg)

## This is not downtime speed, and it is not inventory cash

Late insight on downtime and scrap is a clock on the line, and [Every Minute Counts](https://www.alluviumbi.com/blog/slow-bi-costs-manufacturing-downtime) already tells that story. On-hand, turns, and dead stock are working capital, covered in [inventory is cash](/blog/inventory-is-cash-slow-stock-reporting). Supervisors do not run a shift from a warehouse aging file.

This post is about grain: shift, line, and crew, the units the plant actually manages in the morning meeting. When the semantic model stops at a day, a week, or a plant total, the floor rebuilds the grain in a workbook. Then the exec dashboard and the huddle stop describing the same company.

Manufacturing KPIs without a shared model are the broader consulting problem in [Power BI for manufacturing](/blog/power-bi-for-manufacturing-reporting-consulting). The failure here is specific: the official page is too coarse for the people who run the asset.

## What the plant needs that the dashboard skipped

**Shift as a first-class field.** Not a filter someone might add later. First, second, and third shift, weekends, and overtime blocks. If the fact table is a daily rollup, you cannot recover the shift. Excel will.

**Line, cell, or work center, not only plant.** A plant total is a CFO view. A supervisor owns a stretch of floor, and if the model stops at plant, they will split it by hand.

**Crew, and standard versus actual, at that grain.** Labor and output only mean something together. A pretty OEE tile at the month level does not help a 6:30 a.m. stand-up.

**A refresh that matches the huddle, not the board pack.** The board can wait for close. The shift cannot. An operational snapshot and booked actuals are different products, and mixing them in one unexplained tile is how ops learns not to trust the wall screen.

**Scrap, downtime, and throughput next to the line.** Not tucked away in a separate “analytics” workspace the supervisor has no time to open.

If those are missing, adoption lectures will fail. [Nobody opens the dashboard](/blog/nobody-opens-the-dashboard) often comes down to this: the page serves a meeting they do not attend, at a grain they do not run.

## The costs of the wrong grain

1. **Excel becomes the system of record for the shift.** The official model is for monthly reviews while real decisions happen in a shared workbook. You funded two plants, and only one of them is in Power BI.

2. **Executives see a calm total while the floor is on fire.** A plant can make the day and miss two shifts. Coarse grain hides the miss until it is a story instead of a correction. Leadership thinks the dashboard is “fine.” Supervisors know it is furniture.

3. **Every line invents its own definitions.** Scrap codes, downtime reasons, and what counts as a good unit all drift. Without a model at line grain, each workbook becomes its own dialect and the monthly pack cannot explain the month. The conflicting numbers show up later in a nicer room, as in [why reports show different numbers](/blog/why-power-bi-reports-show-different-numbers), but the cause started at 6 a.m.

4. **Continuous improvement and standard work have nothing to attach to.** You cannot improve a line you cannot see, and kaizen on a monthly average is theater. The spreadsheet has the variation. The program does not.

5. **Handoffs fail between shifts.** Night leaves a note in a file, and day cannot find the official number for the same hours. Safety, quality, and output disputes turn personal when they were really about grain.

6. **IT gets blamed for culture.** “Ops won’t adopt.” In fact ops adopted the tool that matched the work, and the model did not. You will keep buying licenses and the clipboard will keep winning. Unused seats have their own post. This one explains why the seats never mattered on the floor.

Watch the huddle. If the screen is ignored and the printout is marked up, you have your diagnosis. No invented plant and no invented savings are needed. The behavior is the evidence.

## What not to do

Do not launch a shop-floor app on top of a daily plant model. A mobile skin on the wrong grain is still the wrong grain.

Do not shame supervisors for “living in Excel.” Connected Excel on the right model is fine. Parallel Excel as the only shift ledger is the failure.

Do not average the shift away to make the model smaller. Capacity is a real constraint, but erasing grain to fit a file is how you bought the clipboard.

Do not wait for an MES replacement to give ops a row they already have in a historian or a time file. Many mid-market plants can model shift and line from what already lands in SQL or a flat extract. Waiting for the perfect MES is how the huddle stays on paper.

If you cannot name the three decisions the shift review must make, you will try to model the universe. Start with the stand-up. Strategy has its place in the [Data & AI Strategy Roadmap](/analytics-ai-strategy-roadmap), but the floor needs a product, not a tour.

## How to fix it

1. **Sit in the huddle before you redraw the page.** Write down the questions that get asked about units, scrap, downtime, labor, and who is on the line. If your model cannot answer those without a new extract, stop designing visuals.

2. **Set grain to the decision, not warehouse convenience.** One row should survive “this shift, this line.” If the source is coarser, say so and do not pretend the dashboard is operational. Honesty beats a fake drill.

3. **Build the ops product as a model, then a thin board.** Name measures in plain English at shift, line, and plant, using the same definitions the monthly pack will roll up. Rollup should be a filter, not a second calculation. [The semantic model is the product](/blog/semantic-model-is-the-product), and the huddle board is a brochure for one role.

4. **Give supervisors a page that fits the stand-up timebox.** Use five to nine tiles, with grain and refresh time visible and no executive chrome. If they still need a grid, connect Excel to the same model rather than letting them rebuild the math.

5. **Fence the monthly pack off from the shift snapshot.** Timing differs, so labels must differ. Booked scrap at close is not live scrap at 10 a.m., and mixing them is how finance and ops stop speaking.

6. **Retire the shadow workbook on a date.** After the model has answered the huddle for two weeks, archive the old file. If someone objects loudly, they just identified a missing grain, so fix it. Do not keep both forever. A [Power BI Quickstart](/power-bi-quickstart) can put one line and one shift view on a model you intend to keep, and the next line becomes a filter.

## What good looks like

The stand-up runs from a page that knows the shift. Markers still exist, but the numbers no longer depend on them. Plant, area, and exec views add up from the same rows, and nobody maintains a translation tab.

A new supervisor gets access to their lines, not a fork of the workbook. Night to day is a filter, not a mystery. You still use spreadsheets where a grid is the right tool. You just stopped using them as the only place the shift is real.

## Get started

If ops lives in Excel, look at the grain before you look at the culture deck.

Want to know whether your model can survive a shift huddle? [Book a session](/contact). We will name the row, the measures, and the one workbook the floor should be allowed to drop. Or start with a [Free Model Health check](/power-bi-model-health).

<!-- wordcount: 1284 -->
