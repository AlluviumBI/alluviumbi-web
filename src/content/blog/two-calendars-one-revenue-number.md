---
title: "Two Calendars, One Revenue Number"
description: "Fiscal vs shipping vs invoice date. One measure labeled Revenue. That is a calendar fight, not a DAX fight."
pubDate: 2026-09-15
tags:
  - Power BI
  - Finance
  - Semantic Model
draft: false
---

Ops shipped it this week. Finance will invoice it next period. The fiscal calendar closed yesterday.

The tile says Revenue.

Three clocks. One label. The room spends the first fifteen minutes discovering they were never in the same month.

That is a calendar fight. It is not a DAX fight. USERELATIONSHIP will not pick the clock the meeting meant.

![Black-and-white tree-stump rings merging into one grain](/blog/two-calendars-one-revenue-number-hero.jpg)

## One word, several date roles

This is not pipeline versus bookings: [sales forecasts and finance bookings never tie](/blog/sales-forecast-vs-finance-bookings). Not plan versus actuals: [the forecast never ties to actuals](/blog/forecast-never-ties-to-actuals). Not three files walking into a meeting: [why reports show different numbers](/blog/why-power-bi-reports-show-different-numbers).

This is not accrual versus cash. Two bases sharing one unlabeled number is [when finance closes on accrual and ops reports on cash](/blog/finance-accrual-ops-cash). A company can be fully accrual and still fight about the month.

This post is three date roles on the same basis: ship date, invoice date, fiscal posting date. The model published one Revenue. [Month-end still takes a week](/blog/why-month-end-still-takes-a-week) when the pack is on time and still starts with “is this billed or shipped?”

**Ship date** is an operations clock. The dock, the carrier, the promise. Useful for throughput, OTIF, and the plant week. Fatal if you file it under the same tile finance will sign.

**Invoice date** is a commercial clock. The document the customer received. Useful for collections and customer conversations. It is not always the fiscal period.

**Fiscal posting date** is a close clock. What the books will bear. Period end. Adjustments. The controller’s month. This is the clock the board pack has to survive.

A fourth clock shows up in some plants: promised date or the customer’s receiving date. If you use it, name it.

## Why one Revenue survives

Speed: the date table was named Date and related to whatever key was handy. Politics: shipped looks better this week; fiscal looks better after a hold. Folklore: an inactive relationship “uses ship date when you slice that way.” The next person uses the default and the month moves.

None of that is a DAX skill gap. The formula can be elegant and still unnamed.

## The costs of one Revenue on two clocks

1. **The meeting becomes date archaeology.** “Is this shipped or billed?” Fifteen minutes. Then someone opens a transaction view. Then someone says “it depends which report.” You did not need a new visual. You needed date roles.

2. **Ops celebrates a ship finance will not book.** The plant hit the week. The fiscal period did not. Subtracting those tiles looks like a miss. It is a clock. People will still act. They will expedite, hold, or argue mix based on a label.

3. **Close week inherits a silent filter.** A page-level filter on invoice date, a hidden slicer, a measure that switches with USERELATIONSHIP—none of that is a calendar policy. It is a trap for the next file. Folklore around dates is still tribal: [tribal knowledge in the data model](/blog/tribal-knowledge-in-the-data-model).

4. **The board pack and the ops pack cannot subtract.** That is the point of two clocks. Pretending they can subtract is how you get a reconciling tab that never dies. [Finance won’t sign off](/blog/finance-wont-sign-off-on-the-dashboard) on a Revenue that moves when you change a slicer labeled Date.

5. **Follow-up questions pick a random clock.** “Revenue last week” needs a default date role. If it is unnamed, the answer is a coin flip. A week on ship date is not a week on fiscal posting.

6. **Copies fork the clock.** Someone needs “revenue as shipped” for a customer call. They export. Now there is a fourth file. The official model still has one tile, so the copies feel justified.

7. **Change control has nothing to hold.** If anyone can point Revenue at a new date column, you do not have a semantic model. You have a calendar wiki. Who may change the default clock is the same seat as [who can change a measure](/blog/who-can-change-a-measure).

A calendar is a policy. DAX is how you implement the policy. If you skip the policy, every relationship looks like a bug.

## How to name the clocks

1. **Name the date roles in the model.** Invoice Date. Ship Date. Fiscal Posting Date. Stop publishing a generic Date as if the company had one. A date table can still be one table. The roles cannot be one column pretending to be three.

2. **One certified Revenue per clock—or one Revenue with an explicit default.** “Revenue (Invoice)” and “Revenue (Fiscal)” are ugly names that save meetings. If you keep a short name, the description and the pack must say which clock is in force. Silence is how the fight returns.

3. **Put the date role in the sentence.** Include, exclude, grain, timing, owner. Timing is the clock. If the author cannot say which date puts a row in the month, it is not ready for the exec meeting.

4. **Pick the default for the exec pack and write it down.** Fiscal posting for the board. Ship date for the plant week. Invoice date for collections. The meeting inherits a clock. It should not inherit a slicer.

5. **Keep shipping as an ops measure.** Throughput and OTIF need ship date. Do not make finance’s Revenue do that job. Do not make ops live on fiscal posting for a Wednesday huddle. Two named measures. Two owners.

6. **Kill the folklore switch.** Inactive relationships and “it depends how you slice” are not self-service. They are a trap. If a second clock is needed, it is a second measure. Explore without five Revenues is the companion: [self-service that doesn’t create five Revenues](/blog/self-service-without-five-revenues). Calendars are how a sixth gets born.

7. **Align the close to one clock, and show as-of.** The pack says which date role, which period, which refresh. When a late invoice posts Monday into last period, that is a close event. It is not a reason to blur ship date into the same tile.

8. **Train the room with the names, not a course.** “This page is fiscal Revenue.” One sentence. If leaders still bring shipped revenue to a board conversation, the chair rejects the clock, not the person.

9. **Review the reconciling tab.** If a workbook still exists to explain Revenue versus Revenue, you did not finish. Either the names are missing or the meetings still subtract two clocks.

## What one company with several clocks looks like

The plant week opens shipped revenue as an ops measure. Nobody calls it the books. The commercial review opens invoiced revenue. The fiscal pack opens fiscal Revenue. The controller can sign it because it is not also a dock clock.

You still have more than one calendar. The failure was publishing one word as if you didn’t.

## Executive takeaway

Fiscal versus shipping versus invoice is not a modeling trick. It is a policy about which clock a meeting is allowed to use.

One measure labeled Revenue teaches the company there is one month. There isn’t. Name the date roles. Split the measures. Stop subtracting clocks.

Need a 30-minute look at which calendar your Revenue tile actually uses? [Contact Alluvium](/contact). We’ll map ship, invoice, and fiscal posting—and which meeting is allowed to use which clock.

<!-- wordcount: 1202 -->
