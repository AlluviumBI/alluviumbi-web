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

Dirty source data rarely throws a red X. It throws a meeting.

The dashboard refreshes. The tile is green. Then two directors argue about customers, about last week’s file, about a blank plant code that someone filled in with a guess. Power BI did not fail. The feed never earned a definition. The argument *is* the quality report.

![Black-and-white silted water meeting clearer water at a rocky bank](/blog/data-quality-shows-up-as-arguments-hero.jpg)

## There is no red X for a duplicate customer

People search “Power BI data quality” hoping for a tool that will light up bad rows. Sometimes a refresh fails: [close risk](/blog/refresh-failures-are-a-close-risk). You get a ticket.

The expensive case succeeds. Duplicates land. Files arrive late. Nulls get coerced into “Other.” Two source systems both look complete. The meeting starts.

This is not a pitch for a data-quality platform. You already have the detector: the argument. Fund the definitions and the feeds. Do not fund another dashboard of “DQ scores” that nobody uses in close.

It is also not the same as two reports that disagree on purpose. Different files, different filters: [why reports show different numbers](/blog/why-power-bi-reports-show-different-numbers). Here the certified page can be honest and still be wrong, because the source was late, doubled, or blank.

Finance feels this as a refused signature: [why finance won’t sign off](/blog/finance-wont-sign-off-on-the-dashboard). Ops feels it as a plant that “isn’t in the system.” Same pattern. The row did not complain. The people did.

## The three shapes that turn into debate

**Duplicates.** Two customer keys. Two item numbers. A person and a ship-to both counted as accounts. The model sums them because that is what a fact table does. Revenue looks strong. The controller asks who we actually bill. Nobody can show a surviving key.

**Late files.** The warehouse extract missed the 5 a.m. drop. Yesterday’s inventory still looks current. The stand-up argues stock that already moved. Timing is a quality problem. It is also a clock problem. If the app does not say “as of,” the room will invent one.

**Nulls treated as facts.** Blank region becomes a slice. Blank reason code becomes “other” that grows every quarter. Someone fills the hole in a spreadsheet so the page looks complete. Completeness was theater. The next month the hole is back, and the argument is about who “owns Other.”

None of these require malice. They require a feed without a steward.

## What arguments-as-quality cost

1. **The meeting becomes the recon.** Leaders spend the first twenty minutes on whether the file landed, not on what to do. That is not “healthy debate.” That is unpaid data engineering in the ELT.

2. **Analysts become translators.** Every Monday someone explains the same duplicate, the same late plant, the same null bucket. Heroics do not scale. When that person is out, the argument doubles.

3. **Trust dies while uptime looks fine.** IT reports green refresh. The business reports “we don’t use it.” Both are true. Usage logs will not show a red X. They will show a quiet app and a loud inbox.

4. **Teams fork the model to “fix” their slice.** A plant drops the corporate customer table and maintains its own. You industrialize the duplicate. [Every team built their own model](/blog/every-team-built-their-own-model). Quality got worse with a local patch.

5. **You buy tooling instead of owners.** A catalog of rules nobody ranks. The duplicate is still in the ERP. Platforms do not pick up the phone.

6. **Close and board packs absorb the dirt.** Residuals get named “data.” That word is a shrug. Unnamed dirt is how [month-end still takes a week](/blog/why-month-end-still-takes-a-week). Named dirt is a ticket with a steward.

Governance of copies and access is the operating system: [hidden costs of poor Power BI governance](https://www.alluviumbi.com/blog/the-hidden-costs-of-poor-power-bi-governance-and-how-to-fix-it). This piece is the source layer: what is allowed to land.

## What not to do

Do not pause the program until every source is clean. You will wait forever. Freeze grain on the dirt that exists. Label the residual. Tighten the feed. That is the [first ninety days](/blog/first-90-days-of-a-power-bi-program), not a purity project.

Do not hide nulls to make the visual pretty. A blank is information. A coerced default is a lie that will be discovered in the meeting.

Do not treat “the ERP is wrong” as the end of the conversation. It might be. Then the steward is in operations or master data, not in the BI team. Name that person. The model still needs a rule for what to do this week.

Do not stand up a quality tool as the strategy. Strategy is which arguments you will no longer have. A [roadmap](https://www.alluviumbi.com/-data-ai-strategy-roadmap) that lists platforms and not stewards will reproduce this next year.

## How to turn arguments into a queue

1. **Write down the last five fights.** Not a framework. Last month’s meetings. Duplicate customer. Late inventory file. Null plant. Two ship dates. That list is the quality backlog. If you cannot remember five, ask the controller and the plant manager. They remember.

2. **Classify each fight: duplicate, late, null, or definition.** Definition belongs with [measures](/blog/measures-nobody-can-explain) and the steward. Duplicate, late, and null belong with the feed and the source owner. Mixing them is how every ticket becomes “the model.”

3. **Put a visible as-of and a row count on the official app.** When the file is late, the page should say so. When duplicate keys explode the grain, the count should look insane before the dollar does. Quiet success is how dirt hides. [The model is the product](/blog/semantic-model-is-the-product). Products have instrumentation.

4. **Name a source steward per feed, not a committee.** Who calls the warehouse when the drop misses. Who may merge customer keys. Who is allowed to map “Other” back to a real reason. IT can host the pipeline. They cannot invent the customer. [Ownership](/blog/power-bi-project-has-no-owner) splits: source, model, report. Do not collapse them into the analyst.

5. **Fix the feed before you fix the visual.** A prettier page on doubled customers is a more confident error. Deduplicate at the grain you signed. Hold the late file or label it stale. Stop filling nulls in the report layer. If Excel is still the place a human maps exceptions, connect it on purpose. Do not paste a silent patch.

6. **Retire the argument when the residual is named.** A known timing gap is not a quality incident. An unnamed gap is. Finance can sign a residual. They cannot sign a shrug. Once the fight has a name and an owner, take it off the ELT agenda. Put it on a board with a date. Delivery is [how programs actually move](/blog/analytics-programs-fail-in-delivery).

Start with the feed that ruins the meeting you already have.

## What good looks like

The tile is still green. The difference is the room does not start with archaeology.

Duplicates have a surviving key. Late files have a stamp. Nulls stay null until a human with a job maps them.

When something is dirty, the argument is short: who owns the residual, and when it lands.

[Judgment:] if your quality program is a dashboard of scores, you are measuring the detector. Measure whether the fight left the ELT.

## Frequently asked questions

**Should we stop publishing until sources are clean?**
No. Publish with labels. A stale as-of is honest. A quiet, doubled number is not.

**Isn’t this just master data management?**
Sometimes. Often the fix is a steward and a rule for this week’s close. Do not wait for a multi-year MDM program.

## Get started

Stop waiting for a red X. Treat the last meeting as the quality report. Fund stewards and feeds, not another scorecard.

Need a 30-minute look at which arguments are actually source dirt? [Contact Alluvium](/contact). We’ll map duplicates, late files, and nulls to owners—not a tooling bake-off.

[Book a 30-minute consult](/contact).

<!-- wordcount: 1291 -->
