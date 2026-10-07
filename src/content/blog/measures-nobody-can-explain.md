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

A KPI is a named number someone can defend in one sentence: what is included, what is excluded, the grain, and the role that owns it.

If the author cannot say that out loud, you do not have a KPI. You have a calculation with a confident label, and labels do not survive an exec meeting.

![Black-and-white row of smooth river stones on a rock](/blog/measures-nobody-can-explain-hero.jpg)

## The problem is the sentence, not the formula

Leaders do not lose the room because DAX is hard. They lose it because “Gross Margin” means three different bags of transactions.

One person includes freight and another does not. One uses standard cost, another uses actual. One counts booked, another counts shipped. The tile is green and the argument starts anyway.

This is not the same as two reports showing different totals. That meeting is about source, refresh, and filters, covered in [Why Power BI Reports Show Different Numbers](/blog/why-power-bi-reports-show-different-numbers). This problem comes earlier. The measure never had a definition short enough to read, so every consumer invented one.

Power BI will happily plot an unexplained measure. The platform does not require a description. The business does.

You can have a certified model and still ship mystery KPIs. Certification without a sentence is a stamp on fog. [The semantic model is the product](/blog/semantic-model-is-the-product), but a product catalog full of untitled SKUs is not a catalog.

Finance feels this first. Ops feels it on scrap and OEE, and sales feels it on “bookings.” It is the same failure every time: a name without a contract.

## What a KPI contract actually contains

Write it in plain English on one screen, with no formula dump.

**Name.** The word leadership will say in the room. Not `GM_v3_final`, but gross margin, on-time, fill rate, or cash conversion days.

**Includes.** The transactions, adjustments, and entities inside the number, such as returns, intercompany, bill-and-hold, and uninvoiced receipts. Spell them out.

**Excludes.** The things people will try to stuff in later. If you do not write the exclusion down, someone will add it in a copy.

**Grain.** What one row is: an invoice, a shipment, a shift, a day of inventory. Without grain, totals are coincidences.

**Timing.** Closed books or operational snapshot. As of the 7 a.m. refresh, or as of last close. Timing is part of the definition, not an IT detail.

**Owner.** Who may change the sentence. Analysts can propose changes, but one steward publishes.

If you cannot fill in those five fields behind the name, stop publishing the tile. You are not ready for the exec pack. You are ready for a workshop.

This is not a formula clinic, and you do not need a new visual. You need a definition the CFO will sign.

## The costs of unexplained measures

1. **The meeting becomes a glossary.** Twenty minutes go to “what’s in this” while decisions wait. The calendar pays the tax. You paid for insight and got a vocabulary class.

2. **Copies multiply under friendlier names.** When the official measure cannot be explained, teams invent `Revenue_Ops` and `Revenue_Real`. Each one is locally honest. Together they add up to five closes. Duplicate models are the structural cousin, but the trigger here is a missing sentence.

3. **Trust dies on one surprise exclusion.** A leader drills in and finds a plant, customer, or return they thought was included. Once is enough, and they go back to a workbook they built themselves. Adoption was never a training problem. It was a contract problem.

4. **Change becomes folklore.** The person who “knew what margin included” leaves, and the measure stays. The sentence was never written, so continuity was tribal. A new controller cannot inherit a blank description.

5. **Incentives attach to the wrong bag.** If bonuses, forecasts, or plant scorecards hang on a KPI nobody can parse, people will optimize the mystery and game the unnamed exclusion. That is not malice. That is how unnamed numbers work.

6. **You cannot certify what you cannot say.** Governance catalogs fill up with titles, and stewards rubber-stamp files they cannot explain in a minute. Certification turns into interior decorating. The broader cost map is in [hidden costs of Power BI governance](https://www.alluviumbi.com/blog/the-hidden-costs-of-poor-power-bi-governance-and-how-to-fix-it). Unexplained measures are how that map shows up in front of the ELT.

None of this needs a dollar figure from a case study. Watch the room. If the first question is “what does this include,” the KPI failed before the chart loaded.

## What not to do

Do not write a fifty-page metrics bible, because nobody will open it. Write one sentence per measure plus a short include and exclude list.

Do not hide the definition in a tooltip only analysts see. Put it where the exec pack lives: in the description, on a glossary page, or in the footer of the certified report.

Do not rename the measure instead of defining it. `True_Margin` is not a sentence.

Do not treat display format as the definition. Two decimals and a % sign tell you nothing about freight.

Do not start a DAX rewrite to avoid the conversation. A cleaner formula on an unsigned definition is still unsigned.

If you cannot name the decisions the KPIs serve, you will define everything and own nothing. That is a [strategy roadmap](/analytics-ai-strategy-roadmap) conversation, not a measure sprint.

## How to fix it

1. **Pick the ten numbers the ELT will not argue about twice.** Revenue, margin, cash, backlog, fill rate, scrap, or whatever your cadence actually uses. The long tail of analyst convenience measures can wait.

2. **Force the one-sentence test.** The author says, in the room, what is in and what is out. If they hedge, the measure is not a KPI yet. Park the tile and keep the workshop.

3. **Write includes, excludes, grain, timing, and owner.** Use the same five fields every time. Store them in the measure description and on a one-page glossary the pack can link to. Power BI descriptions are not decoration. They are the contract the model carries.

4. **Publish only after a steward signs the sentence.** Finance signs for booked actuals, ops for shift and line, and sales for pipeline, if pipeline is even allowed near “revenue.” Two publishers means no publisher. That operating choice is covered in [single source of truth](/blog/single-source-of-truth-is-a-decision). This post is about the text they stamp.

5. **Retire aliases.** If three measures claim the same English word, keep one and rename the others to what they really are: shipped, billed, booked. An honest name is cheaper than another meeting.

6. **Attach the sentence to what leadership already uses.** That means the board pack, the flash, and the plant huddle. If those still quote unexplained tiles, you only documented a drawer. A [Power BI Quickstart](/power-bi-quickstart) can force this on one painful KPI, definition first and page second.

Excel can still present the number, as long as it is connected and not re-derived. The boundary is laid out in [Excel vs Power BI for financial reporting](/blog/excel-vs-power-bi-financial-reporting). A pasted KPI with no sentence is the same failure in a nicer grid.

## What good looks like

The CEO asks what margin includes. The CFO answers in one breath, and the page matches the answer. A plant manager opens the scorecard and the footer names the grain and refresh, so nobody calls finance to decode a tile.

When policy changes, the measure changes and the sentence is edited the same day. Every downstream report moves with it, and nobody discovers the change three weeks later. New hires inherit a glossary, not a legend.

You still have calculations. You just stopped pretending a name was a definition.

## Get started

If your exec pack is a gallery of unexplained tiles, you do not have KPIs. You have labeled math.

Want to know which measures would survive a one-sentence test? [Book a session](/contact). We will pick the ten the ELT actually uses, write the contracts, and park the rest. It is not a DAX clinic. Or start with a [Free Model Health check](/power-bi-model-health).

<!-- wordcount: 1241 -->
