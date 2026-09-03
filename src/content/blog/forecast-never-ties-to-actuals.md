---
title: "Why Your Forecast Never Ties to Actuals"
description: "Forecast in one file, actuals in another, and the bridge is a meeting. Connect them."
pubDate: 2026-08-05
tags:
  - Power BI
  - Finance
  - Forecasting
draft: false
---

Forecast in one file, actuals in another, and the bridge is a meeting. Connect them.

The plan lives in a workbook someone versions by month name. The actuals live in a model—or in a second workbook. Every review starts with mapping weeks to months, SKUs to families, bookings to revenue. That mapping *is* the work. It should not be the meeting.

![Black-and-white parallel railroad tracks receding across an open plain](/blog/forecast-never-ties-to-actuals-hero.jpg)

## This is not paste versus connect

Excel versus Power BI is the false fight about shared actuals versus judgment work: [Excel vs Power BI](/blog/excel-vs-power-bi-financial-reporting). Keep modeling in Excel. Connect it. Do not paste. This post assumes you already know that split. The remaining failure is grain and calendar: the plan and the actuals are not the same *shape*, so they cannot subtract.

Month-end is a close clock: [why month-end still takes a week](/blog/why-month-end-still-takes-a-week). Monday cash is a diet: [cash, not charts](/blog/cash-not-charts-cfo-monday). This is the bridge: if plan and actuals do not share a calendar, a grain, and a definition of “in,” no connector will save you. You will still hold a meeting to explain the gap. Sales forecast versus finance bookings is a cousin. Here any plan—demand, revenue, production—sits beside actuals it was never shaped to meet.

[Judgment:] if the variance always requires a narrator, you do not have a forecast process. You have two files and a translator.

## Why they never tie

**Different calendars.** 4-4-5 versus civil month. Week starting Monday versus Sunday. Fiscal versus calendar. Subtraction looks like insight. It is misaligned buckets.

**Different grain.** Plan at product group, actuals at SKU. Plan at region, actuals at customer. The map lives in a tab one analyst owns.

**Different “in.”** Shipments versus bookings versus billed. Intercompany in one bag only. Names match; bags do not. That is [measures nobody can explain](/blog/measures-nobody-can-explain) on the plan.

**Different as-of, and the plan never lands.** Last Thursday’s lock versus this morning’s actuals. The forecast stays emailed. Variance is a meeting because both numbers have nowhere to live as facts. Finance will not sign that: [finance won’t sign off](/blog/finance-wont-sign-off-on-the-dashboard).

## What a broken bridge costs

1. **The review is archaeology.** Two hours to reconstruct which week sat in which bucket. The decision—where to push, where to cut—starts after people are tired. You paid senior time for a join that software should have done.

2. **Variance is a story, not a control.** If the gap is always “mix and timing,” you cannot manage either. Mix would need shared product grain. Timing would need a shared calendar. Without those, every miss is narratable. Nothing is actionable.

3. **The next forecast learns nothing.** You cannot feed actuals back into the plan at the grain you missed. Bias stays folklore. You will lock another file that cannot meet the books.

4. **Two versions of the plan circulate.** Ops has a build plan. Finance has a revenue plan. Commercial has a bookings plan. None of them share a key with actuals. ELT hears three misses and one apology.

5. **Shadow mapping tabs become the system of record.** The real product is the hidden sheet that maps SKU to product group and week to month. It is not certified. It is not backed up as a model. It is how the company closes the story. That is a wiki, not a forecast.

6. **Trust leaks from actuals backward.** If the variance page is always wrong, people start doubting the booked numbers too. You spent trust you needed for the close. Conflicting tiles are [different numbers](/blog/why-power-bi-reports-show-different-numbers). A broken plan-actual join is how you schedule them on purpose.

You do not need a promised accuracy percentage from a planning vendor. If the chair still asks “is this the same month,” the bridge failed.

A tie needs one calendar, one freeze, a mapping in the model, and either one sentence on both sides or two named measures allowed to differ in public. Author in Excel. Land as a table: period, grain, measure, version, freeze. Match the grain you will manage. Silent allocation is fiction.

## How to connect plan and actuals

1. **Freeze the calendar first.** One date table both facts use. Fiscal, 4-4-5, or civil—pick the one the review already uses. Weeks have a start you write down. If the forecast process cannot adopt that table, stop. You are not ready to subtract.

2. **Name the grain and the mapping.** What key will join. If the plan is product group and actuals are SKU, the map is a product in the model with an owner. It is not a private tab. Changes to the map are change control, not a quiet paste.

3. **Split the words.** Forecast Shipments versus Actual Revenue are allowed to be different measures. They are not allowed to share a title. Write the two sentences. Variance is then honest: you are comparing named things, or you are not comparing yet.

4. **Land the plan as a versioned fact.** Each lock is a version. The variance page filters to the version the meeting called. Actuals refresh. The plan does not silently move. Connect the workbook; do not paste last month’s columns into a new file that breaks the join.

5. **Put variance on the kernel, not in a side deck.** The certified model holds actuals, the landed plan, and the join. The pack reads it. A slide that reconstructs the gap in Excel is a process miss after you have keys. Keep formatted commentary in Excel, connected.

6. **Review the miss at the grain you planned.** If you planned at product group, do not punish a SKU surprise as if it were a forecast error. Exception lists for ELT; grain for the owner of the plan. Wrong grain is how nobody uses the page: [nobody opens the dashboard](/blog/nobody-opens-the-dashboard).

If you cannot say which plan the ELT actually runs, use the [Data & AI Strategy Roadmap](/analytics-ai-strategy-roadmap). Ownership of measures and the landing path sits in [Managed Data & AI Advisory](/managed-advisory-retainer). A [Quickstart](/power-bi-quickstart) can land one domain’s plan next to actuals without boiling the full planning stack.

## What good looks like

The meeting opens a variance that already shares a month. Nobody asks which calendar.

The plan version is visible. Actuals are stamped. The gap is mix, volume, or price—not “we used different files.”

The mapping has an owner. The forecast workbook connects. The narrator is optional.

## Frequently asked questions

**Should the forecast live in Power BI?**
The *join* should. Authoring can stay in Excel. The lock must land as a fact with keys. A visual of a pasted range is not a tie.

**Do we need a new planning tool first?**
Not to get one calendar, one grain map, and one landed version into the model you already use for actuals. A tool without those three will still not tie.

**What if sales and finance will not share a definition?**
Then do not subtract. Publish two named measures. A forced tile is a meeting about whose number is “real.”

## Get started

Stop bridging plan and actuals with a meeting. Give them the same calendar, grain, and lock.

Need a 30-minute look at where the forecast still cannot subtract from the books? [Contact Alluvium](/contact). We’ll map the calendar, the keys, and the version the next review should already be on.

[Book a 30-minute consult](/contact).

<!-- wordcount: 1221 -->
