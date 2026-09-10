---
title: "Your SAP Extract Is a File Drop. That Is Not an Analytics Architecture."
description: "Nightly flat files without keys, history, or quality gates turn every variance into a source fight. Design the landing zone before the dashboard."
pubDate: 2026-09-10
tags:
  - Power BI
  - SAP
  - Data Architecture
  - Manufacturing
draft: false
---

Someone schedules a nightly SAP extract. A flat file lands on a share. Power BI imports it. A dashboard ships.

That feels like integration. It is a file drop.

Without keys, history, and quality gates, every variance becomes a source fight. Finance blames SAP. IT blames the extract. Analytics blames the model. Nobody can prove what changed overnight.

Design the landing zone before the dashboard. Or keep funding reconciliation as a sport.

![Black-and-white empty factory floor with steel columns, concrete aisle, and overhead crane](/blog/sap-extract-file-drop-not-architecture-hero.jpg)

## A drop is not a contract

Mid-market manufacturers often start SAP-to-Power-BI the same way: export what the last meeting asked for. Tables become CSVs. Columns get renamed in Power Query. Yesterday’s file is overwritten. Nobody keeps a bad-load copy. Nobody records row counts. Primary keys are “probably the document number.”

Then month-end arrives. Inventory does not tie. Orders look short. Margin moved and nobody can replay Tuesday’s extract. The argument is about the source because the landing zone never existed as a product.

This sits next to [refresh failures are a close risk](/blog/refresh-failures-are-a-close-risk) and [the 7 a.m. gateway surprise](/blog/gateway-refresh-7am-surprise). A silent overwrite is a refresh failure with better manners. It also feeds [why Power BI reports show different numbers](/blog/why-power-bi-reports-show-different-numbers) when two teams pull two different nights’ files and both call them “SAP.”

Architecture here is boring on purpose: durable landing, keys, history, checks, owners, and a semantic model on top—not a prettier pbix on a fragile share.

## The costs of file-drop “integration”

1. **Every variance becomes a source fight.** Did SAP change, did the extract truncate, or did Power Query filter quietly? Without lineage and row counts, the room guesses.

2. **History disappears at midnight.** Overwrites erase the ability to explain Wednesday’s pack on Friday. Auditors and controllers lose the as-of trail.

3. **Keys are assumed, not enforced.** Duplicate documents, null keys, and late-arriving dimensions break relationships. Margins inflate or vanish. See the definition cousin in [margin definitions that don’t survive](/blog/margin-definitions-that-dont-survive)—here the break is structural.

4. **Quality gates never run.** Empty files, schema drift, and partial extracts still “refresh successfully.” Green checkmarks hide missing plants.

5. **Grain stays report-shaped.** Extracts mirror the last Excel ask instead of a designed fact grain. Every new question needs a new drop. The estate becomes a folder of one-offs.

6. **Security rides the share.** Broad file permissions replace row-level intent. Sensitive cost and customer data travel farther than the meeting required.

7. **Ownership is nobody.** IT owns the job sometimes. Analytics owns the model sometimes. When the file is late, both point at the folder. Close risk has no name on the calendar.

8. **Side systems multiply.** Plants keep local extracts. Finance keeps a “known good” workbook. Power BI becomes one more consumer of an untrusted drop. Dual systems return.

## How to fix it: landing zone before dashboard

1. **Name the decisions and the grain.** Open orders, deliveries, inventory by plant, actuals by account. Write grain and as-of before another CSV ships. Dashboard pages come after.

2. **Land SAP into durable storage with keys.** Warehouse table, Azure SQL landing zone, or governed lake tables—pick what you can operate. Require primary keys, load timestamps, and source batch IDs. Stop overwriting the only copy.

3. **Keep history on purpose.** Slowly changing dimensions where needed. Snapshot facts where the business asks “what did we know Tuesday.” Replay beats argument.

4. **Add quality gates before Power BI refresh.** Row-count floors, null-key checks, plant completeness, and schema drift alerts. Fail the load loudly. Do not paint a green refresh over an empty file.

5. **Separate extract jobs from semantic models.** Pipelines move and validate data. The [Power BI semantic model](/blog/semantic-model-is-the-product) owns relationships and measures. Do not hide business logic only in Power Query on a flat file.

6. **Assign extract and model owners.** A person for the SAP job SLA. A person for the certified dataset. Put both on the close checklist beside [gateway and refresh risk](/blog/refresh-failures-are-a-close-risk).

7. **Certify one path for Monday and close.** Promote a [certified dataset](/blog/certified-datasets-vs-wild-west) fed from the landing zone. Retire personal imports of the raw share. Exploration can use sandboxes. The pack cannot.

8. **Document as-of on the page.** “SAP extract batch 2026-10-08 05:10 CT, books grain” beats “live from SAP” when the truth is a file. Honest labels restore trust faster than a new visual.

9. **Sequence delivery.** Landing zone and one owned measure first. Then the dashboard. Reversing that order funds another quarter of source fights.

10. **Refuse new drops without a contract.** If a stakeholder asks for “just one more extract,” require grain, keys, retention, and an owner—or say no. Unscoped drops are how architecture dies.

## What good looks like

SAP remains the system of record. The landing zone holds keyed, historical, checked tables on a named SLA. Power BI Import refreshes from that zone into a certified model with stewards.

When numbers move, the team can replay the batch, show row counts, and point to a measure owner. The meeting debates action—not whether Tuesday’s file was truncated.

The share folder stops being the integration strategy.

## A practical cutover

Pick one close-critical subject—inventory or open orders. Stop overwriting that extract. Land it into a table with a batch ID and primary key. Add a row-count check that pages someone before 6 a.m. Point one Import model at the table. Run both the old file pack and the new model for one week as a shadow.

When the landing path wins three mornings, retire the file-fed twin for that subject. Then move to the next noun.

Keep the old share read-only during cutover so nobody “fixes” a meeting by grabbing an ungoverned file. Communication matters: tell finance and plant leads which pack is official and which is shadow. Ambiguous dual paths recreate the source fight you are trying to end. Do not announce an “SAP analytics program” while the only interface is still a CSV on a share.

If vendors pitch connectors, listen for keys, history, and quality—not only “SAP certified” logos. A connector that lands the same fragile grain into a shinier folder is still a file drop with an API costume.

Pair the cutover with measure ownership. A perfect landing zone still produces five Revenues if each team invents DAX—see [measures nobody can explain](/blog/measures-nobody-can-explain). Architecture without stewards is only half the product.

## Executive takeaway

Nightly flat files without keys, history, or quality gates turn every variance into a source fight.

That is not an analytics architecture. Design the landing zone—durable, keyed, checked, owned—before the dashboard. Let Power BI consume a contract, not a folder.

Need a 30-minute look at whether your SAP-to-Power-BI path is a landing zone or a file drop? [Contact Alluvium](https://www.alluviumbi.com/contact). We’ll map one extract to keys, history, quality gates, and the model path close actually needs.
