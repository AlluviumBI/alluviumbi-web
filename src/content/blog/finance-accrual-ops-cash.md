---
title: "When Finance Closes on Accrual and Ops Reports on Cash"
description: "Finance and ops run two legitimate clocks. Put them under one unlabeled Power BI number and the meeting becomes the collision."
pubDate: 2026-09-22
tags:
  - Power BI
  - Finance
  - Operations
draft: false
---

Finance books the month on accrual. Ops tracks the week on cash movement and receipts on the dock. Both clocks are honest, but the Power BI tile has one label, so the meeting becomes the collision.

![Black-and-white tidal flats with two waterlines under an overcast sky](/blog/finance-accrual-ops-cash-hero.jpg)

## This is timing basis, not “different definitions of margin”

When two reports disagree about what belongs in a measure, you have a definition problem. That story is already told in [why Power BI reports show different numbers](/blog/why-power-bi-reports-show-different-numbers) and [margin definitions that don’t survive a meeting](/blog/margin-definitions-that-dont-survive). This post is about the clock.

Accrual asks when the economic event was recognized. Cash asks when money or goods moved. Ops often lives closer to receipts, shipments, and working-capital reality, while finance lives closer to the close. Both need numbers, and neither is wrong for wanting its own basis.

The failure is publishing one revenue, one inventory, or one “actual” without saying which clock is running. Leaders think they are arguing about accuracy when they are arguing about time.

A mid-market company needs labels, separate measures where both bases matter, and meeting rules that stop treating the two as interchangeable.

## Where the clocks collide

**Revenue and bookings.** Sales celebrates an order, finance waits for recognition rules, and ops cares when product ships and cash follows. One unlabeled “sales” tile will lose someone’s trust every month.

**Inventory and receipts.** The plant sees product on the floor while the ledger may still show it in transit, unvouchered, or accrued. A working-capital conversation that mixes those views without a timestamp is a fight waiting to start.

**Vendor spend and open commitments.** Ops manages the dock and the shortage. Finance manages the accrual and the close. It is the same vendor with two different as-of stories.

**Forecast versus actuals.** The forecast may be a cash or bookings view while the actuals are booked accrual. The variance is then a basis mismatch in a performance costume.

None of this requires bad data, only two legitimate clocks forced into one word on a page.

## The costs of one unlabeled number

1. **The room debates truth instead of action.** Twenty minutes go to “which number is right,” when both may be right on their own basis. The unlabeled tile made them look like rivals.

2. **Ops stops trusting the finance-owned app.** The plant or supply team keeps a cash-and-receipts workbook because the official page feels late or “accounting-only,” and dual systems return. The grain version of this is [ops still runs the plant from spreadsheets](/blog/ops-still-runs-the-plant-from-spreadsheets). Here the split is basis, not only shift detail.

3. **Finance stops trusting ops packs.** Close-ready actuals get mixed with operational snapshots in the same executive view. Controllers refuse to sign what they cannot defend, and sign-off becomes a monthly negotiation.

4. **Variance analysis lies.** A miss can be timing, not performance. Without basis and as-of on the page, leaders “fix” a problem that will reverse next period, or miss a real one hidden inside a timing bridge.

5. **Working-capital decisions get the wrong clock.** Inventory, payables, and receivables actions need both operational timing and ledger timing. One blended tile pushes the real work back into side files.

6. **Model debt compounds.** Authors hard-code filters inside report pages to “make it match finance” or “make it match the plant.” The [semantic model](/blog/semantic-model-is-the-product) never learns two named measures, so every new page reinvents the compromise.

7. **Refresh timing gets blamed for a basis problem.** Overnight refresh can be fine and the fight is still there at noon, because accrual and cash were never distinguished. People escalate gateways when what they needed was labels.

8. **New leaders inherit a trap.** A new COO opens “Actuals,” compares it to the plant huddle, and concludes the program is broken. The program published a noun without a clock.

## How to fix it: name the clocks, then govern the meeting

1. **Inventory where both bases appear.** List the decisions that need accrual, cash or receipts, or both: revenue recognition, inventory on hand, open POs, collections, shipments. Write down which clock each decision uses.

2. **Create separate measures with adult names.** Accrued revenue. Shipped not billed. Cash collections. Inventory perpetual versus inventory accrued. Do not hide two logics under “Actuals.” Names are the first control.

3. **Put as-of and basis on the page.** A small, visible label beats a glossary nobody opens. “Accrual, books as of Tuesday close” and “Operational receipts through 6 a.m.” are management sentences, so put them where the room can see them.

4. **Stop blending clocks in one unlabeled visual.** If a chart needs both for a bridge, show a bridge. Do not average them into one line and hope the meeting is kind.

5. **Assign stewards by basis.** Finance owns close-aligned measures. Ops owns the receipt and movement measures management has agreed to fund. Shared dimensions like item, plant, and customer stay shared, and basis logic does not get smuggled into a page filter.

6. **Set each agenda to the clock its decision needs.** The working-capital huddle runs on operational timing and the monthly financial review runs on accrual. One company can use both without forcing one tile to pretend it is both.

7. **Build a timing bridge for the collisions you repeat.** Where leadership always asks “why don’t these match,” fund a governed bridge covering recognition lag, in-transit, open receipts, and cut-off. Make the bridge a product, not a monthly hero file.

8. **Refuse unlabeled exports.** If someone pastes a number into the pack, it carries basis and as-of or it stays out of the minutes. Leaders enforce that rule. Tools cannot.

9. **Work one collision end to end.** Pick revenue or inventory, separate the measures, label the pages, and retire the blended twin. Then move to the next fight instead of relaunching every dashboard with a new color palette.

## What good looks like

The model exposes both clocks with names a successor can read. The operating review opens the operational view on purpose, and the financial review opens the accrual view on purpose. When someone compares them, they open a bridge instead of a blame session.

Trust returns because the company stopped asking one word to do two jobs. This is not anti-ops or anti-finance. It is anti-ambiguity, and ambiguity is expensive in every mid-market Monday meeting.

## Executive takeaway

Accrual and cash are two legitimate clocks, and an unlabeled Power BI number makes them look like a data quality failure. Name the basis, separate the measures, put the as-of on the page, run each meeting on the clock it owns, and build bridges where the clocks must meet.

Want to see where accrual and operational timing collide in your reports? [Book a session](https://www.alluviumbi.com/contact). We’ll map one shared KPI, the two clocks underneath it, and the labels the room needs. Or start with a [free Model Health check](https://www.alluviumbi.com/power-bi-model-health).

<!-- wordcount: 1186 -->
