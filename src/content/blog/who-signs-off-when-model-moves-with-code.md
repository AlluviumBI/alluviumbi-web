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

The pipeline promoted Dev to Test to Prod. The report pages look right. The measure that hit Gross Margin changed in the same commit.

Nobody in finance signed it.

That is the question pipelines do not answer by themselves: who signs off when the model moves with the code?

![Black-and-white close-up of backlit leaves and mist droplets](/blog/who-signs-off-when-model-moves-with-code-hero.jpg)

## Promotion is not approval

Deployment pipelines and ALM patterns help mid-market teams stop copying Desktop files by hand. Stages are good. Automation is good. Neither replaces a human who owns the meaning of the number.

When the semantic model rides with the report through a pipeline, every measure change can land in Prod at merge speed. [Who can change a measure](/blog/who-can-change-a-measure) used to be a workspace permission question. Now it is also a pipeline question.

[Promoting the report without the measure](/blog/promoted-report-not-the-measure) was yesterday's miss. Today's miss is promoting the measure without a sign-off. Same blast radius. Cleaner logs.

This is not a call to buy a new platform feature. It is a call to put a steward on the path the model already travels.

## The costs of unsigned model moves

1. **Finance discovers the change in the meeting.** Margin moved. The tile is green. The definition is new. The first review is live, with executives watching.

2. **IT thinks merge equals approval.** A completed pipeline run looks like done. Done for delivery. Not done for the books.

3. **"Small DAX fix" rewrites close.** A filter removed from CALCULATE changes every customer. The PR title said bugfix. The P&L says restatement.

4. **Test data hides Prod impact.** Sample workspace amounts look fine. Prod volumes and RLS paths do not. Sign-off needed a Prod-like recon, not a happy path page view.

5. **Rollback restores files, not trust.** You can redeploy yesterday's model. You cannot undelete the decision made on the wrong margin. Speed without sign-off spends credibility.

6. **Multiple stewards means no steward.** Ops, finance, and the BI lead can all approve in Slack. Prod still ships when one person clicks Promote. Ambiguity is a rubber stamp.

7. **Auditors ask who approved the measure.** "The pipeline" is not an answer. Named role, named change, named evidence. If you cannot produce it, the control does not exist.

8. **Shadow Desktop copies return.** After one surprise, analysts keep private models "until governance catches up." Certification becomes optional again.

## How to fix it: sign-off on the model path

1. **Name the semantic steward for Prod.** One role. Backup named. Pipeline promote to Prod requires that role's acceptance for model changes — not only for report cosmetics.

2. **Separate report-only promotes from model promotes.** Page layout can move with a lighter review. Measure, relationship, and RLS changes need the steward. Do not use one button for both risk levels.

3. **Require a delta pack on model changes.** Last closed month, old vs new, material cuts. If the delta is empty and the DAX changed, stop. Something is wrong with the test.

4. **Record the approval next to the deploy.** Ticket, email, or form — durable. "Thumbs up in chat" is not an audit trail.

5. **Block Prod model promote during close freeze** unless the steward and the close owner both waive. Pipelines should know the calendar, or humans must.

6. **Test with Prod-like security and volume.** RLS and large dimensions change measure behavior. Sign-off that never saw Prod shape is theater.

7. **Publish a change log the business can read.** Not a commit hash. "Margin now includes outbound freight for domestic customers, effective period." The room should learn from a note, not from a surprise tile.

8. **Keep Desktop edits out of the Prod path.** If hotfixes still bypass the pipeline, sign-off is fiction. Either the path is mandatory or it is a suggestion.

9. **Review who can click Promote.** Workspace admin is not the same as semantic steward. Split the powers if the same person builds and ships without a second set of eyes.

## Where mid-market teams get stuck

They buy the pipeline and keep Desktop as the escape hatch. Or they give every BI developer Promote rights because "we are small." Or they only review screenshots in Test.

Small is not an excuse for unsigned Gross Margin. A two-person steward model (primary plus backup) is enough. What does not work is hoping the merge request description replaces a recon and a name.

If your certified dataset still loses to a local PBIX after every surprise promote, fix sign-off before you add another stage to the pipeline.


## What signed movement looks like

Dev experiments. Test proves. Steward accepts the delta. Close freeze is respected. Prod promote runs. The change log hits finance the same day.

Pages can still move quickly. Meaning moves when someone who owns the number says yes.

Automation remains. It moves approved models. It does not invent approval.

## What the steward reviews

Not the YAML. Not the pipeline UI. The steward reviews meaning: which measure changed, what business rule moved, what last close does under the new logic, who gets a different number under RLS.

A one-page delta is enough: measure name, one-sentence old rule, one-sentence new rule, table of material variances, accept/reject. If the developer cannot produce that page, the change is not ready for Promote.

Report-only changes can skip that page. Blurring report-only with model changes is how Gross Margin rides in on a "font fix."

## Training the room once

Spend fifteen minutes with finance and the BI lead on the difference between Deploy and Approve. Show a dry run: model change in Test, delta pack, steward signature, then Promote. Show a report-only change that skips the delta.

After that demo, "the pipeline did it" stops being an acceptable explanation. People know which human was supposed to say yes.


## Tie sign-off to certification

If a dataset is certified, unsigned model promotes should strip or suspend the badge until the steward re-accepts. Certification that survives a silent Gross Margin edit teaches the room that badges are decoration.

The badge should mean: steward-current, delta-reviewed, freeze-respected. Pipelines can enforce the promote step. Only a person can mean the badge.


## Executive takeaway

When the model moves with code, promotion is not sign-off.

Name the steward. Split report and model risk. Require a delta. Freeze in close week. Then pipelines speed delivery without unsigned changes landing in the flash.

Need a 30-minute look at who can promote measures into Prod today? [Contact Alluvium](https://www.alluviumbi.com/contact). We'll map the pipeline stages, the steward, and the approval that should sit in front of Promote.
