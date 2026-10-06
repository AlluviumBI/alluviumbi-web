---
title: "Why Power BI YTD Lies Without a Calendar Table"
description: "When close-pack YTD and prior year disagree with finance, fix the continuous date dimension, not another CALCULATE. Get our free calendar table."
pubDate: 2026-09-29
tags:
  - Power BI
  - Date Table
  - Finance
  - Time Intelligence
draft: false
---

It is close week. The pack shows YTD revenue up, and finance’s workbook shows it flat. Prior year is short a week. Same ERP extract, same certified dataset, different year-to-date.

Someone pastes in another CALCULATE. The tile moves, and finance still will not sign.

The fix is usually a continuous calendar table, not cleverer filter context. YTD lies when the date axis has holes, when Auto date/time invents months, or when the model never marked a real date table.

![Black-and-white mountain peaks and forested valley under cloudy sky](/blog/power-bi-ytd-calendar-table-hero.svg)

## YTD is a contract with the books

Mid-market finance and ops leaders do not need a DAX seminar. They need the flash pack’s year-to-date to survive the controller’s eye. TOTALYTD looks like that contract, but without a contiguous date dimension it is a promise the model cannot keep.

Power BI time intelligence expects a date table: one row per day, no gaps, marked as a date table, and related to the fact date finance means. Skip any of those and YTD drifts, with prior year drifting right along with it. The room treats the drift as a business miss or a “Power BI quirk.” It is a modeling miss.

This is related to, but not the same as, [two calendars under one Revenue](/blog/two-calendars-one-revenue-number). Role fights over ship versus invoice versus fiscal will also break trust. The symptom here is simpler. Even on one agreed date column, YTD still lies because there is no real calendar table behind it. Fix the table first, then name the role.

When [month-end still takes a week](/blog/why-month-end-still-takes-a-week), half that week often goes to reconciling clocks. A continuous date dimension removes a whole class of that waste.

## How lying YTD shows up

TOTALYTD returns a number that almost matches finance, until the last incomplete month, a leap day, or a period with no transactions. Gaps in a fact-derived date axis drop days, and the function cannot invent the missing rows.

SAMEPERIODLASTYEAR shifts into a range that does not exist on the axis, so prior year looks weak. Leaders ask what went wrong in the plant. The plant was fine. The calendar was incomplete.

Auto date/time builds hidden hierarchies. Visuals look right in Desktop on a filtered sample, but the Service pack uses a wider range, and YTD suddenly includes or excludes edge days nobody reviewed.

Developers wrap YTD in CALCULATE with hard-coded year filters “just for this pack,” and the next author copies the pattern. [Measures nobody can explain](/blog/measures-nobody-can-explain) multiply, and the calendar debt hides inside the measure debt.

Fiscal YTD never matches calendar YTD, and the pack does not say which one is on the tile. Finance runs fiscal while the model runs January through December. Both are called “YTD” and neither is labeled. [Finance won’t sign off](/blog/finance-wont-sign-off-on-the-dashboard) for good reason.

## The costs of YTD that finance cannot defend

1. **The close pack opens with a variance hunt.** Fifteen minutes go to “whose YTD,” and decision time shrinks. The tile did not save the meeting. It delayed it.

2. **Excel becomes the system of record again.** Controllers keep a trusted YTD tab and Power BI becomes a picture. Dual systems return, and [books closed Friday while Power BI still shows Thursday](/blog/books-closed-friday-power-bi-still-thursday) starts to feel normal.

3. **Leaders act on partial years.** A short prior-year comparison makes this year look like a win. Expedites, hiring, and inventory moves follow a calendar artifact.

4. **Developers burn sprints on the wrong fix.** They add more CALCULATE, more variables, and more “temporary” filters. The continuous date table was the one-hour fix that never got scheduled.

5. **Certification loses meaning.** A certified YTD that finance rejects is worse than an unlabeled draft, because the badge taught false confidence.

6. **Tribal patches replace policy.** “Use this measure on the board page and that one for ops.” Folklore around YTD is still [tribal knowledge in the data model](/blog/tribal-knowledge-in-the-data-model).

7. **Self-service forks the year.** Each author builds a personal YTD. Three boards show three years for the same company.

8. **Trust debt compounds past close.** Once leaders learn YTD can lie, every other time intelligence measure is suspect, from MTD and QTD to rolling 12. You keep paying for the missing calendar.

## How to fix it: continuous calendar, then YTD

1. **Stop treating CALCULATE as the YTD repair kit.** If finance disagrees, inspect the date table before you rewrite the measure. [CALCULATE spaghetti is a liability](/blog/calculate-spaghetti-is-a-liability), especially when it papers over a missing calendar.

2. **Build or import a contiguous date dimension.** Cover every day from before your earliest fact through a safe future horizon, with the calendar and fiscal attributes your close actually uses.

3. **Mark the table as a date table.** Point Power BI at the date column. Time intelligence needs that mark, and without it you are still improvising.

4. **Turn Auto date/time off.** Hidden calendars fight your explicit one. Keep one owned clock.

5. **Relate the fact date finance means.** Use fiscal posting or invoice date for the board YTD, not ship date unless the measure is labeled as ops. Role naming still matters, but the table has to exist first. The broader picture is in [your model has no real date table](/blog/power-bi-date-table-time-intelligence).

6. **Remove fact-only Year and Month slicers from the close pack.** Slice from the date dimension so empty months still exist on the axis. [Stop building year and month from fact dates](/blog/power-bi-date-dimension-vs-fact-dates) explains why fact-derived columns break filters.

7. **Rebuild YTD and prior year against the marked table.** Use TOTALYTD, DATESYTD, and SAMEPERIODLASTYEAR only after the axis is continuous, and test incomplete months and leap days on purpose.

8. **Tie to finance for the last closed month and YTD.** Write the match down. If they diverge, fix the calendar or the date role before the next pack. Parity is the promotion gate.

9. **Label fiscal or calendar on the tile.** “YTD (Fiscal)” beats a silent January start. For the shared clock between builders and consumers, see [a date table is how developers and end users share one clock](/blog/power-bi-date-table-developers-end-users).

10. **Use a known-good Power Query date table under deadline.** [Get the free Alluvium date dimension](/tools/date-dimension). Drop it in, mark it, relate it, and prove YTD before you expand.

## What good looks like

The flash pack’s YTD matches finance’s closed year-to-date for the periods you care about. Prior-year comparisons land on the same day count. Empty shipping months still appear as months, and fiscal YTD is labeled when the company is not on a calendar year.

Developers stop pasting year filters into every measure, and end users stop exporting to rebuild YTD in Excel. The meeting argues about margin and mix, not whether the year started in January or in fiscal week one.

## Start with one YTD tile

Pick the revenue YTD on the close pack and open the model. Is there a marked date table with contiguous days? If not, add one before you touch DAX. Relate the date finance uses, rebuild that one measure, and tie it to the last close.

Share the before and after with the controller. Minutes given back to the meeting beat a slide about “model hygiene.” Once YTD is honest, expand to MTD and prior year on the same axis.

Leaders should ask: “Does our YTD run on a marked calendar table, and does it match the books for the last close?” If the answer is a shrug, the pack is guessing.

## Executive takeaway

When the close pack’s year-to-date and prior year disagree with finance, the fix is usually a continuous, marked date dimension, not another CALCULATE paste. Give the model a real clock, and time intelligence can keep its contract with the books.

[Download the free Power Query date table](/tools/date-dimension) and put it under your flash YTD. Want a short parity check against finance? [Book a session](/contact), or start with a [Free Model Health check](/power-bi-model-health).
