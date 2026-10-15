---
title: "A Working Capital Dashboard in Power BI the Operating Partner Will Trust"
description: "AR, AP, and inventory arrive with three cutoff dates. One model and one as-of date make the weekly number hold up."
pubDate: 2026-10-15
tags:
  - Power BI
  - Private Equity
  - Finance
  - Working Capital
draft: false
---

The deal closed, and now the operating partner wants working capital every week. The finance team builds it the same way every Monday. Receivables come out of the ERP as one export. Payables come out as another. Inventory comes from the warehouse system, or from a count sheet someone keeps current. That makes three files with three cutoff dates, tied together by hand in one workbook.

The number goes out and the questions come back. Why did inventory jump when receipts were flat? Why doesn't AP match the trial balance? Somebody spends Tuesday reconciling a number that was supposed to be done on Monday.

A working capital dashboard in Power BI can end that loop. The charts are not what fixes it. What fixes it is a model that forces the three pieces to agree on what day it is and what each word means.

![Two glacial rivers braiding together into one channel through spruce forest](/blog/working-capital-dashboard-power-bi-pe-hero.svg)

## Why the weekly working capital number keeps getting rebuilt

The math is rarely the trouble. Receivables plus inventory minus payables is simple arithmetic. The trouble sits under each piece.

1. **Three cutoff dates.** The AR aging was pulled Friday night. The AP file came Monday morning after a check run. Inventory is as of the last cycle count. The total mixes three different days and calls it one.
2. **Three definitions.** Does AR include unapplied cash? Does AP include goods received but not yet invoiced? Is inventory at standard cost or actual, and does it include consignment stock? Each export answers differently, and nobody wrote down which.
3. **One person who knows.** The workbook works because one analyst knows which tabs to refresh and which rows to delete. When that person is out, the number is late or wrong.
4. **No trail.** When the operating partner asks why the number moved, the answer lives in someone's memory instead of in the report.

The reporting bar moves the day a deal closes, and we wrote about [how that bar moves after a PE close](/blog/pe-firm-closed-reporting-bar-moved). Working capital is usually the first place it shows.

## What a working capital dashboard in Power BI has to do

A good-looking page is optional. These five things are not.

1. **One as-of date.** Every table in the model carries a snapshot date, and the report shows it. If AR is as of Friday and inventory is as of Wednesday, the page says so in plain words instead of hiding it.
2. **Definitions finance owns.** Write down what counts in AR, AP, and inventory. Build those rules into the model as measures with names a controller would use, and have the controller sign off on them. Then the dashboard and the board deck read from the same rule.
3. **A tie-out to the ledger.** Each balance should reconcile to its general ledger control account for the same date. Build that check into the model as its own measure. If the difference is not zero, the page shows it.
4. **The drivers beside the total.** Days sales outstanding, days payable outstanding, and days of inventory on hand tell the operating partner why the number moved. Show each one next to the balance it comes from.
5. **Weekly snapshots kept.** Save each week's balances so the trend is real history and not today's data recalculated against old dates. Aging changes after the fact. A snapshot holds what you knew at the time.

## How to build it without a six-month project

Start smaller than you think, and take the steps in this order.

1. **Pick the cutoff rule first.** Agree with finance on when each source is pulled. Friday close of business works for most teams. Move the extracts or the scheduled refreshes to match. This one decision does more than any visual.
2. **Land the three sources in one model.** Load AR open items, AP open items, and inventory on hand, with a shared date table and shared customer, vendor, item, and entity keys. If the company owns more than one entity after the close, map them to one entity list now.
3. **Write the measures once.** Receivables, payables, inventory, net working capital, and the three days measures all get plain names. Hide the raw columns so nobody builds a second version in a side report.
4. **Add the tie-out page.** Put one table per balance against its ledger control account. Finance looks at this page before anyone looks at the dashboard.
5. **Snapshot weekly.** Append each week's balances to a history table. A scheduled export to a folder the model reads is fine for a start.
6. **Name the owners.** The controller owns the definitions and the tie-out. The analyst owns the refresh. Write that down too.

Inventory deserves its own warning. It is cash sitting on a shelf, and it is the piece most likely to be late or wrong. We covered [why slow stock reporting hides cash](/blog/inventory-is-cash-slow-stock-reporting) in an earlier post.

## What the operating partner actually wants to see

Give them one page. It shows net working capital this week against last week and against the target agreed at close, the three balances beside their days measures, and a short note on what changed. A second page holds the aging detail and the tie-out for anyone who wants to check the work.

Cash is the point of all of it. A CFO wants to know where cash is tied up and what to do about it this week, which is the argument we made in [cash, not charts, on Monday](/blog/cash-not-charts-cfo-monday). In a PE-backed company, working capital is how you answer that question.

## Executive takeaway

A working capital dashboard in Power BI earns trust when AR, AP, and inventory share one as-of date, one set of finance-owned definitions, and a tie-out to the ledger. Build those three things first. The charts come last, and they are the easy part.

If the weekly number after a close still gets rebuilt in Excel, see how we approach [acquisition performance visibility](https://www.alluviumbi.com/acquisition-performance-visibility), or [Book a Session](https://www.alluviumbi.com/contact).
