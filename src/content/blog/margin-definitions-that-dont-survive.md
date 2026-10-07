---
title: "Margin Definitions That Don’t Survive a Meeting"
description: "Gross, contribution, and “what we tell the board” are three measures. Pretending they are one is how trust dies."
pubDate: 2026-07-20
tags:
  - Power BI
  - Finance
  - Semantic Model
draft: false
---

Gross, contribution, and “what we tell the board” are three measures. Pretending they are one is how trust dies.

The fight is not finance versus sales versus ops. It happens inside finance, where one English word covers three bags of cost. The tile says Margin, and the room spends twenty minutes discovering they were never talking about the same bag.

![Black-and-white three mountain peaks in mist, slightly different heights](/blog/margin-definitions-that-dont-survive-hero.jpg)

## One word, three meanings, one department

When finance, ops, and sales each bring a different number, you have source, timing, and departmental KPI drift. That meeting is [why Power BI reports show different numbers](/blog/why-power-bi-reports-show-different-numbers). This post is earlier and narrower: one function, one word, and three official-feeling definitions that never got their own names.

**Gross** is a cost-of-sales story. It covers what sits in COGS: freight or not, standard versus actual, returns, scrap. The controller can usually state it, if you make them.

**Contribution** is a decision story. It covers the costs that move with the order or the plant: commissions, outbound freight, and sometimes energy. It is useful for mix and pricing, and fatal if you file it under the same tile as gross and take it to the board.

**“What we tell the board”** is a presentation story. Adjustments, one-time items, maybe a shuttered line left out. It may be honest, but it is still a third measure. If it wears the same label as the close, every later comparison is a trap.

When a KPI cannot be explained, the definition is missing, as in [measures nobody can explain are not KPIs](/blog/measures-nobody-can-explain). Here the definitions exist, but they contradict each other. Finance holds them in three people’s heads, and the model has one column named Margin.

Month-end drag is a calendar problem, covered in [why month-end still takes a week](/blog/why-month-end-still-takes-a-week). Definition theater is why the pack can arrive on time and still open with an argument. If the model publishes one Margin, you taught the company there is one. There isn’t.

## Why finance does this

Speed is one reason. A request came in for “margin,” someone grabbed a calculation from a workbook, and the tile shipped.

Politics is another. Gross looks worse than contribution on a bad mix, and the board view looks better after a one-time item. Nobody wanted three tiles. They wanted one number that would not get challenged.

Then there is history. The old pack had a tab called Margin, pasted from whatever that quarter’s story needed. Power BI inherited the tab name and froze last quarter’s story as if it were a standard.

None of that is malice. Trust still dies among people who all report to the CFO.

## The costs of one tile, three bags

1. **The meeting becomes a reconciliation.** Not with sales, but with yourselves: gross versus contribution versus the board view. Twenty minutes go before any decision. You did not need an external audit. You needed names.

2. **Pricing and mix use the wrong bag.** A contribution number used as if it were gross, or the reverse, changes which SKUs look sacred. People will still act, but they will act on a label, and the P&L will not share the label’s opinion.

3. **Sign-off never sticks.** The controller signed one definition, the FP&A lead presents another, and the board pack uses a third. Next month nobody will sign, because last month’s signature was used against them. That is why [finance won’t sign off on the dashboard](/blog/finance-wont-sign-off-on-the-dashboard) even when refresh is fine.

4. **Copies fork the bag.** Someone needs “margin without freight” for a customer meeting and exports. Now there is a fourth. The official model still has one tile, so the copies feel justified.

5. **Close and forecast cannot tie.** A forecast built on contribution actuals, compared to gross actuals, looks like a miss. It may be a dictionary miss, but you still spend the cycle explaining variance that was vocabulary.

6. **The board learns not to trust the word.** It only takes once. After that, every Margin tile needs a preamble. You can have perfect DAX and still lose the room. The cost is attention and the finance team’s reputation.

If two finance leaders would write different include and exclude lists for the same tile, you already have three measures and one name.

## What not to do

Do not pick a winner in secret and hide the others. The other bags are real, and if you hide them they come back in Excel.

Do not average them. No “blended margin” satisfies the close, pricing, and the board letter at once.

Do not bury the formula in a tooltip. The room needs English names. Do not let “board margin” overwrite gross in the close model. They can share a model. They cannot share a lie.

## How to fix it

1. **Write three definitions on one page.** Gross, contribution, and board (or adjusted, or management). For each, state what it includes and excludes, the grain, the calendar, and the owner. If a cost is “it depends,” the definition is not finished. Finish it before you touch a visual.

2. **Give them different names in the model.** Use `Gross Margin`, `Contribution Margin`, and `Adjusted Margin`, or whatever word your board already uses for that last one, and use that word only for that bag. Stop publishing `Margin`. Ambiguous names are how the meeting restarts.

3. **Map each name to a meeting.** The close pack uses gross, or whatever the controller will sign. Pricing and mix use contribution. The board letter uses the adjusted view, clearly labeled as adjusted. If a forum needs two, show two rather than collapsing them for comfort.

4. **Assign one steward per definition, under the CFO.** That might be the controller for gross and FP&A for contribution, but it should not be three shadow owners. Put it in writing and route changes through them. A hallway edit to “make it match last year’s slide” is a defect.

5. **Put all three in one certified finance model.** Not three workbooks, and not three datasets named Margin. You want one product, three measures, descriptions in the model, and the same grain of actuals underneath. Certification is the promise on each measure, not a badge on a workspace. It is a cousin of [certified versus the wild west](/blog/certified-datasets-vs-wild-west), inside one function.

6. **Retire the unlabeled tile and the paste.** Once the three names exist in the app, turn off `Margin` and stop pasting a fourth into the pack. A customer cut means filtering contribution or gross, not minting a file. Excel can still format the statement, but it should pull the named measure, not a private bag.

A [Power BI Quickstart](/power-bi-quickstart) can stand up the three names on actuals finance already trusts. If the bench is thin, [managed advisory](/managed-advisory-retainer) can carry sign-off. Getting the pack to *use* the names is [change leadership](https://www.alluviumbi.com/data-project-management-change-leadership). Start with one close cycle, and the next argument will be about the business, not the dictionary.

## What good looks like

Someone says “margin” and someone else asks “which one?” That is healthy. They pick a name and move on.

The board pack labels adjusted as adjusted, so nobody discovers it in Q&A. Pricing reviews open contribution without a side file. The controller will sign gross because it is no longer being used as a story slide.

## FAQ

**Are there only three?** There are as many as you honestly use. Three is the usual finance split. If you have a fourth, such as plant contribution or fully loaded, name it rather than cramming it into gross.

**Won’t leaders get confused by three tiles?** They are already confused by one tile that moves. Names reduce the confusion, and the training is one sentence, not a course.

## Get started

Stop publishing Margin. Write the three definitions and put three names in the model before the next pack.

Want to know which margin your close, your pricing meeting, and your board are actually using? [Book a session](/contact). We will map the bags and the names, not build a new visual. Or start with a [Free Model Health check](/power-bi-model-health).

<!-- wordcount: 1284 -->
