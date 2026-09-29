---
title: "Stop Building Year and Month From Fact Dates"
description: "Deriving Year/Month off the fact table breaks filters and time intelligence. Use a real date dimension—free Power Query table on /tools."
pubDate: 2026-09-29
tags:
  - Power BI
  - Date Table
  - Semantic Model
  - Finance
draft: false
---

The fact table has InvoiceDate. Someone adds Year = YEAR(InvoiceDate) and Month = FORMAT(InvoiceDate, "MMM"). The slicer works. The matrix looks fine.

Until a month has no invoices. The month disappears. Until someone wants fiscal week. Until TOTALYTD needs a continuous axis. Until end users filter “all of Q1” and the total quietly drops days that never posted.

Report developers who derive Year and Month off the fact table hand end users broken filters and brittle time intelligence. The fix is a real date dimension—not more calculated columns on the fact.

![Black-and-white aerial view of ocean waves and foam](/blog/power-bi-date-dimension-vs-fact-dates-hero.svg)

## Labels belong on the calendar, not on the grain

Facts are events. Dates on facts are foreign keys to time. Year, month name, quarter, and fiscal period are attributes of the day—not attributes of the invoice line.

When you stamp Year onto every fact row, you teach the model that months only exist when something happened. That is convenient for a quick visual. It is fatal for filters, for empty-period reporting, and for time intelligence that expects every day to exist.

Mid-market manufacturing and distribution teams do this under deadline. Desktop feels fast. The Service pack and the finance review expose the holes. Same pattern as other model shortcuts: the sample lied; production told the truth.

This is not [two calendars fighting under one Revenue](/blog/two-calendars-one-revenue-number). That post is about date *roles*. This post is about missing a dedicated date *table* and pretending fact columns are a calendar. Different bug. Same meeting pain if you ignore either.

If [the semantic model is the product](/blog/semantic-model-is-the-product), the date dimension is how the product knows what a month is. Fact-derived Year is a sticker on the shipment, not a calendar.

## How fact-derived dates show up

Calculated columns: Year, MonthNumber, MonthName, Quarter, Weekday—all from the fact’s date. Relationships stay fact-to-fact or missing. Slicers bind to those columns.

A plant shutdown month has zero rows. The Month slicer never lists it. Leaders ask why August is missing from the dropdown. It is missing because nothing shipped—not because August did not occur.

Matrices show only months with activity. Sparse years look like short years. Comparisons across plants become apples to oranges when one site had downtime.

Time intelligence functions need a date table. Pointing them at fact dates—or at a disconnected Year column—produces blanks, partial periods, or silent wrongness. Developers add more CALCULATE. The structural miss remains. Companion symptom: [why Power BI YTD lies without a calendar table](/blog/power-bi-ytd-calendar-table).

Fiscal attributes get hardcoded: “if month >= 10 then fiscal year = year + 1.” Copied into three facts. One fact gets updated for a calendar change. The others do not. [Why reports show different numbers](/blog/why-power-bi-reports-show-different-numbers) starts on the date labels alone.

Sort order breaks. Month Name sorts alphabetically: April, August, December. Someone adds a MonthNumber sort column on the fact. Now every fact carries calendar UI debt.

## The costs of Year and Month on the fact

1. **Empty periods vanish from filters.** End users cannot select a quiet month. Ops cannot show “zero is real.” The UI hides downtime.

2. **Time intelligence stays brittle.** TOTALYTD and prior-period functions need contiguous dates. Fact columns do not provide them. Guessing continues—see [no real date table](/blog/power-bi-date-table-time-intelligence).

3. **Every fact reinvents the calendar.** Invoice, shipment, and inventory facts each grow their own Year/Month set. Definitions drift. Maintenance multiplies.

4. **Fiscal change becomes a multi-table project.** Move the fiscal start week once on a date dimension. Or hunt calculated columns across every fact forever.

5. **Developers own UI debt on the grain.** Sort columns, display names, and hierarchy hacks land on million-row tables. VertiPaq pays. The date table would have been tiny.

6. **End users learn the wrong mental model.** “Month is a property of the invoice.” Then they wonder why finance’s month list is longer. Trust frays—[finance won’t sign off](/blog/finance-wont-sign-off-on-the-dashboard) when the slicer and the books disagree on which months exist.

7. **Self-service copies the anti-pattern.** New authors duplicate Year = YEAR(Date) because that is what they see. Sprawl of fake calendars.

8. **Close packs argue absences.** “Why isn’t March on the chart?” becomes a recurring agenda item. The answer is modeling, not demand.

## How to fix it: one date dimension, facts keep keys only

1. **Add a dedicated date table.** One row per day. Contiguous. Calendar attributes and fiscal attributes on that table alone. [Download the free Power Query date table](/tools/date-dimension) if you do not want to hand-build it under deadline.

2. **Keep only the date key on the fact.** InvoiceDate, ShipDate, PostingDate—as needed for roles. Delete Year, MonthName, Quarter calculated columns used for slicing.

3. **Mark the date table and relate it.** Active relationship on the date role the measure means. Mark as date table so time intelligence has a contract.

4. **Build slicers and hierarchies from the date dimension.** Year, Month, Fiscal Period, Week—from Date. Empty months still exist. Sort order lives once.

5. **Turn Auto date/time off.** Do not stack hidden calendars on top of fact dates and an explicit table. One owned clock.

6. **Move fiscal logic into the date table.** Fiscal year, fiscal week, 4-4-5 flags—maintained in one place. Facts stop carrying policy.

7. **Rewrite measures that filtered on fact Year/Month.** Point them at the date table. Prove YTD and prior year against Finance after the move.

8. **Document the rule for authors.** “No Year/Month on facts for the certified model.” Put it next to [who can change a measure](/blog/who-can-change-a-measure). Calendar shape is change control.

9. **Train end users once.** “Months come from the calendar. Zeros are real.” One sentence in the pack beats a year of missing-August tickets.

10. **Align developers and consumers on the same axis.** The date table is how both sides share one clock—full angle in [developers and end users share one clock](/blog/power-bi-date-table-developers-end-users).

## What good looks like

Facts are thin on time: keys only. The Date table carries every label the UI needs. Slicers list months whether or not the plant shipped. Time intelligence runs on a marked, contiguous axis. Fiscal change is one pull request on one table.

Report developers stop inventing calendars per dataset. End users stop asking where August went. Finance sees the same month list the model uses. [Month-end still takes work](/blog/why-month-end-still-takes-a-week)—but not because the dropdown hid a period.

## Start by deleting three columns

Pick the revenue fact behind the close pack. List calculated Year/Month/Quarter columns. Add a contiguous date dimension. Relate it. Point the page slicers at Date. Remove the fact columns from the visuals. Refresh. Ask for a month with known zero activity—confirm it still appears.

If visuals break, you found dependencies to rewrite—not a reason to keep the anti-pattern. When the zero month shows, expand to the other facts.

Leaders should ask: “Do our month slicers come from a date table—or from columns stamped onto invoices?” If the answer is the invoice, the calendar is a coincidence of activity.

## Executive takeaway

Stop building Year and Month from fact dates.

Report developers who derive calendar labels off the fact table hand end users broken filters and brittle time intelligence. Use a real date dimension. Keep keys on facts. Put the clock in one place both developers and end users can trust.

[Get the free Alluvium date dimension](/tools/date-dimension)—a Power Query calendar ready to mark and relate. Need a quick pass on fact-derived date columns in the flash model? [Contact Alluvium](/contact).
