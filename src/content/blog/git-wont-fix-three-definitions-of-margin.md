---
title: "Git Won't Fix Three Definitions of Margin"
description: "Version control will not settle three margin definitions. Own the measure, the grain, and the steward before you automate promotion."
pubDate: 2026-09-15
tags:
  - Power BI
  - Semantic Model
  - Margin
  - Governance
draft: false
---

The team put the Power BI files in Git. Pipelines promote to Test and Prod. Pull requests look like software.

Monday's QBR still has three margins.

Git did not fail. Git never owned the definition. Version control versions files. It does not choose which contribution, freight, or rebate belongs in "Margin."

![Black-and-white mountain valley with snow peaks, a braided river, and foreground pines](/blog/git-wont-fix-three-definitions-of-margin-hero.jpg)

## A repo is not a semantic owner

Mid-market teams hear that analytics should work like engineering. Check in the PBIX. Review the diff. Promote with a pipeline. That discipline is useful. It is not the product.

The product is a trusted semantic model: one grain, named measures, a steward who can defend the number in finance review. [The semantic model is the product](/blog/semantic-model-is-the-product). A repo is a delivery path for that product.

When finance, ops, and sales each keep a margin measure, putting all three files in Git just versions the argument. [Margin definitions that don't survive](/blog/margin-definitions-that-dont-survive) the first cross-functional meeting will not survive a merge conflict either.

CI/CD without a named owner of Margin is automation around a disagreement. The pipeline will ship whoever merged last.

## The costs of treating Git as governance

1. **Three files, three truths, one logo.** Sales margin ignores freight. Ops margin ignores rebates. Finance margin includes both and a different COGS. The repo has history. The room still picks a side.

2. **Pull requests review visuals, not meaning.** Reviewers comment on page layout. Nobody asks whether contribution is before or after customer discounts. The merge looks clean. The QBR is not.

3. **Promotion speed hides definition drift.** A pipeline can move a measure to Prod in minutes. The CFO still cannot explain it. Speed without stewardship is how a bad definition becomes official.

4. **"Just one local measure" forks the model.** An analyst copies the dataset to add a margin variant. Git never sees it. You are back to [five revenues](/blog/certified-datasets-vs-wild-west) with nicer tooling on the official copy.

5. **Diffs do not show grain.** Changing a relationship or a bridge table can alter every margin with a one-line DAX edit. File history will not tell the executive which customers just moved.

6. **IT owns the pipeline. Finance owns the number. Nobody owns both.** When the QBR explodes, IT points at merge process. Finance points at "the system." The steward was never named.

7. **You cannot roll back a definition you never wrote down.** Reverting a commit restores a file. It does not restore a decision about freight. If the decision lived in Slack, Git has nothing to revert to.

This is the same class of miss as [promoting the report but not the measure](/blog/promoted-report-not-the-measure). Packaging is not ownership.

## How to fix it: own Margin, then version the model

1. **Write one Margin spec before any pipeline work.** Grain, inclusions, exclusions, currency, as-of. One page. Finance signs it. Ops and sales see it. Git stores that spec next to the model.

2. **Name a steward.** [Who can change a measure](/blog/who-can-change-a-measure) is a close control. The steward accepts or rejects Margin changes. The pipeline operator is not the steward.

3. **Put competing definitions in named measures, not in forked files.** Margin_Finance, Margin_Contribution, Margin_Plant. Labels beat underground copies. Kill the unlabeled "Margin" that means three things.

4. **Review DAX and relationships, not only report pages.** A PR that touches a measure or a bridge table needs a finance reviewer. Visual-only review is not semantic review.

5. **Promote the model as the unit.** Pages can follow. If the pipeline ships a report against a Desktop-only model, you automated a screenshot. Shared dataset, then pages.

6. **Require a recon case on Margin changes.** Before Prod: last closed month, old vs new, who accepted the delta. If you cannot show the delta, you are not ready to merge.

7. **Use Git for lineage, not for arbitration.** History is valuable when the definition is already decided. Use it to see when freight entered the measure. Do not use it to vote.

8. **Stop selling the pipeline as the source of truth.** The source of truth is the signed spec plus the certified model. The pipeline is how that model moves. Confusing the two is how three margins survive a "modern" stack.

## What "done" means for a Margin change

Done is not "merged to main." Done is "steward accepted the delta against last close, named measures updated, unofficial forks retired." Until those three are true, the pipeline is moving unfinished work into Prod.

If sales still opens a private PBIX for "their" margin, the certified model is theater. Kill the fork or admit you have two products.


## Start with one QBR measure

Do not boil the ocean. Pick Margin or Contribution — whichever blew up last quarter. Spec it. Steward it. Put the other variants in labeled measures. Retire the forks. Then connect the pipeline to that model.

If you start with tooling and hope definitions follow, you will still have three margins, only with better commit messages.


## What ownership looks like

There is one certified model. Margin has a spec, a steward, and a test against last close. Pipelines promote that model. Analysts cannot fork it for a private variant without a change request.

Sales can still see contribution. Ops can still see plant margin. Those are named cuts of the same grain, not three unofficial files with the same title.

Git will show who changed the measure and when. Finance will still be able to explain it.

## Where Git actually helps

Once Margin has a signed spec, Git becomes useful for forensics. You can see when freight entered the measure, who merged the change, and which report pages still pointed at an old local copy.

That history only helps if the merge required a steward. Without that gate, the log is a diary of unauthorized edits. Useful for blame. Useless for trust.

Pair the repo with a lightweight change record: date, measure, old vs new definition in one paragraph, steward name, recon file link. Store it where finance already looks — SharePoint next to the close binder works. The commit message can point there. It should not be the only record.

## Common mid-market failure mode

A manufacturer "modernizes" analytics over a weekend. Files land in Azure DevOps. A pipeline badge turns green. Monday's QBR still opens three Excels for margin by channel, by plant, and by finance.

Leadership concludes Git was a waste. It was not. The waste was skipping the definition step and calling the badge governance. Put the badge after the steward, not instead of one.


## Executive takeaway

Git will not fix three definitions of Margin. A pipeline will ship them faster.

Write the spec. Name the steward. Put competing cuts in labeled measures. Then version control is useful, because there is one thing to version.

Need a 30-minute look at whether your repo is hiding three margins? [Contact Alluvium](https://www.alluviumbi.com/contact). We'll map the measures, the steward, and the one spec the QBR should use.
