---
title: "When Every Team Builds Their Own Semantic Model"
description: "Five models named Revenue is not agility. It is five closes."
pubDate: 2026-06-26
tags:
  - Power BI
  - Semantic Model
  - Governance
draft: false
---

Five models named Revenue is not agility. It is five closes.

Team workspaces feel fast. Each group gets a dataset, a hero page, and a number that matches how they already talk. Then the ELT meeting has five revenues. You did not enable self-service. You franchised the general ledger.

![Black-and-white five saplings planted in a row in an open field](/blog/every-team-built-their-own-model-hero.jpg)

## This is not report sprawl, and it is not the SSOT slide

Too many pages is a tax on refresh and attention: [dashboard sprawl is not self-service](/blog/dashboard-sprawl-is-a-tax). You can retire reports. Duplicate models are heavier. Each one is a product with measures, grain, and a refresh job. Sprawl is inventory of brochures. This post is inventory of products.

Single source of truth is the decision about who may publish the company number: [SSOT is a decision, not a slogan](/blog/single-source-of-truth-is-a-decision). You still need that decision. This piece is the architecture that makes the decision expensive—or cheap. Shared enterprise model versus a model per team workspace. The org chart copied into datasets.

Conflicting tiles in a meeting are the symptom: [why Power BI reports show different numbers](/blog/why-power-bi-reports-show-different-numbers). Source, definition, timing. Multiple models named Revenue are how you industrialize that symptom.

## Why teams build their own

They were blocked. IT took weeks. The certified model lacked a dimension they needed. Someone said “don’t wait.” A workspace later, they have a private actuals layer.

They were proud. Local grain felt more true. Sales wanted bookings. Finance wanted booked. Ops wanted shipped. Each is a real concept. None needed a private copy of the whole business. They needed names.

They were copied. A contractor left a file. A plant cloned it. A region cloned the plant. Now you have a clone tree of datasets and no parent.

Self-service that works has a thin shared product and a wide sandbox. Sandbox models may explore. They may not be named Revenue in an exec channel. Self-service that fails is every team shipping a production ledger.

[The semantic model is the product](/blog/semantic-model-is-the-product). When every team ships a product, you are a conglomerate of analytics companies that share a logo.

## The costs of a model per team

1. **You close the books five times.** Not in accounting. In meetings. Each model is a close: refresh, reconcile, explain. Leadership pays the close tax whenever two teams present. Calendar is the bill.

2. **Measures fork in silence.** Freight in, freight out. Returns. Intercompany. The sentence was never shared, so it never stayed shared. Unexplained KPIs make this worse. Duplicate products guarantee it.

3. **Capacity and gateways multiply.** Five models pull the same fact five ways. Failures happen five times. You tune capacity. The architecture is still a snowflake of extracts. Performance looks like a platform problem. It is a copy problem.

4. **Security becomes a suggestion.** Row-level rules live on some models and not others. The “open” team dataset becomes the leak. Access reviews cannot keep up with a new workspace per initiative.

5. **Change cannot land once.** Policy changes—recognition, plant hierarchy, scrap code. You must find every cousin. You will miss one. That cousin will present next month as the truth.

6. **Turnover shatters the map.** Each private product had a local hero. They leave. You inherit datasets named after people and quarters. Continuity was never designed. It was a side effect of whoever was nice in Teams.

Governance cost is broader in [hidden costs of poor Power BI governance](https://www.alluviumbi.com/blog/the-hidden-costs-of-poor-power-bi-governance-and-how-to-fix-it). Team-owned production models are how that cost shows up as five revenues.

No invented program, no invented dollar. If you can list two datasets that both claim the company number, you are already paying.

## What a shared enterprise model is—and is not

It is not one giant table that makes finance, ops, and HR miserable.

It is a certified product per domain that leadership will not argue twice. Actuals. Inventory. Throughput. Pipeline if you even allow pipeline near revenue. Each has a steward. Team workspaces consume. They do not republish the kernel.

It is not a ban on local models. Local models are for local questions: a campaign cut, a kaizen slice, a what-if. They are labeled. They cannot feed the board pack. They cannot reuse the English word that the enterprise product already owns.

It is not “everyone in one workspace.” Workspaces can still match teams. The dataset should not.

If you cannot name the domains, you will either freeze publishing or bless every clone. That is a [roadmap](https://www.alluviumbi.com/-data-ai-strategy-roadmap) conversation before it is a capacity SKU.

## How to fix it

1. **Inventory models, not just reports.** Name, owner, last refresh, which English words they publish, whether exec channels read them. Usage on pages will lie. The dataset list will not.

2. **Pick the enterprise products first.** One actuals model finance will sign. One ops model at the grain the plant needs. Maybe a third. Not twenty. Certification is a promise on a product, not a badge on every team file.

3. **Make team workspaces consumers.** Thin reports. Composite models that read the certified kernel and add local dimensions only when they must. If they must change a company measure, that is a request to the steward, not a fork.

4. **Rename the clones in public.** `Revenue_Sales` becomes `Bookings`. `Revenue_Ops` becomes `Shipped`. Honesty in the name is how you stop five closes without a fistfight. The SSOT decision still names who publishes `Revenue`. Architecture makes that decision enforceable.

5. **Fence exec channels.** Board pack, ELT review, plant scorecard at company level—certified kernel only. Sandbox models are visible as sandbox. If a leader wants a clone in the room, they are asking for a second close. Say that.

6. **Retire on a date, with a redirect.** After the shared product answers the meeting, turn off the team ledgers that were pretending to be company actuals. Keep a sandbox if they still need to explore. Do not keep a shadow GL. A [Power BI Quickstart](/power-bi-quickstart) can collapse two revenues onto one product for one meeting—then you earn the next domain.

Day-to-day stewardship of the kernel is closer to [Managed Data & AI Advisory](https://www.alluviumbi.com/managed-data-ai-advisory) than to another workspace template.

## What good looks like

Sales, finance, and ops still have pages. They filter one actuals product. Bookings and shipped have their own names.

A new team gets a workspace and a live connection. They do not get a copy of the fact table as a going-away gift.

A measure change lands once. Brochures move together.

Capacity refreshes a few products, not a tree of clones.

You still have self-service. You stopped confusing it with a private ledger.

## Get started

If every team owns a model named like the P&L, you do not have agility. You have parallel closes.

Need a 30-minute look at how many products you are actually running? [Contact Alluvium](/contact). We will list the datasets that claim the company numbers, name the kernel, and pick one clone to retire.

[Book a 30-minute consult](/contact).

<!-- wordcount: 1157 -->
