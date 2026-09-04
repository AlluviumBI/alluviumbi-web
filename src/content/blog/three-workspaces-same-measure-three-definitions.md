---
title: "Three Workspaces. Same Measure. Three Definitions."
description: "Duplicate Power BI measures across workspaces mean three KPI definitions. Consolidate to one semantic model before the next reconciliation fight."
pubDate: 2026-10-01
tags:
  - Power BI
  - Semantic Model
  - Governance
draft: false
---

Finance has Net Revenue in the corporate workspace. Sales has Net Revenue in the pipeline app. Ops has Net Revenue in the plant pack.

All three tiles are green. All three disagree by enough to ruin a Monday.

Same label. Three DAX definitions. One meeting that will waste itself on archaeology instead of action.

![Black-and-white wooden dock extending into a calm lake with a mirrored forest treeline](/blog/three-workspaces-same-measure-three-definitions-hero.jpg)

## Duplicate measures are a portfolio failure

This is not a story about one messy pbix. It is what happens when every team builds “their” model and reuses English words without reusing logic.

[Every team built their own model](/blog/every-team-built-their-own-model) describes the pattern. [Why Power BI reports show different numbers](/blog/why-power-bi-reports-show-different-numbers) describes the meeting. This post is the measure-level version: identical names, incompatible math, distributed with confidence.

[Measures nobody can explain](/blog/measures-nobody-can-explain) is the cousin inside a single model. Across workspaces, the unexplained measure multiplies. Each copy drifts on its own calendar of patches and tribal fixes.

Executives hear one language. The estate speaks three dialects and hopes nobody runs a crosswalk.

## Why the same measure multiplies

Self-service without a shared product boundary. Teams are rewarded for shipping a local app, not for consuming a certified definition.

Copy-paste delivery. A working measure gets duplicated into a new workspace “just for now.” Now never ends. The copies diverge on the first edge case.

Different source grains pretend to be the same KPI. Booked versus shipped. Gross versus net. Customer versus invoice. Labels stay friendly. Logic does not.

Nobody owns the name. If you [cannot govern what you cannot name](/blog/you-cannot-govern-what-you-cannot-name), you also cannot stop three authors from minting Net_Revenue_Final_v3.

Certification is local. Each workspace certifies its own dataset. Cross-workspace consistency never gets a steward. [Certified datasets versus wild west](/blog/certified-datasets-vs-wild-west) still applies—certification without a shared definition catalog is a sticker collection.

## The costs of three definitions for one word

1. **Meetings become reconciliation workshops.** Leaders spend the first half hour comparing extracts. Decisions wait for the crosswalk.

2. **Trust collapses asymmetrically.** One wrong collision teaches executives that “Power BI numbers” are optional. Recovering that trust takes longer than building the shared measure.

3. **Patches fork forever.** A returns fix lands in finance’s model. Sales never hears. Ops hears late. The same bug gets solved three times incompletely.

4. **Incentives misalign.** A sales leader and a plant leader can both “hit Net Revenue” under different math. The scoreboard becomes a negotiation, not a fact.

5. **[Who can change a measure](/blog/who-can-change-a-measure) becomes unanswerable.** Three change paths. Three silent edits. No single approval gate.

6. **Sprawl taxes every enhancement.** A new product hierarchy must be rebuilt everywhere. Delivery slows while the estate pretends it has one KPI language.

7. **Exports amplify the mess.** Three definitions leave the apps into Excel and the screenshot pack. The forks spread faster than any center-of-excellence newsletter.

8. **You fund parallel truth systems.** Capacity and licenses support multiple machines that argue with each other in public.

## How to fix it: one definition, many consumers

1. **Inventory the collisions.** Search for identically named measures across production workspaces. Start with revenue, margin, inventory, and on-time. Publish the hit list without blame.

2. **Pick a system of record per metric family.** One semantic model owns Net Revenue. Other apps connect or die. [The semantic model is the product](/blog/semantic-model-is-the-product)—treat definition ownership like product ownership.

3. **Rename honest differences.** If Ops needs “Net Revenue Shipped,” call it that. Stop overloading “Net Revenue” until the meeting explodes. Clarity beats forced sameness.

4. **Stand up a thin definition catalog executives can read.** Name, plain-English logic, grain, owner role, workspace of record, last change date. Link it from the app. Keep it short.

5. **Gate new measures that reuse reserved names.** If the name exists in the certified model, new workspaces consume it. They do not redefine it. Enforcement beats reminders.

6. **Migrate consumers before you delete copies.** Point sales and ops reports at the shared model. Validate totals. Then retire the local twins on a date using [how to retire a dashboard](/blog/how-to-retire-a-dashboard) discipline.

7. **Put change control on the shared measures.** Propose, impact, approve, release. Local heroes editing production DAX overnight is how forks restart.

8. **Align certification to the shared layer.** Certify the model that owns the definition. Stop certifying contradictory copies just because each workspace has a steward.

9. **Review collisions quarterly in the steering forum.** Show remaining duplicate names and the retirement dates. Make consistency a management metric, not an IT hygiene chore.

## What good looks like

When someone says Net Revenue in three meetings, they mean the same math. Apps can still differ in layout and grain of display. They do not differ in the definition behind the word.

A proposed change has one door. Downstream reports inherit it. Reconciliation time in the executive forum drops because the crosswalk is no longer the main event.

Analysts spend time on new questions instead of re-implementing last year’s margin logic in yet another workspace.

## A hard rule that saves months

If two production measures share a business name and differ in logic, one of them is misnamed or unauthorized. There is no third option called “both are fine for now.”

“For now” is how estates wake up with twelve revenues and a leadership team that stopped believing the portal.

## Start with the five words that cause pain

You do not need a perfect enterprise glossary on day one. Start with the five measure names that already create arguments: revenue, margin, inventory, backlog, and on-time.

For each word, force a single definition of record or an honest rename. Publish the decision. Then stop the estate from minting quiet duplicates under the same English label.

Once those five are clean, expand. Most mid-market collision pain lives in a short list, not in a thousand obscure measures.

## What “good” looks like in the first quarter

Finance, sales, and ops can open different apps and still land on the same Net Revenue math. Local pages may show different cuts. They do not invent different formulas.

When a definition must change, one proposal reaches one owner. Downstream reports inherit the change on a known release. The Monday crosswalk shrinks because the estate stopped minting quiet synonyms.

New workspace requests get a simple question: which certified measures will you consume, and which new names are you proposing? If the answer is “we’ll recreate revenue,” the request is not ready.

## Executive takeaway

Three workspaces with three Net Revenues are not a self-service success story. They are a naming and ownership failure with a DAX accent.

Consolidate the definition. Rename honest differences. Retire the twins. Then the meeting can argue about the business again—not about which tile to trust.

Need a collision inventory and a consolidation path for your critical KPIs? [Contact Alluvium](https://www.alluviumbi.com/contact). We will map duplicate measures, the system of record, and the retirement sequence that stops the Monday crosswalk.

[Book a 30-minute consult](/contact).
