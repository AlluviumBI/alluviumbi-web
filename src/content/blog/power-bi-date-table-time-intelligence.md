---
title: "Your Power BI Model Has No Real Date Table. Time Intelligence Is Guessing"
description: "Auto date/time and fact-only dates break YTD and prior-period trust. Mark one calendar table so developers and end users share one clock."
pubDate: 2026-09-29
tags:
  - Power BI
  - Date Table
  - Time Intelligence
  - Semantic Model
draft: false
---

The dashboard shows one YTD and finance shows another. Last year is off by a week. Same facts, same meeting, different months.

Nobody changed the measure. The model never had a real date table, so Power BI guessed.

Auto date/time and fact-only dates make time intelligence look finished when it is not. Developers and end users need one marked calendar table with a continuous key before TOTALYTD and SAMEPERIODLASTYEAR earn a seat in the close pack.

![Black-and-white sunrise over a cultivated field with sunburst through distant trees](/blog/power-bi-date-table-time-intelligence-hero.svg)

## Guessing is not a calendar policy

Mid-market manufacturers and distributors ship Power BI under deadline. Facts arrive with invoice dates, ship dates, and posting dates. Someone turns on Auto date/time, or builds Year and Month from the fact column, and the tile lights up.

Time intelligence functions need a continuous date dimension marked as a date table. Without one, prior period and YTD are improvisation, yet the room still treats the number as settled. That is how [finance won’t sign off on the dashboard](/blog/finance-wont-sign-off-on-the-dashboard) even after a green refresh.

This is a different problem from [two calendars fighting under one Revenue label](/blog/two-calendars-one-revenue-number). That fight is about date *roles*: ship versus invoice versus fiscal. This one is about a missing *table*, with no dedicated, contiguous calendar for DAX to trust. Fix the roles once you have a real clock, and do not paste in another CALCULATE and call it done.

If [the semantic model is the product](/blog/semantic-model-is-the-product), the date table is the product’s metronome. You do not ship a product whose clock skips weekends and invents months.

## How missing date tables show up

Auto date/time creates hidden date hierarchies on every date column. The model looks rich, but relationships multiply and performance and filter context get harder to explain. Time intelligence still fails on gaps and on the fiscal calendar Auto date/time never knew you had.

Fact tables carry Year, Month Name, and Quarter as calculated columns from InvoiceDate. Slicers work until someone filters a month with no rows. Totals drop and prior year looks empty. The developer blames the measure, but the calendar was never continuous.

TOTALYTD and DATEADD return blanks or partial periods because the date axis has holes. A plant shutdown month disappears because no invoices posted. The function did what the table allowed.

Inactive relationships and USERELATIONSHIP folklore pile on. Someone “fixes” last year with a filter patch, the same debt as [CALCULATE spaghetti](/blog/calculate-spaghetti-is-a-liability). End users inherit Date slicers that miss the books, and developers inherit DAX that only worked on a Desktop sample.

## The costs of letting time intelligence guess

1. **YTD and prior year become meeting topics.** The first fifteen minutes go to calendar archaeology. It has the same energy as [why Power BI reports show different numbers](/blog/why-power-bi-reports-show-different-numbers), except the fight is inside one model’s date layer.

2. **Finance keeps a twin in Excel.** When TOTALYTD cannot be defended, the controller’s workbook becomes the clock and dual systems return. [Month-end still takes a week](/blog/why-month-end-still-takes-a-week) for reasons that have nothing to do with refresh speed.

3. **Developers optimize the wrong layer.** Teams rewrite measures, add variables, and chase context while the root cause is still a missing or unmarked date table. The DAX is expensive. The structural miss is cheap to fix.

4. **Gaps look like business misses.** A month with no shipments vanishes from a fact-derived axis, and leaders ask what happened to March. Nothing happened to March. The calendar was incomplete.

