---
title: "Inventory Is Cash. Slow Stock Reporting Is a Working-Capital Problem"
description: "If on-hand, turns, and dead stock take a week of Excel, you are managing working capital by lag."
pubDate: 2026-05-08
tags:
  - Power BI
  - Manufacturing
  - Inventory
draft: false
---

Inventory is cash sitting in a building. If on-hand, turns, and dead stock take a week of Excel, you are managing working capital by lag.

The COO feels it as fill rate. The CFO feels it as cash. The CEO feels it when the board asks why the warehouses are full and the customer is still waiting.

![Black-and-white warehouse aisle of pallets and bulk bags](/blog/inventory-is-cash-slow-stock-reporting-hero.jpg)

## This is not an OEE story

People search “Power BI inventory dashboard manufacturing” and “cash tied up in inventory” for a reason. Stock is a balance-sheet and service problem. It is not the same thing as a slow line dashboard.

Late insight on downtime and scrap is a speed problem on the floor, and [Every Minute Counts](https://www.alluviumbi.com/blog/slow-bi-costs-manufacturing-downtime) covers it. This post is about on-hand, turns, aging, and whether you can ship.

A manufacturer can have a live OEE tile and still run inventory from last Friday’s extract. Those are two different clocks, and cash does not care how good the line chart looks.

ERP already knows receipts, issues, and locations. Then the weekly dump happens, Excel becomes the warehouse of record, and working capital gets managed in arrears. If you cannot state on-hand and dead stock without a week of files, you are not being careful. You are late.

Finance still needs formatted views. Keep those in Excel, connected to the model rather than pasted. That split is covered in [Excel vs Power BI](/blog/excel-vs-power-bi-financial-reporting). Inventory is the cash version of the same drag.

## What lag costs a CEO, CFO, and COO

Skip the ROI math and watch the operating loop.

1. **Cash stays in the wrong SKU.** You cannot cut what you cannot see. When aging reports are slow, dead stock sits while you buy more of what is already sitting. Working capital swells for lack of a current list, not for lack of a policy.

2. **Fill rate and excess coexist.** The plant is full and the order is short. That is a location and allocation problem, and a week-old on-hand file cannot tell you which warehouse, lot, or hold is involved. Service suffers while cash sits two aisles over.

3. **Turns become a story, not a control.** If turns arrive in a monthly pack, you are managing last month’s inventory. Buyers and planners need a current signal. A lagging turn number is a eulogy.

4. **Write-downs and reserves surprise finance.** Slow visibility on obsolete and slow-moving stock becomes a period-end hit. The CFO learns about dead stock when it is time to write it off, not when it was time to stop buying it.

5. **Meetings reconcile files instead of stock.** Ops has a warehouse snapshot, finance has a GL inventory balance, and planning has an MRP extract. That is three honest numbers and one argument, the same pattern as [different numbers in Power BI](/blog/why-power-bi-reports-show-different-numbers) applied to on-hand.

6. **Safety stock becomes folklore.** Without a trusted, current view of demand and on-hand, every plant pads. Padding is cash, and it feels like prudence when the report is late.

Siloed manufacturing KPIs without a shared model are the consulting problem described in [Power BI for manufacturing](/blog/power-bi-for-manufacturing-reporting-consulting). This article is about the cash and fill-rate loop, not a service menu.

## What belongs on the inventory view

Keep the grain honest. Executives do not need every serial number. They need cash, service, and the exception list.

- **On-hand in money and units**, by location, with an as-of stamp.
- **Turns and days on hand**, with a definition finance and ops both signed.
- **Aging and dead stock**, so buyers stop replenishing what will not move.
- **Fill rate and OTIF**, so the cash conversation stays tied to the customer and not only the warehouse.
- **Open orders versus available**, so you see a shortage before it ships late.

Do not dump the item master onto a page and call it a dashboard. Wrong grain is how [nobody opens the dashboard](/blog/nobody-opens-the-dashboard), and inventory pages fail the same way when they are a 4,000-row grid.

Refresh should match the decision. Planners need daily. A stamped weekly view is fine for the ELT if everyone uses the same stamp. A Friday file and a Wednesday GL extract are two different inventories.

## How to fix stock reporting without a vendor ROI slide

You do not need a promised dollar savings from a software brochure. You need one inventory model and a cadence the cash meeting can trust.

1. **Build one on-hand model.** ERP, plus WMS if you have one, feeds a single semantic model with quantity, value, location, and status (available, hold, consigned). Finance and ops consume the same on-hand instead of each rebuilding it.

2. **Agree on valuation and unit.** Decide standard versus actual, and whether in-transit and consignment are in or out. Write it down. If “inventory” means three things, name all three rather than hiding them under one tile.

3. **Age it on purpose.** Dead stock is a definition, such as no movement in N days or a flag ops already uses. Put it in the model. A quarterly spreadsheet of “dusty SKUs” is how cash stays stuck.

4. **Tie service to stock.** Fill rate without on-hand is a complaint. On-hand without fill rate is a warehouse tour. The COO and CFO should see both in the same app.

5. **Show exception lists, not encyclopedias.** Leadership sees cash, turns, aging, and the SKUs that break fill rate. Planners drill down to location and lot. If the exec page is a grid, you built a dump.

6. **Connect the cash pack instead of pasting it.** The working-capital slide in the board file can stay in Excel, pointed at the model. If someone still copies last week’s warehouse export, the process is broken.

If the model is slow because it is a transaction dump, tune it with [dashboard optimization](https://www.alluviumbi.com/power-bi-dashboard-optimization-ai-insights). If you cannot say which inventory decisions the ELT actually makes, start with the [Data & AI Strategy Roadmap](/analytics-ai-strategy-roadmap). Ownership of measures and refresh belongs in [Managed Data & AI Advisory](/managed-advisory-retainer). Copies and access without a steward are a [governance](https://www.alluviumbi.com/blog/the-hidden-costs-of-poor-power-bi-governance-and-how-to-fix-it) problem.

## What “current” means for working capital

Current does not mean real-time for its own sake. It means as fresh as the decision.

A buyer placing a PO this morning needs on-hand that is newer than last Friday. A CFO in a monthly cash meeting needs a stamped number both plants used. Those are different cadences on the same model.

The expensive inventory is the inventory you cannot see in time to stop buying it.

## Frequently asked questions

**Can Power BI replace our inventory Excel files?**
It can replace the extract-and-paste loop. Keep formatted cash packs in Excel, connected to the model.

**Is this the same as a shop-floor dashboard?**
No. Shop-floor speed is about downtime and quality. This is about on-hand, turns, aging, and fill rate.

**Do we need a new WMS first?**
Not to get one on-hand model from the ERP you already have. A WMS may add grain, but it is not a prerequisite for a trusted weekly cash view.

**Why don’t finance and warehouse numbers match?**
Timing, valuation, holds, and in-transit. Name those before you rebuild any visual.

**Will a dashboard free up cash by itself?**
No. A current list lets you stop buying dead stock and spot shortages. The policy still has to change.

## Get started with Alluvium

You need on-hand, turns, and dead stock on a clock the cash meeting can use.

Want to see where stock reporting still lags the warehouse? [Book a session](/contact). We’ll map one on-hand source and the fill-rate view that should share it. Or start with a [Free Model Health check](/power-bi-model-health).

<!-- wordcount: 1250 -->
