---
title: "Power Query Steps Nobody Can Explain Are Refresh Debt"
description: "Opaque Power Query merges and hard-coded filters survive the author and tax every refresh. Require readable steps, named intents, and an owner."
pubDate: 2026-09-24
tags:
  - Power BI
  - Power Query
  - Governance
  - Model Health
draft: false
---

Someone opens the query and finds forty steps. Half are Expanded Column. Three are Filtered Rows with literals nobody remembers. A merge joins on a column that used to mean customer and now means ship-to.

Refresh still runs, until it does not. Or it keeps running and the grain quietly changes.

Opaque M is not cleverness. It is refresh debt that compounds every night.

![Black-and-white close-up of a machinist's hand on a workshop lever and tool](/blog/power-query-steps-nobody-can-explain-hero.svg)

## Readable steps are a close control

Mid-market manufacturers build Power Query under deadline. ERP extracts arrive wide. Someone merges, expands, hard-codes a plant filter, and ships the visual. The author knows what each step meant. The next owner does not.

Then the author leaves, an ERP column gets renamed, or finance changes the exclusion list. The query fails at 2 a.m., or worse, succeeds with the wrong rows. That is the same family of risk as [refresh failures are a close risk](/blog/refresh-failures-are-a-close-risk): silent until the flash opens.

If [the semantic model is the product](/blog/semantic-model-is-the-product), Power Query is the factory floor under it. Products get work instructions. Mystery steps get tribal knowledge and weekend fixes.

Require readable step names, named intents, and a human owner before the next close, not after the gateway has already burned an hour on a broken merge.

## How opaque M shows up

Merged queries keep their default step names, like Merged Queries1 and Expanded TableColumn2, with no note on grain and no note on which side can duplicate.

Filters get hard-coded, such as `Plant = "DAL"` or a customer list pasted into a list step. Business rules live in M instead of a dimension, so when the rule changes, nobody finds the literal.

Type changes and replace-errors swallow bad keys. Refresh stays green while facts drop, and controllers end up reconciling ghosts.

Nested custom functions get copied between files. Desktop feels fine and the Service refresh times out. It is the same pattern as [Desktop fast, Service slow](/blog/power-bi-desktop-fast-service-slow): logic only one machine ever proved.

Parameters go unused while connection strings and folder paths stay buried in steps. The person who knew the share path is gone.

## The costs of steps nobody can explain

1. **Every refresh pays for archaeology.** Gateway minutes and capacity burn on expands and merges that pull columns no visual uses. The debt is metered nightly.

2. **Failures land without a map.** A column rename breaks step 27, and the error names a cryptic step. On-call cannot tell the plant filter from the currency join, so the close slips while someone reverse-engineers M.

3. **A silent grain change is worse than a red X.** A many-side expand duplicates invoice lines and totals inflate. Refresh succeeded and the number is wrong, the same confident wrongness that shows up elsewhere in model health.

4. **Ownership evaporates.** Nobody will touch the query, and tickets pile up on "the person who built the ERP model." It is the same hole as [who can change a measure](/blog/who-can-change-a-measure), except the bottleneck is now the transform layer.

5. **Certification becomes costume.** A [certified dataset](/blog/certified-datasets-vs-wild-west) sitting on unexplained M is a badge over a black box. Trust lasts until the first unexplained variance.

6. **Finance builds a twin.** When the query cannot be defended, Excel absorbs the rule. Dual systems return and the model stops being the product.

7. **Change requests become rewrite projects.** "Add one plant" means reading forty steps. Teams delay and shadow extracts multiply.

8. **Onboarding stalls.** New analysts inherit the fear and duplicate the query "to be safe." Now you have two opaque pipelines instead of one clean one.

## How to fix it: make M boring and owned

1. **Rename every step with its intent.** `Filter active plants`, `Merge invoice to customer on CustomerKey`, `Expand customer name and region only`. If you cannot name the intent in six words, the step is not ready for production.

2. **Ban unexplained merges before promotion.** Document left grain, right grain, join kind, and expected fan-out. If an expand can multiply fact rows, say so and test row counts after the merge.

3. **Move business filters out of literals.** Prefer dimension flags, parameter tables, or source views. Hard-coded plant and customer lists in M are policy debt.

4. **Keep only the columns the model needs.** Expand selectively and remove unused columns early. Wide "just in case" extracts are an overnight tax, so treat them like [unused columns in the model](/blog/unused-columns-tax-every-refresh).

5. **Name an owner in the dataset description.** Who may edit the query, and who gets the refresh failure? A distribution list is not an owner.

6. **Add a pre-close query review for critical datasets.** Spend fifteen minutes walking the applied steps on the flash model. Flag cryptic names, literals, and merges without notes, and fix them before freeze week.

7. **Prefer source views for heavy shaping.** Push stable joins and filters upstream when you can. Power Query should not be the only place the company defines a customer.

8. **Version and comment the non-obvious.** A one-line step description for currency, scrap, or accrual logic beats a Slack thread six months later.

9. **Test refresh in the Service on purpose.** Desktop success is not the contract. Prove the gateway path and duration after structural M changes.

10. **Demote or quarantine what nobody can explain.** If the steward cannot walk through the steps, do not certify. Put a quality banner on the app until the query is readable.

## What good looks like

A controller asks why a plant dropped out of the pack and gets an answer that points to a named step and a named owner. Refresh failures name a step humans recognize, and new analysts change a parameter without forking the query. M still does real work, but it stops being folklore.

Pair readable steps with a short runbook link in the dataset description covering where the source lives, which parameters matter, and who approved the last structural change. When something breaks at 2 a.m., the on-call person should not need the original author's memory. They need the intent written next to the step.

## Start with one query that scares people

Pick the ERP or MES query behind flash or scrap. Rename the steps, document the merges, remove dead columns, and put the owner on the dataset. Then run one close.

Measure gateway minutes and failure clarity before and after, then apply the same bar to the next critical query. Breadth without a readable standard just multiplies mystery.

If the scary query is also the widest extract, combine the cleanup with column cuts. Readable steps on a thinner table pay twice, with fewer surprises and fewer minutes.

Leaders should ask: "Can someone who did not write this query explain every step before the next close?" If the honest answer is no, you are carrying refresh debt, whether the last run was green or not.

## Executive takeaway

Opaque merges and hard-coded filters survive their author and tax every night's refresh. Require readable names, named intents, and an owner. Treat M as the production instructions for the product your semantic model is. Then overnight refresh stops being a black box the close hopes will behave.

Want a hard look at Power Query debt on the datasets your close depends on? [Book a session](https://www.alluviumbi.com/contact). We will map opaque steps, merge risk, and the ownership gaps that turn M into a month-end surprise. Or start with a [Free Model Health check](https://www.alluviumbi.com/power-bi-model-health).
