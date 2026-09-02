---
title: "Single Source of Truth Is a Decision, Not a Slogan."
description: "SSOT fails when two owners keep two models. It is a named source and a named steward, not a slide."
pubDate: 2026-05-27
tags:
  - Power BI
  - Governance
draft: false
---

Every analytics roadmap has a slide that says “single source of truth.”

Then two owners keep two models. Both get published. Both get used in the same meeting. The slide was not wrong. It was not a decision.

Single source of truth is a named source, a named steward, and a rule about who is allowed to publish “the” number. Until those three exist, SSOT is branding.

![Black-and-white single tree standing alone in an open field](/blog/single-source-of-truth-is-a-decision-hero.jpg)

## The problem

SSOT fails in operations, not in vocabulary.

Finance owns booked revenue. Sales owns a pipeline file they also call revenue. Ops owns shipped. A well-meaning BI team publishes all three as “Revenue.” The CEO asked for one number. The program delivered a slogan plus three stamps.

The meeting that follows is familiar: three slides, three totals. We wrote that symptom in [Why Power BI Reports Show Different Numbers](/blog/why-power-bi-reports-show-different-numbers). Definition, source, refresh. This piece is the decision after the diagnosis. Who is allowed to publish the company’s number, and what happens when someone else still wants to.

Governance is the broader operating system: catalog, access, sunset, education. See [The Hidden Costs of Poor Power BI Governance](https://www.alluviumbi.com/blog/the-hidden-costs-of-poor-power-bi-governance-and-how-to-fix-it). SSOT is one policy inside it. Not a framework recap. A choice.

## What SSOT actually is

It is not “we all use Power BI.”

It is not “we have a warehouse.”

It is not “we certified every dataset.”

It is this sentence, filled in, signed, and enforced:

**For [metric], the official number is [this model / this measure], at [this grain], as of [this refresh], owned by [this role]. Other calculations may exist. They may not be presented as the company number.**

That sentence is uncomfortable. It names winners. It also names the sandbox. Without the second half, unofficial numbers dress up as official the moment they are useful.

A source of truth can be different by metric. Cash might be treasury. Booked revenue might be finance. Fill rate might be ops. SSOT is not one god table. It is one publisher per number that leadership will not argue twice.

## The costs of the slogan

1. **Two stewards means no steward.** If sales and finance can both publish revenue, neither is accountable when they differ. Accountability requires an exclusive right, not a shared adjective.

2. **Meetings re-litigate last quarter’s politics.** The unofficial model survives because a leader likes it. The official model exists because a committee voted. Every cycle you pay again. Time is the tax.

3. **Projects multiply to avoid the decision.** A new dashboard is easier than telling a VP their file is working paper. You fund a brochure factory so you do not have to pick a product. The [semantic model is the product](/blog/semantic-model-is-the-product). SSOT is who may ship it.

4. **Audit and board risk sit on the unofficial copy.** Directors see a pack. Somewhere a twin report still refreshes with a friendlier definition. You cannot defend a number you did not designate.

5. **Self-service becomes a second press.** Exploration is healthy. Publishing is not the same as exploring. When sandbox models leak into ELT decks, you did not enable the business. You outsourced the decision to whoever finished their page first.

6. **Vendors and tools cannot save a non-choice.** A new platform will host two truths as happily as the old one. SSOT is not a SKU.

Sprawl is how the second model stays alive. Inventory, certify, retire. That is the cleanup motion. This is the rule the cleanup enforces.

## What the decision looks like in a mid-market company

The CEO or CFO chairs it. Not the analyst who happened to build the first report.

You pick the metrics that can stop a meeting. Usually a short list. You assign a steward per metric. You write grain and exclusions. You name the certified model. You name what remaining files are.

Then you tell presenters: if it is not the certified measure, label it. “Bookings, sales definition” is honest. “Revenue” on a sales model is not.

Excel can still be the board layout. The actuals in that layout must come from the designated source. Paste is how a second truth sneaks back. See [Excel vs Power BI](/blog/excel-vs-power-bi-financial-reporting).

Plants can still have plant views. Row-level access is not a second truth. A second measure named the same thing is.

## How to fix it

1. **Write the sentence for three metrics.** Not thirty. Revenue. Margin. Cash—or the three your ELT already fights. If you cannot finish the sentence, you are not ready to certify anything else.

2. **Name one steward per metric, with a veto.** Committees can advise. One role publishes. Give them time. A steward with a full-time job and no hours is a slogan with an email signature.

3. **Separate publish from explore.** Certified workspace. Sandbox workspace. The pack and the ELT deck read certified only. Usage logs will tell you what still leaks. Treat leaks as process breaks.

4. **Retire the twin, or relabel it.** The unofficial revenue report either becomes “bookings” with an owner, or it goes away. Living twins are how SSOT dies on a Tuesday.

5. **Change control for the official measure.** When policy changes—returns, intercompany, a new plant—the steward changes the product. Everyone’s brochure moves. A side file that “already had it right” is not a hotfix. It is a fork.

6. **Put the rule on the operating cadence.** Monthly: did any deck use an unlabeled twin? Quarterly: is the steward still the right role? Annually: does this metric still deserve to be official? SSOT that is not reviewed becomes wallpaper.

If the list of official metrics is really a list of every dashboard request, you have a strategy problem. Start with [Data & AI Strategy Roadmap](https://www.alluviumbi.com/-data-ai-strategy-roadmap). If the official report is unused because it is slow or ugly, fix that asset: [dashboard optimization](/power-bi-dashboard-optimization-ai-insights). Ongoing stewardship is [Managed Data & AI Advisory](https://www.alluviumbi.com/managed-data-ai-advisory).

## What this is not

It is not silencing operators. Local measures can exist. They need local names.

It is not a promise that every number in the company will match. Shipments will not equal bookings. Bookings will not equal cash. SSOT says which number you meant, not that physics collapsed.

It is not a six-month MDM program before anyone can report. You can designate booked revenue this month while customer master is still messy. Do not wait for perfect entities to make a publisher decision.

It is not IT “owning the truth.” IT can run the platform. The business owns the definition. If IT is the steward by default, you will get a technically clean number nobody will sign.

## What good looks like

A director asks for the number. One link. One owner. A date on the refresh.

A VP brings a different cut. It is labeled. The room uses it as a cut, not as a coup.

When two reports disagree, you know whether it is a bug in the official product or a sandbox in the wrong meeting. You do not form a task force to re-decide SSOT.

New hires learn the sentence in week one. They do not learn a folklore of files.

## Get started

Stop putting SSOT on slides. Write the sentence. Name the steward. Kill or relabel the twin.

Need a 30-minute session to pick the three metrics and the publishers? [Contact Alluvium](/contact). We will leave with named sources and named owners—not another slogan.

[Book a 30-minute consult](/contact).

<!-- wordcount: 1238 -->
