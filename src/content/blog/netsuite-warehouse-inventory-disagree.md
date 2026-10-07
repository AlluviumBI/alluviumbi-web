---
title: "NetSuite Inventory and the Warehouse System Disagree. Power BI Shouldn't Pick a Side Quietly"
description: "On-hand fights are grain and timing fights between ERP and WMS. Name the source of truth in the model or Excel returns."
pubDate: 2026-09-15
tags:
  - Power BI
  - NetSuite
  - Inventory
  - WMS
draft: false
---

NetSuite says one on-hand number and the warehouse system says another. Both can be right for their job.

Then someone builds a Power BI tile labeled “Inventory” and quietly prefers one feed, or averages them, or switches source with a page filter. The room builds Excel to explain the gap. Ops trusts the WMS, finance trusts the ERP, and the model pretends there was never a fight.

On-hand disagreements are grain and timing fights. Name the source of truth in the model, or the meeting will name it in a spreadsheet.

![Black-and-white aerial view of semi-trucks parked in angled bays at a logistics lot](/blog/netsuite-warehouse-inventory-disagree-hero.jpg)

## Same noun, different clock and grain

NetSuite inventory is ERP-shaped. It cares about financial on-hand, locations the books recognize, and transactions that posted. A WMS cares about bin, pallet, pick face, wave, and what can ship this hour. Cycle counts, in-transit, quarantine, and soft allocations land differently in each system.

Neither system is lying when the totals disagree. They are answering different questions, on different clocks, at different grain.

The failure is publishing one unlabeled “On-Hand,” “Available,” or “Inventory” tile that pretends the join is obvious. Leaders think they are arguing about accuracy when they are really arguing about as-of, status codes, and which location hierarchy counts.

This sits next to [inventory is cash](/blog/inventory-is-cash-slow-stock-reporting), [why Power BI reports show different numbers](/blog/why-power-bi-reports-show-different-numbers), and [ops still runs the plant from spreadsheets](/blog/ops-still-runs-the-plant-from-spreadsheets). Slow stock reporting and dual Excel packs are often the same grain fight in different clothes.

## The costs of a quiet side in the model

1. **The stand-up spends its first half hour on reconciliation.** Arguing over whether NetSuite or the WMS is right crowds out who should pick, move, or buy. The tile becomes a courtroom.

2. **Available stock cannot ship.** ERP available ignores holds the warehouse knows about. Ops ships short or overcommits, and both cash and service take the hit, as covered in [inventory is cash](/blog/inventory-is-cash-slow-stock-reporting).

3. **Bins show up that the books never owned.** The WMS shows quantity in locations finance does not recognize. One “Inventory” rollup either invents assets or silently drops a building.

4. **Timing collides.** ERP post time, WMS scan time, and Power BI refresh time are three different clocks. Put them on one unlabeled axis and lag looks like theft or a miracle.

5. **Status codes get smashed into one measure.** Quarantine, damaged, in-transit, allocated, and sellable share a chart. The label still says On-Hand, but the grain does not.

6. **Item and location keys diverge.** “SKU-100” in NetSuite is three pack sizes in the WMS. Building, bin, and subsidiary do not line up. Rollups invent product, and margin by item becomes fiction.

7. **Trust moves to side files.** Controllers keep an ERP extract and warehouse leads keep a WMS export. The Power BI page becomes decoration, and the dual systems come back with better logos.

8. **New leaders inherit a trap.** A new ops director compares “Inventory” to the dock and concludes the model is broken. In fact, the model published a noun with no system of record, status, or as-of.

## How to fix it: name the truth, then bridge on purpose

1. **Write down the decision before the join.** Financial close needs ERP on-hand. Pick and ship need WMS available. Working capital reviews may need both, with a bridge. Name which meeting uses which system.

2. **Define grain for each feed.** One feed may be item-location-status and the other item-bin-status. Document the grain in the model description where successors will find it, and do not assume “inventory” means the same row in both.

3. **Separate measures with grown-up names.** NetSuite on-hand books. WMS sellable available. In-transit not yet posted. Never publish one “Inventory” that switches source by bookmark.

4. **Build a governed bridge, not a quiet union.** Map item and location keys with status and timing rules. When the company always asks “why don’t these match,” show the ERP versus WMS delta as its own measure. Do not UNION ALL and hope.

5. **Put the as-of on the page.** Show the as-of and basis next to the number. “WMS available as of 5:00 a.m. CT” and “NetSuite on-hand through last posting batch” are management sentences.

6. **Own item and location dimensions once.** A shared item and site bridge, or a mastered dimension, beats two competing hierarchies in one visual. Bad keys make good DAX look dishonest.

7. **Assign stewards by system and measure.** Finance owns books on-hand. Ops owns WMS available and holds. Analytics owns the model wiring, not silent rewrites of either definition. See [the semantic model is the product](/blog/semantic-model-is-the-product).

8. **Certify the inventory pack, not each team’s export.** Keep one [certified path](/blog/certified-datasets-vs-wild-west) for Monday and the close. Sandbox exploration can connect to anything. The stand-up cannot.

9. **Put freshness on the same risk list as the close.** When inventory tiles drive buy and ship decisions, late WMS or ERP loads are [refresh failures as close risk](/blog/refresh-failures-are-a-close-risk). Alert owners before the meeting.

10. **Retire the unlabeled twin.** Find the page that mixes NetSuite and WMS under one noun. Split the measures, label the sources, and archive the mashup. Prove one clean stand-up before you touch every inventory dashboard.

## What good looks like

NetSuite still runs the books and the WMS still runs the dock. Power BI exposes both with names a successor can read.

The stand-up opens WMS available at warehouse grain, and finance opens ERP on-hand at books grain. When leadership compares them, they open the bridge instead of a blame session. Trust returns because the company stopped asking a quiet side-pick to serve as a definition.

## A practical first week

On day one, export the three tiles labeled Inventory, On-Hand, or Available that will appear in the next stand-up or close pack. Note the source system, grain, status filter, and as-of for each. On day two, sit finance and the warehouse down for thirty minutes and write which decision each tile is allowed to answer. On day three, rename the measures in the model to match those decisions, even if the visuals stay ugly for a sprint.

You do not need a new ERP or WMS to stop on-hand theater. You need labels, grain, and a bridge someone owns. The rest is meeting discipline: if a number lacks system, status, and as-of, it does not go in the minutes.

Do not “fix” the fight by averaging ERP and WMS into one line. Do not hide the source behind a bookmark only the author remembers. Do not ask finance to stop closing or the warehouse to stop scanning so the dashboard looks neat.

And do not treat a successful refresh as proof the mashup is honest. A fresh wrong join is still wrong. Pair this with [measures nobody can explain](/blog/measures-nobody-can-explain) when “Available” means three different DAX definitions across workspaces.

## Executive takeaway

On-hand fights are grain and timing fights between ERP and WMS. Power BI should not pick a side quietly. Name the source of truth for each decision and build the bridge on purpose. Otherwise the room builds Excel and the model becomes decoration.

Want to see where NetSuite and your warehouse system collide in Power BI? [Book a session](https://www.alluviumbi.com/contact). We’ll map one inventory KPI to grain, status, as-of, and the labels the room needs. Or start with a [Free Model Health check](https://www.alluviumbi.com/power-bi-model-health).
