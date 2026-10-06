---
title: "Don't Migrate Every Dashboard. Migrate the Ones That Run the Meeting."
description: "A 200-workbook lift-and-shift burns budget. Score by meeting use and rebuild the top decision loop first, not the whole estate."
pubDate: 2026-10-01
tags:
  - Power BI
  - Migration
  - Manufacturing
  - Finance
draft: false
ctaHref: /power-bi-migration
---

The inventory says two hundred Tableau workbooks. The migration plan says to move all of them. The budget will not survive the plan.

Most of those workbooks do not run a meeting. They were built for a one-off ask, a manager who has since left, or a pilot that never died. Treating file count as scope is how a lift-and-shift eats a year and still leaves Monday on Excel.

Don't migrate every dashboard. Rebuild the ones that run the meeting, and archive the rest on purpose.

![Long warehouse aisle lined with blue industrial racking and palletized boxes](/blog/dont-migrate-every-dashboard-hero.svg)

## Meeting use is the prioritization signal

Mid-market ops, finance, and sales teams already know which views matter: the flash, the plant stand-up, the forecast call, the inventory review. Those cadences have owners, agendas, and consequences.

Workbook sprawl does not. Usage logs help, and meeting maps help more. If nobody can name the recurring decision a workbook supports, it is a candidate to leave behind, not a candidate for careful DAX translation.

[Tableau to Power BI is a rebuild](/blog/tableau-to-power-bi-is-a-rebuild), and rebuild effort is scarce. Spend it where trust changes outcomes. Running a converter across the long tail is how programs miss the meetings that justified the project.

## How estates get treated like sacred inventories

License renewals arrive with a workbook count, and the count becomes the project charter.

Authors fear deletion, so "someone might need it" keeps empty shells alive. It is the same tax [unused columns put on every refresh](/blog/unused-columns-tax-every-refresh), except here it is paid in migration hours.

Consultants bill against inventory completeness. Complete feels safer than ranked, and the safer plan finishes late.

Stakeholders hear "we are migrating Tableau" and imagine every personal view surviving. Nobody manages that expectation, so scope quietly includes nostalgia.

IT equates access continuity with lower risk. Turning off an unused workbook feels riskier than funding it, when the opposite is true for budget and attention.

## The costs of migrating the long tail first

1. **Budget burns on low-stakes sheets.** Months disappear into rarely opened views while the flash still depends on a fragile workbook.

2. **The Monday pack waits.** Leaders judge the migration by the meeting they attend. If that loop comes last, the program looks like a failure while the backlog looks "on track."

3. **Teams learn the wrong habit.** Lift-and-shift becomes the default, grain and ownership never get designed, and the sprawl simply relocates.

4. **Parallel run explodes.** Two hundred dual paths cannot be validated, and spot checks miss the KPI that blows up in the board pack.

5. **The best authors burn out.** Talent goes to trivia, so the team is already tired when the hard measures arrive.

6. **Archive never happens.** Everything is "in progress" and nothing is retired. Dual licenses run longer than the business case allowed.

7. **Self-service stays blocked.** Certified measures for the top meetings ship late, and analysts keep forking personal Tableau logic in the meantime.

8. **Leadership loses patience.** A year in, workbook percent-complete looks fine and decision quality does not. Funding gets cut mid-rebuild.

## How to fix it: score, sequence, retire

1. **Map workbooks to meetings.** For each recurring forum (flash, stand-up, forecast, inventory), list the views on the agenda. That shortlist is tier one.

2. **Score the rest on three signals.** Use meeting use, refresh failure pain, and measure complexity. High complexity without meeting use is a trap: expensive to rebuild, low return.

3. **Publish a three-tier roadmap.** Tier one gets rebuilt now. Tier two gets rebuilt after tier one earns trust. Tier three gets archived, replaced with self-service on certified measures, or deleted.

4. **Rebuild tier one as a semantic model loop.** Do not copy sheets. Build the measures, grain, ownership, and app, then retire the Tableau source for that meeting. It is the same discipline as [certified datasets vs wild west](/blog/certified-datasets-vs-wild-west).

5. **Time-box tier one to a proof.** One domain, one meeting, and one retired workbook beat a forty-page tool comparison. Prove Power BI where it hurts today.

6. **Say no to tier-three rebuilds in writing.** Nostalgia needs an owner and a budget line. Without both, the answer is archive.

7. **Use certified measures to absorb ad hoc demand.** Many long-tail dashboards were personal answers to questions the model should own. Give analysts a governed model instead of two hundred conversions.

8. **Retire on dates, not vibes.** Each migrated meeting gets a Tableau turn-down date. Communicate it, then turn off access. Hope is not a decommission plan.

9. **Re-score quarterly.** New Tableau builds during the migration are scope leaks. Freeze casual new workbooks or require them to land in Power BI.

10. **Report progress as meetings moved, not workbooks converted.** Executives understand "flash runs on Power BI." They do not feel "47% of the estate migrated."

## What good looks like

Ninety days in, the three meetings that run the business open in Power BI. Finance defends the measures, and plant managers have stopped asking for the old file for those loops.

The workbook inventory shrank because tier three was archived with a note instead of pretended into the backlog. Dual licenses start trending down for real.

When someone asks "what about my regional side pack?" the answer is to use the certified model or make a case for tier two, not "we'll convert everything eventually."

## A practical scoring workshop

Block a half day and bring finance, ops, sales ops, and the BI owners.

List the recurring meetings and the decisions each one must make, then attach workbooks. Anything unattached goes to a parking lot.

Rank the attached workbooks by how badly a wrong number hurts. Rebuild order follows pain, not alphabetical file names.

Leave with a one-page tier list, named owners for tier-one KPIs, and a thirty-day proof target.

Then protect the sequence. New asks go through the tier model instead of jumping the queue because a converter demo looked easy.

Leaders should ask which meetings already run on Power BI, and which workbooks they are funding that run no meeting at all. If the second list is long, prioritization failed before the migration started.

## Why lift-and-shift feels responsible

It looks fair, because nobody's dashboard is left out. Fairness is the wrong frame for scarce rebuild capacity.

It looks measurable. Workbook percent-complete charts easily. Meeting trust does not fit a pie chart as neatly, and it still matters more.

It looks reversible. "We can always clean up later." Later rarely gets a budget once the conversion army is gone.

Responsible means moving the decisions that move cash, margin, and service levels, then giving everyone else a governed model so they can answer the next question without inventing another estate.

## Executive takeaway

A two-hundred-workbook lift-and-shift burns budget on the long tail while Monday still waits. Score by meeting use, rebuild the top loop with a real semantic model, archive the rest on purpose, and measure progress in meetings moved, not files converted.

Ready to sequence a migration around the decisions you actually run? [Start a Power BI migration conversation](https://www.alluviumbi.com/power-bi-migration), or [book a session](https://www.alluviumbi.com/contact) to score the estate and pick the first meeting loop. Or start with a [free Model Health check](https://www.alluviumbi.com/power-bi-model-health).
