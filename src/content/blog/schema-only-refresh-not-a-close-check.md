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

The refresh completed. The service shows green. Schema-only, as designed. Fast. Cheap on capacity.

The close pack is still last month's facts.

Schema refresh updates tables and columns. It does not prove the ledger landed. Treating a metadata pass as a close check is how finance signs a pack that never moved.

![Black-and-white highland cliff and misty valley with a winding road below](/blog/schema-only-refresh-not-a-close-check-hero.jpg)

## Green is not a recon

Power BI offers granular refresh: schema only, selected tables, incremental partitions. Those tools exist to save time and capacity. They are good tools. They are not a finance control.

A schema-only refresh can succeed while fact partitions are skipped, incremental windows miss late invoices, or a dimension updates and the fact does not. The service did what you asked. You asked the wrong question for close.

[Refresh succeeded and the data is still wrong](/blog/refresh-succeeded-data-still-wrong) is the cousin. Schema-only is the special case where the pipeline is honest and the close process is not. You told it not to load the numbers, then treated the green check as if it had.

Month-end is when this bites. Teams shorten the window. They refresh schema to pick up a new column. They leave incremental on a range that closed three days ago. The pack looks current. Cash and shipments are not.

## The costs of calling schema a close

1. **Facts stay frozen while the model looks updated.** New columns appear. Old amounts remain. Executives see a "refreshed" pack and make a call on stale revenue.

2. **Incremental range and schema-only stack.** A wrong range already omits late-arriving facts. Schema-only on top of that is a close lie with two layers. The service stays green.

3. **Row counts nobody checks.** A dimension grew. The fact did not. Nobody compares to the GL batch. The recon lives in a spreadsheet that no longer matches the tile.

4. **Capacity savings become close policy.** Someone chose schema-only to avoid throttling. That is an infrastructure choice. It silently became the month-end procedure.

5. **New columns without new tests.** A schema refresh brings a field finance asked for. No measure uses it yet. The request is "done." The close still cannot see the cut.

6. **Audit trail says refreshed.** Tickets close. The gateway log is clean. [Refresh failures as close risk](/blog/refresh-failures-are-a-close-risk) never fires, because nothing failed. The miss is the definition of success.

7. **Controllers stop believing the green icon.** After one bad close, they export. Power BI becomes a preview. Excel becomes the sign-off. You paid for a model and kept a file.

## How to fix it: close checks are data checks

1. **Ban schema-only as the close refresh.** Schema-only is for development and for adding columns in Test. Prod close is a data refresh of the tables the pack uses.

2. **List the close tables.** GL actuals, AR, AP, inventory, shipments. Those tables load. The rest can wait. Granular refresh is for that list, not for metadata theater.

3. **Require a recon artifact.** Row count vs source. Amount vs trial balance or subledger. Timestamp of last fact. A human or a test writes pass/fail. Green in the service is not that artifact.

4. **Show partition and incremental windows on the pack.** If facts are current through Tuesday 6 p.m., say so. Hidden windows are how schema-only and incremental both hide lag.

5. **Separate "model compiled" from "period loaded."** Deployment can update measures. Close still needs the period's rows. Do not merge those two events into one status chip.

6. **Alert on zero-change facts after a close refresh.** If revenue rows did not move on the first business day after period end, that is a signal. Investigate before the flash.

7. **Put the close refresh type in the runbook.** Full, table-scoped, incremental with detect-data-changes. Named. Reviewed. Schema-only is not on the close menu.

8. **Teach the steering group the difference.** If leadership thinks any green refresh means signed books, they will keep getting Thursday's numbers in Friday's meeting. One slide. One rule.

## Capacity pressure is not a close policy

Shared capacity and long full refreshes are real. The answer is table-scoped data refresh for the close set, better incremental design, or a capacity plan — not schema-only on the night finance signs.

When infrastructure constraints rewrite the close procedure without finance agreeing, you have a governance miss dressed as optimization.


## A simple close refresh contract

Write three lines and put them in the runbook:

1. Tables that must load for the flash.
2. Refresh type allowed for those tables in Prod (full or incremental with a stated window).
3. Recon evidence required before finance accepts.

If schema-only is not on that list, operators cannot "save capacity" their way into an unsigned pack. Capacity planning becomes a separate conversation with a budget, not a silent edit to close.


## What a close check looks like

The job loads GL and operational fact tables for the locked period. Incremental ranges include late-arriving postings. A recon file shows counts and amounts vs source. The page shows as-of. Then someone in finance accepts the pack.

Schema changes still happen. They happen in Test, with a data refresh behind them, before anyone calls it close.

## How to talk about it in the steering meeting

Executives hear "refresh succeeded" and translate it to "books are in." Your job is to break that translation in one sentence: schema-only updates structure; close needs rows.

Put both statuses on the ops slide if you must keep granular refresh: Model schema current. Period facts loaded through [timestamp]. Recon [pass/fail]. Three chips beat one green lie.

If capacity cannot afford a full fact refresh every night, say so and fund the close set. Cutting to schema-only without that conversation moves a budget problem into a credibility problem. Credibility is more expensive.

## Incremental refresh is not a free pass either

Incremental done well is a close ally. Incremental with a stale range, or with detect-data-changes turned off for "speed," is another quiet lie. Schema-only on top of a bad range is how a pack can look freshly maintained while every amount is from last week.

Review incremental windows in the same meeting as close refresh type. They are one control family: what data is allowed to be missing when we say the period is ready.


## Executive takeaway

Schema-only refresh is not a close check. It is a metadata pass.

Load the facts the pack uses. Recon them. Label as-of. Keep schema-only in development, where it belongs.

Need a 30-minute look at whether your close refresh actually loads the period? [Contact Alluvium](https://www.alluviumbi.com/contact). We'll map the close tables, the refresh type, and the recon that should sit next to the green icon.
