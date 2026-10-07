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

The plan lives in a workbook someone versions by month name. The actuals live in a model, or in a second workbook. Every review starts with mapping weeks to months, SKUs to families, and bookings to revenue. That mapping *is* the work, and it should not be the meeting.

![Black-and-white parallel railroad tracks receding across an open plain](/blog/forecast-never-ties-to-actuals-hero.jpg)

## This is not paste versus connect

The false fight between shared actuals and judgment work is covered in [Excel vs Power BI](/blog/excel-vs-power-bi-financial-reporting): keep modeling in Excel, connect it, and do not paste. The remaining failure is grain and calendar. The plan and the actuals are not the same *shape*, so they cannot subtract.

Month-end runs on a close clock, covered in [why month-end still takes a week](/blog/why-month-end-still-takes-a-week), and Monday cash is its own diet, covered in [cash, not charts](/blog/cash-not-charts-cfo-monday). This post is about the bridge. If plan and actuals do not share a calendar, a grain, and a definition of “in,” no connector will save you. [Sales forecast versus finance bookings](/blog/sales-forecast-vs-finance-bookings) is a cousin. Here, any plan (demand, revenue, production) sits beside actuals it was never shaped to meet.

If the variance always needs a narrator, you do not have a forecast process. You have two files and a translator.

## Why they never tie

**Different calendars.** A 4-4-5 calendar versus civil months, weeks that start Monday versus Sunday, fiscal versus calendar year. The subtraction looks like insight, but it is misaligned buckets.

**Different grain.** The plan sits at product group while actuals sit at SKU, or the plan is by region while actuals are by customer. The map lives in a tab one analyst owns.

**Different “in.”** Shipments versus bookings versus billed, with intercompany in only one bag. The names match but the contents do not. That is [measures nobody can explain](/blog/measures-nobody-can-explain), applied to the plan.

**Different as-of, and the plan never lands.** Last Thursday’s lock sits against this morning’s actuals, and the forecast stays in email. Variance becomes a meeting because neither number has a place to live as a fact. Finance will not sign that, as covered in [finance won’t sign off](/blog/finance-wont-sign-off-on-the-dashboard).

## What a broken bridge costs

1. **The review is archaeology.** Two hours go to reconstructing which week sat in which bucket. The decision about where to push and where to cut starts after people are tired. You paid senior time for a join software should have done.

2. **Variance is a story, not a control.** If the gap is always “mix and timing,” you cannot manage either one. Mix would need shared product grain and timing would need a shared calendar. Without those, every miss can be narrated and none can be acted on.

3. **The next forecast learns nothing.** You cannot feed actuals back into the plan at the grain you missed, so bias stays folklore and you lock another file that cannot meet the books.

4. **Several versions of the plan circulate.** Ops has a build plan, finance has a revenue plan, and commercial has a bookings plan. None of them share a key with actuals, so the ELT hears three misses and one apology.

5. **Shadow mapping tabs become the system of record.** The real product is the hidden sheet that maps SKU to product group and week to month. It is not certified or backed up as a model, yet it is how the company closes the story.

6. **Trust leaks backward into actuals.** If the variance page is always wrong, people start doubting the booked numbers too, and you spend trust you needed for the close. Conflicting tiles are covered in [different numbers](/blog/why-power-bi-reports-show-different-numbers). A broken plan-to-actual join schedules them on purpose.

You do not need a promised accuracy percentage from a planning vendor. If the chair still asks “is this the same month,” the bridge failed.

A tie needs one calendar, one freeze, a mapping in the model, and either one sentence on both sides or two named measures allowed to differ in public. Author in Excel, then land the plan as a table with period, grain, measure, version, and freeze. Match the grain you will manage, because silent allocation is fiction.

## How to connect plan and actuals

1. **Freeze the calendar first.** Use one date table for both facts. Pick fiscal, 4-4-5, or civil, whichever the review already uses, and write down which day weeks start. If the forecast process cannot adopt that table, stop. You are not ready to subtract.

2. **Name the grain and the mapping.** Decide which key will join. If the plan is at product group and actuals are at SKU, the map becomes a product in the model with an owner, not a private tab. Changes to the map go through change control, not a quiet paste.

3. **Split the words.** Forecast Shipments and Actual Revenue may be different measures, but they may not share a title. Then variance is honest: either you are comparing named things or you are not comparing yet.

4. **Land the plan as a versioned fact.** Each lock is a version, and the variance page filters to the version the meeting called. Actuals refresh while the plan stays put. Connect the workbook instead of pasting last month’s columns into a new file that breaks the join.

5. **Put variance on the kernel, not in a side deck.** The certified model holds actuals, the landed plan, and the join, and the pack reads from it. Once you have keys, a slide that rebuilds the gap in Excel is a process miss. Keep formatted commentary in Excel, connected.

6. **Review the miss at the grain you planned.** If you planned at product group, do not punish a SKU surprise as if it were a forecast error. Give the ELT exception lists and give the plan owner the grain. Wrong grain is one reason [nobody opens the dashboard](/blog/nobody-opens-the-dashboard).

If you cannot say which plan the ELT actually runs, start with the [Data & AI Strategy Roadmap](/analytics-ai-strategy-roadmap). Ownership of measures and the landing path sits in [Managed Data & AI Advisory](/managed-advisory-retainer). A [Quickstart](/power-bi-quickstart) can land one domain’s plan next to actuals without boiling the full planning stack.

## What good looks like

The meeting opens a variance that already shares a month, and nobody asks which calendar.

The plan version is visible and the actuals are stamped. The gap is mix, volume, or price, not “we used different files.”

The mapping has an owner, the forecast workbook connects, and the narrator is optional.

## Frequently asked questions

**Should the forecast live in Power BI?**
The *join* should. Authoring can stay in Excel, but the lock must land as a fact with keys. A visual of a pasted range is not a tie.

**Do we need a new planning tool first?**
Not to get one calendar, one grain map, and one landed version into the model you already use for actuals. A tool without those three still will not tie.

**What if sales and finance will not share a definition?**
Then do not subtract. Publish two named measures. A forced tile just starts a meeting about whose number is “real.”

## Get started

Stop bridging plan and actuals with a meeting. Give them the same calendar, grain, and lock.

Want to see where the forecast still cannot subtract from the books? [Book a session](/contact). We’ll map the calendar, the keys, and the version the next review should already be on. Or start with a [free Model Health check](/power-bi-model-health).

<!-- wordcount: 1221 -->
