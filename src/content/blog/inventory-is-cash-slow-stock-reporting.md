---
title: "Inventory Is Cash. Slow Stock Reporting Is a Working-Capital Problem."
description: "If on-hand, turns, and dead stock take a week of Excel, you are managing working capital by lag."
pubDate: 2026-05-08
tags:
  - Power BI
  - Manufacturing
  - Inventory
draft: false
---

Inventory is cash sitting in a building. If on-hand, turns, and dead stock take a week of Excel, you are managing working capital by lag.

The COO feels it as fill rate. The CFO feels it as cash. The CEO feels it when the board asks why warehouses are full and the customer still waits.

![Black-and-white warehouse aisle of pallets and bulk bags](/blog/inventory-is-cash-slow-stock-reporting-hero.jpg)

## This is not an OEE story

People search “Power BI inventory dashboard manufacturing” and “cash tied up in inventory” for a reason. Stock is a balance-sheet and service problem. It is not the same as a slow line dashboard.

Late insight on downtime and scrap is a speed problem on the floor: [Every Minute Counts](https://www.alluviumbi.com/blog/slow-bi-costs-manufacturing-downtime). Do not retread that here. This post is on-hand, turns, aging, and whether you can ship.

A manufacturer can have a live OEE tile and still run inventory from last Friday’s extract. Those are different clocks. Cash does not care that the line chart is pretty.

ERP already knows receipts, issues, and locations—until the weekly dump. Then Excel becomes the warehouse of record. That is how working capital gets managed in arrears.

[Judgment:] if you cannot say on-hand and dead stock without a week of files, you are not “careful.” You are late.

Finance still needs formatted views. Keep those in Excel, connected—not pasted. The split is [Excel vs Power BI](/blog/excel-vs-power-bi-financial-reporting). Inventory is the cash version of the same drag.

## What lag costs a CEO, CFO, and COO

No invented ROI. Watch the operating loop.

1. **Cash stays in the wrong SKU.** You cannot cut what you cannot see. Slow aging reports mean dead stock sits while you buy more of what already sits. Working capital swells for lack of a current list, not for lack of a policy.

2. **Fill rate and excess coexist.** The plant is full. The order is short. That is a location and allocation problem. A week-old on-hand file cannot tell you which warehouse, which lot, which hold. Service suffers while cash sits two aisles over.

3. **Turns are a story, not a control.** If turns arrive in a monthly pack, you manage last month’s inventory. Buyers and planners need a current signal. A lagging turn number is a eulogy.

4. **Writes and reserves surprise finance.** Slow visibility on obsolete and slow-moving stock turns into a period-end hit. The CFO learns about dead stock when it is time to write it, not when it was time to stop buying it.

5. **Meetings reconcile files instead of stock.** Ops has a warehouse snapshot. Finance has a GL inventory balance. Planning has an MRP extract. Three honest numbers. One argument. Same pattern as [different numbers in Power BI](/blog/why-power-bi-reports-show-different-numbers)—applied to on-hand.

6. **Safety stock becomes folklore.** Without a trusted, current view of demand and on-hand, every plant pads. Pads are cash. They feel like prudence when the report is late.

Siloed manufacturing KPIs without a shared model are the consulting shape in [Power BI for manufacturing](/blog/power-bi-for-manufacturing-reporting-consulting). This article is the cash and fill-rate loop, not a service menu.

## What belongs on the inventory view

Keep the grain honest. Executives do not need every serial. They need cash, service, and the exception list.

- **On-hand in money and units**, by location, with an as-of stamp.
- **Turns and days on hand**, with a definition finance and ops both signed.
- **Aging / dead stock**, so buyers stop replenishing what will not move.
- **Fill rate / OTIF**, so cash talk is tied to the customer, not only the warehouse.
- **Open orders versus available**, so you can see a shortage before it ships late.

Do not dump the item master onto a page and call it a dashboard. Wrong grain is how nobody opens the thing. That adoption problem is [Nobody Opens the Dashboard](/blog/nobody-opens-the-dashboard). Inventory pages fail the same way when they are a 4,000-row grid.

Refresh must match the decision. Daily for planners. A stamped weekly for the ELT is fine if everyone uses the same stamp. A Friday file and a Wednesday GL extract are two inventories.

## How to fix stock reporting (without a vendor ROI slide)

You do not need a promised dollar savings from a software brochure. You need one inventory model and a cadence the cash meeting can trust.

1. **One on-hand model.** ERP (and WMS, if you have one) feed a single semantic model. Quantity, value, location, status (available, hold, consigned). Finance and ops consume the same on-hand. They do not each rebuild it.

2. **Agree the valuation and the unit.** Standard versus actual. Include or exclude in-transit. Include or exclude consignment. Write it down. If “inventory” means three things, name them. Do not hide them under one tile.

3. **Age it on purpose.** Dead stock is a definition: no movement in N days, or a flag ops already uses. Put that in the model. A quarterly spreadsheet of “dusty SKUs” is how cash stays stuck.

4. **Tie service to stock.** Fill rate without on-hand is a complaint. On-hand without fill rate is a warehouse tour. The COO and CFO should see both on the same app.

5. **Exception lists, not encyclopedias.** Leadership sees cash, turns, aging, and the SKUs that break fill rate. Planners drill to location and lot. If the exec page is a grid, you built a dump.

6. **Connect the cash pack. Do not paste it.** The working-capital slide in the board file can stay in Excel. Point it at the model. If someone still copies last week’s warehouse export, that is a process break.

If the model is slow because it is a transaction dump, tune it: [dashboard optimization](https://www.alluviumbi.com/power-bi-dashboard-optimization-ai-insights). If you cannot say which inventory decisions the ELT actually runs, use the [Data & AI Strategy Roadmap](/analytics-ai-strategy-roadmap). Ownership of measures and refresh sits in [Managed Data & AI Advisory](/managed-advisory-retainer). Copies and access without a steward are [governance](https://www.alluviumbi.com/blog/the-hidden-costs-of-poor-power-bi-governance-and-how-to-fix-it).

## What “current” means for working capital

Current is not real-time for its own sake. Current is as fresh as the decision.

A buyer placing a PO this morning needs on-hand that is not last Friday. A CFO in a monthly cash meeting needs a stamped number both plants used. Those are different cadences on the same model.

[Judgment:] the expensive inventory is the inventory you cannot see in time to stop buying it.

## Frequently asked questions

**Can Power BI replace our inventory Excel files?**
It can replace the extract-and-paste loop. Keep formatted cash packs in Excel, connected to the model.

**Is this the same as a shop-floor dashboard?**
No. Shop-floor speed is downtime and quality. This is on-hand, turns, aging, and fill rate.

**Do we need a new WMS first?**
Not to get one on-hand model from the ERP you already have. A WMS may add grain. It is not a prerequisite for a trusted weekly cash view.

**Why don’t finance and warehouse numbers match?**
Timing, valuation, holds, and in-transit. Name those. Do not rebuild the visual first.

**Will a dashboard free up cash by itself?**
No. A current list lets you stop buying dead stock and see shortages. The policy still has to move.

## Get started with Alluvium

You do not need a promised savings figure. You need on-hand, turns, and dead stock on a clock the cash meeting can use.

Need a 30-minute look at where stock reporting still lags the warehouse? [Contact Alluvium](/contact). We’ll map one on-hand source and the fill-rate view that should share it.

[Book a 30-minute consult](https://www.alluviumbi.com/contact).

<!-- wordcount: 1250 -->
