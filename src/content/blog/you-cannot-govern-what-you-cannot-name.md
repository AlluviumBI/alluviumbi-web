---
title: "You Cannot Govern What You Cannot Name"
description: "Workspaces named Test2 and measures named M_rev_final are how ownership dies."
pubDate: 2026-09-10
tags:
  - Power BI
  - Governance
draft: false
---

The workspace is called Test2. The measure is M_rev_final_v3. The report is Copy of Finance Pack (1).

Nobody owns that. Names like that are how governance dies before a policy document is written.

![Black-and-white unlabeled wooden crates stacked in a barn](/blog/you-cannot-govern-what-you-cannot-name-hero.jpg)

## Naming is not etiquette. It is the first control

Tribal knowledge in the model is the map that lives in someone’s head—filters, relationships, “don’t touch that.” That story is [tribal knowledge in the data model](/blog/tribal-knowledge-in-the-data-model). Who may edit a certified measure is a change-control story: [who can change a measure](/blog/who-can-change-a-measure).

This post is earlier and blunter. If leaders cannot say the name of the workspace, dataset, report, and measure out loud, they cannot assign an owner, a refresh SLA, or a retire date. You cannot govern what you cannot name.

Mid-market teams skip naming because it feels cosmetic. Then the estate fills with Test, Final, NEW, and initials. The certified path becomes a scavenger hunt. New hires learn folklore. Stewards inherit files they would never have published under their own name.

[Hidden costs of poor Power BI governance](https://www.alluviumbi.com/blog/the-hidden-costs-of-poor-power-bi-governance-and-how-to-fix-it) include mistrust and sprawl. Messy names are how that sprawl stays unfindable—and therefore unkillable.

## What bad names look like in a live estate

**Workspaces:** Test, Test2, John’s Workspace, Finance_Old, Archive_v2, Project Phoenix, “Do not use.”

**Datasets and reports:** Copy of…, Final_FINAL, Pack_Monday, same title in three workspaces, no domain in the name.

**Measures and tables:** M_rev, calc1, Column1, Net Net Sales, Sales2, switch measures with no business phrase a CFO would repeat.

**Pages and apps:** Page 1, Detail, New Page, twelve peer tabs with synonyms for the same decision.

Each pattern teaches the company that the artifact is temporary. Temporary things do not get stewards. Temporary things still refresh at 6 a.m. for years.

## The costs of an unnameable estate

1. **Ownership cannot attach.** You cannot put a human next to “Copy of Finance Pack (1).” Owners need nouns the business already uses: domain, product, audience. Without that, every cleanup stalls at “who owns this?”

2. **Certification becomes a badge on fog.** A certified stamp on a file named Final_v7 does not help an executive find it next month. Certification without a stable name is theater. See [certified datasets versus the wild west](/blog/certified-datasets-vs-wild-west).

3. **Retirement never starts.** [Unused reports are a governance smell](/blog/unused-reports-are-a-governance-smell) only helps if you can list what you are smelling. Nameless twins and test workspaces hide in the long tail because nobody can say what they are for.

4. **Support time goes to archaeology.** “Which revenue?” becomes a hunt through M_rev, Revenue, Net Sales, and Sales_Final. The meeting burns minutes before it burns decisions. [Measures nobody can explain](/blog/measures-nobody-can-explain) often start as measures nobody could name.

5. **Risk hides behind jokes.** Workspaces named Test still hold customer columns. Old contractor sandboxes still refresh. Access reviews skip what looks unofficial. Labels that say temporary become permanent exposure.

6. **Onboarding depends on heroes.** New analysts learn the real file from a hallway conversation. When the hero leaves, the map leaves. Naming is how the company inherits the estate without a séance.

7. **Intake creates more fog.** Every new request lands as another Copy of because renaming feels political. [Stop commissioning a dashboard per question](/blog/stop-commissioning-a-dashboard-per-question) fails when the catalog is unreadable. People cannot reuse what they cannot find.

8. **Leaders lose the plot in steering meetings.** Portfolio reviews need a short list of named products. A slide full of filenames is not a portfolio. It is evidence that analytics was never productized.

## How to fix it: a naming standard you can enforce in ninety days

1. **Write a one-page standard, not a novel.** Workspace pattern. Report and dataset pattern. Measure pattern. Forbidden tokens: Final, Copy of, Test as a production home, initials as the only identifier, version soup in the display name. Keep it short enough that authors will read it.

2. **Use business language in display names.** Revenue — Accrual. Inventory on Hand — Operational. Names a leader can say in a meeting. Technical prefixes can live in documentation or source columns. They should not be the only label in the app.

3. **Put domain and audience in the workspace name.** Finance — Certified. Operations — Plant A — Working. Sandbox — Team Sales. The name should tell you whether the content may feed a board pack. Ambiguous workspaces become default dumping grounds.

4. **Separate working from certified in the name and the permission model.** If it is exploratory, say so. If it is certified, say so. Do not make executives guess from “Finance2.”

5. **Rename the top twenty before you rename the world.** Usage plus executive pack inputs. Give each a stable name, an owner, and a home workspace. Announce the rename. Redirect bookmarks. Then stop feeding the old titles.

6. **Ban “Copy of” as a publishing path.** New work starts from a template or from the model—not from Save As on a certified report. Copies that must exist stay in sandbox workspaces with expiry dates.

7. **Require a measure sentence with the measure name.** Name plus one-line definition, grain, and steward. If authors cannot write the sentence, the measure is not ready for a shared model. This pairs with change control; it does not replace it.

8. **Make naming part of intake and retirement.** No name, no build. No name, no certify. No name, no keep. [How to retire a dashboard](/blog/how-to-retire-a-dashboard) needs a name on the death certificate too.

9. **Review names quarterly with usage.** Dead Test workspaces go. Twin titles consolidate. New forbidden patterns get added when they appear. Naming debt returns the week you stop looking.

## What good looks like

An executive can say, “Open the certified finance app, Revenue — Accrual, monthly review page.” A steward can find the dataset without Slack. A new analyst can infer from the workspace name whether they are in sandbox or production.

The estate still has working papers. They are labeled working. They do not wear executive names. Temporary remains temporary because the name admits it—and because something still expires.

Governance meetings get shorter. The list is readable. Owners can be assigned without a decoding layer. [Dashboard sprawl](/blog/dashboard-sprawl-is-a-tax) gets easier to cut when the inventory uses words humans share.

You still need access rules, refresh monitoring, and stewards. None of those attach cleanly to Test2 and M_rev_final.

## Executive takeaway

If the file name would embarrass you in a board PDF, it is not ready to be official.

Name workspaces, datasets, reports, and measures so a successor can find them and a leader can own them. Then governance has something to hold. Until then you are writing policy for fog.

Need a 30-minute look at whether your Power BI estate can be named—and therefore governed? [Contact Alluvium](https://www.alluviumbi.com/contact). We’ll scan workspaces and measure names, mark the top rename set, and draft a one-page standard your authors will actually use.

[Book a 30-minute consult](/contact).

<!-- wordcount: 1238 -->
