---
title: "Stop DirectQuerying the ERP for the Monday Pack"
description: "Live ERP DirectQuery feels current until locks and capacity make finance and ops wait. Land a governed grain, then build the model."
pubDate: 2026-09-10
tags:
  - Power BI
  - DirectQuery
  - ERP
  - Manufacturing
draft: false
---

Live DirectQuery into the ERP feels like the honest answer.

The pack is “current.” Nobody waits for an overnight extract. The Monday board opens and the numbers move with the source.

Until they do not. Until finance and ops wait on locks, timeouts, and capacity. Until the plant stand-up and the close flash both stall because the transactional system is busy being a transactional system.

That is not a visualization problem. That is an architecture choice wearing a freshness costume.

![Black-and-white stainless steel pipes, valves, and tanks in a processing plant](/blog/stop-directquerying-erp-monday-pack-hero.jpg)

## Live is not the same as governed

Mid-market manufacturers often point Power BI at production ERP because the alternative feels late. File drops miss cut-off. Import models go stale by noon. Someone promises DirectQuery will keep the Monday pack honest.

What DirectQuery actually does is push every visual filter, every slicer change, and every concurrent user into the ERP’s query path. The ERP still has to take orders, post inventory, and close periods. Your dashboard is not a free spectator.

This sits next to [refresh failures are a close risk](/blog/refresh-failures-are-a-close-risk) and [the 7 a.m. gateway surprise](/blog/gateway-refresh-7am-surprise). DirectQuery skips the refresh clock and replaces it with live contention. The failure mode changes. The business pain does not.

A governed grain in a landing zone—or a scheduled import from a curated extract—lets the model own Monday. DirectQuery makes Monday own the ERP’s worst hour.

## The costs of DirectQuerying the ERP for the pack

1. **Locks and long queries stall the room.** Controllers and plant leads open the pack while the ERP is posting, counting, or closing. Pages hang. People escalate “Power BI is down” when the ERP is defending itself.

2. **Capacity and concurrency collide with OLTP.** Ten managers change slicers at once. Each visual becomes a query. The ERP that runs the plant suddenly runs analytics. Orders and postings compete with dashboard curiosity.

3. **Grain stays transactional, not decision-ready.** Line-level detail is not a Monday measure. Without a designed grain for bookings, scrap, or margin, authors rebuild the same aggregations in DAX under live pressure. The pack gets slower and less trustworthy.

4. **Security and row filters get invented in the report.** Who can see which plant, customer, or cost center becomes a page-level scramble. The ERP’s security model and the Power BI audience rarely match cleanly under DirectQuery.

5. **Timeouts look like bad data.** A visual fails or returns partial results. The room debates accuracy when the real issue is query time. Trust erodes faster than the ticket gets filed.

6. **Change windows become pack risk.** ERP patches, index rebuilds, and period close jobs turn into blank tiles. There is no “last good import” to fall back on when live is the only path.

7. **Model owners cannot certify what they cannot control.** A [certified dataset](/blog/certified-datasets-vs-wild-west) that depends on production load at 7 a.m. is certified theater. Freshness without a contract is not governance.

8. **Side Excel returns.** When live is slow or locked, someone exports yesterday’s extract or rebuilds the pack offline. Dual systems come back. The DirectQuery promise dies quietly.

## How to fix it: land a governed grain, then build the model

1. **Name the Monday decisions and the grain they need.** Bookings by plant. Scrap by shift. Working capital by as-of. Write the grain before you open Desktop. Live line detail is rarely the answer for the pack.

2. **Land ERP data outside production.** Use a warehouse, Azure SQL landing zone, or curated extract with keys, history, and a refresh SLA. Separate OLTP from the model feed. Point Power BI at the landing zone, not the order-entry box.

3. **Prefer Import (or a hybrid you can defend) for the pack.** Import from governed tables for close and stand-up pages. Reserve DirectQuery for narrow, named cases—and document why. Default to live only when the business accepts ERP contention as the cost.

4. **Put freshness on the page.** “Books as of 5:30 a.m. extract” beats “live” that timed out. An honest as-of is management-grade. A hanging slicer is not.

5. **Own measures in one semantic model.** Revenue, margin, and scrap live in the model with stewards—not reinvented per DirectQuery report. See [the semantic model is the product](/blog/semantic-model-is-the-product) and [measures nobody can explain](/blog/measures-nobody-can-explain).

6. **Schedule refresh like close risk.** Overnight and pre-stand-up windows with owners, alerts, and a fallback. Tie failures to the same playbook as [refresh failures](/blog/refresh-failures-are-a-close-risk). Do not discover a bad load in the meeting.

7. **Protect the ERP with query budgets.** If any live path remains, limit visuals, force aggregations upstream, and keep ad-hoc exploration off production. Exploration belongs on the landing zone.

8. **Retire the “live for everything” pack.** Move finance and ops Monday pages onto governed Import first. Prove one week of on-time packs. Then decide what, if anything, still needs DirectQuery.

9. **Refuse unlabeled dual clocks.** If ops needs near-real-time dock movement and finance needs close-aligned actuals, name both. Do not smash them into one live tile. The cousin problem is [finance accrual vs ops cash](/blog/finance-accrual-ops-cash).

## A practical cutover for one pack

Pick the one Monday pack that hurts most—finance flash or plant stand-up. Do not relaunch the estate.

Inventory every page that still DirectQueries production ERP. Mark which measures are decision-critical and which are curiosity. Move the critical grain into a landing table with primary keys, as-of timestamps, and a named refresh owner. Point a new Import model at that table. Keep the old DirectQuery pages offline for one week as a shadow, not as the meeting source of truth.

When the Import pack hits its SLA three mornings in a row, retire the live twins. Document the as-of on the cover page. Put the refresh failure alert on the same distribution list as the close contacts.

That sequence is boring on purpose. Boring is how mid-market teams stop paying ERP contention tax for a dashboard that should have been a model.

If someone still demands “live,” ask which decision cannot wait for a 5:30 a.m. extract—and what ERP load they are willing to accept when ten managers open the same page. Most Monday decisions can live with a governed as-of. The ones that cannot still do not justify turning every visual into a production query.

## What good looks like

The ERP runs the plant and the books. The landing zone holds a governed grain with keys and history. Power BI Import refreshes before stand-up and before the flash. The Monday pack opens on time with an as-of everyone can read.

DirectQuery, if used at all, is a named exception with a named owner—not the default path for every executive page.

Leaders stop asking why the tile is spinning. They start asking what to do about the number.

## Executive takeaway

Live ERP DirectQuery feels current until locks and capacity make finance and ops wait.

Land a governed grain. Refresh on a contract. Build the semantic model on that feed. Keep production ERP for transactions—not for every slicer on Monday morning.

Need a 30-minute look at whether your Monday pack should still DirectQuery the ERP? [Contact Alluvium](https://www.alluviumbi.com/contact). We’ll map one critical pack to grain, refresh path, and the contention you are paying for today.
