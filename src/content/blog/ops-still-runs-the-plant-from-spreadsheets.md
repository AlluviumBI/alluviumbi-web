---
title: "Why Ops Still Runs the Plant From Spreadsheets"
description: "The dashboard missed the shift grain. Supervisors went back to Excel. That is a model problem, not a culture problem."
pubDate: 2026-06-22
tags:
  - Power BI
  - Manufacturing
  - Operations
draft: false
---

The dashboard missed the shift grain. Supervisors went back to Excel. That is a model problem, not a culture problem.

You can train people on Power BI until the posters fade. If the page cannot answer the line at the huddle—this shift, this cell, this crew—the clipboard wins. Ops is not stubborn. Ops is busy.

![Black-and-white factory aisle between heavy machinery, no people](/blog/ops-still-runs-the-plant-from-spreadsheets-hero.jpg)

## This is not downtime speed, and it is not inventory cash

Late insight on downtime and scrap is a clock on the line. That story is already told: [Every Minute Counts](https://www.alluviumbi.com/blog/slow-bi-costs-manufacturing-downtime). Do not retread speed here.

On-hand, turns, and dead stock are working capital. That story is [inventory is cash](/blog/inventory-is-cash-slow-stock-reporting). Supervisors do not run the shift from a warehouse aging file.

This post is grain. Shift. Line. Crew. The unit the plant actually manages in the morning meeting. When the semantic model is a day, a week, or a plant total, the floor rebuilds the grain in a workbook. Then the exec dashboard and the huddle stop being the same company.

Manufacturing KPIs without a shared model is the consulting shape in [Power BI for manufacturing](/blog/power-bi-for-manufacturing-reporting-consulting). Here the failure mode is specific: the official page is too coarse for the people who run the asset.

## What the plant needs that the dashboard skipped

**Shift as a first-class thing.** Not a filter someone might add later. First, second, third. Weekend. Overtime block. If the fact table is a daily rollup, you cannot recover the shift. Excel will.

**Line, cell, or work center—not only plant.** A plant total is a CFO view. A supervisor owns a stretch of floor. If the model stops at plant, they will split it by hand.

**Crew and standard versus actual at that grain.** Labor and output only mean something together. A pretty OEE tile at month level does not help a 6:30 a.m. standup.

**A refresh that matches the huddle, not the board pack.** The board can wait for close. The shift cannot. Operational snapshot and booked actuals are different products. Mixing them in one unexplained tile is how ops learns not to trust the wall screen.

**Scrap, downtime, and throughput in the same sentence as the line.** Not as a separate “analytics” workspace the supervisor does not have time to open.

If those are missing, adoption lectures will fail. [Nobody opens the dashboard](/blog/nobody-opens-the-dashboard) is often this: the page is for a meeting they do not attend, at a grain they do not run.

## The costs of the wrong grain

1. **Excel becomes the system of record for the shift.** The official model is for monthly reviews. The real decisions happen on a shared workbook. You funded two plants. Only one of them is in Power BI.

2. **Executives see a calm total while the floor is on fire.** A plant can make the day and miss two shifts. Coarse grain hides the miss until it is a story, not a correction. Leadership thinks the dashboard is “fine.” Supervisors know it is furniture.

3. **Every line invents its own definitions.** Scrap codes, downtime reasons, what counts as a good unit. Without a model at line grain, each workbook is a dialect. Then the monthly pack cannot explain the month. Conflicting numbers show up later in a nicer room: [why reports show different numbers](/blog/why-power-bi-reports-show-different-numbers). The cause started at 6 a.m.

4. **CI and standard work cannot attach.** You cannot improve a line you cannot see. Kaizen on a monthly average is theater. The spreadsheet has the variation. The program does not.

5. **Handoffs fail between shifts.** Night leaves a note in a file. Day cannot find the official number for the same hours. Safety, quality, and output disputes become personality. They were grain.

6. **IT is blamed for culture.** “Ops won’t adopt.” Ops adopted the tool that matched the work. The model did not. You will keep buying licenses. The clipboard will keep winning. Unused seats have their own post. This one is why the seats were never relevant on the floor.

Watch the huddle. If the screen is ignored and the printout is marked up, you have your diagnosis. No invented plant, no invented savings. The behavior is the evidence.

## What not to do

Do not launch a shop-floor app on top of a daily plant model. A mobile skin on the wrong grain is still the wrong grain.

Do not shame supervisors for “living in Excel.” Connected Excel on the right model is fine. Parallel Excel as the only shift ledger is the failure.

Do not average the shift away to make the model smaller. Capacity is a real constraint. Erasing grain to fit a file is how you bought the clipboard.

Do not wait for a MES replacement to give ops a row they already have in a historian or a time file. Many mid-market plants can model shift and line from what already lands in SQL or a flat extract. Perfect MES is how the huddle stays on paper.

If you cannot name the three decisions the shift review must make, you will model the universe. Start with the standup. Strategy exists: [Data & AI Strategy Roadmap](/analytics-ai-strategy-roadmap). The floor needs a product, not a tour.

## How to fix it

1. **Sit in the huddle before you redraw the page.** Write the questions that get asked. Units, scrap, downtime, labor, who is on the line. If your model cannot answer those without a new extract, stop designing visuals.

2. **Set grain to the decision, not the warehouse convenience.** One row should survive “this shift, this line.” If the source is coarser, say so and do not pretend the dashboard is operational. Honesty beats a fake drill.

3. **Build the ops product as a model, then a thin board.** Measures named in English. Shift, line, plant. Same definitions the monthly pack will roll up. Rollup is a filter, not a second calculation. [The semantic model is the product](/blog/semantic-model-is-the-product). The huddle board is a brochure for a role.

4. **Give supervisors a page that matches the standup timebox.** Five to nine tiles. Grain visible. Refresh time visible. No executive chrome. If they still need a grid, connect Excel to the same model. Do not let them rebuild the math.

5. **Fence the monthly pack from the shift snapshot.** Timing differs. Labels must differ. Booked scrap at close is not live scrap at 10 a.m. Mixing those is how finance and ops stop speaking.

6. **Retire the shadow workbook on a date.** After the model answers the huddle for two weeks, archive the old file. If someone screams, they volunteered a missing grain. Fix that. Do not keep both forever. A [Power BI Quickstart](/power-bi-quickstart) can put one line, one shift view, on a model you intend to keep—then the next line is a filter.

## What good looks like

The standup runs from a page that knows the shift. Markers still exist. The numbers do not.

Plant, area, and exec views add up from the same rows. Nobody maintains a translation tab.

A new supervisor gets access to their lines. They do not get a fork of the workbook.

Night to day is a filter, not a mystery.

You still use spreadsheets where a grid is the right UI. You stopped using them as the only place shift is real.

## Get started

If ops lives in Excel, look at the grain before you look at the culture deck.

Need a 30-minute look at whether your model can survive a shift huddle? [Contact Alluvium](/contact). We will name the row, the measures, and the one workbook the floor should be allowed to drop.

[Book a 30-minute consult](/contact).

<!-- wordcount: 1284 -->
