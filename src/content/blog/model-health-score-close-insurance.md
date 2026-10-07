---
title: "A Model Health Score Is Not a Vanity Metric. It's Close Insurance"
description: "Score Power BI relationships, bloat, and DAX risk before month-end. Treat model health as close insurance, not dashboard garnish."
pubDate: 2026-09-22
tags:
  - Power BI
  - Model Health
  - Governance
  - Close Risk
draft: false
---

The close pack looks fine until someone drills into margin.

A relationship fans out. An unused ERP column bloated VertiPaq overnight. A nested CALCULATE returns a number nobody can defend. Refresh is green, but the meeting is not. That is model debt discovered in public, and a model health score exists to find it before the room does.

![Black-and-white construction site with rebar, steel forms, and workers on a concrete floor](/blog/model-health-score-close-insurance-hero.svg)

## Close insurance, not a garnish

Mid-market finance and ops teams run on Power BI semantic models that grew under deadline. Columns stayed "just in case." Bidirectional filters fixed one visual and broke three others. Measures multiplied without a steward.

A health score that inspects relationships, size, and DAX risk is not a vanity tile for the analytics wiki. It tells you how likely month-end is to argue with the model instead of the business.

This sits next to [the semantic model is the product](/blog/semantic-model-is-the-product). Products get inspected, and brochures get admired. If the model feeds the close or the plant stand-up, treat structural risk the way you treat [refresh failures](/blog/refresh-failures-are-a-close-risk): early, named, and boring.

A score without an owner is still garnish. A score on the close checklist with a named fixer is insurance.

## The costs of discovering model debt in the meeting

1. **Finance loses the morning to structure instead of strategy.** Controllers chase why margin doubled after a filter change. The debate is about modeling, not operations, and close time burns on graph cleanup.

2. **Ops stops believing the board.** Scrap and schedule tiles flip when a many-to-many bridge misbehaves. Supervisors open Excel, and trust leaves faster than the ticket gets closed.

3. **Green refresh hides red structure.** [Refresh can succeed while the data is still wrong](/blog/refresh-succeeded-data-still-wrong). A healthy pipeline over a sick model just produces confident wrong answers.

4. **Capacity and the gateway take the blame.** Slow visuals look like a Premium problem or an [on-prem gateway](/blog/on-prem-gateway-close-risk-you-dont-monitor) problem. Often the model is overweight and over-connected. You apply the wrong fix and feel the same pain next month.

5. **Every hotfix plants the next landmine.** Someone adds another CALCULATE wrapper to "make the tile match." [Measures nobody can explain](/blog/measures-nobody-can-explain) pile up. The score drops and nobody watches.

6. **Certification becomes theater.** A badge on a bloated, relationship-risky dataset teaches the room that endorsement is cosmetic. See [certified versus wild west](/blog/certified-datasets-vs-wild-west).

7. **Bus-factor risk compounds.** Only one author knows why the star became a snowflake, and they are on PTO during close week. The score would have flagged the fragile parts. Tribal memory did not.

8. **Leadership funds dashboards, not product care.** Budget goes to new pages while structural debt compounds unpaid. The surprises feel random. They are not.

## How to fix it: score before close, act on the score

1. **Define "health" for close-critical models.** Cover relationships (cardinality, bidirectional risk, many-to-many without owners), bloat (unused columns, wide facts, dead tables), and DAX risk (nested CALCULATE sprawl, duplicate time intelligence, orphaned measures). Keep the rubric short enough to run monthly.

2. **Put the score on the close calendar.** The week before close, run it on every dataset that feeds flash, inventory, or the plant stand-up. Treat a failing score like a failed bank feed, not a nice-to-have lint report.

3. **Name an owner per model.** "The BI team" does not count. You need a person who can change relationships and measures, plus a backup. It is the same living ownership idea as [who can change a measure](/blog/who-can-change-a-measure).

4. **Fix the top three risks, not the whole catalog.** Cut unused columns that never reach a visual. Break or document dangerous bidirectional filters. Replace the worst unexplained measures with stewarded definitions. Ship a healthier model into close week and expand later.

5. **Separate "loaded" from "trusted for decisions."** A dataset can refresh and still be held out of the executive app until health gates pass. Pair structural checks with the quality gates in [refresh succeeded, data still wrong](/blog/refresh-succeeded-data-still-wrong).

6. **Treat size and refresh minutes as business signals.** VertiPaq growth and rising gateway minutes before close are early warnings. Alert the model owner, not only the capacity admins.

7. **Require a health note in change control.** Before a model change goes into the Monday pack, record the score delta: relationships touched, columns added, measures rewritten. Silent growth is how garnish comes back.

8. **Demote certification when the score collapses.** Endorsement without structure is [badge theater](/blog/certified-datasets-vs-wild-west). Write the demotion path down and use it.

9. **Teach the room one sentence.** "We do not argue from models below the health bar." When leadership asks for a number from a sick twin, redirect them to the product model. Consistency beats convenience.

10. **Review false greens after close.** Which models scored poorly but still made the pack? Which surprises were structural? Turn those into next month's automated checks, and keep shrinking the gap between "it refreshed" and "it is safe to decide from."

## What good looks like

The close checklist lists model health next to ERP extract status and gateway checks. Owners see relationship and bloat flags before finance opens the pack, and fixes land the week before close instead of in the meeting chat.

Executives still ask hard questions, but they stop asking why the model contradicts itself. Analytics stops doing emergency surgery under fluorescent lights. The score is visible, owned, and consequential, not wallpaper on an internal portal nobody opens.

## A practical monthly rhythm

In the first week after close, run the score on the five datasets behind flash and stand-up, and triage the top risks with the steward.

Mid-month, burn down unused columns and unexplained measures on the worst offender. Re-score and confirm refresh minutes did not spike.

The week before close, freeze structural changes except P0 fixes and re-run the score. If it fails, keep the dataset out of the executive app until it passes, or publish it with an explicit quality banner and a named exception owner.

That rhythm is dull on purpose. Dull beats a dramatic month-end.

Pair it with honest labels in the Service. If a model carries known relationship risk into close week, say so in the description. If bloat cleanup is scheduled for after flash, write down the date. Hidden exceptions are how garnish returns under a healthy-looking score.

Do not wait for a perfect scoring platform. Start with a checklist covering relationship inventory, column usage, measure ownership, and size trend, then automate. The first win is knowing about the debt before the CFO does.

Leaders should ask a sharper question than "did the dataset refresh?" Ask "what is the model health status of the pack we are about to argue from?" That question alone changes how teams prioritize structural work.

## Executive takeaway

A model health score is close insurance when it has a rubric, an owner, and a seat on the close calendar.

Treat relationships, bloat, and DAX risk as decision risk. Score before the meeting and fix the few things that can wreck the pack. Then a green refresh means more than working plumbing. It means the product is fit for the room.

Want a scored look at whether your Power BI models are close-ready or close-risky? Start with a [Free Model Health check](https://www.alluviumbi.com/power-bi-model-health), or [book a session](https://www.alluviumbi.com/contact). We will map health signals on the datasets your flash and stand-up depend on, plus the ownership gaps that turn model debt into meeting debt.
