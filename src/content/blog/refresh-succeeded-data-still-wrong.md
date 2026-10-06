---
title: "The Refresh Succeeded. The Data Is Still Wrong"
description: "A green Power BI refresh does not mean the numbers are right. Add data-quality checks after refresh or executives will distrust every run."
pubDate: 2026-09-29
tags:
  - Power BI
  - Data Quality
  - Refresh
draft: false
---

The refresh history says success. The check is green, the run finished on time, and the rows loaded.

Then finance opens the page and revenue is still wrong. Inventory does not tie and a plant is missing. Yesterday’s partial file quietly became today’s certified truth. Success meant the pipeline ran. It did not mean the business can trust what came out.

![Black-and-white industrial pipes, valves, and steel tanks in a processing plant](/blog/refresh-succeeded-data-still-wrong-hero.jpg)

## Green refresh is necessary. It is not sufficient.

Many mid-market teams treat refresh success as the quality gate. If the dataset refreshed, the day can proceed.

That gate only proves connectivity, credentials, and a completed query. It proves nothing about completeness, reconciliation, grain, or business rules.

This sits next to [refresh failures are a close risk](/blog/refresh-failures-are-a-close-risk). Failures are visible. Wrong but successful refreshes are worse, because they spread with confidence. It also sits next to [data quality shows up as arguments](/blog/data-quality-shows-up-as-arguments). When the pipeline smiles and the number lies, the argument moves into the meeting with no error log to point at.

Executives do not care that the gateway was healthy. They care that the pack matches the books, the floor, or the customer truth they already feel in their gut.

## Why wrong data still refreshes cleanly

Source systems accept incomplete extracts. A file lands with a plant missing from yesterday’s rows, and the load succeeds because the file is well-formed.

Incremental logic skips periods it should have reprocessed. Success means “no exception,” not “catch-up complete.”

A quiet filter change in Power Query drops rows that used to load. The refresh does not fail. The fact table just shrinks.

Currency, calendar, or late-arriving dimensions go stale while the facts stay fresh. The measures calculate, but the meaning breaks.

“Temporary” manual adjustments upstream never reach the source the model reads. Operations fixed the workbook, and the model never saw the fix.

Duplicate keys and fan-out inflate totals without throwing an error. The engine is fine. The business is not.

## The costs of trusting green without quality gates

1. **Wrong numbers travel farther than failed ones.** A failed refresh stops distribution. A successful wrong refresh feeds every app, export, and screenshot downstream.

2. **Close and forecast calls burn time.** Controllers spend hours reconciling against a dataset that “worked,” and the calendar slips while everyone trusts the wrong green.

3. **Teams disable alerts.** After enough false confidence, leaders stop believing success messages, and then real failures get ignored too.

4. **Certified labels lose meaning.** [Certified datasets](/blog/certified-datasets-vs-wild-west) that publish wrong totals teach the business that certification is theater.

5. **Shadow workbooks return.** People keep a “known good” extract on the side. Adoption reverses even while refresh SLAs look excellent.

6. **Root cause hides in business logic.** Engineers debug gateways while the real bug is a missing plant code, a changed ledger mapping, or a late file. The wrong team owns the incident.

7. **Executive trust resets to zero.** One confident wrong Monday can undo a quarter of delivery goodwill. Trust is asymmetric.

8. **You optimize the wrong SLA.** Uptime becomes the KPI, and decision-grade accuracy never gets an owner.

## How to fix it: quality checks after refresh, before trust

1. **Define a short reconciliation pack per critical dataset.** Include row counts by plant, totals against GL or source control totals, freshness by partition, and null rates on key dimensions. Keep it boring and automatic.

2. **Gate the business release, not only the technical refresh.** A dataset can refresh and still be held back from the executive app until checks pass. Separate “loaded” from “published for decisions.”

3. **Alert on shape, not only on error.** A sudden drop in row count, a missing plant, or zero invoice lines on a weekday should wake someone up even when the refresh is green.

4. **Pin an as-of and a quality badge on executive pages.** “Refreshed 6:12 a.m. Reconciled to GL control. Status: pass.” Silence about quality reads as assumed perfection.

5. **Own late-arriving and partial files explicitly.** Document what happens when Tuesday’s file lands late. Do not let partial success pass for a full day.

6. **Tie incidents to business owners.** When margin is wrong, the measure owner and the data steward share the ticket. It is the same living ownership idea behind [KPI tiles that still show departed names](/blog/kpi-owner-left-tile-still-named).

7. **Regression-test measures after source changes.** Mapping edits and ERP patches break totals without breaking refresh. Put business tests next to technical tests.

8. **Keep [the semantic model as the product](/blog/semantic-model-is-the-product).** Quality rules belong with the product, not in a side spreadsheet someone checks when they have time.

9. **Review false greens monthly.** Ask which successful refreshes still caused pain in a meeting, and turn those into automated checks. Each one shrinks the gap between pipeline success and decision trust.

## Start with three controls, not thirty

Do not boil the ocean. For the dataset behind the executive pack, automate three controls first: control-total tie-out, expected entity coverage, and freshness by critical partition. Ship those, then add null rates and period-over-period shape checks. A short gate that runs beats a perfect framework that never leaves the slide.

Put the result where decisions happen, not in a steward’s mailbox. Show pass or fail and the as-of on the executive page. If the status is fail, say what failed in one line: missing plant file, control total variance, stale dimension.

## Make “wrong but green” discussable

Many teams hide quality misses because they fear looking incompetent next to a green pipeline. That silence is expensive.

Run blameless reviews of false greens. Celebrate the check that caught a partial plant file. Treat the miss that reached the CFO as a product defect with owners, not as a personal failure of whoever clicked refresh. When quality is discussable, checks improve. When it is shameful, people stop looking.

## What good looks like

Refresh history can still show green, but the executive pack only opens on datasets that also passed reconciliation. When something is wrong, the page says so before the CFO finds it, distribution pauses on purpose, and the incident has both a business owner and a technical owner.

Leaders start asking a sharper question than “did refresh succeed?” They ask “what business checks passed before we trusted this pack?” Over time, “refresh succeeded” stops being the end of the story and becomes the start of a short, automatic quality handshake.

## Executive takeaway

A successful refresh is plumbing. Decision-grade data needs a second gate. If [refresh failures are a close risk](/blog/refresh-failures-are-a-close-risk), false greens are a close ambush, so build that gate before the next month-end teaches the lesson the hard way.

Want a practical quality gate on the datasets your close depends on? [Book a session with Alluvium](/contact). We will map control totals, alert rules, and the publish path that keeps wrong numbers from looking successful. To start with the model itself, request a [free Model Health check](/power-bi-model-health).
