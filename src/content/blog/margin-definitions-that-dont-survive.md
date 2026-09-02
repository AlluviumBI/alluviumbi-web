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

The fight is not finance versus sales versus ops. It is inside finance. Same English word. Three bags of cost. The tile is labeled Margin. The room spends twenty minutes discovering they were never talking about the same bag.

![Black-and-white three mountain peaks in mist, slightly different heights](/blog/margin-definitions-that-dont-survive-hero.jpg)

## One word, three meanings—not three departments

When finance, ops, and sales each bring a different number, you have source, timing, and departmental KPI drift. That meeting is [why Power BI reports show different numbers](/blog/why-power-bi-reports-show-different-numbers). This post is earlier and narrower. One function. One word. Three official-feeling definitions that never got separate names.

**Gross** is a cost-of-sales story. What sits in COGS. Freight in or not. Standard versus actual. Returns. Scrap. The controller can usually say this—if you make them say it.

**Contribution** is a decision story. Which costs move with the order or the plant. Commissions. Outbound freight. Sometimes energy. Sometimes not. Useful for mix and pricing. Fatal if you file it under the same tile as gross and take it to the board.

**“What we tell the board”** is a presentation story. Adjustments, one-times, maybe a view that excludes a shuttered line. It may be honest. It is still a third measure. If it wears the same label as the close, every later comparison is a trap.

A KPI nobody can explain is the sentence missing: [measures nobody can explain are not KPIs](/blog/measures-nobody-can-explain). Here the sentences exist. They contradict. Finance has them in three people’s heads. The model has one column named Margin.

Month-end drag is the calendar: [why month-end still takes a week](/blog/why-month-end-still-takes-a-week). Definition theater is why the pack can be on time and still start with an argument. If the model publishes one Margin, you taught the company there is one. There isn’t.

## Why finance does this

Speed. A request came in as “margin.” Someone picked a calculation that was already in a workbook. The tile shipped.

Politics. Gross looks worse than contribution on a bad mix. The board view looks better after a one-time. Nobody wanted three tiles. They wanted one number that would not get challenged.

History. The old pack had a tab called Margin. It was a paste of whatever that quarter’s story needed. Power BI inherited the tab name and froze last quarter’s story as if it were a standard.

None of that is malice. Trust still dies among people who all report to the CFO.

## The costs of one tile, three bags

1. **The meeting becomes a reconciliation.** Not with sales. With yourselves. Gross versus contribution versus the board view. Twenty minutes gone before a decision. You did not need an external audit. You needed names.

2. **Pricing and mix use the wrong bag.** A contribution number used as if it were gross (or the reverse) changes which SKUs look sacred. People will still act. They will act on a label. The P&L will not share the label’s opinion.

3. **Sign-off never sticks.** The controller signed a sentence. The FP&A lead presents another. The board pack uses a third. Next month nobody will sign, because last month’s signature was used against them. That is why [finance won’t sign off on the dashboard](/blog/finance-wont-sign-off-on-the-dashboard) even when refresh is fine.

4. **Copies fork the bag.** Someone needs “margin without freight” for a customer meeting. They export. Now there is a fourth. The official model still has one tile, so the copies feel justified.

5. **Close and forecast cannot tie.** Forecast built on contribution actuals compared to gross actuals looks like a miss. It may be a dictionary miss. You will still spend the cycle explaining variance that was vocabulary.

6. **The board learns not to trust the word.** Once. After that, every Margin tile is a preamble. You can have perfect DAX and still lose the room. The cost is attention and a reputation inside the finance staff.

If two finance leaders would write different include/exclude lists for the same tile, you already have three measures and one name.

## What not to do

Do not pick a winner in secret and hide the others. The other bags are real. Hide them and they return in Excel.

Do not average them. There is no “blended margin” that satisfies close, pricing, and the board letter.

Do not dump the formula in a tooltip. The room needs English names. Do not let “board margin” overwrite gross in the close model. They can share a model. They cannot share a lie.

## How to fix it

1. **Write three sentences on one page.** Gross. Contribution. Board (or adjusted, or management). Includes. Excludes. Grain. Calendar. Owner. If a cost is “it depends,” it is not in the sentence yet. Finish it before you touch a visual.

2. **Give them different names in the model.** `Gross Margin`. `Contribution Margin`. `Adjusted Margin` (or whatever word your board already uses—use that word, and only for that bag). Stop publishing `Margin`. Ambiguous names are how the meeting restarts.

3. **Map each name to a meeting.** Close pack uses gross (or whatever the controller will sign). Pricing and mix use contribution. Board letter uses the adjusted view, clearly labeled as adjusted. If a forum needs two, show two. Do not collapse them for comfort.

4. **One steward per sentence, under the CFO.** Not three shadow owners. The steward can be the controller for gross and FP&A for contribution. Put it in writing. Changes go through them. A hallway edit to “make it match last year’s slide” is a defect.

5. **Put the three in one certified finance model.** Not three workbooks. Not three datasets named Margin. One product, three measures, descriptions in the model, the same grain of actuals underneath. Certification is the promise on each measure, not a badge on a workspace. Cousin of [certified versus the wild west](/blog/certified-datasets-vs-wild-west), inside one function.

6. **Retire the unlabeled tile and the paste.** When the three names exist in the app, turn off `Margin`. Stop pasting a fourth into the pack. If someone needs a customer cut, they filter contribution (or gross)—they do not mint a file. Excel can still format the statement. It should pull the named measure, not a private bag.

A [Power BI Quickstart](/power-bi-quickstart) can stand up the three names on actuals finance already trusts. Sign-off is [managed advisory](https://www.alluviumbi.com/managed-data-ai-advisory) if the bench is thin. Making the pack *use* the names is [change leadership](https://www.alluviumbi.com/data-project-management-change-leadership). Start in one close cycle. Then the next argument is the business, not the dictionary.

## What good looks like

Someone says “margin” in the room and someone else says “which one.” That is health. Then they pick a name and move.

The board pack labels adjusted as adjusted. Nobody has to discover it in Q&A.

Pricing reviews open contribution without a side file.

The controller will sign gross because it is not being used as a story slide.

## FAQ

**Are there only three?** There are as many as you honestly use. Three is the usual finance split. If you have a fourth (plant contribution, fully loaded, something else), name it. Do not cram it into gross.

**Won’t leaders get confused by three tiles?** They are already confused by one tile that moves. Names reduce the confusion. Training is a sentence, not a course.

## Get started

Stop publishing Margin. Write the three sentences and put three names in the model before the next pack.

Need a 30-minute look at which margin your close, your pricing meeting, and your board are actually using? [Contact Alluvium](/contact). We will map the bags and the names—not a new visual.

[Book a 30-minute consult](/contact).

<!-- wordcount: 1284 -->
