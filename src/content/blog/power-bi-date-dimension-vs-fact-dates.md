---
title: "Stop Building Year and Month From Fact Dates"
description: "Deriving Year and Month from the fact table breaks filters and time intelligence. Use a real date dimension, like our free Power Query date table."
pubDate: 2026-09-29
tags:
  - Power BI
  - Date Table
  - Semantic Model
  - Finance
draft: false
---

The fact table has InvoiceDate. Someone adds `Year = YEAR(InvoiceDate)` and `Month = FORMAT(InvoiceDate, "MMM")`. The slicer works and the matrix looks fine.

Then a month has no invoices, and that month disappears. Then someone wants fiscal week, or TOTALYTD needs a continuous axis, or end users filter “all of Q1” and the total quietly drops days that never posted.

Report developers who derive Year and Month from the fact table hand end users broken filters and brittle time intelligence. The fix is a real date dimension, not more calculated columns on the fact.

![Black-and-white aerial view of ocean waves and foam](/blog/power-bi-date-dimension-vs-fact-dates-hero.svg)

## Labels belong on the calendar, not on the grain

Facts are events, and the dates on facts are foreign keys to time. Year, month name, quarter, and fiscal period are attributes of the day, not of the invoice line.

Stamp Year onto every fact row and you teach the model that months only exist when something happened. That is handy for a quick visual and fatal for filters, empty periods, and time intelligence that expects every day to exist.

Mid-market teams do this under deadline because Desktop feels fast. The Service pack and the finance review expose the holes. The sample lied and production told the truth.

This is not [two calendars fighting under one Revenue](/blog/two-calendars-one-revenue-number). That post is about date *roles*. This one is about having no dedicated date *table* and pretending fact columns are a calendar. Different bug, same meeting pain.

If [the semantic model is the product](/blog/semantic-model-is-the-product), the date dimension is how the product knows what a month is. A fact-derived Year is a sticker on the shipment, not a calendar.

## How fact-derived dates show up

The model has calculated columns for Year, MonthNumber, MonthName, Quarter, and Weekday, all built from the fact’s date. Relationships stay fact-to-fact or are missing, and slicers bind to those columns.

A plant shutdown month has zero rows, so the Month slicer never lists it. Leaders ask why August is missing from the dropdown. It is missing because nothing shipped, not because August did not happen.

Matrices show only months with activity, so sparse years look short and plant comparisons break when one site had downtime.

Time intelligence functions need a date table. Pointing them at fact dates, or at a disconnected Year column, produces blanks, partial periods, or silent errors. Developers add more CALCULATE while the structural miss remains. See also [why Power BI YTD lies without a calendar table](/blog/power-bi-ytd-calendar-table).

Fiscal attributes get hardcoded: “if month >= 10 then fiscal year = year + 1.” That logic gets copied into three facts. One fact gets updated for a calendar change and the others do not. [Why reports show different numbers](/blog/why-power-bi-reports-show-different-numbers) can start with the date labels alone.

Sort order breaks too. Month Name sorts alphabetically: April, August, December. Someone adds a MonthNumber sort column to the fact, and now every fact carries calendar UI debt.

## The costs of Year and Month on the fact

1. **Empty periods vanish from filters.** End users cannot select a quiet month, and ops cannot show that zero is real. The UI hides downtime.

2. **Time intelligence stays brittle.** TOTALYTD and prior-period functions need contiguous dates, and fact columns do not provide them. The guessing continues, as covered in [no real date table](/blog/power-bi-date-table-time-intelligence).

3. **Every fact reinvents the calendar.** Invoice, shipment, and inventory facts each grow their own Year and Month columns. Definitions drift and maintenance multiplies.

4. **A fiscal change becomes a multi-table project.** On a date dimension, you move the fiscal start week once. Without one, you hunt calculated columns across every fact forever.

5. **Developers carry UI debt on the grain.** Sort columns, display names, and hierarchy hacks land on million-row tables, and VertiPaq pays for it. The date table would have been tiny.

6. **End users learn the wrong mental model.** They come to believe month is a property of the invoice, then wonder why finance’s month list is longer. Trust frays, and [finance won’t sign off](/blog/finance-wont-sign-off-on-the-dashboard) when the slicer and the books disagree about which months exist.

7. **Self-service copies the anti-pattern.** New authors duplicate `Year = YEAR(Date)` because that is what they see, and fake calendars spread.

8. **Close packs argue about absences.** “Why isn’t March on the chart?” becomes a recurring agenda item. The answer is modeling, not demand.

## How to fix it: one date dimension, facts keep keys only

1. **Add a dedicated date table.** One row per day, contiguous, with calendar and fiscal attributes on that table alone. [Download the free Power Query date table](/tools/date-dimension) if you do not want to hand-build it under deadline.

2. **Keep only the date keys on the fact.** Keep InvoiceDate, ShipDate, and PostingDate as needed for roles. Delete the Year, MonthName, and Quarter calculated columns used for slicing.

3. **Mark the date table and relate it.** Make the active relationship the date role the measure means, and mark it as a date table so time intelligence has a contract.

4. **Build slicers and hierarchies from the date dimension.** Year, Month, Fiscal Period, and Week all come from Date. Empty months still exist, and sort order lives in one place.

5. **Turn Auto date/time off.** Do not stack hidden calendars on top of fact dates and an explicit table. Keep one owned clock.

6. **Move fiscal logic into the date table.** Fiscal year, fiscal week, and 4-4-5 flags are maintained in one place, and facts stop carrying policy.

7. **Rewrite measures that filtered on fact Year or Month.** Point them at the date table, then prove YTD and prior year against finance after the move.

8. **Document the rule for authors.** “No Year or Month on facts in the certified model.” Put it next to [who can change a measure](/blog/who-can-change-a-measure), because calendar shape is change control.

9. **Train end users once.** “Months come from the calendar. Zeros are real.” One sentence in the pack beats a year of missing-August tickets.

10. **Put developers and consumers on the same axis.** The date table is how both sides share one clock. The full argument is in [developers and end users share one clock](/blog/power-bi-date-table-developers-end-users).

## What good looks like

Facts are thin on time and carry only keys. The Date table holds every label the UI needs. Slicers list months whether or not the plant shipped, time intelligence runs on a marked, contiguous axis, and a fiscal change is one pull request on one table.

Developers stop inventing calendars per dataset, end users stop asking where August went, and finance sees the same month list as the model. [Month-end still takes work](/blog/why-month-end-still-takes-a-week), but not because the dropdown hid a period.

## Start by deleting three columns

Pick the revenue fact behind the close pack and list its calculated Year, Month, and Quarter columns. Add a contiguous date dimension and relate it. Point the page slicers at Date, remove the fact columns from the visuals, and refresh. Then ask for a month with known zero activity and confirm it still appears.

If visuals break, you found dependencies to rewrite, not a reason to keep the anti-pattern. Once the zero month shows, expand to the other facts.

Leaders should ask: “Do our month slicers come from a date table, or from columns stamped onto invoices?” If the answer is the invoice, your calendar only exists where there was activity.

## Executive takeaway

Report developers who derive calendar labels from the fact table hand end users broken filters and brittle time intelligence. Use a real date dimension and keep only keys on facts. Put the clock in one place both developers and end users can trust.

[Get the free Alluvium date dimension](/tools/date-dimension), a Power Query calendar ready to mark and relate. Want a quick pass on fact-derived date columns in your flash model? [Book a session](/contact), or start with a [Free Model Health check](/power-bi-model-health).
