---
title: "Who Signs Off When the Model Moves with Code?"
description: "When deployment pipelines move the semantic model, name who signs off measure changes. Automation without a steward is unsigned Prod."
pubDate: 2026-09-15
tags:
  - Power BI
  - Deployment
  - Governance
  - Semantic Model
draft: false
---

The pipeline promoted Dev to Test to Prod, and the report pages look right. The measure behind Gross Margin changed in the same commit, and nobody in finance signed it.

That is the question pipelines do not answer on their own: who signs off when the model moves with the code?

![Black-and-white close-up of backlit leaves and mist droplets](/blog/who-signs-off-when-model-moves-with-code-hero.jpg)

## Promotion is not approval

Deployment pipelines and ALM patterns help mid-market teams stop copying Desktop files by hand. Stages are good and automation is good, but neither replaces a person who owns the meaning of the number.

When the semantic model rides with the report through a pipeline, every measure change can land in Prod at merge speed. [Who can change a measure](/blog/who-can-change-a-measure) used to be a workspace permission question. Now it is also a pipeline question.

[Promoting the report without the measure](/blog/promoted-report-not-the-measure) was yesterday's miss. Today's miss is promoting the measure without a sign-off. The blast radius is the same, and the logs are cleaner.

This is not a call to buy a new platform feature. It is a call to put a steward on the path the model already travels.

## The costs of unsigned model moves

1. **Finance discovers the change in the meeting.** Margin moved, the tile is green, and the definition is new. The first review happens live, with executives watching.

2. **IT thinks merge equals approval.** A completed pipeline run looks like done. It is done for delivery, not for the books.

3. **A "small DAX fix" rewrites the close.** A filter removed from CALCULATE changes every customer. The PR title said bugfix. The P&L says restatement.

4. **Test data hides the Prod impact.** Sample workspace amounts look fine, while Prod volumes and RLS paths do not. Sign-off needed a Prod-like recon, not a happy-path page view.

5. **Rollback restores files, not trust.** You can redeploy yesterday's model. You cannot undo a decision made on the wrong margin. Speed without sign-off spends credibility.

6. **Multiple stewards means no steward.** Ops, finance, and the BI lead can all approve in Slack, and Prod still ships when one person clicks Promote. Ambiguity is a rubber stamp.

7. **Auditors ask who approved the measure.** "The pipeline" is not an answer. They want a named role, a named change, and named evidence. If you cannot produce them, the control does not exist.

8. **Shadow Desktop copies return.** After one surprise, analysts keep private models "until governance catches up," and certification becomes optional again.

## How to fix it: sign-off on the model path

1. **Name the semantic steward for Prod.** Name one role and a backup. Promoting model changes to Prod requires that role's acceptance, not only for report cosmetics.

2. **Separate report-only promotes from model promotes.** Page layout can move with a lighter review. Measure, relationship, and RLS changes need the steward. Do not use one button for both risk levels.

3. **Require a delta pack on model changes.** Show the last closed month under the old and new logic, with material cuts. If the delta is empty and the DAX changed, stop, because something is wrong with the test.

4. **Record the approval next to the deploy.** A ticket, email, or form will do as long as it is durable. A thumbs-up in chat is not an audit trail.

5. **Block Prod model promotes during close freeze** unless the steward and the close owner both waive the block. Pipelines should know the calendar, or people must.

6. **Test with Prod-like security and volume.** RLS and large dimensions change measure behavior. Sign-off that never saw the Prod shape is theater.

7. **Publish a change log the business can read.** Not a commit hash, but a line like "Margin now includes outbound freight for domestic customers, effective period." The room should learn from a note, not a surprise tile.

8. **Keep Desktop edits out of the Prod path.** If hotfixes still bypass the pipeline, sign-off is fiction. Either the path is mandatory or it is a suggestion.

9. **Review who can click Promote.** Workspace admin is not the same as semantic steward. Split the powers if the same person builds and ships with no second set of eyes.

## What the steward reviews

The steward does not review the YAML or the pipeline UI. The steward reviews meaning: which measure changed, what business rule moved, what last close looks like under the new logic, and who sees a different number under RLS.

A one-page delta is enough. It lists the measure name, the old rule and the new rule in one sentence each, a table of material variances, and accept or reject. If the developer cannot produce that page, the change is not ready for Promote.

Report-only changes can skip the page. Blurring report-only changes with model changes is how Gross Margin rides in on a "font fix."

## Where mid-market teams get stuck

They buy the pipeline and keep Desktop as the escape hatch. Or they give every BI developer Promote rights because "we are small." Or they only review screenshots in Test.

Small is not an excuse for unsigned Gross Margin. A two-person steward model, primary plus backup, is enough. What does not work is hoping the merge request description replaces a recon and a name. If your certified dataset still loses to a local PBIX after every surprise promote, fix sign-off before you add another stage to the pipeline.

Then spend fifteen minutes with finance and the BI lead on the difference between Deploy and Approve. Show a dry run: a model change in Test, the delta pack, the steward's signature, then Promote. Show a report-only change that skips the delta. After that demo, "the pipeline did it" stops being an acceptable explanation, because people know which person was supposed to say yes.

## Tie sign-off to certification

If a dataset is certified, an unsigned model promote should strip or suspend the badge until the steward re-accepts. Certification that survives a silent Gross Margin edit teaches the room that badges are decoration.

The badge should mean the steward is current, the delta was reviewed, and the freeze was respected. Pipelines can enforce the promote step. Only a person can stand behind the badge.

## What signed movement looks like

Dev experiments and Test proves. The steward accepts the delta, the close freeze is respected, and the Prod promote runs. The change log reaches finance the same day.

Pages can still move quickly. Meaning moves when someone who owns the number says yes. Automation stays. It moves approved models, and it does not invent approval.

## Executive takeaway

When the model moves with code, promotion is not sign-off. Name the steward, split report risk from model risk, require a delta, and freeze in close week. Then pipelines speed up delivery without unsigned changes landing in the flash.

Want to know who can promote measures into Prod today? [Book a session with Alluvium](/contact). We'll map the pipeline stages, the steward, and the approval that should sit in front of Promote. To check the model itself, request a [free Model Health check](/power-bi-model-health).
