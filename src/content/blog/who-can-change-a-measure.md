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

A named number without change control is a suggestion. The steward can write a sentence. Someone else can rewrite the formula on a Thursday and the pack will still call it Revenue. That is not governance. That is version luck.

![Black-and-white padlocked wooden chest on a workshop bench](/blog/who-can-change-a-measure-hero.jpg)

## This is not project RACI

IT hosts. Finance uses. Nobody owns the *project*—sequence, budget, done: [why your Power BI project has no owner](/blog/power-bi-project-has-no-owner). That article is seats on delivery. This post is seats on the formula after it is live.

A steward who can explain the measure is necessary: [measures nobody can explain](/blog/measures-nobody-can-explain). A sentence without a change path is still a wiki. Anyone with contributor on the workspace can make the sentence false.

The model is the product: [the semantic model is the product](/blog/semantic-model-is-the-product). Products have release control. Brochures can move faster. If build permission on the dataset is the same as “tweak a visual,” you mixed those speeds.

Certification is a promotion bar: [certified models vs the wild west](/blog/certified-datasets-vs-wild-west). Change control is what happens *after* the badge. Who may alter the certified word, how the room is told, and how a rejected edit dies instead of living in a fork.

[Judgment:] if you cannot name the last person who changed Revenue and why, you do not control the number. You host it.

## What change control actually is

Not a six-month CAB for a filter. Not a lock so tight that finance rebuilds the measure in Excel.

**A write list.** Few people can edit certified measures. Named. Not “the BI team” as a distribution list that includes last summer’s intern.

**A request that states the sentence.** What will be true after the change. What will break in downstream reports. Which meeting needs it by when. A Slack ping is not a request.

**A release the consumers can see.** As-of, version note, or a one-line “Revenue now excludes intercompany as of Monday.” Silent edits teach the room that the tile moves under them.

**A fork policy.** If you need a trial, it is not named Revenue. It does not sit in the exec app. Explore without five Revenues is the companion: [self-service that doesn’t create five Revenues](/blog/self-service-without-five-revenues). Change control is how the kernel itself moves.

Row-level security is who may *see* the number: [row-level security](/blog/row-level-security-who-sees-the-number). This is who may *alter* it. Different locks. Both need names.

## The costs of a wiki with DAX

1. **The pack changes meaning without changing name.** Leadership compares months. The jump was a formula, not the business. You will spend the meeting on archaeology. Trust dies when the tile is a moving target.

2. **Two editors, two truths, one label.** Contributor access is shared. One person “fixes” freight. Another “fixes” it back. History is a file, not a decision. The steward’s sentence is decorative.

3. **Finance stops signing.** Controllers will not defend a number anyone can edit overnight. Sign-off evaporates. You are back to [finance won’t sign off](/blog/finance-wont-sign-off-on-the-dashboard) with a worse reason: not disagreement, indifference to a wiki.

4. **Forks become the real control.** Careful people copy the model so “the official one doesn’t get touched.” Now you have unofficial control and an official ghost. Five Revenues return through the back door.

5. **Audit is a shrug.** Who changed the company word? When? For which request? If the answer is “look at the dataset history,” you cannot explain the number to anyone who was not in the workspace.

6. **Heroes become the only brake.** One anxious modeler watches every commit because process will not. When they are out, the wiki is unattended. That is not stewardship. That is a single point of failure wearing caution.

If last month’s Revenue cannot be reproduced because someone “cleaned up DAX,” you already have the bill. No invented write-down required.

## What not to do

Do not put every analyst in contributor on the certified dataset so self-service “feels fast.” That is how Revenue becomes a shared document.

Do not require a steering committee for a synonym or a display folder. Control the words that enter the pack. Let brochure work move.

Do not hide changes in a busy week and mention them later. The first meeting after a silent edit is how you spend trust: [the meeting after the dashboard goes live](/blog/the-meeting-after-go-live).

Do not treat source control as optional because “it’s just Power BI.” If you cannot diff the measure, you cannot claim control.

## How to put a gate on the measure

1. **Split permission from explore.** View and build reports on the kernel. Write to the certified model is a short list: steward plus one modeler, plus a backup. Everyone else requests. If the list is the whole workspace, you have no list.

2. **Write the change bar in one page.** Which measures are locked. Who approves (steward, not platform IT). What the request must include: sentence, grain, downstream pages, effective date. No bar, no control—only folklore.

3. **Release on a clock the meeting can see.** Batch kernel changes ahead of the sitting that uses them. Stamp the app. A mid-meeting edit is an incident, not agility.

4. **Keep trials off the name.** Candidate measures get a candidate name and a sandbox. Promote through the same path you use for new certified words. Do not A/B test Revenue in production under the same title.

5. **Record the why, not only the commit.** A one-line log the steward owns: date, request, sentence after. Dataset history is not readable in an ELT. The log is. Put it where consumers can find it.

6. **Make “no” a normal answer.** Some requested edits are local stories that should never touch the company word. Say no and point to a cut or a named cousin measure. A gate that never closes is a hinge.

A [Quickstart](/power-bi-quickstart) can freeze one domain’s write list. Ongoing stewardship is [managed advisory](/managed-advisory-retainer). Copies and access without a steward remain [governance](https://www.alluviumbi.com/blog/the-hidden-costs-of-poor-power-bi-governance-and-how-to-fix-it).

Start with the one word leadership already fights about. Lock who can change it. Publish how to ask. Then the next word.

## What good looks like

Revenue has a steward, a sentence, and a write list of two.

A change shows up as a note, not as a surprise in the pack.

Analysts still explore. They do not edit the kernel to do it.

A new hire can find who is allowed to change the measure without asking in chat.

## Frequently asked questions

**Isn’t this slow?**
Slower than a silent edit. Faster than a quarter of archaeology after the tile moved. Cuts stay fast. Definitions wait for a sentence.

**Can the steward also be the modeler?**
In a small company, yes—if they can defend the number in the room and they are not the only person with the file. A backup write is not optional.

**What if we use multiple datasets?**
Then you have multiple wikis unless each certified word has one home. Twins with two write lists are how you get two Revenues with two gates.

## Get started

Stop treating contributor as a compliment. Name who may change the company word, and how the room finds out.

Need a 30-minute look at who can actually edit Revenue today? [Contact Alluvium](/contact). We’ll map the write list, the request bar, and the log the pack should already have.

[Book a 30-minute consult](/contact).

<!-- wordcount: 1237 -->
