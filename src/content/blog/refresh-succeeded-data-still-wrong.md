---
title: "The Refresh Succeeded. The Data Is Still Wrong."
description: "A green Power BI refresh does not mean the numbers are right. Add data-quality checks after refresh or executives will distrust every successful run."
pubDate: 2026-09-29
tags:
  - Power BI
  - Data Quality
  - Refresh
draft: false
---

The refresh history says success. Green check. On time. Rows loaded.

Finance opens the page and the revenue number is still wrong. Inventory does not tie. A plant is missing. Yesterday’s partial file quietly became today’s certified truth.

Success meant the pipeline ran. It did not mean the business can trust the output.

![Black-and-white industrial pipes, valves, and steel tanks in a processing plant](/blog/refresh-succeeded-data-still-wrong-hero.jpg)

## Green refresh is necessary. It is not sufficient.

Many mid-market teams treat refresh success as the quality gate. If the dataset refreshed, the day can proceed.

That gate only proves connectivity, credentials, and that a query completed. It does not prove completeness, reconciliation, grain, or business rules.

This sits next to [refresh failures are a close risk](/blog/refresh-failures-are-a-close-risk). Failures are visible. Wrong-but-successful refreshes are worse: they spread confidently.

It also sits next to [data quality shows up as arguments](/blog/data-quality-shows-up-as-arguments). When the pipeline smiles and the number lies, the argument moves into the meeting with no error log to point at.

Executives do not care that the gateway was healthy. They care that the pack matches the books, the floor, or the customer truth they already feel in their gut.

## Why wrong data still refreshes cleanly

Source systems accept incomplete extracts. A file lands with yesterday’s rows missing a plant. The load succeeds because the file is well-formed.

Incremental logic skips periods it should have reprocessed. Success means “no exception,” not “catch-up complete.”

Silent filter changes in Power Query drop rows that used to load. The refresh does not fail. The fact table simply shrinks.

Currency, calendar, or late-arriving dimensions are stale while facts are fresh. Measures calculate. Meaning breaks.

Upstream “temporary” manual adjustments never made it into the source the model reads. Operations fixed the workbook. The model never saw the fix.

Duplicate keys and fan-out inflate totals without throwing. The engine is fine. The business is not.

## The costs of trusting green without quality gates

1. **Wrong numbers travel farther than failed ones.** A failed refresh stops distribution. A successful wrong refresh feeds every app, export, and screenshot in the chain.

2. **Close and forecast calls burn time.** Controllers reconcile for hours against a dataset that “worked.” The calendar slips while everyone trusts the wrong green.

3. **Teams disable alerts.** After enough false confidence, leaders stop believing success messages. Real failures then get ignored too.

4. **Certified labels lose meaning.** [Certified datasets](/blog/certified-datasets-vs-wild-west) that publish wrong totals teach the business that certification is theater.

5. **Shadow workbooks return.** People keep a “known good” extract on the side. Adoption reverses even while refresh SLAs look excellent.

6. **Root cause hides in business logic.** Engineers debug gateways. The bug was a missing plant code, a changed ledger mapping, or a late file. The wrong team owns the incident.

7. **Executive trust resets to zero.** One confident wrong Monday can undo a quarter of delivery goodwill. Trust is asymmetric.

8. **You optimize the wrong SLA.** Uptime becomes the KPI. Decision-grade accuracy never gets an owner.

## How to fix it: quality checks after refresh, before trust

1. **Define a short reconciliation pack per critical dataset.** Row counts by plant. Totals versus GL or source system control totals. Freshness by partition. Null rates on key dimensions. Keep it boring and automatic.

2. **Fail the business release, not only the technical refresh.** A dataset can refresh and still be blocked from the executive app until checks pass. Separate “loaded” from “published for decisions.”

3. **Alert on shape, not only on error.** Sudden drop in row count, missing expected plant, zero invoice lines for a weekday—these should wake someone even when the refresh is green.

4. **Pin an as-of and a quality badge on executive pages.** “Refreshed 6:12 a.m. Reconciled to GL control. Status: pass.” Silence about quality reads as assumed perfection.

5. **Own late-arriving and partial files explicitly.** Document what happens when Tuesday’s file lands late. Do not let partial success look like a full day.

6. **Tie incidents to business owners.** When margin is wrong, the measure owner and the data steward share the ticket. Same living ownership idea as KPI tiles that still show departed names.

7. **Regression-test measures after source changes.** Mapping edits and ERP patches break totals without breaking refresh. Put business tests next to technical tests.

8. **Keep [the semantic model as the product](/blog/semantic-model-is-the-product).** Quality rules belong with the product, not in a side spreadsheet someone remembers to check when they have time.

9. **Review false greens monthly.** Which successful refreshes still caused meeting pain? Promote those pain points into automated checks. Shrink the gap between pipeline success and decision trust.

## What good looks like

Refresh history can still show green. The executive pack only opens on datasets that also passed reconciliation gates.

When something is wrong, the page says so before the CFO finds it. Distribution pauses on purpose. The incident has a business owner and a technical owner.

Over time, “refresh succeeded” stops being the end of the story. It becomes the start of a short, automatic quality handshake.

## Make “wrong but green” discussable

Many teams hide quality misses because they fear looking incompetent next to a green pipeline. That silence is expensive.

Create a blameless review for false greens. Celebrate the check that caught a partial plant file. Treat the miss that reached the CFO as a product defect with owners—not as a personal failure of the person who clicked refresh.

When quality is discussable, checks improve. When quality is shameful, people stop looking.

## Start with three controls, not thirty

Do not boil the ocean. For the dataset behind the executive pack, automate three controls first: control-total tie-out, expected entity coverage, and freshness by critical partition.

Ship those. Then add null rates and period-over-period shape checks. A short gate that runs beats a perfect framework that never leaves the slide.

If [refresh failures are a close risk](/blog/refresh-failures-are-a-close-risk), false greens are a close ambush. Build the second gate before the next month-end teaches the lesson the hard way.

Leaders should ask a sharper question than “did refresh succeed?” Ask “what business checks passed before we trusted this pack?” That question alone changes how teams design pipelines.

## Make quality visible where decisions happen

Do not hide reconciliation in a steward mailbox. Put pass/fail and as-of on the executive page. If status is fail, say what failed in one line: missing plant file, control total variance, stale dimension.

Visible quality changes behavior. Leaders stop treating green refresh history as a blessing. Teams stop shipping “successful” loads that still cannot survive the first finance question.

## Executive takeaway

A successful refresh is plumbing. Decision-grade data needs a second gate.

Automate reconciliation. Separate loaded from published. Put quality on the page. Then green means something a steering committee can believe.

Need a practical quality gate on the datasets your close depends on? [Contact Alluvium](https://www.alluviumbi.com/contact). We will map control totals, alert rules, and the publish path that should stop wrong numbers from looking successful.

[Book a 30-minute consult](/contact).
