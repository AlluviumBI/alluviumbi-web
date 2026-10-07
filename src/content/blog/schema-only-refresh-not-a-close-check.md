---
title: "Schema-Only Refresh Is Not a Close Check"
description: "A green schema-only refresh is metadata, not a close. Validate fact freshness, row counts, and recon before you call the pack done."
pubDate: 2026-09-15
tags:
  - Power BI
  - Refresh
  - Close
  - Data Quality
draft: false
---

The refresh completed and the service shows green. It was schema-only, as designed, which made it fast and cheap on capacity. The close pack is still showing last month's facts.

A schema refresh updates tables and columns. It does not prove the ledger landed. Treating a metadata pass as a close check is how finance signs a pack that never moved.

![Black-and-white highland cliff and misty valley with a winding road below](/blog/schema-only-refresh-not-a-close-check-hero.jpg)

## Green is not a recon

Power BI has no refresh option named schema-only. Teams use the word for any refresh or deployment that updates structure without reloading data. A metadata-only deployment pushes new tables, columns, and measures and leaves the old rows in place. An enhanced refresh or TMSL refresh of type calculate recalculates the model without loading new data from the source. Table-scoped and incremental refreshes load some data and skip the rest. Those options exist to save time and capacity, and they are good tools. They are not a finance control.

A schema-only refresh can succeed while fact partitions are skipped, incremental windows miss late invoices, or a dimension updates and the fact does not. The service did what you asked. You asked the wrong question for close.

[Refresh succeeded and the data is still wrong](/blog/refresh-succeeded-data-still-wrong) is the cousin of this problem. Schema-only is the special case where the pipeline is honest and the close process is not. You told it not to load the numbers, then treated the green check as if it had.

Month-end is when this bites. Teams shorten the window, refresh schema to pick up a new column, and leave incremental on a range that closed three days ago. The pack looks current. Cash and shipments are not.

## The costs of calling schema a close

1. **Facts stay frozen while the model looks updated.** New columns appear and old amounts remain. Executives see a "refreshed" pack and make a call on stale revenue.

2. **A wrong incremental range stacks with schema-only.** The bad range already omits late-arriving facts. Schema-only on top of it is a close lie with two layers, and the service stays green.

3. **Nobody checks row counts.** A dimension grew and the fact did not, but nobody compares against the GL batch. The recon lives in a spreadsheet that no longer matches the tile.

4. **Capacity savings become close policy.** Someone chose schema-only to avoid throttling. That was an infrastructure choice, and it quietly became the month-end procedure.

5. **New columns arrive without new tests.** A schema refresh brings in the field finance asked for, but no measure uses it yet. The request is marked "done" and the close still cannot see the cut.

6. **The audit trail says refreshed.** Tickets close and the gateway log is clean. [Refresh failures as close risk](/blog/refresh-failures-are-a-close-risk) never fires, because nothing failed. The miss is in the definition of success.

7. **Controllers stop believing the green icon.** After one bad close, they export. Power BI becomes a preview and Excel becomes the sign-off. You paid for a model and kept a file.

## How to fix it: close checks are data checks

1. **Ban schema-only as the close refresh.** Schema-only is for development and for adding columns in Test. The production close is a data refresh of the tables the pack uses.

2. **List the close tables.** GL actuals, AR, AP, inventory, and shipments load. The rest can wait. Granular refresh is for that list, not for metadata theater.

3. **Require a recon artifact.** It shows row count against source, amount against the trial balance or subledger, and the timestamp of the last fact. A person or a test records pass or fail. A green icon in the service is not that artifact.

4. **Show partition and incremental windows on the pack.** If facts are current through Tuesday 6 p.m., say so. Hidden windows are how schema-only and incremental both hide lag.

5. **Separate "model compiled" from "period loaded."** A deployment can update measures, but close still needs the period's rows. Do not merge those two events into one status chip.

6. **Alert on zero-change facts after a close refresh.** If revenue rows did not move on the first business day after period end, investigate before the flash.

7. **Put the close refresh type in the runbook.** Full, table-scoped, or incremental with detect-data-changes, named and reviewed. Schema-only is not on the close menu.

8. **Teach the steering group the difference.** If leadership thinks any green refresh means signed books, they will keep getting Thursday's numbers in Friday's meeting. One slide and one rule will do it.

## Capacity pressure is not a close policy

Shared capacity and long full refreshes are real problems. The answer is a table-scoped data refresh for the close set, better incremental design, or a capacity plan. It is not schema-only on the night finance signs.

When infrastructure constraints rewrite the close procedure without finance agreeing, you have a governance miss dressed up as optimization. If capacity cannot afford a full fact refresh every night, say so and fund the close set. Cutting to schema-only without that conversation turns a budget problem into a credibility problem, and credibility costs more.

Incremental refresh is not a free pass either. Done well, it is a close ally. With a stale range, or with detect-data-changes turned off for "speed," it is another quiet lie. Review incremental windows in the same meeting as close refresh type. They belong to one control family: what data is allowed to be missing when we say the period is ready.

## A simple close refresh contract

Write three lines and put them in the runbook:

1. Tables that must load for the flash.
2. Refresh type allowed for those tables in Prod (full or incremental with a stated window).
3. Recon evidence required before finance accepts.

If schema-only is not on that list, operators cannot "save capacity" their way into an unsigned pack. Capacity planning becomes a separate conversation with a budget, not a silent edit to close.

## What a close check looks like

The job loads GL and operational fact tables for the locked period, with incremental ranges that include late-arriving postings. A recon file shows counts and amounts against source, and the page shows the as-of. Then someone in finance accepts the pack.

Schema changes still happen. They happen in Test, with a data refresh behind them, before anyone calls it close.

In the steering meeting, executives hear "refresh succeeded" and translate it to "books are in." Break that translation in one sentence: schema-only updates structure, and close needs rows. If you keep granular refresh, put three statuses on the ops slide: model schema current, period facts loaded through a stated timestamp, and recon pass or fail. Three chips beat one green lie.

## Executive takeaway

Schema-only refresh is not a close check. It is a metadata pass. Load the facts the pack uses, recon them, label the as-of, and keep schema-only in development where it belongs.

Want to know whether your close refresh actually loads the period? [Book a session with Alluvium](/contact). We'll map the close tables, the refresh type, and the recon that should sit next to the green icon. For a wider read on the model, start with a [free Model Health check](/power-bi-model-health).
