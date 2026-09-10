---
title: "Dynamics Actuals and Salesforce Pipeline Are Two Systems. One Label Breaks the QBR."
description: "CRM stages and ERP bookings sharing a name without shared grain and calendar turns mid-market QBRs into reconciliation theater."
pubDate: 2026-09-10
tags:
  - Power BI
  - Dynamics 365
  - Salesforce
  - Sales
draft: false
---

Dynamics posts actuals. Salesforce tracks pipeline. Both systems are right for their job.

Then someone builds a Power BI page titled “Revenue” and drops both feeds under one label. The QBR becomes a reconciliation workshop. Sales defends stage. Finance defends the book. Ops wonders which number drives the plant.

Two systems. One noun. That is how mid-market QBRs turn into theater.

![Black-and-white forested hillside overlooking a glacial mountain valley with snow-capped peaks](/blog/dynamics-salesforce-two-systems-one-label-hero.jpg)

## Same word, different grain and calendar

Salesforce pipeline is opportunity-shaped. Stages, amounts, close dates, and win probability live in CRM time. Dynamics—or any ERP actuals path—is booking- and recognition-shaped. Orders, invoices, and ledgers live in finance time.

Neither system is lying when the totals disagree. They are answering different questions on different calendars at different grain.

The failure is publishing one unlabeled “Revenue,” “Forecast,” or “Bookings” tile that pretends the join is obvious. Leaders argue about accuracy when they are arguing about grain, stage rules, and as-of.

This is the multi-system cousin of [sales forecast vs finance bookings](/blog/sales-forecast-vs-finance-bookings), [why Power BI reports show different numbers](/blog/why-power-bi-reports-show-different-numbers), and [finance accrual vs ops cash](/blog/finance-accrual-ops-cash). The fix is not a prettier funnel. It is shared definitions before shared visuals.

## The costs of one label across two systems

1. **The QBR spends the first half hour on reconciliation.** Who is right—CRM or ERP—crowds out who should act. The slide deck becomes a courtroom.

2. **Pipeline “wins” that never book.** Sales celebrates a stage. Finance never sees an order. Without a bridge from opportunity to booking, the room invents Excel to explain the gap every quarter.

3. **Bookings that never lived in CRM.** ERP catches direct orders, renewals, or plant-driven demand Salesforce never owned. One “Revenue” tile either double-counts or silently drops a channel.

4. **Calendar collisions.** CRM close date, ERP order date, ship date, and recognition date are four clocks. One unlabeled axis makes variance look like performance when it is timing.

5. **Customer and product keys diverge.** “Acme” in Salesforce is three bill-to accounts in Dynamics. Product SKUs and bundles do not match. Rollups invent customers. Margin by account becomes fiction.

6. **Currency and company code get ignored.** Multi-entity mid-market estates mix company, currency, and intercompany in one chart. The label still says Revenue. The grain does not.

7. **Trust migrates to side files.** Controllers keep a bookings extract. Sales keeps a CRM export. The Power BI page becomes decorative. Dual systems return with better logos.

8. **New leaders inherit a trap.** A new CRO compares “Revenue” to quota and concludes the model is broken. The model published a noun without grain, system-of-record, or as-of.

## How to fix it: shared grain and calendar before the mashup

1. **Write the decision before the join.** Quota coverage needs pipeline. Close needs bookings and recognition. Capacity planning may need both with a bridge. Name which meeting uses which system.

2. **Define grain for each feed.** Opportunity line vs opportunity header. Sales order vs invoice vs recognized revenue. Document grain in the model description where successors will find it.

3. **Build a governed bridge, not a quiet union.** Map opportunity to order with keys, status, and timing rules. Show open pipeline, booked not shipped, and recognized as separate measures. Do not UNION ALL and hope.

4. **Separate measures with adult names.** Salesforce pipeline weighted. Dynamics bookings. Recognized revenue accrual. Never one “Revenue” that switches source by page filter.

5. **Align calendars on the page.** Put as-of and basis next to the number. “CRM pipeline as of Monday 6 a.m.” and “ERP bookings through Sunday close” are management sentences.

6. **Own customer and product dimensions once.** A shared customer and item bridge—or a mastered dimension—beats two competing hierarchies in one visual. Bad keys make good DAX look dishonest.

7. **Assign stewards by system and measure.** Sales owns stage definitions. Finance owns bookings and recognition. Analytics owns the model wiring—not silent rewrites of either definition. See [the semantic model is the product](/blog/semantic-model-is-the-product).

8. **Certify the QBR dataset, not each team’s export.** One [certified path](/blog/certified-datasets-vs-wild-west) for the executive pack. Sandbox exploration can connect wide. The QBR cannot.

9. **Rewrite the agenda to the clock each topic needs.** Pipeline review opens CRM measures on purpose. Financial review opens ERP measures on purpose. When leadership compares them, open the bridge—not a blame session.

10. **Retire the unlabeled twin.** Find the page that mixes CRM and ERP under one noun. Split the measures. Label the sources. Archive the mashup. Prove one clean QBR before touching every sales dashboard.

## What good looks like

Salesforce still runs the funnel. Dynamics still runs the books. Power BI exposes both with names a successor can read.

The QBR opens pipeline on CRM grain, bookings on ERP grain, and a bridge where the company always asks “why don’t these match.” Nobody pretends one label did two jobs.

Trust returns because the company stopped asking a mashup to be a definition.

## A practical first week

Day one: export the three tiles labeled Revenue, Forecast, or Bookings that appear in the next QBR. Note source system, grain, and date field for each. Day two: sit sales and finance for thirty minutes and write which decision each tile is allowed to answer. Day three: rename measures in the model to match those decisions—even if the visuals stay ugly for a sprint.

You do not need a new CRM or ERP to stop reconciliation theater. You need labels, grain, and a bridge someone owns. The rest is discipline in the meeting: if a number lacks system and as-of, it does not enter the minutes.


## What not to do

Do not “fix” the fight by averaging CRM and ERP into one line. Do not hide the source behind a bookmark that only the author remembers. Do not ask sales to stop forecasting or finance to stop closing so the dashboard looks neat.

Do not buy another overlay tool until one shared grain and one bridge exist for the dispute you already have. New software on top of two unlabeled clocks produces a third unlabeled clock.

And do not treat a successful refresh as proof the mashup is honest. Fresh wrong joins are still wrong. Pair this with [refresh failures are a close risk](/blog/refresh-failures-are-a-close-risk) only after definitions and keys are named.

## Executive takeaway

CRM stages and ERP bookings sharing a name without shared grain and calendar is how mid-market QBRs turn into reconciliation theater.

Two systems can feed one model. They cannot share one unlabeled noun. Name the grain. Name the calendar. Build the bridge on purpose.

Need a 30-minute look at where Dynamics actuals and Salesforce pipeline collide in your Power BI pack? [Contact Alluvium](https://www.alluviumbi.com/contact). We’ll map one QBR KPI to grain, keys, and the labels the room needs.
