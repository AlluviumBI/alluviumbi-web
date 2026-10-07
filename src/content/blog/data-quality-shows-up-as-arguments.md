---
title: "Data Quality Problems Show Up as Arguments, Not Errors"
description: "Dirty source data rarely throws a red X. It throws a meeting."
pubDate: 2026-07-08
tags:
  - Power BI
  - Data Quality
  - Governance
draft: false
---

The dashboard refreshes and the tile is green. Then two directors argue about customers, about last week’s file, about a blank plant code someone filled in with a guess. Power BI did not fail. The feed never earned a definition. The argument *is* the quality report.

![Black-and-white silted water meeting clearer water at a rocky bank](/blog/data-quality-shows-up-as-arguments-hero.jpg)

## There is no red X for a duplicate customer

People search “Power BI data quality” hoping for a tool that lights up bad rows. Sometimes a refresh does fail, which is a [close risk](/blog/refresh-failures-are-a-close-risk), and you get a ticket.

The expensive case is the one that succeeds. Duplicates land, files arrive late, nulls get coerced into “Other,” and two source systems both look complete. Then the meeting starts.

You already have the detector, and it is the argument. Fund the definitions and the feeds, not another dashboard of “DQ scores” nobody uses at close.

It is also different from two reports that disagree because of different files and filters, which is covered in [why reports show different numbers](/blog/why-power-bi-reports-show-different-numbers). Here the certified page can be honest and still be wrong, because the source was late, doubled, or blank.

Finance feels this as a refused signature, as in [why finance won’t sign off](/blog/finance-wont-sign-off-on-the-dashboard). Ops feels it as a plant that “isn’t in the system.” The row did not complain. The people did.

## The three shapes that turn into debate

**Duplicates.** Two customer keys, two item numbers, or a person and a ship-to both counted as accounts. The model sums them because that is what a fact table does. Revenue looks strong until the controller asks who we actually bill, and nobody can show a surviving key.

**Late files.** The warehouse extract missed the 5 a.m. drop, so yesterday’s inventory still looks current and the stand-up argues about stock that already moved. Timing is a quality problem and a clock problem. If the app does not say “as of,” the room will invent one.

**Nulls treated as facts.** A blank region becomes a slice. A blank reason code becomes an “other” that grows every quarter. Someone fills the hole in a spreadsheet so the page looks complete, but the completeness was theater. Next month the hole is back, and the argument is about who “owns Other.”

None of these require malice, only a feed without a steward.

## What arguments-as-quality cost

1. **The meeting becomes the reconciliation.** Leaders spend the first twenty minutes on whether the file landed instead of what to do. That is not healthy debate. It is unpaid data engineering in the ELT.

2. **Analysts become translators.** Every Monday someone explains the same duplicate, the same late plant, and the same null bucket. Heroics do not scale, and when that person is out, the argument doubles.

3. **Trust dies while uptime looks fine.** IT reports a green refresh and the business reports “we don’t use it,” and both are true. Usage logs will not show a red X. They will show a quiet app and a loud inbox.

4. **Teams fork the model to “fix” their slice.** A plant drops the corporate customer table and maintains its own, and now the duplicate is industrialized. That is how [every team built their own model](/blog/every-team-built-their-own-model).

5. **You buy tooling instead of owners.** You get a catalog of rules nobody ranks while the duplicate is still in the ERP. Platforms do not pick up the phone.

6. **Close and board packs absorb the dirt.** Residuals get labeled “data,” and that word is a shrug. Unnamed dirt is part of why [month-end still takes a week](/blog/why-month-end-still-takes-a-week). Named dirt is a ticket with a steward.

Governance of copies and access is the operating system, covered in [hidden costs of poor Power BI governance](https://www.alluviumbi.com/blog/the-hidden-costs-of-poor-power-bi-governance-and-how-to-fix-it). This piece is about the source layer and what is allowed to land.

## What not to do

Do not pause the program until every source is clean, because you will wait forever. Freeze grain on the dirt that exists, label the residual, and tighten the feed. That is the work of the [first ninety days](/blog/first-90-days-of-a-power-bi-program), not a purity project.

Do not hide nulls to make the visual pretty. A blank is information. A coerced default is a lie that will be discovered in the meeting.

Do not treat “the ERP is wrong” as the end of the conversation. It might be wrong, and then the steward sits in operations or master data, not in the BI team. Name that person. The model still needs a rule for what to do this week.

Do not stand up a quality tool as the strategy. Strategy is deciding which arguments you will stop having. A [roadmap](/analytics-ai-strategy-roadmap) that lists platforms and not stewards will reproduce this problem next year.

## How to turn arguments into a queue

1. **Write down the last five fights.** Skip the framework and use last month’s meetings: a duplicate customer, a late inventory file, a null plant, two ship dates. That list is the quality backlog. If you cannot remember five, the controller and the plant manager can.

2. **Classify each fight as duplicate, late, null, or definition.** Definition problems belong with [measures](/blog/measures-nobody-can-explain) and the steward. Duplicate, late, and null problems belong with the feed and the source owner. Mixing them is how every ticket becomes “the model.”

3. **Put a visible as-of and a row count on the official app.** When the file is late, the page should say so. When duplicate keys blow up the grain, the count should look absurd before the dollar figure does. [The model is the product](/blog/semantic-model-is-the-product), and products have instrumentation.

4. **Name a source steward per feed, not a committee.** Decide who calls the warehouse when the drop misses, who may merge customer keys, and who may map “Other” back to a real reason. IT can host the pipeline, but it cannot invent the customer. [Ownership](/blog/power-bi-project-has-no-owner) splits into source, model, and report. Do not collapse all three into the analyst.

5. **Fix the feed before you fix the visual.** A prettier page on doubled customers is just a more confident error. Deduplicate at the grain you signed, hold the late file or label it stale, and stop filling nulls in the report layer. If Excel is still where a person maps exceptions, connect it on purpose instead of pasting a silent patch.

6. **Retire the argument once the residual is named.** A known timing gap is not a quality incident. An unnamed one is. Finance can sign a residual but not a shrug. Once the fight has a name and an owner, take it off the ELT agenda and put it on a board with a date. Delivery is [how programs actually move](/blog/analytics-programs-fail-in-delivery).

Start with the feed that ruins the meeting you already have.

## What good looks like

The tile is still green. The difference is that the room no longer starts with archaeology.

Duplicates have a surviving key. Late files have a stamp. Nulls stay null until someone whose job it is maps them.

When something is dirty, the argument is short: who owns the residual, and when does it land.

If your quality program is a dashboard of scores, you are measuring the detector. Measure whether the fight left the ELT.

## Frequently asked questions

**Should we stop publishing until sources are clean?**
No. Publish with labels. A stale as-of is honest. A quiet, doubled number is not.

**Isn’t this just master data management?**
Sometimes. Often the fix is a steward and a rule for this week’s close. Do not wait for a multi-year MDM program.

## Get started

Stop waiting for a red X. Treat the last meeting as the quality report.

Want to know which arguments are actually source dirt? [Book a session](/contact). We’ll map duplicates, late files, and nulls to owners, not run a tooling bake-off. Or start with a [free Model Health check](/power-bi-model-health).

<!-- wordcount: 1291 -->
