---
title: "Who Is Allowed to Change a Measure"
description: "If anyone can edit Revenue, you do not have a semantic model. You have a wiki with DAX."
pubDate: 2026-08-03
tags:
  - Power BI
  - Semantic Model
  - Governance
draft: false
---

If anyone can edit Revenue, you do not have a semantic model. You have a wiki with DAX.

A named number without change control is a suggestion. The steward can write a sentence, and someone else can rewrite the formula on a Thursday while the pack still calls it Revenue. That is not governance. It is version luck.

![Black-and-white padlocked wooden chest on a workshop bench](/blog/who-can-change-a-measure-hero.jpg)

## This is not project RACI

IT hosts, finance uses, and nobody owns the *project*, meaning sequence, budget, and done. That problem is covered in [why your Power BI project has no owner](/blog/power-bi-project-has-no-owner), which is about seats on delivery. This post is about seats on the formula after it goes live.

A steward who can explain the measure is necessary, as [measures nobody can explain](/blog/measures-nobody-can-explain) argues. But a sentence without a change path is still a wiki. Anyone with contributor rights on the workspace can make the sentence false.

[The semantic model is the product](/blog/semantic-model-is-the-product), and products have release control. Brochures can move faster. If build permission on the dataset is the same as permission to tweak a visual, you mixed those speeds.

Certification is a promotion bar, covered in [certified models vs the wild west](/blog/certified-datasets-vs-wild-west). Change control is what happens *after* the badge: who may alter the certified word, how the room is told, and how a rejected edit dies instead of living on in a fork.

If you cannot name the last person who changed Revenue and why, you do not control the number. You host it.

## What change control actually is

It is not a six-month CAB for a filter, and it is not a lock so tight that finance rebuilds the measure in Excel.

**A write list.** A few named people can edit certified measures. Not “the BI team” as a distribution list that still includes last summer’s intern.

**A request that states the sentence.** It says what will be true after the change, what will break in downstream reports, and which meeting needs it by when. A Slack ping is not a request.

**A release consumers can see.** An as-of, a version note, or a one-line “Revenue now excludes intercompany as of Monday.” Silent edits teach the room that the tile moves under them.

**A fork policy.** A trial measure is not named Revenue and does not sit in the executive app. The companion piece is [self-service that doesn’t create five Revenues](/blog/self-service-without-five-revenues). Change control is how the certified model itself moves.

[Row-level security](/blog/row-level-security-who-sees-the-number) governs who may *see* the number. This governs who may *alter* it. They are different locks, and both need names.

## The costs of a wiki with DAX

1. **The pack changes meaning without changing name.** Leadership compares months, and the jump was a formula, not the business. You spend the meeting on archaeology, and trust dies when the tile is a moving target.

2. **Two editors, two truths, one label.** Contributor access is shared. One person “fixes” freight and another “fixes” it back. History is a file, not a decision, and the steward’s sentence is decorative.

3. **Finance stops signing.** Controllers will not defend a number anyone can edit overnight. Sign-off evaporates, and you are back to [finance won’t sign off](/blog/finance-wont-sign-off-on-the-dashboard) for a worse reason: not disagreement, but indifference to a wiki.

4. **Forks become the real control.** Careful people copy the model so “the official one doesn’t get touched.” Now you have unofficial control and an official ghost, and five Revenues come back through the back door.

5. **Audit gets a shrug.** Who changed the company word, when, and for which request? If the answer is “look at the dataset history,” you cannot explain the number to anyone who was not in the workspace.

6. **Heroes become the only brake.** One anxious modeler watches every commit because the process will not. When they are out, the wiki is unattended. That is not stewardship. It is a single point of failure dressed as caution.

If last month’s Revenue cannot be reproduced because someone “cleaned up the DAX,” you already have the bill.

## What not to do

Do not give every analyst contributor rights on the certified dataset so self-service “feels fast.” That is how Revenue becomes a shared document.

Do not require a steering committee for a synonym or a display folder. Control the words that enter the pack and let brochure work move.

Do not hide changes in a busy week and mention them later. The first meeting after a silent edit is where you spend trust, as in [the meeting after the dashboard goes live](/blog/the-meeting-after-go-live).

Do not treat source control as optional because “it’s just Power BI.” If you cannot diff the measure, you cannot claim control.

## How to put a gate on the measure

1. **Separate write permission from exploring.** Everyone can view and build reports on the certified model. Write access is a short list: the steward, one modeler, and a backup. Everyone else submits a request. If the list is the whole workspace, you have no list.

2. **Write the change bar on one page.** State which measures are locked, who approves (the steward, not platform IT), and what a request must include: sentence, grain, downstream pages, and effective date. Without a bar there is no control, only folklore.

3. **Release on a clock the meeting can see.** Batch changes to the certified model ahead of the meeting that uses them, and stamp the app. A mid-meeting edit is an incident, not agility.

4. **Keep trials off the name.** Candidate measures get a candidate name and a sandbox, and they get promoted through the same path as any new certified word. Do not A/B test Revenue in production under the same title.

5. **Record the why, not only the commit.** Keep a one-line log the steward owns, with the date, the request, and the sentence after the change. Dataset history is unreadable in an ELT meeting. The log is not. Put it where consumers can find it.

6. **Make “no” a normal answer.** Some requested edits are local stories that should never touch the company word. Say no and point to a cut or a named cousin measure. A gate that never closes is a hinge.

A [Quickstart](/power-bi-quickstart) can freeze one domain’s write list, and ongoing stewardship is [managed advisory](/managed-advisory-retainer). Copies and access without a steward are still a [governance](/blog/the-hidden-costs-of-poor-power-bi-governance-and-how-to-fix-it) problem.

Start with the one word leadership already fights about. Lock who can change it, publish how to ask, and then move to the next word.

## What good looks like

Revenue has a steward, a sentence, and a write list of two. A change shows up as a note, not as a surprise in the pack.

Analysts still explore without editing the certified model to do it, and a new hire can find out who may change the measure without asking in chat.

## Frequently asked questions

**Isn’t this slow?**
It is slower than a silent edit and faster than a quarter of archaeology after the tile moved. Cuts stay fast. Definitions wait for a sentence.

**Can the steward also be the modeler?**
In a small company, yes, if they can defend the number in the room and they are not the only person with the file. A backup with write access is not optional.

**What if we use multiple datasets?**
Then you have multiple wikis unless each certified word has one home. Twins with two write lists are how you get two Revenues with two gates.

## Get started

Stop treating contributor access as a compliment. Name who may change the company word, and how the room finds out.

Want to know who can actually edit Revenue today? [Book a session with Alluvium](/contact). We will map the write list, the request bar, and the log the pack should already have. To check the model itself, request a [free Model Health check](/power-bi-model-health).

<!-- wordcount: 1316 -->
