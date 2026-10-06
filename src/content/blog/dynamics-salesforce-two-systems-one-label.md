---
title: "Dynamics Actuals and Salesforce Pipeline Are Two Systems. One Label Breaks the QBR"
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

Then someone builds a Power BI page titled “Revenue” and drops both feeds under one label. The QBR turns into a reconciliation workshop. Sales defends the stage, finance defends the book, and ops wonders which number drives the plant. Two systems sharing one noun is how mid-market QBRs become theater.

![Black-and-white forested hillside overlooking a glacial mountain valley with snow-capped peaks](/blog/dynamics-salesforce-two-systems-one-label-hero.jpg)

## Same word, different grain and calendar

Salesforce pipeline is shaped like opportunities. Stages, amounts, close dates, and win probability live in CRM time. Dynamics, or any ERP actuals path, is shaped like bookings and recognition. Orders, invoices, and ledgers live in finance time.

Neither system is lying when the totals disagree. They are answering different questions on different calendars at different grain.

The failure is publishing one unlabeled “Revenue,” “Forecast,” or “Bookings” tile that pretends the join is obvious. Leaders think they are arguing about accuracy when they are really arguing about grain, stage rules, and as-of.

This is the multi-system cousin of [sales forecast vs finance bookings](/blog/sales-forecast-vs-finance-bookings), [why Power BI reports show different numbers](/blog/why-power-bi-reports-show-different-numbers), and [finance accrual vs ops cash](/blog/finance-accrual-ops-cash). A prettier funnel will not fix it. Shared definitions have to come before shared visuals.

## The costs of one label across two systems

1. **The QBR spends the first half hour on reconciliation.** The question of whether CRM or ERP is right crowds out the question of who should act, and the slide deck becomes a courtroom.

2. **Pipeline “wins” never book.** Sales celebrates a stage and finance never sees an order. Without a bridge from opportunity to booking, the room invents an Excel file to explain the gap every quarter.

3. **Some bookings never lived in CRM.** ERP catches direct orders, renewals, or plant-driven demand that Salesforce never owned. One “Revenue” tile either double-counts or silently drops a channel.

4. **Calendars collide.** CRM close date, ERP order date, ship date, and recognition date are four different clocks. One unlabeled axis makes timing look like performance.

5. **Customer and product keys diverge.** “Acme” in Salesforce is three bill-to accounts in Dynamics, and product SKUs and bundles do not match. Rollups invent customers, and margin by account becomes fiction.

6. **Currency and company code get ignored.** Multi-entity mid-market estates mix company, currency, and intercompany in one chart. The label still says Revenue even though the grain does not.

7. **Trust migrates to side files.** Controllers keep a bookings extract and sales keeps a CRM export. The Power BI page becomes decoration, and dual systems return with better logos.

8. **New leaders inherit a trap.** A new CRO compares “Revenue” to quota and concludes the model is broken, when the model simply published a noun without grain, system of record, or as-of.

## How to fix it: shared grain and calendar before the mashup

1. **Write the decision before the join.** Quota coverage needs pipeline. Close needs bookings and recognition. Capacity planning may need both with a bridge. Name which meeting uses which system.

2. **Define the grain for each feed.** Is it opportunity line or opportunity header? Sales order, invoice, or recognized revenue? Document the grain in the model description, where successors will find it.

3. **Build a governed bridge, not a quiet union.** Map opportunity to order with keys, status, and timing rules. Show open pipeline, booked-not-shipped, and recognized revenue as separate measures. Do not UNION ALL and hope.

4. **Give measures adult names.** Salesforce pipeline weighted. Dynamics bookings. Recognized revenue accrual. Never publish one “Revenue” that switches source depending on the page filter.

5. **Align calendars on the page.** Put the as-of and the basis next to the number. “CRM pipeline as of Monday 6 a.m.” and “ERP bookings through Sunday close” are management sentences.

6. **Own customer and product dimensions once.** A shared customer and item bridge, or a mastered dimension, beats two competing hierarchies in one visual. Bad keys make good DAX look dishonest.

7. **Assign stewards by system and measure.** Sales owns stage definitions. Finance owns bookings and recognition. Analytics owns the model wiring, without silently rewriting either definition. See [the semantic model is the product](/blog/semantic-model-is-the-product).

8. **Certify the QBR dataset, not each team’s export.** Use one [certified path](/blog/certified-datasets-vs-wild-west) for the executive pack. Sandbox exploration can connect widely. The QBR cannot.

9. **Rewrite the agenda around the clock each topic needs.** Pipeline review opens CRM measures on purpose, and financial review opens ERP measures on purpose. When leadership compares them, open the bridge instead of a blame session.

10. **Retire the unlabeled twin.** Find the page that mixes CRM and ERP under one noun. Split the measures, label the sources, and archive the mashup. Prove one clean QBR before you touch every sales dashboard.

## What good looks like

Salesforce still runs the funnel and Dynamics still runs the books. Power BI exposes both with names a successor can read.

The QBR opens pipeline on CRM grain, bookings on ERP grain, and a bridge wherever the company always asks “why don’t these match.” Nobody pretends one label did two jobs. Trust returns because the company stopped asking a mashup to be a definition.

## A practical first week

On day one, export the three tiles labeled Revenue, Forecast, or Bookings that will appear in the next QBR, and note the source system, grain, and date field for each. On day two, sit down with sales and finance for thirty minutes and write down which decision each tile is allowed to answer. On day three, rename the measures in the model to match those decisions, even if the visuals stay ugly for a sprint.

You do not need a new CRM or ERP to stop reconciliation theater. You need labels, grain, and a bridge someone owns. The rest is meeting discipline: if a number lacks a system and an as-of, it does not go in the minutes.

## What not to do

Do not “fix” the fight by averaging CRM and ERP into one line. Do not hide the source behind a bookmark only the author remembers. Do not ask sales to stop forecasting or finance to stop closing so the dashboard looks neat.

Do not buy another overlay tool until one shared grain and one bridge exist for the dispute you already have. New software on top of two unlabeled clocks produces a third unlabeled clock.

And do not treat a successful refresh as proof the mashup is honest, because fresh wrong joins are still wrong. Pair this with [refresh failures are a close risk](/blog/refresh-failures-are-a-close-risk) only after the definitions and keys are named.

## Executive takeaway

Two systems can feed one model. They cannot share one unlabeled noun. Name the grain, name the calendar, and build the bridge on purpose.

Want to see where Dynamics actuals and Salesforce pipeline collide in your Power BI pack? [Book a session](https://www.alluviumbi.com/contact). We’ll map one QBR KPI to grain, keys, and the labels the room needs. Or start with a [free Model Health check](https://www.alluviumbi.com/power-bi-model-health).
