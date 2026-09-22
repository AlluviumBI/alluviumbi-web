---
title: "Incremental Refresh With the Wrong Range Is a Quiet Close Lie"
description: "A green Power BI incremental refresh can still omit late facts or restate history wrong. Treat range design as a close control."
pubDate: 2026-09-22
tags:
  - Power BI
  - Incremental Refresh
  - Close Risk
  - Data Quality
draft: false
---

Incremental refresh finished. Green check. Rows loaded. Capacity smiled.

Finance opens the flash and last Tuesday's late invoices never arrived. Or last month restated itself overnight because the range re-pulled history with a changed rule. The pipeline did not fail. The close still lied.

Range and detect-data-changes design is a close control. It is not only a performance trick.

![Black-and-white stainless steel pipes and tanks on a plant floor](/blog/incremental-refresh-wrong-range-close-lie-hero.svg)

## Green incremental is not a complete day

Mid-market teams turn on incremental refresh to shrink overnight windows. That goal is fair. The failure mode is treating policy defaults as business truth.

A narrow refresh window drops late-arriving facts. A wide window without change detection restates periods that should have stayed frozen. Success means the job ran. It does not mean the as-of the controller needs.

This sits next to [refresh succeeded, data still wrong](/blog/refresh-succeeded-data-still-wrong) and [refresh failures are a close risk](/blog/refresh-failures-are-a-close-risk). Failures shout. Wrong ranges whisper through green history.

If [the semantic model is the product](/blog/semantic-model-is-the-product), partition policy is part of the product spec—not a Desktop toggle someone set once during a pilot.

## How the quiet lie shows up

Late-arriving invoices post after the incremental window closed. They never land until someone forces a full reprocess—or they never land at all.

Historical restatement: a mapping fix or exchange-rate change reloads prior months inside the incremental range. Totals shift without a business announcement.

Timezone and "today" boundaries cut the wrong day at plants that close on local time while the service runs UTC.

Detect data changes is off, so corrections in source never invalidate the partition. Or it is on against a column that rarely updates, so stale partitions look fresh.

Archive and incremental periods were sized for demo data, not for your longest late-arrival pattern. Month-end teaches the lesson the policy should have.

## The costs of wrong-range incremental

1. **Close packs look complete and are not.** Missing late facts understate revenue, receipts, or scrap. Controllers reconcile for hours against a green refresh.

2. **History moves under approved numbers.** Prior periods drift after the flash went out. Leadership loses trust in every subsequent pack.

3. **Plant and finance disagree on as-of.** Ops saw the late load in the source system. The model did not. The argument is policy, not people—yet people take the heat.

4. **Full refresh becomes the emergency habit.** Someone kicks a weekend full load "to be safe." Capacity and gateway burn. Incremental's benefit dies while the root design stays wrong.

5. **Certified datasets endorse the lie.** A badge on an incremental model with silent gaps is [certification theater](/blog/certified-datasets-vs-wild-west). Endorsement without partition honesty is worse than no badge.

6. **Root cause starts in the wrong queue.** Tickets say "Power BI wrong." Engineers check gateway and capacity. The bug was range, change detection, or late-arrival handling.

7. **Shadow Excel returns for "known good days."** Teams keep a side extract for the days incremental skips. Dual truth again—same pattern as [people still email Excel](/blog/we-paid-for-power-bi-people-still-email-excel).

8. **You optimize minutes and lose accuracy.** Refresh duration becomes the KPI. Decision-grade completeness never gets an owner.

## How to fix it: design range like a close control

1. **Write the late-arrival rule in business English.** How many days can invoices, shipments, or production post after the books date? That number sizes lookback—not a guess from a tutorial.

2. **Separate archive, incremental, and hot lookback on purpose.** Archive is frozen history. Incremental is the moving window. Hot lookback reprocesses the late-arrival zone every run. Document each. Do not let defaults invent them.

3. **Turn on detect data changes against a real change column.** Updated-at, modified timestamp, or a source batch watermark that actually moves when corrections land. Test it with a deliberate source edit. Confirm the partition refreshes.

4. **Pin as-of and partition policy on the executive page.** "Incremental through T-3. Lookback 7 days for late posts. Archive frozen before." Silence about policy reads as assumed perfection.

5. **Add completeness checks after refresh.** Expected plants present. Control totals versus GL or source. Row-count floors by day. Fail the business release when the window looks green but thin—same second gate as [wrong-but-green refresh](/blog/refresh-succeeded-data-still-wrong).

6. **Forbid silent historical restatement.** If prior locked months must reload, require a named change record and a finance notify. Restatement is a close event, not a side effect of range width.

7. **Align calendars and time zones explicitly.** Plant local close versus service UTC versus finance books calendar. Put the rule in the model description. Ambiguity here is a recurring close lie.

8. **Name an owner for partition policy.** Same spirit as [who can change a measure](/blog/who-can-change-a-measure). Range changes go through change control before close week, not as a Friday Desktop publish.

9. **Rehearse late arrival before close.** Inject a delayed fact in a non-prod window. Prove it lands on the next incremental run. If it does not, fix policy before month-end—not during it.

10. **Review false greens monthly.** Which successful incrementals still caused missing-day or restatement pain? Promote those into automated checks and lookback adjustments. Shrink the gap between "job succeeded" and "day is complete."

## What good looks like

Incremental refresh still saves capacity. The close pack states the lookback and the freeze line. Late facts land inside the hot window. History does not wander without a notice.

When something is incomplete, the page says so before the CFO finds the hole. Full refresh is a rare, owned event—not a weekly panic button.

## A practical policy one-pager

One page per close-critical dataset: archive boundary, incremental length, lookback days, change-detection column, time zone, steward, and the completeness checks that must pass before publish.

Store it where the owner and the controller can both find it. Update it when source latency changes. A missing one-pager is how tutorial defaults become quiet close lies.

Do not wait for perfect tooling. Start with lookback sized to real late posts, a change column that works, and three completeness checks. Automate next. The first win is a morning when late Tuesday invoices appear without a hero full refresh.

## Prove it on one subject before estate-wide rollout

Pick the dataset behind flash or inventory. Measure how often late facts appear after your current window. Set lookback to cover that pattern with margin. Enable change detection. Run two weeks in parallel with a daily completeness report.

Only then roll the pattern to sibling models. Copying a wrong range everywhere industrializes the lie.

Leaders should ask a sharper question than "is incremental on?" Ask "what late-arrival window and freeze line does this pack promise?" That question alone changes how teams design refresh.

## Executive takeaway

A green incremental refresh can still omit late facts or restate history. That is a quiet close lie.

Treat range and detect-data-changes as close controls. Size lookback to real latency. Freeze history on purpose. Check completeness after success. Then performance gains stop trading away trust.

Need a partition and lookback review on the datasets your close depends on? [Contact Alluvium](https://www.alluviumbi.com/contact). We will map late-arrival patterns, change detection, and the completeness gates that keep incremental honest.
