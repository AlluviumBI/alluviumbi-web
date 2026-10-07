---
title: "Single Source of Truth Is a Decision, Not a Slogan"
description: "SSOT fails when two owners keep two models. It is a named source and a named steward, not a slide."
pubDate: 2026-05-27
tags:
  - Power BI
  - Governance
draft: false
---

Every analytics roadmap has a slide that says “single source of truth.”

Then two owners keep two models. Both get published, and both get used in the same meeting. The slide was not wrong. It just was not a decision.

Single source of truth is a named source, a named steward, and a rule about who may publish “the” number. Until those three exist, SSOT is branding.

![Black-and-white single tree standing alone in an open field](/blog/single-source-of-truth-is-a-decision-hero.jpg)

## The problem

SSOT fails in operations, not in vocabulary.

Finance owns booked revenue. Sales owns a pipeline file it also calls revenue. Ops owns shipped. A well-meaning BI team publishes all three as “Revenue.” The CEO asked for one number and the program delivered a slogan with three stamps.

The meeting that follows is familiar: three slides, three totals. We covered that symptom, with its causes in definition, source, and refresh, in [Why Power BI Reports Show Different Numbers](/blog/why-power-bi-reports-show-different-numbers). This piece is the decision that comes after the diagnosis: who may publish the company’s number, and what happens when someone else still wants to.

Governance is the broader operating system of catalog, access, sunset, and education, covered in [The Hidden Costs of Poor Power BI Governance](/blog/the-hidden-costs-of-poor-power-bi-governance-and-how-to-fix-it). SSOT is one policy inside it. It is not a framework. It is a choice.

## What SSOT actually is

It is not “we all use Power BI.” It is not “we have a warehouse.” It is not “we certified every dataset.”

It is this sentence, filled in, signed, and enforced:

**For [metric], the official number is [this measure in this model], at [this grain], as of [this refresh], owned by [this role]. Other calculations may exist. They may not be presented as the company number.**

That sentence is uncomfortable because it names winners. It also names the sandbox. Without the second half, unofficial numbers dress up as official the moment they become useful.

The source of truth can differ by metric. Cash might belong to treasury, booked revenue to finance, and fill rate to ops. SSOT is not one god table. It is one publisher for each number leadership refuses to argue about twice.

## The costs of the slogan

1. **Two stewards means no steward.** If sales and finance can both publish revenue, neither is accountable when the numbers differ. Accountability requires an exclusive right, not a shared adjective.

2. **Meetings re-litigate last quarter’s politics.** The unofficial model survives because a leader likes it. The official model exists because a committee voted. You pay again every cycle, and time is the tax.

3. **Projects multiply to avoid the decision.** A new dashboard is easier than telling a VP their file is working paper. You fund a brochure factory so you never have to pick a product. [The semantic model is the product](/blog/semantic-model-is-the-product), and SSOT decides who may ship it.

4. **Audit and board risk sit on the unofficial copy.** Directors see a pack while a twin report somewhere still refreshes with a friendlier definition. You cannot defend a number you never designated.

5. **Self-service becomes a second press.** Exploration is healthy, but publishing is not exploring. When sandbox models leak into ELT decks, you did not enable the business. You handed the decision to whoever finished their page first.

6. **No vendor or tool can save a non-choice.** A new platform will host two truths as happily as the old one did. SSOT is not a SKU.

Sprawl is how the second model stays alive. Inventory, certify, and retire is the cleanup motion. SSOT is the rule that cleanup enforces.

## What the decision looks like in a mid-market company

The CEO or CFO chairs it, not the analyst who happened to build the first report.

You pick the metrics that can stop a meeting, which is usually a short list. You assign a steward to each, write the grain and exclusions, name the certified model, and say plainly what the remaining files are.

Then you tell presenters that anything other than the certified measure gets a label. “Bookings, sales definition” is honest. “Revenue” on a sales model is not.

Excel can still be the board layout, but the actuals in it must come from the designated source. Pasting is how a second truth sneaks back in, as covered in [Excel vs Power BI](/blog/excel-vs-power-bi-financial-reporting).

Plants can still have plant views. Row-level access is not a second truth. A second measure with the same name is.

## How to fix it

1. **Write the sentence for three metrics.** Not thirty. Revenue, margin, and cash, or whichever three your ELT already fights about. If you cannot finish the sentence, you are not ready to certify anything else.

2. **Name one steward per metric, with a veto.** Committees can advise, but one role publishes. Give that person time. A steward with a full-time job and no hours is a slogan with an email signature.

3. **Separate publishing from exploring.** Keep a certified workspace and a sandbox workspace, and have the pack and the ELT deck read only from certified. Usage logs will show what still leaks. Treat each leak as a process break.

4. **Retire the twin, or relabel it.** The unofficial revenue report either becomes “bookings” with an owner or it goes away. Living twins are how SSOT dies on a Tuesday.

5. **Put the official measure under change control.** When policy changes, whether for returns, intercompany, or a new plant, the steward changes the product and every brochure moves with it. A side file that “already had it right” is not a hotfix. It is a fork.

6. **Put the rule on the operating cadence.** Monthly, ask whether any deck used an unlabeled twin. Quarterly, ask whether the steward is still the right role. Annually, ask whether the metric still deserves to be official. SSOT that nobody reviews becomes wallpaper.

If your list of official metrics is really a list of every dashboard request, you have a strategy problem, and the [Data & AI Strategy Roadmap](/analytics-ai-strategy-roadmap) is the place to start. If the official report goes unused because it is slow or ugly, fix that asset with [dashboard optimization](/power-bi-dashboard-optimization-ai-insights). Ongoing stewardship is [Managed Data & AI Advisory](/managed-advisory-retainer).

## What this is not

It is not silencing operators. Local measures can exist. They just need local names.

It is not a promise that every number in the company will match. Shipments will not equal bookings, and bookings will not equal cash. SSOT says which number you meant. It does not claim physics collapsed.

It is not a six-month MDM program before anyone can report. You can designate booked revenue this month while the customer master is still messy. Do not wait for perfect entities to decide who publishes.

It is not IT “owning the truth.” IT can run the platform, but the business owns the definition. If IT is the steward by default, you will get a technically clean number nobody will sign.

## What good looks like

A director asks for the number and gets one link, one owner, and a refresh date. A VP brings a different cut, it is labeled, and the room treats it as a cut, not a coup.

When two reports disagree, you know whether it is a bug in the official product or a sandbox in the wrong meeting. Nobody forms a task force to re-decide SSOT. New hires learn the sentence in week one instead of a folklore of files.

## Get started

Stop putting SSOT on slides. Write the sentence, name the steward, and retire or relabel the twin.

Want help picking the three metrics and their publishers? [Book a session with Alluvium](/contact). You will leave with named sources and named owners, not another slogan. If you want a read on the model first, request a [free Model Health check](/power-bi-model-health).

<!-- wordcount: 1302 -->
