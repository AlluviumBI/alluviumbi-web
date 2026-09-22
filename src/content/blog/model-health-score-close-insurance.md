---
title: "A Model Health Score Is Not a Vanity Metric. It's Close Insurance."
description: "Score Power BI relationships, bloat, and DAX risk before month-end. Treat model health like close insurance, not a dashboard garnish."
pubDate: 2026-09-22
tags:
  - Power BI
  - Model Health
  - Governance
  - Close Risk
draft: false
---

The close pack looks fine until someone drills into margin.

A relationship fans out. An unused ERP column bloated VertiPaq overnight. A nested CALCULATE returns a number nobody can defend. Refresh is green. The meeting is not.

That is model debt discovered in public. A model health score exists to find it before the room does.

![Black-and-white construction site with rebar, steel forms, and workers on a concrete floor](/blog/model-health-score-close-insurance-hero.svg)

## Close insurance, not a garnish

Mid-market finance and ops teams live on Power BI semantic models that grew under deadline. Columns stayed "just in case." Bidirectional filters solved one visual and broke three others. Measures multiplied without a steward.

A health score that inspects relationships, size, and DAX risk is not a vanity tile for the analytics wiki. It is how you price the chance that month-end will argue with the model instead of the business.

This sits next to [the semantic model is the product](/blog/semantic-model-is-the-product). Products get inspected. Brochures get admired. If the model feeds close or the plant stand-up, treat structural risk like you treat [refresh failures](/blog/refresh-failures-are-a-close-risk): early, named, and boring.

A score without an owner is still garnish. A score on the close checklist with a named fixer is insurance.

## The costs of discovering model debt in the meeting

1. **Finance loses the morning to structure, not strategy.** Controllers chase why margin doubled after a filter change. The debate is modeling, not operations. Close time burns on graph cleanup.

2. **Ops stops believing the board.** Scrap and schedule tiles flip when a many-to-many bridge misbehaves. Supervisors open Excel. Trust leaves faster than the ticket.

3. **Green refresh hides red structure.** [Refresh can succeed while the data is still wrong](/blog/refresh-succeeded-data-still-wrong). A healthy pipeline over a sick model is confident wrongness.

4. **Capacity and gateway take the blame.** Slow visuals look like Premium or the [on-prem gateway](/blog/on-prem-gateway-close-risk-you-dont-monitor). Often the model is overweight and over-connected. Wrong fix. Same pain next month.

5. **Every hotfix creates the next landmine.** Someone adds another CALCULATE wrapper to "make the tile match." [Measures nobody can explain](/blog/measures-nobody-can-explain) accumulate. The score drops. Nobody watches.

6. **Certification becomes theater.** A badge on a bloated, relationship-risky dataset teaches the room that endorsement is cosmetic. See [certified versus wild west](/blog/certified-datasets-vs-wild-west).

7. **Bus-factor risk compounds.** Only one author knows why the star became a snowflake. They are on PTO during close week. The score would have flagged the fragile parts. Tribal memory did not.

8. **Leadership funds dashboards, not product care.** Budget goes to new pages. Structural debt compounds unpaid. Surprises feel random. They are not.

## How to fix it: score before close, act on the score

1. **Define what "health" means for close-critical models.** Relationships (cardinality, bidirectional risk, many-to-many without owners). Bloat (unused columns, wide facts, dead tables). DAX risk (nested CALCULATE sprawl, duplicate time intelligence, orphaned measures). Keep the rubric short enough to run monthly.

2. **Put the score on the close calendar.** Week before close: run the score on every dataset that feeds flash, inventory, or plant stand-up. Treat a failing score like a failed bank feed—not like a nice-to-have lint report.

3. **Name an owner per model.** Not "the BI team." A person who can change relationships and measures, plus a backup. Same living ownership idea as [who can change a measure](/blog/who-can-change-a-measure).

4. **Fix the top three risks, not the whole catalog.** Cut unused columns that never reach a visual. Break or document dangerous bidirectional filters. Replace the worst unexplained measures with stewarded definitions. Ship a healthier model into close week. Expand later.

5. **Separate "loaded" from "trusted for decisions."** A dataset can refresh and still be blocked from the executive app until health gates pass. Pair structural checks with the quality gates in [refresh succeeded, data still wrong](/blog/refresh-succeeded-data-still-wrong).

6. **Instrument size and refresh minutes as business signals.** VertiPaq growth and gateway minutes climbing before close are early warnings. Alert the model owner, not only capacity admins.

7. **Require a health note in change control.** Before promoting a model change into the Monday pack, record score delta: relationships touched, columns added, measures rewritten. Silent growth is how garnish returns.

8. **Demote certification when the score collapses.** Endorsement without structure is [badge theater](/blog/certified-datasets-vs-wild-west). Write the demotion path. Use it.

9. **Teach the room one sentence.** "We do not argue from models below the health bar." When leadership asks for a number from a sick twin, redirect to the product model. Consistency beats convenience.

10. **Review false greens after close.** Which models scored poorly but still entered the pack? Which surprises were structural? Promote those into next month's automated checks. Shrink the gap between "it refreshed" and "it is safe to decide from."

## What good looks like

The close checklist lists model health beside ERP extract status and gateway checks. Owners see relationship and bloat flags before finance opens the pack. Fixes land in the week before close, not in the meeting chat.

Executives still ask hard questions. They stop asking why the model contradicts itself. Analytics stops performing emergency surgery under fluorescent lights.

The score is visible, owned, and consequential. It is not a wallpaper metric on an internal portal nobody opens.

## A practical monthly rhythm

Week one after close: run the score on the five datasets behind flash and stand-up. Triage the top risks with the steward.

Mid-month: burn down unused columns and unexplained measures on the worst offender. Re-score. Confirm refresh minutes did not spike.

Week before close: freeze structural changes except P0 fixes. Re-run the score. If it fails, keep the dataset out of the executive app until it passes—or publish with an explicit quality banner and a named exception owner.

That rhythm is dull on purpose. Dull beats dramatic month-ends.

Pair the rhythm with honest labels in the Service. If a model carries known relationship risk into close week, say so in the description. If bloat is scheduled for cleanup after flash, write the date. Hidden exceptions are how garnish returns under a healthy-looking score.

Do not wait for a perfect scoring platform. Start with a checklist: relationship inventory, column usage, measure ownership, and size trend. Automate next. The first win is knowing the debt before the CFO does.

Leaders should ask a sharper question than "did the dataset refresh?" Ask "what is the model health status for the pack we are about to argue from?" That question alone changes how teams prioritize structural work.

## Executive takeaway

A model health score is close insurance when it has a rubric, an owner, and a seat on the close calendar.

Treat relationships, bloat, and DAX risk as decision risk. Score before the meeting. Fix the few things that can wreck the pack. Then green refresh means more than plumbing—it means the product is fit for the room.

Need a scored look at whether your Power BI models are close-ready or close-risky? Start with a [Power BI model health score](https://www.alluviumbi.com/power-bi-model-health), or [contact Alluvium](https://www.alluviumbi.com/contact). We will map health signals on the datasets your flash and stand-up depend on, and the ownership gaps that turn model debt into meeting debt.
