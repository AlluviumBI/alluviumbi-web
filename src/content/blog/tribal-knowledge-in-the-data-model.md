---
title: "The Cost of Tribal Knowledge in Your Data Model"
description: "If the only person who knows the filter is on vacation, you do not have a model. You have a person."
pubDate: 2026-08-17
tags:
  - Power BI
  - Semantic Model
  - Ownership
draft: false
---

If the only person who knows the filter is on vacation, you do not have a model. You have a person.

The descriptions are empty, the relationships are unexplained, and there is a “don’t touch that” measure with no owner. The file refreshes, but the company cannot inherit it.

![Black-and-white empty bird nest in the fork of a bare tree](/blog/tribal-knowledge-in-the-data-model-hero.jpg)

## This is the map, not the KPI sentence

[Measures nobody can explain](/blog/measures-nobody-can-explain) covers the contract on a number: include, exclude, grain, timing, and owner, in one sentence leadership can say.

This post covers everything around that sentence that still lives in someone’s head: which dimension is the real plant, why a page filter hides returns, why the date table drops a week, who may change it, and where the source actually runs.

A KPI can have a perfect sentence and still be tribal if the model is folklore. Certification without a map is a stamp on a black box. [The semantic model is the product](/blog/semantic-model-is-the-product), and products ship with a map a successor can use. Heroes do not scale.

## What tribal looks like in a model

Tables and columns that are not obvious have empty descriptions. A certified report carries a filter that is not in the measure, not in a description, and not on a glossary page. “We always exclude plant 00.” The tile is right until someone removes the filter to “clean up.”

A relationship only one modeler can defend is set to bi-directional because a visual needed it once, and inactive relationships carry no note. The author is the only workspace admin, refresh runs on a personal gateway, and queries are named `Changed Type1`. When the number moves, you message the person who “just knows.”

None of this requires a novel to fix. It requires the model to carry its own memory.

## What a person-as-model costs

1. **Vacation is an outage.** The huddle, the close, or the buyer’s meeting hits a number that looks wrong, and the only decoder is out. You wait, guess, or rebuild. Continuity was never in the file. It was in a head.

2. **Change becomes vandalism or paralysis.** People copy because they are afraid to edit, and the copies drift. Or they edit blind and break the app. With no map, both are rational. [Rebuilding the same report every quarter](/blog/rebuilding-the-same-report-every-quarter) often starts as fear of the original.

3. **Onboarding trains superstition.** The next analyst learns “never use that table” without learning why, and the superstition outlives its inventor. Nobody will touch the model and nobody will trust it. [Adoption](/blog/nobody-opens-the-dashboard) dies on mystery.

4. **Finance will not sign a black box.** The controller can live with a sentence, but not with a hidden page filter that moved margin last quarter. [Sign-off is a feature](/blog/finance-wont-sign-off-on-the-dashboard), and tribal knowledge is how you fail it after the glossary looked done.

5. **Incidents have no runbook.** Refresh fails because a source column moved, and only one person knows which query. The [7 a.m. surprise](/blog/gateway-refresh-7am-surprise) drags on because the map was oral. On-call without descriptions is a scavenger hunt.

6. **You cannot retire, certify, or hand off.** Retiring a page needs an owner who understands it ([how to retire a dashboard](/blog/how-to-retire-a-dashboard)). Certification needs a steward who can freeze more than a title ([certified models vs the wild west](/blog/certified-datasets-vs-wild-west)). A project with one hero becomes [a project with no owner](/blog/power-bi-project-has-no-owner) the day that hero leaves.

Watch what happens when that person is out for a week. If the certified app becomes untouchable, you have your metric. The behavior is the cost.

## What not to do

Do not write a fifty-page model bible in a file nobody opens. Put the memory on the objects: descriptions, display folders, a one-page diagram, and a steward field on the workspace.

Do not confuse a DAX comment with an operating contract. Comments help the next modeler. They do not tell a plant manager why returns are excluded.

Do not “document later” after go-live, because later is how tribal knowledge hardens. Descriptions are part of done. [Programs fail in delivery](/blog/analytics-programs-fail-in-delivery) when done means “it refreshed once.”

Do not keep credentials and gateway ownership on a personal account because it was faster. Faster is how vacation becomes an incident.

Do not replace the person with a second hero. Two heads are still not a product. If you cannot name who inherits the model, you need a [roadmap](/analytics-ai-strategy-roadmap) before more pages.

## How to get the model out of someone’s head

1. **Inventory the oral rules.** In one session with the person who knows, capture the hidden filters, exception plants, inactive relationships, unofficial grain, and source quirks. That is the spec that should have shipped.

2. **Put descriptions on the objects consumers touch.** Cover tables, key columns, and certified measures in plain English: what it is, what it is not, and what grain. Link to the KPI sentence where a number needs one. Power BI descriptions are not decoration. They travel with the model into Excel and to the next author.

3. **Move hidden filters into named measures or dimension members.** If plant 00 is always out, that is a definition, not a page trick. If returns are out of throughput, the measure should say so. Page-level folklore is how twins disagree, so the filter must live where a successor will look.

4. **Name a steward and a deputy on the workspace.** These are two roles who can change relationships and publish, not a distribution list. Document who owns refresh credentials and the gateway, and route alerts to the role. [Managed advisory](/managed-advisory-retainer) exists for when that seat is empty. A single admin is a risk register item, not a compliment.

5. **Ship a one-page map with the product.** It covers sources, grain, date rules, RLS in a paragraph, relationship gotchas, and where the glossary lives. Store it next to the model and update it the day the grain changes.

6. **Make “could a deputy change this on Tuesday?” a release test.** If the answer is no, you are not done. Have the deputy apply a safe change from the map once while the hero watches, then keep the hero out for a cycle. If the app cannot survive that, you certified a person. Fix the map before you add reports.

Governance still needs access and naming, as covered in [hidden costs of poor governance](/blog/the-hidden-costs-of-poor-power-bi-governance-and-how-to-fix-it). [Dashboard optimization](/power-bi-dashboard-optimization-ai-insights) without a map just makes folklore faster.

## What good looks like

A new analyst can find out why a filter exists without a hallway conversation, and a deputy can publish a measure change from the written sentence and the map. Vacation is inconvenient, not an outage. The hero is still valuable, but no longer the system of record.

If the model cannot speak when the author cannot, you shipped a dependency, not a product.

## Frequently asked questions

**Isn’t this just documentation overhead?**
Empty descriptions are the real overhead at 7 a.m. A one-line description is cheaper than a rebuild. Write on the object and skip the novel.

**How is this different from unexplained measures?**
The measure post covers the sentence for the number. This one covers the rest of the file: filters, relationships, sources, and who can publish. You need both, because the sentence without the map still fails when the author is out.

**Do we need a data catalog tool first?**
No. Fill in the descriptions you already have, name two people, and add a one-page map. Catalog software on empty objects is another tool ahead of a working model.

**What if the hero refuses to write it down?**
Then they are not a steward. Stewards can be replaced. A hero who will not transfer the product is a single point of failure you have already found.

## Get started

Get the filters out of one head and onto the model.

Want to know whether your certified file can survive a vacation? [Book a session with Alluvium](/contact). We will map descriptions, stewards, and the oral rules that should already be in the product. Or start with a [free Model Health check](/power-bi-model-health).

<!-- wordcount: 1347 -->
