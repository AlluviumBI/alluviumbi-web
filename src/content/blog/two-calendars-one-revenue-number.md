---
title: "Two Calendars, One Revenue Number"
description: "Fiscal, ship, and invoice dates behind one measure labeled Revenue is a calendar fight, not a DAX fight."
pubDate: 2026-09-15
tags:
  - Power BI
  - Finance
  - Semantic Model
draft: false
---

Ops shipped it this week. Finance will invoice it next period. The fiscal calendar closed yesterday. The tile says Revenue.

That is three clocks under one label, and the room spends the first fifteen minutes discovering it was never in the same month. This is a calendar fight, not a DAX fight. USERELATIONSHIP will not pick the clock the meeting meant.

![Black-and-white tree-stump rings merging into one grain](/blog/two-calendars-one-revenue-number-hero.jpg)

## One word, several date roles

This is not pipeline versus bookings, covered in [sales forecasts and finance bookings never tie](/blog/sales-forecast-vs-finance-bookings). It is not plan versus actuals, covered in [the forecast never ties to actuals](/blog/forecast-never-ties-to-actuals). And it is not three files walking into a meeting, covered in [why reports show different numbers](/blog/why-power-bi-reports-show-different-numbers).

It is not accrual versus cash either. Two bases sharing one unlabeled number is [when finance closes on accrual and ops reports on cash](/blog/finance-accrual-ops-cash). A company can be fully accrual and still fight about the month.

This post is about three date roles on the same basis: ship date, invoice date, and fiscal posting date, with the model publishing one Revenue. [Month-end still takes a week](/blog/why-month-end-still-takes-a-week) when the pack is on time but the meeting still starts with “is this billed or shipped?”

**Ship date** is an operations clock: the dock, the carrier, the promise. It is useful for throughput, OTIF, and the plant week, and fatal if you file it under the same tile finance will sign.

**Invoice date** is a commercial clock: the document the customer received. It is useful for collections and customer conversations, but it is not always the fiscal period.

**Fiscal posting date** is the close clock: what the books will bear, with period end, adjustments, and the controller’s month. This is the clock the board pack has to survive.

Some plants have a fourth clock, the promised date or the customer’s receiving date. If you use it, name it.

## Why one Revenue survives

Speed is one reason: the date table was named Date and related to whatever key was handy. Politics is another, since shipped looks better this week and fiscal looks better after a hold. Then there is folklore, such as an inactive relationship that “uses ship date when you slice that way.” The next person uses the default and the month moves.

None of that is a DAX skill gap. The formula can be elegant and still unnamed.

## The costs of one Revenue on two clocks

1. **The meeting becomes date archaeology.** “Is this shipped or billed?” takes fifteen minutes. Someone opens a transaction view, and someone else says “it depends which report.” You did not need a new visual. You needed date roles.

2. **Ops celebrates a shipment finance will not book.** The plant hit the week and the fiscal period did not. Subtracting those tiles looks like a miss, but it is a clock. People still act on the label, and they expedite, hold, or argue mix because of it.

3. **Close week inherits a silent filter.** A page-level filter on invoice date, a hidden slicer, or a measure that switches with USERELATIONSHIP is not a calendar policy. It is a trap for the next file. Folklore about dates is still [tribal knowledge in the data model](/blog/tribal-knowledge-in-the-data-model).

4. **The board pack and the ops pack cannot subtract.** That is the point of two clocks. Pretending they can is how you get a reconciling tab that never dies, and [finance won’t sign off](/blog/finance-wont-sign-off-on-the-dashboard) on a Revenue that moves when you change a slicer labeled Date.

5. **Follow-up questions pick a random clock.** “Revenue last week” needs a default date role. If it is unnamed, the answer is a coin flip, because a week on ship date is not a week on fiscal posting.

6. **Copies fork the clock.** Someone needs “revenue as shipped” for a customer call and exports it. Now there is a fourth file, and because the official model still has one tile, the copies feel justified.

7. **Change control has nothing to hold.** If anyone can point Revenue at a new date column, you do not have a semantic model. You have a calendar wiki. Deciding who may change the default clock belongs to the same seat as [who can change a measure](/blog/who-can-change-a-measure).

A calendar is a policy, and DAX is how you implement it. If you skip the policy, every relationship looks like a bug.

## How to name the clocks

1. **Name the date roles in the model.** Invoice Date, Ship Date, Fiscal Posting Date. Stop publishing a generic Date as if the company had one. The date table can still be one table, but the roles cannot be one column pretending to be three.

2. **Certify one Revenue per clock, or one Revenue with an explicit default.** “Revenue (Invoice)” and “Revenue (Fiscal)” are ugly names that save meetings. If you keep a short name, the description and the pack must say which clock is in force. Silence is how the fight returns.

3. **Put the date role in the sentence.** The sentence covers include, exclude, grain, timing, and owner, and timing is the clock. If the author cannot say which date puts a row in the month, the measure is not ready for the executive meeting.

4. **Pick the default for each pack and write it down.** Fiscal posting for the board, ship date for the plant week, invoice date for collections. The meeting should inherit a clock, not a slicer.

5. **Keep shipping as an ops measure.** Throughput and OTIF need ship date. Do not make finance’s Revenue do that job, and do not make ops live on fiscal posting for a Wednesday huddle. Use two named measures with two owners.

6. **Remove the folklore switch.** Inactive relationships and “it depends how you slice” are not self-service. They are a trap. If a second clock is needed, it gets a second measure. The companion piece is [self-service that doesn’t create five Revenues](/blog/self-service-without-five-revenues), and calendars are how a sixth gets born.

7. **Align the close to one clock and show the as-of.** The pack states the date role, the period, and the refresh. When a late invoice posts Monday into last period, that is a close event. It is not a reason to blur ship date into the same tile.

8. **Train the room with names, not a course.** “This page is fiscal Revenue” takes one sentence. If leaders still bring shipped revenue to a board conversation, the chair rejects the clock, not the person.

9. **Review the reconciling tab.** If a workbook still exists to explain Revenue versus Revenue, you are not finished. Either the names are missing or the meetings are still subtracting two clocks.

## What one company with several clocks looks like

The plant week opens shipped revenue as an ops measure, and nobody calls it the books. The commercial review opens invoiced revenue. The fiscal pack opens fiscal Revenue, and the controller can sign it because it is not also a dock clock.

You still have more than one calendar. The failure was publishing one word as if you didn’t.

## Executive takeaway

Fiscal versus ship versus invoice is not a modeling trick. It is a policy about which clock each meeting may use. One measure labeled Revenue teaches the company there is one month, and there isn’t. Name the date roles, split the measures, and stop subtracting clocks.

Want to know which calendar your Revenue tile actually uses? [Book a session with Alluvium](/contact). We will map ship, invoice, and fiscal posting dates, and which meeting may use which clock. To check the model and its date table, request a [free Model Health check](/power-bi-model-health).

<!-- wordcount: 1276 -->
