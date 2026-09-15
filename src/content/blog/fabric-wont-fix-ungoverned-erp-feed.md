---
title: "Fabric Won't Fix an Ungoverned ERP Feed. It Will Host It Faster."
description: "Moving a messy ERP extract into a lakehouse without grain, owners, and checks just accelerates bad Monday numbers."
pubDate: 2026-09-15
tags:
  - Power BI
  - Microsoft Fabric
  - ERP
  - Governance
draft: false
---

Moving the ERP extract into Fabric feels like progress.

The file share dies. The lakehouse lights up. Pipelines look modern. Leadership hears “we’re on Fabric now” and expects the Monday numbers to finally behave.

They will behave the same way—only sooner. An ungoverned ERP feed without grain, owners, and checks does not become trustworthy because it lands in a lakehouse. It becomes a faster path to the same bad Monday.

Fabric will host the mess. Governance still has to own the feed.

![Black-and-white industrial skyline with transmission towers and plant smoke at dusk](/blog/fabric-wont-fix-ungoverned-erp-feed-hero.jpg)

## The platform is not the steward

Mid-market manufacturers often treat a platform move as a fix for tribal extracts, silent overwrites, and five versions of Revenue. A lakehouse can be a better landing place than a brittle share. That is real.

What it cannot do: invent primary keys, assign measure owners, define inventory grain, or refuse a partial plant extract. Those are governance decisions. Put them after the migration and you fund faster reconciliation theater.

This is the cousin of [certified datasets vs the wild west](/blog/certified-datasets-vs-wild-west) and [why Power BI reports show different numbers](/blog/why-power-bi-reports-show-different-numbers). Clean storage is not a certified measure. An owner is. The [semantic model is still the product](/blog/semantic-model-is-the-product)—wherever the tables live.

If [ops still runs the plant from spreadsheets](/blog/ops-still-runs-the-plant-from-spreadsheets), a shinier lakehouse does not retire the workbook. A governed grain and a trusted as-of do.

## The costs of hosting an ungoverned ERP feed faster

1. **Bad Monday numbers arrive on time.** Row counts, null keys, and missing plants still refresh “successfully.” The room gets wrong faster. Green pipelines hide empty grain.

2. **Source fights accelerate, not shrink.** Did ERP change, did the pipeline truncate, or did Power Query filter quietly? Without lineage, batch IDs, and quality gates, the argument just starts earlier.

3. **History still disappears.** Overwrites—in a lake or on a share—erase Tuesday’s as-of. Controllers cannot replay what the pack showed. Auditors get a platform logo and no trail.

4. **Grain stays report-shaped.** Extracts mirror the last Excel ask instead of a designed fact. Every new question needs a new pipeline. The lakehouse becomes a folder of one-offs with better tooling.

5. **Five Revenues relocate upstream.** Teams connect Power BI to the new tables and invent measures again. See [measures nobody can explain](/blog/measures-nobody-can-explain). The platform did not own Bookings. Nobody did.

6. **Ownership stays nobody.** IT owns the Fabric workspace sometimes. Analytics owns the model sometimes. When the feed is late or wrong, both point at the lake. Close risk has no name on the calendar—pair with [refresh failures are a close risk](/blog/refresh-failures-are-a-close-risk).

7. **Certification becomes a sticker on a lakehouse.** Promoting a workspace is not certifying On-Hand or Margin. Leaders need a named measure in a governed dataset, not a diagram of OneLake folders.

8. **Side systems multiply under a new brand.** Plants keep local extracts. Finance keeps a “known good” workbook. Power BI becomes one more consumer of an untrusted feed—now with a modern logo.

## How to fix it: govern the feed, then let the platform host it

1. **Write the decisions and grain before the migration slide.** Open orders, inventory by plant, actuals by account. Name as-of and system of record. Dashboard and lakehouse pages come after.

2. **Require keys, batch IDs, and retention in the landing contract.** Primary keys. Load timestamps. Source batch identifiers. Stop overwriting the only copy—whether the destination is a share, Azure SQL, or a Fabric lakehouse.

3. **Add quality gates that can fail the load.** Row-count floors, null-key checks, plant completeness, schema drift alerts. Fail loudly before Power BI refresh. Do not paint green over missing grain.

4. **Assign feed and model owners by name.** A person for the ERP job SLA. A person for the certified dataset. Put both on the close checklist. Platforms do not answer pages.

5. **Separate landing from meaning.** The lakehouse (or warehouse) holds curated tables. The Power BI semantic model holds relationships and measures. Do not hide business logic only in notebook transforms that nobody stewards.

6. **Certify one path for Monday and close.** Promote a certified dataset fed from the governed landing tables. Retire personal imports of the raw feed. Exploration can use sandboxes. The pack cannot.

7. **Document as-of on the page.** “ERP extract batch 05:10 CT, books grain” beats “live from Fabric” when the truth is a pipeline. Honest labels restore trust faster than a new visual.

8. **Sequence delivery.** Grain, keys, checks, and three owned measures first. Then widen self-service. Reverse that order and you migrate the fight.

9. **Refuse new feeds without a contract.** If a stakeholder asks for “just one more ERP extract into the lake,” require grain, keys, retention, and an owner—or say no. Unscoped feeds are how governance dies inside a modern platform.

10. **Treat Fabric as hosting, not absolution.** Use it to land and serve a feed you already defined. Do not use the platform move as proof the feed is governed.

## What good looks like

The ERP remains the system of record. The landing zone—Fabric lakehouse or otherwise—holds keyed, historical, checked tables on a named SLA. Power BI Import refreshes into a certified model with stewards.

When numbers move, the team can replay the batch, show row counts, and point to a measure owner. The meeting debates action—not whether Tuesday’s feed was truncated.

The platform is valuable. It stops being mistaken for ownership.

## A practical first week (no platform reboot required)

Day one: pick one close-critical subject—inventory or open orders. Write grain, keys, and as-of on one page. Day two: add a row-count and null-key check that pages someone before 6 a.m.—wherever that feed currently lands. Day three: name the feed owner and the model owner on the close distribution list.

If you are mid-migration into Fabric, pause new dashboard promises until those three exist for one subject. Hosting without gates is how you accelerate the wrong Monday.

Keep the old path read-only during cutover so nobody “fixes” a meeting by grabbing an ungoverned file. Tell finance and plant leads which pack is official and which is shadow. Ambiguous dual paths recreate the source fight.

Do not announce a “Fabric analytics program” while the only interface is still an unscoped ERP dump with new storage. The ICP problem is the feed. The platform is where the feed can land—faster, for better or worse.

## Executive takeaway

Moving a messy ERP extract into a lakehouse without grain, owners, and checks just accelerates bad Monday numbers.

Fabric will not fix an ungoverned ERP feed. It will host it faster. Govern grain, keys, quality, and stewards first. Then let the platform do what platforms do well: land and serve a contract.

Need a 30-minute look at whether your ERP-to-Power-BI path is governed or just newly hosted? [Contact Alluvium](https://www.alluviumbi.com/contact). We’ll map one feed to grain, checks, owners, and the model path close actually needs.
