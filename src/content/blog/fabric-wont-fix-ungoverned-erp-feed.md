---
title: "Fabric Won't Fix an Ungoverned ERP Feed. It Will Host It Faster"
description: "Moving a messy ERP extract into a lakehouse without grain, owners, and checks just accelerates bad Monday numbers."
pubDate: 2026-09-15
tags:
  - Power BI
  - Microsoft Fabric
  - ERP
  - Governance
draft: false
---

Moving the ERP extract into Fabric feels like progress. The file share dies, the lakehouse lights up, and the pipelines look modern. Leadership hears “we’re on Fabric now” and expects the Monday numbers to finally behave.

They will behave the same way, only sooner. An ungoverned ERP feed without grain, owners, and checks does not become trustworthy because it lands in a lakehouse. It becomes a faster path to the same bad Monday. Fabric will host the mess, and governance still has to own the feed.

![Black-and-white industrial skyline with transmission towers and plant smoke at dusk](/blog/fabric-wont-fix-ungoverned-erp-feed-hero.jpg)

## The platform is not the steward

Mid-market manufacturers often treat a platform move as the fix for tribal extracts, silent overwrites, and five versions of Revenue. A lakehouse can be a better landing place than a brittle share.

What it cannot do is invent primary keys, assign measure owners, define inventory grain, or refuse a partial plant extract. Those are governance decisions. Push them until after the migration and you have funded faster reconciliation theater.

This is a cousin of [certified datasets vs the wild west](/blog/certified-datasets-vs-wild-west) and [why Power BI reports show different numbers](/blog/why-power-bi-reports-show-different-numbers). Clean storage is not a certified measure. An owner is. The [semantic model is still the product](/blog/semantic-model-is-the-product), wherever the tables live.

If [ops still runs the plant from spreadsheets](/blog/ops-still-runs-the-plant-from-spreadsheets), a shinier lakehouse will not retire the workbook. A governed grain and a trusted as-of will.

## The costs of hosting an ungoverned ERP feed faster

1. **Bad Monday numbers arrive on time.** Bad row counts, null keys, and missing plants still refresh “successfully.” The room gets the wrong answer faster, and green pipelines hide empty grain.

2. **Source fights speed up instead of shrinking.** Did the ERP change, did the pipeline truncate, or did Power Query filter quietly? Without lineage, batch IDs, and quality gates, the argument just starts earlier.

3. **History still disappears.** Overwrites erase Tuesday’s as-of whether they happen in a lake or on a share. Controllers cannot replay what the pack showed, and auditors get a platform logo with no trail.

4. **Grain stays shaped like reports.** Extracts mirror the last Excel ask instead of a designed fact, so every new question needs a new pipeline. The lakehouse becomes a folder of one-offs with better tooling.

5. **Five Revenues relocate upstream.** Teams connect Power BI to the new tables and invent the measures again, as in [measures nobody can explain](/blog/measures-nobody-can-explain). Nobody owned Bookings.

6. **Ownership stays with nobody.** IT owns the Fabric workspace some of the time and analytics owns the model some of the time. When the feed is late or wrong, both point at the lake, and close risk has no name on the calendar. Pair this with [refresh failures are a close risk](/blog/refresh-failures-are-a-close-risk).

7. **Certification becomes a sticker on a lakehouse.** Promoting a workspace is not the same as certifying On-Hand or Margin. Leaders need a named measure in a governed dataset, not a diagram of OneLake folders.

8. **Side systems multiply under a new brand.** Plants keep local extracts and finance keeps a “known good” workbook. Power BI becomes one more consumer of an untrusted feed, now with a modern logo.

## How to fix it: govern the feed, then let the platform host it

1. **Write the decisions and grain before the migration slide.** Open orders, inventory by plant, actuals by account. Name the as-of and the system of record. Dashboard and lakehouse pages come after.

2. **Require keys, batch IDs, and retention in the landing contract.** That means primary keys, load timestamps, and source batch identifiers. Stop overwriting the only copy, whether the destination is a share, Azure SQL, or a Fabric lakehouse.

3. **Add quality gates that can fail the load.** Use row-count floors, null-key checks, plant completeness, and schema drift alerts. Fail loudly before the Power BI refresh instead of painting green over missing grain.

4. **Assign feed and model owners by name.** One person owns the ERP job SLA and one owns the certified dataset, and both go on the close checklist. Platforms do not answer pages.

5. **Separate landing from meaning.** The lakehouse (or warehouse) holds curated tables. The Power BI semantic model holds relationships and measures. Do not bury business logic in notebook transforms nobody stewards.

6. **Certify one path for Monday and close.** Promote a certified dataset fed from the governed landing tables and retire personal imports of the raw feed. Exploration can use sandboxes. The pack cannot.

7. **Put the as-of on the page.** “ERP extract batch 05:10 CT, books grain” beats “live from Fabric” when the truth is a pipeline. Honest labels restore trust faster than a new visual.

8. **Sequence delivery.** Grain, keys, checks, and three owned measures come first, and self-service widens after. Reverse that order and you migrate the fight.

9. **Refuse new feeds without a contract.** If a stakeholder asks for “just one more ERP extract into the lake,” require grain, keys, retention, and an owner, or say no. Unscoped feeds are how governance dies inside a modern platform.

10. **Treat Fabric as hosting, not absolution.** Use it to land and serve a feed you already defined. Do not use the platform move as proof the feed is governed.

## What good looks like

The ERP remains the system of record. The landing zone, Fabric lakehouse or otherwise, holds keyed, historical, checked tables on a named SLA. Power BI Import refreshes into a certified model with stewards.

When numbers move, the team can replay the batch, show row counts, and point to a measure owner. The meeting debates action instead of whether Tuesday’s feed was truncated.

The platform is valuable. It is just not ownership.

## A practical first week (no platform reboot required)

On day one, pick one close-critical subject, such as inventory or open orders, and write the grain, keys, and as-of on one page. On day two, add a row-count and null-key check that pages someone before 6 a.m., wherever that feed lands today. On day three, put the feed owner and the model owner on the close distribution list.

If you are mid-migration into Fabric, pause new dashboard promises until those three exist for one subject. Hosting without gates is how you accelerate the wrong Monday.

Keep the old path read-only during cutover so nobody “fixes” a meeting by grabbing an ungoverned file. Tell finance and plant leads which pack is official and which is shadow.

Do not announce a “Fabric analytics program” while the only interface is still an unscoped ERP dump in new storage. The problem is the feed. The platform is just where the feed lands, faster, for better or worse.

## Executive takeaway

Fabric will not fix an ungoverned ERP feed. It will host it faster. Govern grain, keys, quality, and stewards first, then let the platform do what platforms do well: land and serve a contract.

Want to know whether your ERP-to-Power-BI path is governed or just newly hosted? [Book a session](https://www.alluviumbi.com/contact). We’ll map one feed to grain, checks, owners, and the model path close actually needs. Or start with a [free Model Health check](https://www.alluviumbi.com/power-bi-model-health).
