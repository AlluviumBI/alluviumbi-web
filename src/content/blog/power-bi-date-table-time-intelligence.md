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

The dashboard shows YTD. Finance shows something else. Last year is off by a week. Same facts. Same meeting. Different months.

Nobody changed the measure. The model never had a real date table. Power BI guessed.

Auto date/time and fact-only dates make time intelligence look finished. It is not. Developers and end users need one marked calendar table—and a continuous key—before TOTALYTD and SAMEPERIODLASTYEAR earn a seat in the close pack.

![Black-and-white sunrise over a cultivated field with sunburst through distant trees](/blog/power-bi-date-table-time-intelligence-hero.svg)

## Guessing is not a calendar policy

Mid-market manufacturers and distributors ship Power BI under deadline. Facts arrive with invoice dates, ship dates, and posting dates. Someone turns on Auto date/time, or builds Year and Month off the fact column, and the tile lights up.

Time intelligence functions need a continuous date dimension that is marked as a date table. Without that, prior period and YTD are improvisation. The room still treats the number as settled. That is how [finance won’t sign off on the dashboard](/blog/finance-wont-sign-off-on-the-dashboard) after a green refresh.

This is not the same problem as [two calendars fighting under one Revenue label](/blog/two-calendars-one-revenue-number). That fight is date *roles*—ship versus invoice versus fiscal. This fight is missing the *table*: no dedicated, contiguous calendar for DAX to trust. Fix roles after you have a real clock. Do not paste another CALCULATE and call it done.

If [the semantic model is the product](/blog/semantic-model-is-the-product), the date table is the product’s metronome. You do not ship a product whose clock skips weekends and invents months.

## How missing date tables show up

Auto date/time creates hidden date hierarchies on every date column. The model looks rich. Relationships multiply. Performance and filter context get harder to explain. Time intelligence still fails on gaps and on fiscal calendars Auto date/time never knew you had.

Fact tables carry Year, Month Name, and Quarter as calculated columns from InvoiceDate. Slicers work until someone filters a month with no rows. Totals drop. Prior year looks empty. The developer blames the measure. The calendar was never continuous.

TOTALYTD and DATEADD return blanks or partial periods because the date axis has holes. A plant shutdown month disappears because no invoices posted. The function did what the table allowed.

Inactive relationships and USERELATIONSHIP folklore pile on. Someone “fixes” last year with a filter patch—same debt as [CALCULATE spaghetti](/blog/calculate-spaghetti-is-a-liability). End users inherit Date slicers that miss the books; developers inherit DAX that only worked on a Desktop sample.

## The costs of letting time intelligence guess

1. **YTD and prior year become meeting topics.** The first fifteen minutes are calendar archaeology. Same energy as [why Power BI reports show different numbers](/blog/why-power-bi-reports-show-different-numbers)—except the fight is inside one model’s date layer.

2. **Finance keeps a twin in Excel.** When TOTALYTD cannot be defended, the controller’s workbook becomes the clock. Dual systems return. [Month-end still takes a week](/blog/why-month-end-still-takes-a-week) for reasons that have nothing to do with refresh speed.

3. **Developers optimize the wrong layer.** Teams rewrite measures, add variables, and chase context. The root cause is still a missing or unmarked date table. Expensive DAX. Cheap structural miss.

4. **Gaps look like business misses.** A month with no shipments vanishes from a fact-derived axis. Leaders ask what happened to March. Nothing happened to March—the calendar was incomplete.

5. **Fiscal calendars never land.** Mid-market companies run 4-4-5 or fiscal years that do not start in January. Auto date/time does not know. A proper date dimension does—if you build or import one.

6. **Ownership evaporates.** Who owns “the date table”? If the answer is Auto date/time, nobody owns the clock—same hole as [who can change a measure](/blog/who-can-change-a-measure).

7. **Certification becomes costume.** A certified dataset on Auto date/time and fact-only years is a badge over improvisation. Trust lasts until the first prior-period variance.

## How to fix it: one marked calendar, then time intelligence

1. **Turn Auto date/time off for the model.** Stop inventing hidden calendars. Make the date table an explicit object someone can open and defend.

2. **Add a dedicated date dimension.** Contiguous dates from before your earliest fact through a safe future horizon. One row per day. No gaps. Include calendar year, month, quarter, week, and—if you use them—fiscal attributes on the *same* table.

3. **Mark it as a date table.** Tell Power BI which column is the date key. Time intelligence functions need that contract. Without the mark, you are still guessing under a nicer name.

4. **Relate facts to the date table on the correct role key.** Invoice date to Date for fiscal Revenue. Ship date only if that measure is meant to be a dock clock. Naming the role is still required—see [two calendars, one Revenue](/blog/two-calendars-one-revenue-number)—but the *table* must exist first.

5. **Delete Year/Month columns derived only from fact dates for slicing.** Keep keys on facts. Put labels and hierarchies on the date dimension. Fact-derived Year/Month is how filters go hollow—covered in [stop building year and month from fact dates](/blog/power-bi-date-dimension-vs-fact-dates).

6. **Rewrite YTD and prior-period measures against the marked table.** TOTALYTD, SAMEPERIODLASTYEAR, and DATEADD only earn trust after the axis is continuous. Until then, treat them as suspects—not as the close pack.

7. **Prove parity with Finance on one period.** Pick last closed month and last closed YTD. Tie the model to the books before you promote. If they disagree, fix the calendar or the date role—not the slide.

8. **Name an owner for the date table.** Who may change fiscal flags, week definitions, or the horizon? Put the name on the dataset description. Clocks without owners become folklore.

9. **Start from a known-good Power Query date table.** Do not hand-build day loops under deadline. [Get the free Alluvium date dimension](/tools/date-dimension)—a Power Query calendar you can drop in, mark, and relate.

## What good looks like

One Date table. Marked. Contiguous. Related. Auto date/time off. YTD and prior year match the books for the periods you care about. Developers write time intelligence against a real axis. End users slice months that exist even when a plant had no invoices.

The meeting still argues mix and margin. It stops arguing whether March exists.

Fiscal and calendar attributes live on the same dimension when needed. Slicers say Fiscal Period or Calendar Month on purpose—how [developers and end users share one clock](/blog/power-bi-date-table-developers-end-users).

## Start with one close-critical model

Pick the dataset behind revenue or the flash pack. Turn Auto date/time off. Import or build a contiguous date table. Mark it. Relate the fact date that Finance means. Rebuild one YTD and one prior-year measure. Tie to last closed month.

If the numbers match, expand. If not, you found a date role or grain problem—not a reason to restore Auto date/time. When YTD still lies after the mark, see [why Power BI YTD lies without a calendar table](/blog/power-bi-ytd-calendar-table).

Leaders should ask: “Is our time intelligence on a marked date table—or on Auto date/time and fact columns?” If nobody can open Date and show contiguous days, the pack is guessing.

## Executive takeaway

Your Power BI model has no real date table. Time intelligence is guessing.

Auto date/time and fact-only dates break YTD and prior-period trust. Developers and end users need one marked, contiguous calendar table before TOTALYTD earns a seat in the close. Then the meeting argues the business—not whether the month exists.

[Download the free Power Query date table](/tools/date-dimension) and mark it as the date table on the model behind your flash. Need a 30-minute look at whether your YTD is guessing? [Contact Alluvium](/contact).
