---
title: "Nine Source Systems Into One Sales Model: What Breaks First"
description: "Multi-system sales mashups fail on keys, currency, and late dimensions before DAX. Sequence integration risk, not visual polish."
pubDate: 2026-09-15
tags:
  - Power BI
  - Sales Analytics
  - ERP
  - CRM
draft: false
---

Nine systems into one sales model sounds like a roadmap win.

CRM pipeline, ERP bookings, billing, shipping, pricing, quotas, product hierarchy, customer master, and a spreadsheet that “only finance trusts.” Leadership wants one Power BI pack, so someone opens Desktop and starts joining.

What breaks first is not the visual. It is keys, currency, and late dimensions. Sequence the integration risk before the polish, or the QBR turns into a nine-way reconciliation workshop.

![Black-and-white overhead view of a construction site with rebar grids and formwork](/blog/nine-source-systems-one-sales-model-hero.jpg)

## Mashups fail before DAX

Mid-market manufacturers often collect sales truth across CRM, ERP, CPQ, billing, freight, and tribal files. Each system is right for its job. None of them share a customer key, a product grain, or a single calendar by accident.

Power BI can connect to all of them, but that is not the same as a sales model. A sales model needs owned grain, bridged dimensions, named currency rules, and measures stewards will defend. The [semantic model is the product](/blog/semantic-model-is-the-product). Nine connectors are raw material.

This is the multi-system cousin of [sales forecast vs finance bookings](/blog/sales-forecast-vs-finance-bookings) and [why Power BI reports show different numbers](/blog/why-power-bi-reports-show-different-numbers). Pretty funnels on broken keys still lie, and [certified datasets](/blog/certified-datasets-vs-wild-west) cannot certify a mashup that never named the join.

## What breaks first, in order

1. **Customer and product keys.** “Acme” in CRM is three bill-to accounts in ERP. SKUs, bundles, and configure-to-order lines do not match. Rollups invent customers and products, and margin by account becomes fiction before anyone writes a measure.

2. **Currency and company code.** Multi-entity estates mix company, currency, and intercompany in one chart. Pipeline in USD opportunity amounts meets bookings in local ledger currency. The label still says Revenue, but the grain does not.

3. **Late-arriving dimensions.** Orders land before the customer hierarchy updates, and new items ship before the product bridge exists. Facts get orphaned and totals look short until someone “fixes” it with a bidirectional relationship. The trust problem that follows is the one in [measures nobody can explain](/blog/measures-nobody-can-explain).

4. **Calendar collisions.** Opportunity close date, order date, ship date, invoice date, and recognition date are five different clocks. On one unlabeled axis, timing looks like performance.

5. **Stage and status semantics.** CRM stages, ERP order statuses, and billing hold codes share English words but not rules. A quiet UNION produces double counts and silent drops.

6. **Grain mismatches.** Opportunity header versus line. Sales order versus invoice versus recognized revenue. Freight at shipment versus margin at order. Authors hide the conflict in DAX, and the room inherits it in the QBR.

7. **Refresh and SLA chaos.** Nine feeds mean nine failure modes, and one late dimension can blank the pack. Treat that the way you treat [refresh failures as a close risk](/blog/refresh-failures-are-a-close-risk), not as a visual bug.

8. **Ownership vacuum.** Sales owns CRM, finance owns ERP, and analytics owns the pbix, but nobody owns the bridge. When numbers disagree, all three point at Power BI and dual Excel returns, much like [ops still runs the plant from spreadsheets](/blog/ops-still-runs-the-plant-from-spreadsheets).

## How to fix it: sequence integration risk, not visual polish

1. **Write down the decisions the sales pack must answer.** Quota coverage, bookings versus forecast, backlog, margin by channel, and capacity signals. Name the system of record for each decision before any join.

2. **Inventory the nine (or five, or twelve) feeds and their grain.** For each source, record primary keys, grain, currency, calendar field, owner, and refresh SLA. If you cannot fill in the row, you are not ready to combine it.

3. **Master customer and product before fancy measures.** Build or buy a bridge you can operate, and refuse executive pages that roll up on unmatched keys. Bad dimensions make good DAX look dishonest.

4. **Separate measures with grown-up names.** CRM pipeline weighted. ERP bookings. Recognized revenue accrual. Shipped not billed. Never publish one “Revenue” that switches source by page filter.

5. **Define currency and entity rules in the model description.** State the reporting currency, the rate as-of, and the intercompany elimination owner. Put the rule where successors will find it, not only in a Slack thread.

6. **Handle late dimensions on purpose.** Pick a policy, whether that is unknown-member patterns, staging holds, or delayed publish. Do not let orphans silently shrink the QBR.

7. **Build bridges, not quiet unions.** Map opportunity to order with keys, status, and timing. Show open pipeline, booked not shipped, and recognized revenue as separate measures. Do not UNION ALL nine extracts and hope.

8. **Certify one sales dataset for the QBR.** Promote a [certified path](/blog/certified-datasets-vs-wild-west). Sandboxes can explore freely, but the executive pack cannot. As [premium capacity is not a strategy](/blog/premium-capacity-is-not-a-strategy) explains, more capacity does not fix unmatched keys.

9. **Sequence delivery by risk, not by dashboard mockups.** Keys and calendars come first, then two owned measures, then the pack, and visual polish last. Reverse that order and you fund another quarter of reconciliation.

10. **Retire twin mashups on a schedule.** Pick the disputed KPI that burned the last QBR. Consolidate its grain and measures, archive the competing pages, and repeat. Do not wait for a “single platform” fantasy to finish.

## What good looks like

CRM still runs the funnel, ERP still runs the books, and billing and shipping still post what they post. Power BI exposes a small set of owned sales measures, with bridges a successor can read.

The QBR opens pipeline at CRM grain, bookings at ERP grain, and a bridge for the question the company always asks: “why don’t these match?” Nobody pretends nine systems share one unlabeled noun. New analysts extend the certified model instead of inventing a tenth Revenue in a personal workspace pointed at five new connectors.

## A practical cutover: one KPI, not nine systems

In week one, choose Bookings versus Pipeline, the fight you already have. Document grain, keys, currency, and calendars for those two feeds only. Build the bridge, rename the measures, and run the old mashup in parallel for one QBR cycle.

When the bridged pack survives a meeting without a half-hour of reconciliation, add the next feed, such as shipping or billing, under the same rules. Do not onboard all nine because a roadmap slide promised “integrated sales analytics.”

Keep exploration sandboxes, but keep them away from the QBR audience. Tell sales and finance clearly which pack is official, because ambiguous dual paths bring the theater back.

When vendors pitch “connect everything,” listen for keys, currency, late dimensions, and owners, not just connector counts. Nine connectors without a bridge are still nine arguments in one model.

## Executive takeaway

Multi-system sales mashups fail on keys, currency, and late dimensions before DAX ever matters. Sequence integration risk ahead of visual polish. Master the bridges, name the measures, and certify one path for the QBR. Let the nine systems keep their jobs, and stop asking Power BI to invent a tenth truth in silence.

Want to know what breaks first in your multi-system sales model? [Book a session](https://www.alluviumbi.com/contact). We’ll map one QBR KPI across sources to keys, currency, calendars, and the sequence that actually lands. Or start with a [Free Model Health check](https://www.alluviumbi.com/power-bi-model-health).
