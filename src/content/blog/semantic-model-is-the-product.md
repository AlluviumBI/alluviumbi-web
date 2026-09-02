---
title: "The Semantic Model Is the Product. The Report Is the Brochure."
description: "Executives buy reports. The durable asset is the model: measures, grain, relationships, owners."
pubDate: 2026-05-22
tags:
  - Power BI
  - Semantic Model
draft: false
---

Executives buy reports. They point at a page and ask when it will be done.

The durable asset is not the page. It is the semantic model underneath: measures, grain, relationships, and a named owner. The report is the brochure. Brochures get redesigned. Products get funded.

![Black-and-white layered stone riverbank standing in for a model under the surface](/blog/semantic-model-is-the-product-hero.jpg)

## The problem

The budget conversation starts with dashboards. How many. For whom. By when.

That is how you get a beautiful cover on a weak product. Measures disagree. Grain is whatever the last extract allowed. Relationships were inferred in a hurry. Nobody can say who is allowed to change “margin.”

Then a new question arrives. The team builds another report. They copy the model. They tweak one measure. Now you have two products and one brochure war.

Power BI did not fail. The funding model failed. You paid for pages. You underpaid the thing pages read.

This is not a DAX tutorial. You do not need to know how a measure is written. You need to know what you are actually buying.

## What a semantic model is, in executive language

A semantic model is the agreed meaning of the business, in a form the platform can refresh.

**Grain.** What is a row. An invoice. A shipment. A day of inventory. If grain is fuzzy, every total is an argument waiting to happen.

**Relationships.** How those rows connect. Customer to order. Order to cash. Item to plant. If the join is wrong, the brochure will still look confident.

**Measures.** The definitions leadership will argue from. Revenue. Gross margin. Fill rate. Working capital days. Named. Documented. Owned.

**Owners.** Who may change those definitions. Who signs the refresh window. Who answers when the number moves.

That is the product. The report is how a role sees it. Finance may need a P&L layout. Ops may need a line. The CEO may need five tiles. Same product. Different covers.

If finance still pastes actuals into Excel because they do not trust the model, that is the split in [Excel vs Power BI for financial reporting](/blog/excel-vs-power-bi-financial-reporting). Keep the pack. Fund the actuals layer.

## The costs of funding the brochure

1. **You rebuild the same logic every quarter.** A new page needs a new copy of “revenue.” Analysts re-implement. Definitions drift. The meeting spends twenty minutes on whose brochure is right.

2. **Every department ships a private product.** Sales has a model. Finance has a model. Ops has a model. Each is locally correct. Together they are three companies. Conflicting numbers are the meeting symptom. See [Why Power BI Reports Show Different Numbers](/blog/why-power-bi-reports-show-different-numbers). The structural cause is unfunded shared meaning.

3. **Refresh and performance tax the wrong layer.** Bloated, copied models fight capacity. You tune visuals. The product is still a snowflake of extracts. Slow pages are often a model problem wearing a chart.

4. **AI and “ask a question” fail in public.** Natural language on a messy model invents answers from disagreed measures. Chat does not create a definition. It recites whatever you already failed to agree.

5. **Turnover wipes the asset.** The person who “knew the file” leaves. The brochure remains. The product was tribal. You cannot hand a page to a new controller and call that continuity.

6. **The CEO cannot tell spend from progress.** License counts go up. Report counts go up. The Monday number is still late. You bought inventory of covers.

Poor governance makes this worse. Access sprawl, no stewardship, no sunset. That is the framework in [hidden costs of poor Power BI governance](https://www.alluviumbi.com/blog/the-hidden-costs-of-poor-power-bi-governance-and-how-to-fix-it). Funding the model is the capital decision inside that framework.

## What the CEO and CFO should fund

Fund one official actuals product for the decisions that hit the P&L. Not fifty. One, then a second if the first is trusted.

Fund the steward’s time. A model without hours is a hobby. Someone has to review measures, refresh failures, and requests to change grain.

Fund the fence. Certified model. Sandbox models. The brochure for the board reads the certified one only.

Fund Excel as a consumer, not as a second general ledger. Connected workbooks are fine. Parallel actuals are not.

Do not fund a visual redesign as a substitute for grain. Pretty does not fix a fact table that is the wrong shape.

Do not fund a platform tour because the model is embarrassing. If one model does not work, another logo will not.

If you cannot name the three decisions the model must serve, start with strategy, not a new canvas. The [Data & AI Strategy Roadmap](https://www.alluviumbi.com/-data-ai-strategy-roadmap) is for that conversation. Day-to-day ownership of the product is closer to [Managed Data & AI Advisory](https://www.alluviumbi.com/managed-data-ai-advisory).

## How to fix it

1. **Name the product in writing.** One sentence. “This model is the company’s booked actuals at invoice grain, owned by Finance, refreshed before 7 a.m. on business days.” If you cannot write the sentence, you do not have a product. You have files.

2. **Put measures on a short list.** The ten (or fewer) the ELT will not argue about twice. Write what is in and what is out. Returns. Intercompany. Bill-and-hold. The brochure can show more. The product’s contract is the short list.

3. **Assign a steward with a veto.** Analysts can propose. The steward publishes. If two teams can publish “the” margin, you funded two products. That operating decision is SSOT. This post is the asset. SSOT is who is allowed to stamp it.

4. **Make reports thin.** Pages should be filters, layout, and audience. They should not hide a private copy of revenue. If a report needs a different grain, that is a product change, not a visual trick.

5. **Connect the artifacts that already run the company.** Board pack. Flash. Plant huddle. Point them at the model. If they still paste, the product is not in production. You shipped a demo.

6. **Prove one loop, then stop copying.** One domain. One certified model. Two or three brochures. Same numbers in the meeting. Then you earn the next domain. A [Power BI Quickstart](/power-bi-quickstart) can force that loop on one painful report—but only if the report sits on a model you intend to keep.

## What this is not

It is not “all finance in the model.” Scenarios, commentary, and pixel-precise statements can stay in Excel. The product supplies actuals. Judgment stays human.

It is not a star-schema lecture. Star schemas matter because they keep grain honest. The CFO funds honesty, not a diagram.

It is not waiting for a perfect warehouse. Many mid-market models start on a clean extract plus disciplined measures. Perfect is how the brochure factory keeps running.

## What good looks like

The CEO asks for a new cut. The answer is a filter or a thin page, not a new dataset.

The CFO changes a policy—when revenue is recognized, what scrap is. The steward changes one measure. Every brochure moves together.

A new plant manager gets access to the same product, restricted to their rows. They do not get a fork.

Capacity is spent refreshing the product, not twenty cousins.

You still have reports. You just stopped treating them as the thing you own.

## Get started

If your last analytics budget was a list of dashboards, you bought brochures.

Need a 30-minute look at whether you have a product or a pile of pages? [Contact Alluvium](/contact). We will name the model, the steward, and the three measures that should be official—not a redesign of the cover.

[Book a 30-minute consult](/contact).

<!-- wordcount: 1256 -->
