---
title: "Throughput, Inventory, and the Report Nobody Trusts"
description: "Ops talks throughput. Finance talks inventory. A report that cannot show both honestly gets ignored by both."
pubDate: 2026-08-07
tags:
  - Power BI
  - Manufacturing
  - Inventory
draft: false
---

Ops talks about units through the line. Finance talks about dollars on the floor. A page that pretends those are the same number gets ignored by both.

The plant can be running hard while the warehouse gets fat. Those are two clocks. A green tile that collapses them is how the stand-up and the cash meeting stop sharing a company.

![Black-and-white empty industrial conveyor receding down a factory aisle](/blog/throughput-inventory-report-nobody-trusts-hero.jpg)

## This is not working-capital lag, and it is not shift grain

Slow on-hand, turns, and dead stock are a cash clock, and that story is told in [inventory is cash](/blog/inventory-is-cash-slow-stock-reporting).

Supervisors going back to Excel because the dashboard missed the huddle grain of shift, line, and crew is a different failure, covered in [ops still runs the plant from spreadsheets](/blog/ops-still-runs-the-plant-from-spreadsheets).

This post is about the collision. Throughput and inventory end up on one “ops dashboard” because someone wanted a plant scorecard, and units sit next to dollars as if they explain each other. They do not. Output can be high while the wrong SKU piles up. The page is busy and nobody runs anything from it.

Manufacturing KPIs without a shared model are covered in [Power BI for manufacturing](/blog/power-bi-for-manufacturing-reporting-consulting). Here the failure is two legitimate measures in one dishonest frame.

## Why one page cannot be both stories

Throughput is a rate: units, tons, or standard hours through a constraint, a line, or a plant, over a window the floor actually manages.

Inventory is a stock: quantity and value by location and status, at a stamp finance will sign.

A rate and a stock can share a model. They cannot share a headline. Putting production and inventory on one card with no grain, no as-of, and no owner taught the room that the dashboard is decoration.

So ops keeps a throughput file, finance keeps an inventory file, and the official report becomes the one [nobody opens](/blog/nobody-opens-the-dashboard). The cause is a mixed sentence, not the color scheme.

If the same tile is used to praise the line and to defend working capital, it is lying to someone.

## What the mixed report costs

1. **The constraint disappears into a plant total.** Throughput that is not measured at the bottleneck is a vanity rate. You celebrate volume on an unconstrained line while the real gate starves, and inventory swells upstream of a problem the page cannot see.

2. **Cash talk and output talk miss each other.** Finance asks why the warehouse is full, and ops answers with a good shift. Both can be true. A report that cannot hold both truths forces a winner, meetings become loyalty tests, and decisions wait.

3. **WIP is treated as hero or villain, never as a definition.** Work-in-process is inventory to the controller and flow to the supervisor. If the model does not define WIP by quantity, value, and location on the routing, someone hides it in finished goods or drops it from throughput. Hidden WIP is how a “good day” funds a write-down later.

4. **Buyers replenish from a production story.** A high-throughput week looks like demand. It might be catch-up, an easy mix, or a stuffed warehouse. Without trusted on-hand next to a trusted rate, purchasing copies last week’s output and buys the mix you already have.

5. **Two actuals return to the room.** The plant scorecard and the inventory pack disagree on the week. Neither is dishonest. Timing and grain were just never written down. It is the same tax as [reports that show different numbers](/blog/why-power-bi-reports-show-different-numbers), with throughput versus stock as the split.

6. **CI and cash cannot share a mixed board.** Lean wants flow and finance wants turns. A mixed dashboard gives both a chart and neither a control, so the floor still runs on a clipboard and the cash meeting still pastes.

Watch who brings a side file to a meeting that already has a “plant dashboard.” That file is the diagnosis.

## What not to do

Do not add a third page that “reconciles” throughput to inventory with a mystery conversion. A fake bridge is worse than two honest views.

Do not average away mix so the rate looks smooth. Mix is how inventory happens.

Do not wait for an MES replacement. The ERP already knows receipts, issues, and confirmations well enough to separate rate from stock.

Do not shame ops for units or finance for dollars. They are doing their jobs. The model failed both of them without anyone lying.

If you cannot name the constraint and the inventory decision the ELT actually runs, you will keep painting a plant mural. That is a strategy question for a [Data & AI Strategy Roadmap](/analytics-ai-strategy-roadmap). This post needs two products, not a tour.

## How to show both without mixing them

1. **Split the products and share the model.** One semantic model can carry production facts and inventory facts behind two certified views: a throughput board for the rate and the constraint, and an inventory board for on-hand, aging, and fill. A thin executive page can *link* both. It should not *blend* them into one KPI.

2. **Write the two sentences.** For throughput, state which confirmations, standards, and window are included, and which rework and non-constraint lines are excluded. For inventory, state the valuation, statuses, and as-of. If either sentence fails the one-line test, park the tile. The cousin problem is [measures nobody can explain](/blog/measures-nobody-can-explain). The extra rule here is that the two sentences never share a name.

3. **Define WIP on purpose.** Give it a quantity, a value, and a location on the routing. Ops sees it as flow and finance sees it as cash, from the same rows through two measures. No hiding WIP in finished goods to make turns look better, and no dropping it from throughput to make the line look faster.

4. **Put mix next to the rate.** Units without mix is how you fill the warehouse with the easy SKU. The throughput view should show what ran, not only how much, and the inventory view should show what sat. Leaders should be able to say “we ran A while B aged” from the same model, not from an argument.

5. **Stamp time on both.** Show throughput for the shift the huddle owns and inventory as of the stamp finance will sign. Yesterday’s rate next to last Friday’s stock with no labels is the same mixed lie in a nicer layout.

6. **Give each meeting one primary board.** The stand-up runs on throughput, and the cash or S&OP meeting runs on inventory. The product is shared, because [the model is the product](/blog/semantic-model-is-the-product), while the brochures are role-specific. If leadership still wants one slide, connect Excel and keep the two numbers labeled.

If the model is a dump, tune it with [dashboard optimization](/power-bi-dashboard-optimization-ai-insights). Measure ownership sits in [Managed Data & AI Advisory](/managed-advisory-retainer).

## What good looks like

Ops can state the constraint’s rate without opening finance’s aging file. Finance can state on-hand without asking whether the line “had a good day.” WIP is visible as itself.

When volume is high and cash is stuck, the room sees mix and location instead of picking a villain. The plant still has one model with two honest brochures. That is not sprawl. That is grain with manners.

## Frequently asked questions

**Shouldn’t a plant scorecard show production and inventory together?**
A scorecard can *link* both. It should not *name* them as one result. Rate and stock on one unlabeled card is how both teams walk away.

**Do we need two datasets?**
No. You need two views on one model. Two datasets is how the argument comes back.

**Why don’t units produced and the change in inventory match?**
Timing, confirmations, scrap, returns, and transfers. Name those. Do not hide them in a “reconciling” visual.

## Get started

Stop asking one report to praise the line and defend the warehouse.

Want to know whether your plant page is a mixed sentence? [Book a session with Alluvium](/contact). We will map throughput, WIP, and on-hand as separate products on one model. To check the model first, request a [free Model Health check](/power-bi-model-health).

<!-- wordcount: 1348 -->
