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

CRM pipeline. ERP bookings. Billing. Shipping. Pricing. Quotas. Product hierarchy. Customer master. A spreadsheet that “only finance trusts.” Leadership wants one Power BI pack. Someone opens Desktop and starts joining.

What breaks first is not the visual. It is keys, currency, and late dimensions. Sequence integration risk before polish—or the QBR becomes a nine-way reconciliation workshop.

![Black-and-white overhead view of a construction site with rebar grids and formwork](/blog/nine-source-systems-one-sales-model-hero.jpg)

## Mashups fail before DAX

Mid-market manufacturers often collect sales truth across CRM, ERP, CPQ, billing, freight, and tribal files. Each system is right for its job. None of them share a customer key, a product grain, or a single calendar by accident.

Power BI can connect to all of them. That is not the same as a sales model. A sales model needs owned grain, bridged dimensions, named currency rules, and measures stewards will defend. The [semantic model is the product](/blog/semantic-model-is-the-product). Nine connectors are raw material.

This is the multi-system cousin of [sales forecast vs finance bookings](/blog/sales-forecast-vs-finance-bookings) and [why Power BI reports show different numbers](/blog/why-power-bi-reports-show-different-numbers). Pretty funnels on broken keys still lie. [Certified datasets](/blog/certified-datasets-vs-wild-west) cannot certify a mashup that never named the join.

## What breaks first (in order)

1. **Customer and product keys.** “Acme” in CRM is three bill-to accounts in ERP. SKUs, bundles, and configure-to-order lines do not match. Rollups invent customers and products. Margin by account becomes fiction before any measure is written.

2. **Currency and company code.** Multi-entity estates mix company, currency, and intercompany in one chart. Pipeline in USD opportunity amount meets bookings in local ledger currency. The label still says Revenue. The grain does not.

3. **Late-arriving dimensions.** Orders land before the customer hierarchy updates. New items ship before the product bridge exists. Facts orphan. Totals look short until someone “fixes” it with a bidirectional relationship—see the trust cousin in [measures nobody can explain](/blog/measures-nobody-can-explain).

4. **Calendar collisions.** Opportunity close date, order date, ship date, invoice date, and recognition date are five clocks. One unlabeled axis makes variance look like performance when it is timing.

5. **Stage and status semantics.** CRM stages, ERP order statuses, and billing hold codes share English words. They do not share rules. A quiet UNION produces double counts and silent drops.

6. **Grain mismatches.** Opportunity header vs line. Sales order vs invoice vs recognized revenue. Freight at shipment vs margin at order. Authors hide the conflict in DAX. The room inherits it in the QBR.

7. **Refresh and SLA chaos.** Nine feeds mean nine failure modes. One late dimension blanks the pack. Treat that as [refresh failures are a close risk](/blog/refresh-failures-are-a-close-risk)—not as a visual bug.

8. **Ownership vacuum.** Nobody owns the bridge. Sales owns CRM. Finance owns ERP. Analytics owns the pbix. When numbers disagree, all three point at Power BI. Dual Excel returns—cousin to [ops still runs the plant from spreadsheets](/blog/ops-still-runs-the-plant-from-spreadsheets).

## How to fix it: sequence integration risk, not visual polish

1. **Write the decisions the sales pack must answer.** Quota coverage. Bookings vs forecast. Backlog. Margin by channel. Capacity signals. Name which system is system of record for each decision before any join.

2. **Inventory the nine (or five, or twelve) feeds and their grain.** For each source: primary keys, grain, currency, calendar field, owner, and refresh SLA. If you cannot fill the row, you are not ready to mash.

3. **Master customer and product before fancy measures.** Build or buy a bridge you can operate. Refuse executive pages that roll up on unmatched keys. Bad dimensions make good DAX look dishonest.

4. **Separate measures with adult names.** CRM pipeline weighted. ERP bookings. Recognized revenue accrual. Shipped not billed. Never one “Revenue” that switches source by page filter.

5. **Define currency and entity rules in the model description.** Reporting currency. Rate as-of. Intercompany elimination owner. Put the rule where successors find it—not only in a Slack thread.

6. **Handle late dimensions on purpose.** Unknown-member patterns, staging holds, or delayed publish—pick a policy. Do not let orphans silently shrink the QBR.

7. **Build bridges, not quiet unions.** Map opportunity to order with keys, status, and timing. Show open pipeline, booked not shipped, and recognized as separate measures. Do not UNION ALL nine extracts and hope.

8. **Certify one sales dataset for the QBR.** Promote a [certified path](/blog/certified-datasets-vs-wild-west). Sandboxes can explore wide. The executive pack cannot. Pair with [premium capacity is not a strategy](/blog/premium-capacity-is-not-a-strategy): more capacity does not fix unmatched keys.

9. **Sequence delivery by risk, not by dashboard mockups.** Keys and calendars first. Then two owned measures. Then the pack. Visual polish last. Reversing that order funds another quarter of reconciliation.

10. **Retire twin mashups on a schedule.** Pick the disputed KPI that burned the last QBR. Consolidate grain and measures. Archive the competing pages. Repeat. Do not wait for a “single platform” fantasy to finish.

## What good looks like

CRM still runs the funnel. ERP still runs the books. Billing and shipping still post what they post. Power BI exposes a small set of owned sales measures with bridges a successor can read.

The QBR opens pipeline on CRM grain, bookings on ERP grain, and a bridge where the company always asks “why don’t these match.” Nobody pretends nine systems shared one unlabeled noun.

New analysts extend the certified model. They do not invent a tenth Revenue in a personal workspace pointed at five new connectors.

## A practical cutover (one KPI, not nine systems)

Week one: choose Bookings vs Pipeline—the fight you already have. Document grain, keys, currency, and calendars for those two feeds only. Build the bridge and rename measures. Shadow the old mashup for one QBR cycle.

When the bridged pack survives one meeting without a reconciliation half-hour, add the next feed—shipping or billing—under the same rules. Do not onboard all nine because a roadmap slide said “integrated sales analytics.”

Keep exploration sandboxes. Deny them the QBR audience. Communication matters: tell sales and finance which pack is official. Ambiguous dual paths recreate the theater.

If vendors pitch “connect everything,” listen for keys, currency, late dimensions, and owners—not only connector counts. Nine connectors without a bridge is still nine arguments in one model.

## Executive takeaway

Multi-system sales mashups fail on keys, currency, and late dimensions before DAX.

Sequence integration risk, not visual polish. Master the bridges. Name the measures. Certify one path for the QBR. Let the nine systems keep their jobs—and stop asking Power BI to invent a tenth truth in silence.

Need a 30-minute look at what breaks first in your multi-system sales model? [Contact Alluvium](https://www.alluviumbi.com/contact). We’ll map one QBR KPI across sources to keys, currency, calendars, and the sequence that actually lands.
