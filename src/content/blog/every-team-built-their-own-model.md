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

Team workspaces feel fast. Each group gets a dataset, a hero page, and a number that matches how it already talks. Then the ELT meeting has five revenues. You did not enable self-service. You franchised the general ledger.

![Black-and-white five saplings planted in a row in an open field](/blog/every-team-built-their-own-model-hero.jpg)

## This is not report sprawl, and it is not the SSOT slide

Too many pages is a tax on refresh and attention, as covered in [dashboard sprawl is not self-service](/blog/dashboard-sprawl-is-a-tax). You can retire reports. Duplicate models are heavier, because each one is a product with measures, grain, and a refresh job. Sprawl is an inventory of brochures. This post is about an inventory of products.

[Single source of truth is a decision](/blog/single-source-of-truth-is-a-decision) about who may publish the company number, and you still need that decision. This piece is about the architecture that makes the decision expensive or cheap: a shared enterprise model versus a model per team workspace, with the org chart copied into datasets.

Conflicting tiles in a meeting are the symptom, with source, definition, and timing as the usual causes ([why Power BI reports show different numbers](/blog/why-power-bi-reports-show-different-numbers)). Multiple models named Revenue are how you industrialize that symptom.

## Why teams build their own

Some were blocked. IT took weeks, the certified model lacked a dimension they needed, and someone said “don’t wait.” One workspace later, they have a private actuals layer.

Some were proud. Local grain felt more true. Sales wanted bookings, finance wanted booked, and ops wanted shipped. Each is a real concept, and none needed a private copy of the whole business. They needed names.

Some were copied. A contractor left a file, a plant cloned it, and a region cloned the plant. Now you have a clone tree of datasets with no parent.

Self-service that works has a thin shared product and a wide sandbox. Sandbox models may explore, but they may not be named Revenue in an executive channel. Self-service that fails is every team shipping a production ledger.

[The semantic model is the product](/blog/semantic-model-is-the-product). When every team ships a product, you are a conglomerate of analytics companies that happen to share a logo.

## The costs of a model per team

1. **You close the books five times.** Not in accounting, but in meetings. Each model is its own close of refresh, reconcile, and explain, and leadership pays for it in calendar time whenever two teams present.

2. **Measures fork in silence.** Freight in, freight out, returns, intercompany. The sentence was never shared, so it never stayed shared. Unexplained KPIs make this worse, and duplicate products guarantee it.

3. **Capacity and gateways multiply.** Five models pull the same fact five ways, and failures happen five times. It looks like a platform problem. It is a copy problem.

4. **Security becomes a suggestion.** Row-level rules live on some models and not others, and the “open” team dataset becomes the leak. Access reviews cannot keep up with a new workspace per initiative.

5. **Change cannot land once.** When policy changes, whether recognition, plant hierarchy, or a scrap code, you have to find every cousin. You will miss one, and that cousin will present next month as the truth.

6. **Turnover shatters the map.** Each private product had a local hero, and heroes leave. You inherit datasets named after people and quarters. Continuity was a side effect of whoever was helpful in Teams.

The broader governance cost is covered in [hidden costs of poor Power BI governance](https://www.alluviumbi.com/blog/the-hidden-costs-of-poor-power-bi-governance-and-how-to-fix-it). Team-owned production models are how that cost shows up as five revenues. If you can list two datasets that both claim the company number, you are already paying it.

## What a shared enterprise model is, and is not

It is not one giant table that makes finance, ops, and HR miserable.

It is a certified product per domain that leadership will not argue about twice: actuals, inventory, throughput, and pipeline if you allow pipeline anywhere near revenue. Each has a steward. Team workspaces consume the kernel. They do not republish it.

It is not a ban on local models. Local models are for local questions like a campaign cut, a kaizen slice, or a what-if. They are labeled, they cannot feed the board pack, and they cannot reuse the English word the enterprise product already owns.

It is not “everyone in one workspace.” Workspaces can still match teams. The dataset should not.

If you cannot name the domains, you will either freeze publishing or bless every clone. That is a [roadmap](/analytics-ai-strategy-roadmap) conversation before it is a capacity SKU.

## How to fix it

1. **Inventory models, not just reports.** List name, owner, last refresh, the English words each publishes, and whether executive channels read it. Page usage will lie. The dataset list will not.

2. **Pick the enterprise products first.** One actuals model finance will sign, one ops model at the grain the plant needs, and maybe a third. Not twenty. Certification is a promise on a product, not a badge on every team file.

3. **Make team workspaces consumers.** Use thin reports and composite models that read the certified kernel and add local dimensions only when they must. A team that needs to change a company measure sends a request to the steward instead of forking.

4. **Rename the clones in public.** `Revenue_Sales` becomes `Bookings` and `Revenue_Ops` becomes `Shipped`. Honest names are how you stop five closes without a fistfight. The SSOT decision still names who publishes `Revenue`, and the architecture makes that decision enforceable.

5. **Fence executive channels.** The board pack, the ELT review, and the company-level plant scorecard use the certified kernel only, and sandbox models are visibly labeled as sandbox. If a leader wants a clone in the room, they are asking for a second close. Say so.

6. **Retire on a date, with a redirect.** Once the shared product answers the meeting, turn off the team ledgers that were pretending to be company actuals. Keep a sandbox if they still need to explore, but not a shadow GL. A [Power BI Quickstart](/power-bi-quickstart) can collapse two revenues onto one product for one meeting, and that earns you the next domain.

Day-to-day stewardship of the kernel looks more like [Managed Data & AI Advisory](/managed-advisory-retainer) than another workspace template.

## What good looks like

Sales, finance, and ops still have their pages, but they filter one actuals product, and bookings and shipped have their own names.

A new team gets a workspace and a live connection, not a copy of the fact table as a going-away gift.

A measure change lands once and the brochures move together. Capacity refreshes a few products instead of a tree of clones.

You still have self-service. You just stopped confusing it with a private ledger.

## Get started

If every team owns a model named like the P&L, you do not have agility. You have parallel closes.

Want to know how many products you are actually running? [Book a session](/contact). We will list the datasets that claim the company numbers, name the kernel, and pick one clone to retire. Or start with a [free Model Health check](/power-bi-model-health).

<!-- wordcount: 1157 -->
