---
title: "Incremental Refresh With the Wrong Range Is a Quiet Close Lie"
description: "A green Power BI incremental refresh can still drop late facts or restate history. Treat range design as a close control."
pubDate: 2026-09-22
tags:
  - Power BI
  - Incremental Refresh
  - Close Risk
  - Data Quality
draft: false
---

Incremental refresh finished green. Rows loaded and capacity looked happy. Then finance opens the flash and last Tuesday's late invoices never arrived. Or last month restated itself overnight because the range re-pulled history under a changed rule. The pipeline did not fail, but the close still lied.

Range and detect-data-changes design is a close control, not just a performance trick.

![Black-and-white stainless steel pipes and tanks on a plant floor](/blog/incremental-refresh-wrong-range-close-lie-hero.svg)

## Green incremental is not a complete day

Mid-market teams turn on incremental refresh to shrink overnight windows. That is fair. The failure is treating policy defaults as business truth.

A narrow refresh window drops late-arriving facts. A wide window without change detection restates periods that should have stayed frozen. Success means the job ran. It does not mean you have the as-of the controller needs.

This sits next to [refresh succeeded, data still wrong](/blog/refresh-succeeded-data-still-wrong) and [refresh failures are a close risk](/blog/refresh-failures-are-a-close-risk). Failures shout. Wrong ranges whisper through green history.

If [the semantic model is the product](/blog/semantic-model-is-the-product), partition policy belongs in the product spec. It is not a Desktop toggle someone set once during a pilot.

## How the quiet lie shows up

Late invoices post after the incremental window closed. They stay missing until someone forces a full reprocess, or they never land.

History gets restated. A mapping fix or exchange-rate change reloads prior months inside the incremental range, and totals shift with no business announcement.

Time zone and "today" boundaries cut the wrong day at plants that close on local time while the service runs on UTC.

Detect data changes is off, so corrections in the source never invalidate the partition. Or it is on, but pointed at a column that rarely updates, so stale partitions look fresh.

Archive and incremental periods were sized for demo data instead of your longest late-arrival pattern. Month-end teaches the lesson the policy should have.

## The costs of wrong-range incremental

1. **Close packs look complete and are not.** Missing late facts understate revenue, receipts, or scrap. Controllers spend hours reconciling against a green refresh.

2. **History moves under approved numbers.** Prior periods drift after the flash went out. Leadership stops trusting the packs that follow.

3. **Plant and finance disagree on as-of.** Ops saw the late load in the source system and the model did not. The real problem is policy, but people take the heat.

4. **Full refresh becomes the emergency habit.** Someone kicks off a weekend full load "to be safe." Capacity and gateway time burn while the root design stays wrong.

5. **Certified datasets endorse the lie.** A badge on an incremental model with silent gaps is [certification theater](/blog/certified-datasets-vs-wild-west). Endorsement without honest partitions is worse than no badge.

6. **Root cause starts in the wrong queue.** Tickets say "Power BI is wrong." Engineers check the gateway and capacity, but the bug was the range, change detection, or late-arrival handling.

7. **Shadow Excel returns for "known good days."** Teams keep a side extract for the days incremental skips. That is dual truth again, the same pattern behind [export to Excel as the real adoption metric](/blog/export-to-excel-is-the-adoption-metric).

8. **You optimize minutes and lose accuracy.** Refresh duration becomes the KPI, and decision-grade completeness never gets an owner.

## How to fix it: design range like a close control

1. **Write the late-arrival rule in plain business English.** How many days after the books date can invoices, shipments, or production still post? That number sizes the lookback. A guess from a tutorial does not.

2. **Separate archive, incremental, and hot lookback on purpose.** Archive is frozen history. Incremental is the moving window. Hot lookback reprocesses the late-arrival zone on every run. Document each one rather than letting defaults invent them.

3. **Turn on detect data changes against a real change column.** Use an updated-at field, modified timestamp, or batch watermark that actually moves when corrections land. Test it with a deliberate source edit.

4. **Pin as-of and partition policy on the executive page.** For example: "Incremental through T-3. Lookback 7 days for late posts. Archive frozen before." When a page says nothing about policy, readers assume perfection.

5. **Add completeness checks after refresh.** Check that expected plants are present, tie control totals to the GL or source, and set daily row-count floors. Fail the business release when the window looks green but thin. This is the same second gate described in [wrong-but-green refresh](/blog/refresh-succeeded-data-still-wrong).

6. **Forbid silent historical restatement.** If locked prior months must reload, require a named change record and notify finance. Restatement is a close event, not a side effect of range width.

7. **Align calendars and time zones explicitly.** Spell out plant local close versus service UTC versus the finance books calendar, and put the rule in the model description.

8. **Name an owner for partition policy.** Treat it the same way as [who can change a measure](/blog/who-can-change-a-measure). Range changes go through change control before close week, not out the door as a Friday Desktop publish.

9. **Rehearse late arrival before close.** Inject a delayed fact in a non-prod window and prove it lands on the next incremental run. If it does not, fix the policy before month-end instead of during it.

10. **Review false greens monthly.** Which green runs still caused missing days or restatement pain? Turn those into automated checks and lookback fixes. Shrink the gap between "job succeeded" and "day is complete."

## What good looks like

Incremental refresh still saves capacity. The close pack states the lookback and the freeze line. Late facts land inside the hot window, and history does not wander without notice.

When something is incomplete, the page says so before the CFO finds the hole. Full refresh is a rare, owned event, not a weekly panic button.

## A practical policy one-pager

Write one page per close-critical dataset. It lists the archive boundary, incremental length, lookback days, change-detection column, time zone, steward, and the completeness checks that must pass before publish.

Store it where the owner and the controller can both find it, and update it when source latency changes. Do not wait for perfect tooling. Start with a lookback sized to real late posts, a working change column, and three completeness checks, then automate. The first win is a morning when last Tuesday's late invoices show up without a heroic full refresh.

## Prove it on one subject before an estate-wide rollout

Pick the dataset behind the flash or inventory. Measure how often late facts show up after your current window, and set the lookback to cover that pattern with margin. Enable change detection and run two weeks in parallel with a daily completeness report.

Only then roll the pattern out to sibling models. Copying a wrong range everywhere industrializes the lie.

Leaders should ask a sharper question than "is incremental on?" Ask "what late-arrival window and freeze line does this pack promise?" That one question changes how teams design refresh.

## Executive takeaway

A green incremental refresh can still drop late facts or restate history. Treat range and detect data changes as close controls. Size the lookback to real latency, freeze history on purpose, and check completeness after every success. Then performance gains stop costing you trust.

Want a partition and lookback review on the datasets your close depends on? [Book a session](https://www.alluviumbi.com/contact). We will map late-arrival patterns, change detection, and the completeness gates that keep incremental honest. Or start with a [Free Model Health check](https://www.alluviumbi.com/power-bi-model-health).
