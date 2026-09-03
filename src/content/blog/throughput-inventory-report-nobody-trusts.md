---
title: "Throughput, Inventory, and the Report Nobody Trusts"
description: "Ops talks throughput. Finance talks inventory. One report that cannot show both gets ignored."
pubDate: 2026-08-07
tags:
  - Power BI
  - Manufacturing
  - Inventory
draft: false
---

Ops talks units through the line. Finance talks dollars on the floor. One page that pretends those are the same number gets ignored by both.

The plant can be running and the warehouse can be fat. That is two clocks. A green tile that collapses them is how stand-up and the cash meeting stop sharing a company.

![Black-and-white empty industrial conveyor receding down a factory aisle](/blog/throughput-inventory-report-nobody-trusts-hero.jpg)

## This is not working-capital lag, and it is not shift grain

Slow on-hand, turns, and dead stock are a cash clock. That story is already told: [inventory is cash](/blog/inventory-is-cash-slow-stock-reporting). Do not retread lag here.

Supervisors going back to Excel because the dashboard missed the huddle grain is a different failure: [ops still runs the plant from spreadsheets](/blog/ops-still-runs-the-plant-from-spreadsheets). Shift, line, crew. This post is not that.

This post is the collision. Throughput and inventory share one “ops dashboard” because someone wanted a plant scorecard. Units sit next to dollars as if they explain each other. They do not. Output can be high while the wrong SKU piles up. The page is busy. Nobody runs anything from it.

Manufacturing KPIs without a shared model is the consulting shape in [Power BI for manufacturing](/blog/power-bi-for-manufacturing-reporting-consulting). Here the failure is two legitimate measures in one dishonest frame.

## Why one page cannot be both stories

Throughput is a rate. Units, tons, or standard hours through a constraint, a line, or a plant, over a window the floor actually manages.

Inventory is a stock. Quantity and value, by location and status, at a stamp finance will sign.

A rate and a stock can share a model. They cannot share a headline. Production and inventory on one card with no grain, no as-of, and no owner taught the room the dashboard is decoration.

Ops keeps a throughput file. Finance keeps an inventory file. The official report is the one nobody opens: [nobody opens the dashboard](/blog/nobody-opens-the-dashboard). The cause is a mixed sentence, not color.

[Judgment:] if the same tile is used to praise the line and to defend working capital, it is lying to someone.

## What the mixed report costs

1. **The constraint disappears into a plant total.** Throughput that is not named at the bottleneck is a vanity rate. You celebrate volume on an unconstrained line while the real gate starves. Inventory then swells upstream of a problem the page cannot see.

2. **Cash talk and output talk talk past each other.** Finance asks why the warehouse is full. Ops answers with a good shift. Both can be true. The report that cannot hold both truths forces a winner. Meetings become loyalty tests. Decisions wait.

3. **WIP is treated as hero or villain, never a definition.** Work-in-process is inventory to the controller and flow to the supervisor. If the model does not name WIP—quantity, value, location on the routing—someone hides it in FG or drops it from throughput. Hidden WIP is how a “good day” funds a write-down later.

4. **Buyers replenish from a production story.** A high throughput week looks like demand. It might be catching up, running the easy mix, or stuffing a warehouse. Without a trusted on-hand next to a trusted rate, purchasing copies last week’s output. You buy the mix you already have.

5. **Two actuals return to the room.** The plant scorecard and the inventory pack disagree on the week, not because either is dishonest, but because timing and grain were never written. Same tax as [reports that show different numbers](/blog/why-power-bi-reports-show-different-numbers), with throughput versus stock as the split.

6. **CI and cash cannot share a mixed board.** Lean wants flow. Finance wants turns. A mixed dashboard gives both a chart and neither a control. The floor still runs a clipboard. The cash meeting still pastes.

No invented plant. No invented savings. Watch who brings a side file to the meeting that already has a “plant dashboard.” That file is the diagnosis.

## What not to do

Do not add a third page that “reconciles” throughput to inventory with a mystery conversion. A fake bridge is worse than two honest views.

Do not average mix away so the rate looks smooth. Mix is how inventory happens.

Do not wait for a MES replacement. ERP already knows receipts, issues, and confirmations well enough to separate rate from stock.

Do not shame ops for units or finance for dollars. They are doing their jobs. The model failed both without lying.

If you cannot name the constraint and the inventory decision the ELT actually runs, you will keep painting a plant mural. Strategy exists: [Data & AI Strategy Roadmap](/analytics-ai-strategy-roadmap). This post needs two products, not a tour.

## How to show both without mixing them

1. **Split the products. Share the model.** One semantic model can carry production facts and inventory facts. Two certified views. A throughput board for the rate and the constraint. An inventory board for on-hand, aging, and fill. A thin exec page can *link* both. It should not *blend* both into one KPI.

2. **Write the two sentences.** Throughput: include this confirmation, this standard, this window; exclude this rework, this non-constraint line. Inventory: this valuation, these statuses, this as-of. If either sentence fails the one-line test, park the tile. The cousin problem is [measures nobody can explain](/blog/measures-nobody-can-explain). Here the extra rule is: never let those two sentences share a name.

3. **Name WIP on purpose.** Quantity, value, location on the routing. Ops sees it as flow. Finance sees it as cash. Same rows. Two measures. No hiding WIP inside FG to make turns look better, and no dropping WIP from throughput to make the line look faster.

4. **Put mix next to the rate.** Units without mix is how you fill the warehouse with the easy SKU. The throughput view should show what ran, not only how much. The inventory view should show what sat. Leaders should be able to say “we ran A while B aged” from the same model, not from an argument.

5. **Stamp time on both.** Throughput for the shift the huddle owns. Inventory as-of the stamp finance will sign. Yesterday’s rate next to last Friday’s stock with no labels is the mixed lie in a nicer layout.

6. **Give each meeting one primary board.** Stand-up runs throughput. Cash or S&OP runs inventory. The product is shared: [the model is the product](/blog/semantic-model-is-the-product). Brochures are role-specific. If leadership still wants one slide, connect Excel and keep the two numbers labeled.

If the model is a dump, tune it: [dashboard optimization](https://www.alluviumbi.com/power-bi-dashboard-optimization-ai-insights). Measure ownership sits in [Managed Data & AI Advisory](/managed-advisory-retainer).

## What good looks like

Ops can say the constraint’s rate without opening finance’s aging file. Finance can say on-hand without asking whether the line “had a good day.”

WIP is visible as itself.

When volume is high and cash is stuck, the room can see mix and location instead of picking a villain.

The plant still has one model. It has two honest brochures. That is not sprawl. That is grain with manners.

## Frequently asked questions

**Shouldn’t a plant scorecard show production and inventory together?**
A scorecard can *link* both. It should not *name* them as one result. Rate and stock on one unlabeled card is how both teams leave.

**Do we need two datasets?**
No. Two views on one model. Two datasets is how the argument comes back.

**Why don’t units produced and inventory change match?**
Timing, confirmations, scrap, returns, and transfers. Name those. Do not hide them in a “reconciling” visual.

## Get started

Stop asking one report to praise the line and defend the warehouse.

Need a 30-minute look at whether your plant page is a mixed sentence? [Contact Alluvium](/contact). We’ll map throughput, WIP, and on-hand as separate products on one model.

[Book a 30-minute consult](/contact).

<!-- wordcount: 1290 -->
