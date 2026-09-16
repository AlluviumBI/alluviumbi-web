---
title: "Your Plant Floor Speaks Machines. Finance Speaks ERP. The Model Needs Both Clocks."
description: "Shift OEE and financial scrap share labels but not clocks. Model both grains or manufacturing and finance argue past each other."
pubDate: 2026-09-17
tags:
  - Power BI
  - Manufacturing
  - MES
  - ERP
draft: false
---

The plant floor speaks machines. Shift. Line. Cycle. OEE. Scrap at the cell.

Finance speaks ERP. Period. Order. Standard cost. Scrap that posted to the books.

Both use English words like scrap, downtime, and throughput. They do not share a clock. Then someone builds one Power BI tile and expects manufacturing and finance to agree. They argue past each other. Someone prints a second pack—cousin to [the plant manager prints the dashboard](/blog/plant-manager-prints-the-dashboard)—because the model never named both grains.

![Black-and-white plant floor worker guiding a large suspended industrial machine component](/blog/plant-floor-and-erp-both-clocks-hero.jpg)

## Shared labels, different clocks

MES and machine systems care about shift start, line state, reason codes, and what happened this hour. ERP cares about inventory postings, order status, valuation, and what the books will defend. Shift OEE and financial scrap can both be “true” and still refuse to match on a single unlabeled axis.

The failure is not that one system is wrong. The failure is publishing one “Scrap %,” “OEE,” or “Throughput” that pretends machine time and financial period are the same grain.

This sits next to [manufacturing scrap never makes the pack](/blog/manufacturing-scrap-never-makes-the-pack) and [why Power BI reports show different numbers](/blog/why-power-bi-reports-show-different-numbers). Scrap that never reaches the Monday pack is often a clock fight wearing a quality costume. The [semantic model is the product](/blog/semantic-model-is-the-product)—not a mashup of shift tags and GL accounts under one chart.

## The costs of one clock pretending to be two

1. **Stand-up and flash talk past each other.** Ops opens shift OEE. Finance opens period scrap dollars. The first half hour is reconciliation, not action.

2. **Scrap that never makes the pack.** Machine scrap exists in MES. Financial scrap waits for posting rules. Unlabeled tiles drop one or invent the other—see [manufacturing scrap never makes the pack](/blog/manufacturing-scrap-never-makes-the-pack).

3. **Downtime dictionaries collide.** MES reason codes and ERP order delays share words. They do not share ownership. Rollups invent “lost hours” finance will not sign.

4. **Shift vs calendar period.** A Sunday night shift crosses Monday’s books. One axis without as-of makes variance look like performance when it is timing.

5. **Standard cost vs machine actuals.** Finance values scrap at standard. Ops counts pieces and minutes. One “Scrap Cost” without basis is a debate starter.

6. **Print and side Excel return.** When the tile cannot serve both clocks, plant managers print or export—exactly the pattern in [plant manager prints the dashboard](/blog/plant-manager-prints-the-dashboard). Trust leaves the model.

7. **Capacity and refresh collide with live curiosity.** Pointing every OEE visual at production systems at stand-up time invites the same contention class as [shared capacity throttled the close](/blog/shared-capacity-throttled-the-close) and [gateway refresh 7 a.m. surprise](/blog/gateway-refresh-7am-surprise)—different symptom, same meeting pain.

8. **Ownership vacuum.** Manufacturing owns MES. Finance owns ERP. Analytics owns the pbix. When numbers disagree, all three point at Power BI.

## How to fix it: model both grains on purpose

1. **Write the decisions before the join.** Shift stand-up needs machine OEE and scrap on shift grain. Financial flash needs posted scrap and yield on books grain. Continuous improvement may need both with a bridge. Name which meeting uses which clock.

2. **Define grain for each feed.** Line-shift-reason for MES. Item-plant-period (or order) for ERP scrap and throughput. Document grain where successors find it.

3. **Separate measures with adult names.** Shift OEE. MES scrap pieces. ERP scrap dollars posted. Yield at standard. Never one “Scrap” that switches source by page filter.

4. **Build a governed bridge, not a quiet union.** Map item, plant, and time with explicit rules for shift-to-period. Show MES vs ERP delta when leadership always asks why they differ. Do not average clocks into one line.

5. **Put both as-of stamps on the page.** “MES shift as of 5:00 a.m. CT” and “ERP scrap through last posting batch” are management sentences. An honest dual clock beats a fake single truth.

6. **Align reason and status dictionaries where you claim a join.** If you report “downtime” across systems, publish the map. If you cannot map it, do not smash it.

7. **Land machine data outside the live contention path for the pack.** Prefer a governed import for Monday pages. Treat refresh failure as [close risk](/blog/refresh-failures-are-a-close-risk), not as a visual bug.

8. **Assign stewards by clock.** Ops owns shift OEE and MES scrap definitions. Finance owns posted scrap and valuation. Analytics owns wiring—not silent rewrites. Pair with [who can change a measure](/blog/who-can-change-a-measure).

9. **Certify the manufacturing pack that leaders actually open.** One path for stand-up. One path for flash. A bridge page where comparison is required. Retire the unlabeled mashup that forced the printout.

10. **Prove one week of dual-clock honesty.** Shadow the old single tile. When both rooms stop arguing about which system is “right,” archive the mashup.

## What good looks like

MES still runs the lines. ERP still runs the books. Power BI exposes both clocks with names a successor can read.

The stand-up opens shift OEE and scrap on machine grain. Finance opens posted scrap on books grain. When leadership compares them, they open the bridge—not a courtroom.

Plant managers stop printing a private truth. They open the certified pack because it finally speaks both languages without pretending they are one.

## A practical cutover (one KPI, not the whole plant)

Week one: choose Scrap—the fight you already have. Document MES grain, ERP grain, calendars, and valuation basis. Rename measures. Add as-of. Build a simple delta card. Shadow for one stand-up and one flash cycle.

Week two: do the same for OEE vs throughput if the room still argues. Do not relaunch every manufacturing dashboard before the first dual-clock KPI is trusted. Sequence integration risk the same way you would for any multi-system pack: clocks and grain first, visuals last.

You do not need a new MES or ERP to stop clock theater. You need the courage to show two honest numbers instead of one convenient fiction—plus two named grains, a bridge, and meeting discipline: if a manufacturing number lacks system, grain, and as-of, it does not enter the minutes.

Do not smash shift and period into one unlabeled axis. Do not ask finance to ignore postings or ops to ignore the line so the chart looks neat. Do not treat a green refresh as proof the mashup is honest.

## Executive takeaway

Shift OEE and financial scrap share labels but not clocks.

Model both grains—or manufacturing and finance will keep arguing past each other while someone prints the real pack. Name the clocks. Build the bridge. Keep the Monday decisions on measures people can defend.

Need a 30-minute look at where MES and ERP collide in Power BI? [Contact Alluvium](https://www.alluviumbi.com/contact). We’ll map one plant KPI to both clocks, the bridge, and the labels the room needs.
