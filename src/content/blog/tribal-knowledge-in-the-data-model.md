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

Empty descriptions. Unexplained relationships. A “don’t touch that” measure with no owner. The file refreshes. The company cannot inherit it.

![Black-and-white empty bird nest in the fork of a bare tree](/blog/tribal-knowledge-in-the-data-model-hero.jpg)

## This is the map, not the KPI sentence

[Measures nobody can explain](/blog/measures-nobody-can-explain) is the contract on a number: include, exclude, grain, timing, owner, in one sentence leadership can say. Do not retread the glossary meeting here.

This post is everything around that sentence that still lives in someone’s head. Which dimension is the real plant. Why a page filter hides returns. Why the date table drops a week. Who may change it. Where the source actually runs.

A KPI can have a perfect sentence and still be tribal if the model is folklore. Certification without a map is a stamp on a black box. [The semantic model is the product](/blog/semantic-model-is-the-product). Products ship with a map a successor can use. Heroes do not scale.

## What tribal looks like in a model

Empty descriptions on tables and columns that are not obvious.

A filter on a certified report that is not in the measure, not in a description, and not on a glossary page. “We always exclude plant 00.” The tile is right until someone removes the filter to “clean up.”

A relationship only one modeler can defend. Bi-directional because a visual needed it once. Inactive relationships with no note.

A workspace where the author is the only admin. Refresh on a personal gateway. Queries named `Changed Type1`. When the number moves, you message the person who “just knows.”

None of this requires a novel. It requires the model to carry its own memory.

## What a person-as-model costs

1. **Vacation is an outage.** The huddle, the close, or the buyer’s meeting hits a number that looks wrong. The only decoder is out. You wait, or you guess, or you rebuild. Continuity was never in the file. It was in a head.

2. **Change becomes vandalism or paralysis.** People copy because they are afraid to edit. Copies drift. Or they edit blind and break the app. Both are rational with no map. [Rebuilding the same report every quarter](/blog/rebuilding-the-same-report-every-quarter) often starts as fear of the original.

3. **Onboarding trains superstition.** The next analyst learns “never use that table” without why. Superstition outlives the inventor. Nobody will touch the model, and nobody will trust it. [Adoption](/blog/nobody-opens-the-dashboard) dies on mystery.

4. **Finance will not sign a black box.** The controller can live with a sentence. They cannot live with a hidden page filter that moved margin last quarter. [Sign-off is a feature](/blog/finance-wont-sign-off-on-the-dashboard). Tribal knowledge is how you fail it after the glossary looked done.

5. **Incidents have no runbook.** Refresh fails because a source column moved. Only one person knows which query. The [7 a.m. surprise](/blog/gateway-refresh-7am-surprise) gets longer because the map was oral. On-call without descriptions is a scavenger hunt.

6. **You cannot retire, certify, or hand off.** Sunset needs an owner who understands the page: [how to retire a dashboard](/blog/how-to-retire-a-dashboard). Certification needs a steward who can freeze more than a title: [certified models vs the wild west](/blog/certified-datasets-vs-wild-west). A project with one hero is [a project with no owner](/blog/power-bi-project-has-no-owner) the day they leave.

Watch what happens when that person is out for a week. If the certified app becomes untouchable, you have your metric. No invented salary. The behavior is the cost.

## What not to do

Do not write a fifty-page model bible in a file nobody opens. Put memory on the objects: descriptions, display folders, a one-page diagram, a steward field on the workspace.

Do not confuse a DAX comment with an operating contract. Comments help the next modeler. They do not tell a plant manager why returns are out.

Do not “document later” after go-live. Later is how tribal hardens. Descriptions are part of done. [Programs fail in delivery](/blog/analytics-programs-fail-in-delivery) when done means “it refreshed once.”

Do not keep credentials and gateway ownership on a personal account because it was faster. Faster is how vacation becomes an incident.

Do not replace the person with a second hero. Two heads is still not a product. If you cannot name who inherits the model, you need a [roadmap](/analytics-ai-strategy-roadmap) before more pages.

## How to get the model out of someone’s head

1. **Inventory the oral rules.** Sit with the person who knows. Hidden filters, exception plants, inactive relationships, unofficial grain, source quirks. One session. Extract the spec that should have shipped.

2. **Put descriptions on the objects consumers touch.** Tables, key columns, certified measures. English. What it is. What it is not. What grain. Link to the KPI sentence where a number needs one. Power BI descriptions are not decoration. They travel with the model into Excel and into the next author.

3. **Move hidden filters into named measures or dimension members.** If plant 00 is always out, that is a definition, not a page trick. If returns are out of throughput, the measure says so. Page-level folklore is how twins disagree. The filter must live where a successor will look.

4. **Name a steward and a deputy on the workspace.** Not a distribution list. Two roles who can change relationships and publish. Document who owns refresh credentials and the gateway. Alerts follow the role. [Managed advisory](/managed-advisory-retainer) exists for when that seat is empty. A single admin is a risk register item, not a compliment.

5. **Ship a one-page map with the product.** Sources, grain, date rules, RLS in a paragraph, relationship gotchas, where the glossary lives. Store it next to the model. Update it the day grain changes.

6. **Make “could a deputy change this on Tuesday” a release test.** If the answer is no, you are not done. Have the deputy apply a safe change from the map while the hero watches once. Then have the hero stay out of a cycle. If the app cannot survive that, you certified a person. Fix the map before you add reports.

Governance still needs access and naming: [hidden costs of poor governance](https://www.alluviumbi.com/blog/the-hidden-costs-of-poor-power-bi-governance-and-how-to-fix-it). Optimization without a map just makes folklore faster: [dashboard optimization](https://www.alluviumbi.com/power-bi-dashboard-optimization-ai-insights).

## What good looks like

A new analyst can find why a filter exists without a hallway conversation.

A deputy can publish a measure change from the written sentence and the map.

Vacation is inconvenient. It is not an outage.

The hero is still valuable. They are not the system of record.

[Judgment:] if the model cannot speak when the author cannot, you shipped a dependency, not a product.

## Frequently asked questions

**Isn’t this just documentation overhead?**
Empty descriptions are overhead at 7 a.m. A one-line description is cheaper than a rebuild. Write on the object. Skip the novel.

**How is this different from unexplained measures?**
The measure post is the sentence for the number. This is the rest of the file: filters, relationships, sources, who can publish. You need both. The sentence without the map still fails when the author is out.

**Do we need a data catalog tool first?**
No. Fill the descriptions you already have. Name two humans. Add a one-page map. Catalog software on empty objects is another tool ahead of a working model.

**What if the hero refuses to write it down?**
Then they are not a steward. Stewards can be replaced. Heroes who will not transfer the product are a single point of failure you already found.

## Get started

Get the filters out of one head and onto the model.

Need a 30-minute look at whether your certified file can survive a vacation? [Contact Alluvium](/contact). We’ll map descriptions, stewards, and the oral rules that should already be in the product.

[Book a 30-minute consult](/contact).

<!-- wordcount: 1289 -->
