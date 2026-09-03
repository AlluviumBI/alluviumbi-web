---
title: "Measures Nobody Can Explain Are Not KPIs"
description: "If the author cannot say what a measure includes in one sentence, it is not ready for the exec meeting."
pubDate: 2026-06-16
tags:
  - Power BI
  - Semantic Model
  - KPIs
draft: false
---

A KPI is a named number someone can defend in a sentence. Include this. Exclude that. Grain here. Owner this role.

If the author cannot say that out loud, you do not have a KPI. You have a calculation with a confident label. Labels do not survive an exec meeting.

![Black-and-white row of smooth river stones on a rock](/blog/measures-nobody-can-explain-hero.jpg)

## The problem is the sentence, not the formula

Leaders do not lose the room because DAX is hard. They lose it because “Gross Margin” means three different bags of transactions.

One person includes freight. One does not. One uses standard cost. One uses actual. One is booked. One is shipped. The tile is green. The argument starts anyway.

This is not the same as two reports showing different totals. That meeting is source, refresh, and filters: [Why Power BI Reports Show Different Numbers](/blog/why-power-bi-reports-show-different-numbers). This post is earlier. The measure never had a definition short enough to read. So every consumer invented one.

Power BI will happily plot an unexplained measure. The platform does not require a description. The business does.

You can have a certified model and still ship mystery KPIs. Certification without a sentence is a stamp on fog. The product still matters—[the semantic model is the product](/blog/semantic-model-is-the-product)—but a product catalog with untitled SKUs is not a catalog.

Finance feels this first. Ops feels it on scrap and OEE. Sales feels it on “bookings.” Same failure: a name without a contract.

## What a KPI contract actually contains

Write it in English. One screen. No formula dump.

**Name.** The word leadership will say in the room. Not `GM_v3_final`. Gross margin. On-time. Fill rate. Cash conversion days.

**Includes.** The transactions, adjustments, and entities that sit inside the number. Returns. Intercompany. Bill-and-hold. Uninvoiced receipts. Spell them.

**Excludes.** The things people will try to stuff in later. If you do not write the exclusion, someone will add it in a copy.

**Grain.** What one row is. Invoice. Shipment. Shift. Day of inventory. If grain is missing, totals are coincidences.

**Timing.** Closed books versus operational snapshot. As-of the 7 a.m. refresh versus as-of last close. Timing is a definition, not an IT detail.

**Owner.** Who may change the sentence. Analysts can propose. One steward publishes.

If you cannot fill those five, stop publishing the tile. You are not ready for the exec pack. You are ready for a workshop.

This is not a formula clinic. You do not need a new visual. You need a definition the CFO will sign.

## The costs of unexplained measures

1. **The meeting becomes a glossary.** Twenty minutes go to “what’s in this.” Decisions wait. Calendar is the tax. You paid for insight and bought vocabulary class.

2. **Copies proliferate under friendlier names.** When the official measure cannot be explained, teams invent `Revenue_Ops` and `Revenue_Real`. Each is locally honest. Together they are five closes. The structural cousin is duplicate models. The trigger here is a missing sentence.

3. **Trust dies on a single surprise exclusion.** A leader drills and finds a plant, a customer, or a return they thought was in. Once is enough. They go back to a workbook they wrote themselves. Adoption was never a training problem. It was a contract problem.

4. **Change becomes folklore.** The person who “knew what margin included” leaves. The measure stays. The sentence was never written. Continuity was tribal. A new controller cannot inherit a blank description.

5. **Incentives attach to the wrong bag.** If bonus, forecast, or plant scorecards hang on a KPI nobody can parse, you will optimize the mystery. People will game the unnamed exclusion. That is not malice. That is how unnamed numbers work.

6. **You cannot certify what you cannot say.** Governance catalogs fill with titles. Stewards rubber-stamp files they cannot explain in a minute. Certification becomes interior decorating. Poor governance has a broader cost map in [hidden costs of Power BI governance](https://www.alluviumbi.com/blog/the-hidden-costs-of-poor-power-bi-governance-and-how-to-fix-it). Unexplained measures are how that map shows up in the ELT.

None of this requires a dollar figure from a case study. Watch the room. If the first question is “what does this include,” the KPI failed before the chart loaded.

## What not to do

Do not write a fifty-page metrics bible. Nobody will open it. One sentence per measure, plus a short include/exclude list.

Do not hide the definition in a tooltip only analysts see. Put it where the exec pack lives: description, glossary page, or the footer of the certified report.

Do not rename the measure instead of defining it. `True_Margin` is not a sentence.

Do not treat display format as definition. Two decimals and a % sign do not tell you about freight.

Do not start a DAX rewrite to avoid the conversation. A cleaner formula on an unsigned definition is still unsigned.

If you cannot name the decisions the KPIs serve, you will define everything and own nothing. That is a [strategy roadmap](/analytics-ai-strategy-roadmap) conversation, not a measure sprint.

## How to fix it

1. **Pick the ten numbers the ELT will not argue twice.** Revenue. Margin. Cash. Backlog. Fill rate. Scrap. Whatever your cadence actually uses. Ignore the long tail of analyst convenience measures. Those can wait.

2. **Force the one-sentence test.** The author says, in the room, what is in and what is out. If they hedge, the measure is not a KPI. Park the tile. Keep the workshop.

3. **Write includes, excludes, grain, timing, owner.** Same five fields every time. Store them on the measure description and on a one-page glossary the pack can link. Power BI descriptions are not decoration. They are the contract the model carries.

4. **Publish only after a steward signs the sentence.** Finance for booked actuals. Ops for shift and line. Sales for pipeline if pipeline is even allowed near “revenue.” Dual publishers mean no publisher. That operating choice is [single source of truth](/blog/single-source-of-truth-is-a-decision). This post is the text they stamp.

5. **Retire aliases.** If three measures claim the same English word, keep one. Rename the others to what they actually are: shipped, billed, booked. Honesty in the name is cheaper than another meeting.

6. **Attach the sentence to the artifacts leadership already uses.** Board pack. Flash. Plant huddle. If those still quote unexplained tiles, you documented a drawer. A [Power BI Quickstart](/power-bi-quickstart) can force this on one painful KPI—definition first, page second.

Excel can still present the number. Connected, not re-derived. The boundary is [Excel vs Power BI for financial reporting](/blog/excel-vs-power-bi-financial-reporting). A pasted KPI with no sentence is the same failure in a nicer grid.

## What good looks like

The CEO asks what margin includes. The CFO answers in one breath. The page matches the breath.

A plant manager opens the scorecard. The footer names grain and refresh. They do not call finance to decode a tile.

A measure changes because policy changed. The sentence is edited the same day. Every brochure moves. Nobody discovers the change three weeks later in a surprise.

New hires inherit a glossary, not a legend.

You still have calculations. You stopped pretending a name was a definition.

## Get started

If your exec pack is a gallery of unexplained tiles, you do not have KPIs. You have labeled math.

Need a 30-minute look at which measures would survive a one-sentence test? [Contact Alluvium](/contact). We will pick the ten the ELT actually uses, write the contracts, and park the rest—not a DAX clinic.

[Book a 30-minute consult](/contact).

<!-- wordcount: 1241 -->
