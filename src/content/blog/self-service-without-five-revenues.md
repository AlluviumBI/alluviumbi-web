---
title: "Self-Service That Doesn’t Create Five Revenues"
description: "Self-service without certified measures is how you get five Revenues. Put the guardrails in first."
pubDate: 2026-07-27
tags:
  - Power BI
  - Self-Service
  - Governance
draft: false
---

Self-service without certified measures is how you get five Revenues. Put the guardrails in first.

Exploring is not the enemy. Forking the company’s words is. A workspace that lets people slice a trusted model is enablement. A workspace that lets everyone publish a new definition of Revenue is a second close.

![Black-and-white open pasture gate between two wooden posts](/blog/self-service-without-five-revenues-hero.jpg)

## This is not the IT queue, and it is not sprawl counted as files

Waiting weeks for a variance cut is the request bottleneck covered in [the hidden cost of waiting on IT](/blog/hidden-cost-waiting-on-it-for-reports). That article weighs lock-down against wide-open as an operating model. This post is narrower: how people may explore *without* forking the words leadership already fights about.

Fifty reports is a tax on refresh and meetings, as [dashboard sprawl is not self-service](/blog/dashboard-sprawl-is-a-tax) explains. Sprawl is an inventory of pages. Five Revenues is an inventory of *definitions*. You can retire twenty unused reports and still have three live measures named Revenue. You can also keep a short catalog and still fork the core model every time an analyst “just needed a tweak.”

Certified versus sandbox is the promotion path, covered in [certified models vs the wild west](/blog/certified-datasets-vs-wild-west) along with badges and junk drawers. The job here is the explore layer: live connection, thin reports, no local measures on company words, and a place to try a cut that cannot enter the pack until it earns a name of its own.

If exploring requires a copy of the model, you did not enable self-service. You franchised the ledger.

## What “explore” is allowed to mean

Analysts should filter, slice, and build pages on the certified model. They should not redefine Revenue, Margin, or Bookings in a local measure because the meeting wanted a slightly different bag.

A new question is often a new *cut*, not a new *word*. Customer, plant, channel, and week are dimensions. If the answer needs a different include or exclude rule, that is a candidate measure with a new English name, not a silent edit of the company one.

[The semantic model is the product](/blog/semantic-model-is-the-product). Self-service that works treats reports as brochures for one product. Self-service that fails treats every brochure as a license to change the product.

Single source of truth is the decision about who may publish the company word, as covered in [SSOT is a decision](/blog/single-source-of-truth-is-a-decision). Guardrails let exploration respect that decision without a ticket for every slicer.

## The costs of explore-by-fork

1. **Five Revenues with equal confidence.** Each explorer meant well and each published a tile. The meeting cannot tell which one is official. Trust dies in the comparison, not in the curiosity.

2. **The certified measure becomes optional.** Once a local twin exists, people use whichever one matches the story they brought into the room. Stewardship becomes theater and the official measure becomes a suggestion.

3. **IT swings back to lock-down.** After one bad ELT meeting, platform owners revoke publish rights. The queue returns, and so does shadow Excel. You paid for licenses and bought back the wait you were trying to kill.

4. **Capacity and refresh multiply.** Forked models refresh as if they were products, so you fund five pipelines for one word. Failures scatter, and nobody knows which twin fed last Monday’s pack.

5. **Onboarding teaches the wrong skill.** New analysts learn “copy dataset, tweak DAX” because that is how the last person shipped a cut. You industrialize forks, and training will not fix an architecture that rewards them.

6. **Audit cannot answer who changed Revenue.** Local measures have no steward. If anyone can edit the company word, you have a wiki with DAX. [Who is allowed to change a measure](/blog/who-can-change-a-measure) covers that control. This article covers the explore path that makes it necessary.

If two tiles already disagree in the room, you are in [different numbers](/blog/why-power-bi-reports-show-different-numbers) territory. Five Revenues is how self-service put that on the calendar.

## What not to do

Do not equate self-service with giving everyone build rights on the production model. Building on the core model is how Revenue forks. Exploring on it means a live connection and a thin report.

Do not ban sandboxes. A lid is not a lock, and exploration that cannot happen legally will happen in downloads.

Do not let sandbox files reuse the English word the certified product owns. Call it Working Revenue Cut, or better, do not call it Revenue at all until it is promoted.

Do not certify a report that sits on a forked model. A pretty page on a twin is still a twin.

## How to allow explore without five Revenues

1. **Fence the words.** List the company measures nobody may redefine locally: Revenue, Bookings, Margin, On-hand, Scrap, and whatever else you argue about in the ELT. Publish the list. A sandbox measure with the same name is a process miss, not creativity.

2. **Use a live connection or composite on the certified model.** Explorers build thin reports against it and do not download a copy “for speed.” A new dimension is a model request, not a fork. A composite model with a local fact is fine when it cannot change the certified measures.

3. **Give the junk drawer a lid.** A sandbox workspace gets a name prefix, no executive app, and an expiry date. What the meeting needs gets promoted through the same bar as any other product change, and what expired gets deleted. The drawer is [certified vs wild west](/blog/certified-datasets-vs-wild-west) applied to exploration, not a second catalog of Revenues.

4. **Make cuts free and definitions a ticket.** Slicers, bookmarks, and personal pages are self-serve. A new include or exclude rule needs a named request, a steward, and a sentence. The process should be fast enough that people use it and slow enough that the sentence gets written. That is the middle ground the queue article asked for, applied to measures.

5. **Describe the promotion path on one page.** Spell out how a useful cut becomes a certified measure, who signs, and how the old local file dies. If promotion means a six-month committee, explorers will keep shipping twins into the ELT channel.

6. **Watch for twins, not just unused reports.** Usage logs catch museums. Definition drift needs a catalog of measure names across datasets, and two measures named Revenue is the smell. A [Quickstart](/power-bi-quickstart) can put one domain on a certified model, and [managed advisory](/managed-advisory-retainer) covers stewardship if you do not have the bench.

Start with one word leadership already fights about. Put exploration on that model, ban the local twin, and then move to the next word.

## What good looks like

Analysts ship a new cut the same day, but they do not ship a new Revenue. Nobody can confuse the pack with the sandbox by name, workspace, or badge, and a new hire can tell what they may argue from and what they may only explore.

When someone needs a different bag, they request a named measure instead of quietly editing a copy.

## Frequently asked questions

**Isn’t this just lock-down with nicer slides?**
No. Filters and pages are free on the certified model. The lock is on redefining the company word. The queue is what you get when even a slicer needs a ticket.

**Can teams have their own models?**
Not for words the company already certified. A local grain with a local name is a different product. A clone of Revenue is a second close, as covered in [when every team builds their own semantic model](/blog/every-team-built-their-own-model).

**What if the certified measure is wrong?**
Change it in the certified model, with a steward and a sentence. Do not “fix” it in a fork. Forks never reconverge.

## Get started

Stop treating copy-dataset as enablement. Fence the words, connect live, and give exploration a drawer that cannot reach the pack by accident.

Want to see where self-service is already forking Revenue? [Book a session with Alluvium](/contact). We will map the certified model, the protected names, and the path a cut takes to get promoted. To check the model’s health first, request a [free Model Health check](/power-bi-model-health).

<!-- wordcount: 1348 -->