5. **Fiscal calendars never land.** Mid-market companies run 4-4-5 calendars or fiscal years that do not start in January. Auto date/time does not know that. A proper date dimension does, if you build or import one.

6. **Ownership evaporates.** Who owns “the date table”? If the answer is Auto date/time, nobody owns the clock. It is the same hole as [who can change a measure](/blog/who-can-change-a-measure).

7. **Certification becomes costume.** A certified dataset on Auto date/time and fact-only years is a badge over improvisation. The trust lasts until the first prior-period variance.

## How to fix it: one marked calendar, then time intelligence

1. **Turn Auto date/time off for the model.** Stop inventing hidden calendars. Make the date table an explicit object someone can open and defend.

2. **Add a dedicated date dimension.** Cover contiguous dates from before your earliest fact through a safe future horizon, one row per day with no gaps. Include calendar year, month, quarter, and week, plus fiscal attributes if you use them, all on the *same* table.

3. **Mark it as a date table.** Tell Power BI which column is the date key. Time intelligence functions need that contract. Without the mark, you are still guessing under a nicer name.

4. **Relate facts to the date table on the correct role key.** Use invoice date for fiscal Revenue, and ship date only if that measure is meant to be a dock clock. You still have to name the role, as [two calendars, one Revenue](/blog/two-calendars-one-revenue-number) explains, but the *table* has to exist first.

5. **Delete Year and Month columns derived from fact dates for slicing.** Keep keys on facts and put labels and hierarchies on the date dimension. Fact-derived Year and Month columns are how filters go hollow, as covered in [stop building year and month from fact dates](/blog/power-bi-date-dimension-vs-fact-dates).

6. **Rewrite YTD and prior-period measures against the marked table.** TOTALYTD, SAMEPERIODLASTYEAR, and DATEADD only earn trust once the axis is continuous. Until then, treat them as suspects, not as the close pack.

7. **Prove parity with finance on one period.** Pick the last closed month and last closed YTD, and tie the model to the books before you promote. If they disagree, fix the calendar or the date role, not the slide.

8. **Name an owner for the date table.** Who may change fiscal flags, week definitions, or the horizon? Put that name in the dataset description. Clocks without owners turn into folklore.

9. **Start from a known-good Power Query date table.** Do not hand-build day loops under deadline. [Get the free Alluvium date dimension](/tools/date-dimension), a Power Query calendar you can drop in, mark, and relate.

## What good looks like

There is one Date table. It is marked, contiguous, and related, and Auto date/time is off. YTD and prior year match the books for the periods you care about. Developers write time intelligence against a real axis, and end users slice months that exist even when a plant had no invoices.

The meeting still argues about mix and margin. It stops arguing about whether March exists.

Fiscal and calendar attributes live on the same dimension when needed, and slicers say Fiscal Period or Calendar Month on purpose. That is how [developers and end users share one clock](/blog/power-bi-date-table-developers-end-users).

## Start with one close-critical model

Pick the dataset behind revenue or the flash pack. Turn Auto date/time off, import or build a contiguous date table, mark it, and relate the fact date finance means. Rebuild one YTD and one prior-year measure, and tie them to the last closed month.

If the numbers match, expand. If not, you found a date role or grain problem, not a reason to turn Auto date/time back on. If YTD still lies after the mark, see [why Power BI YTD lies without a calendar table](/blog/power-bi-ytd-calendar-table).

Leaders should ask: “Is our time intelligence running on a marked date table, or on Auto date/time and fact columns?” If nobody can open Date and show contiguous days, the pack is guessing.

## Executive takeaway

Auto date/time and fact-only dates break YTD and prior-period trust. Developers and end users need one marked, contiguous calendar table before TOTALYTD earns a seat in the close. Then the meeting argues about the business, not whether the month exists.

[Download the free Power Query date table](/tools/date-dimension) and mark it as the date table on the model behind your flash. Want to know whether your YTD is guessing? [Book a session](/contact), or start with a [Free Model Health check](/power-bi-model-health).
