---
title: "Your Books Closed Friday. Power BI Still Shows Thursday"
description: "QBO or ERP closed Friday while Power BI still shows Thursday. Name freshness, extract timing, and as-of rules before the Monday pack."
pubDate: 2026-09-15
tags:
  - Power BI
  - Close
  - Freshness
  - Finance
draft: false
---

Finance closed the books Friday. The controller said so, the ERP period is locked, and QuickBooks posted the last accrual. Monday's Power BI pack still shows Thursday.

That is not a small refresh delay. It is two clocks. The close calendar and the dataset calendar never agreed on as-of.

![Black-and-white wheat field at sunrise with the sun low over a distant tree line](/blog/books-closed-friday-power-bi-still-thursday-hero.jpg)

## Close is a time, not a tile color

Mid-market finance teams close on a schedule. They post, reverse, lock, and issue a flash. Ops wants the same week on the plant board, and sales wants bookings that match the flash. Power BI is supposed to be the shared view. Often it is not, because nobody named when the numbers stop moving.

QuickBooks Online, NetSuite, Dynamics, and on-prem ERPs all have lag. Bank feeds land late. Inventory posts after the warehouse counts. Accruals sit in a spreadsheet until someone keys them. The semantic model refreshes on a clock that knows none of this.

A green refresh on Monday morning means the pipeline ran. It does not mean the books in the model are the books finance signed.

This sits next to [refresh failures as close risk](/blog/refresh-failures-are-a-close-risk) and [why reports show different numbers](/blog/why-power-bi-reports-show-different-numbers). Freshness is the third fight, and its question is "as of when."

## The costs of unnamed freshness

1. **The flash and the dashboard disagree by a day.** Controllers reopen Excel, and the meeting spends its first twenty minutes deciding which Thursday to believe.

2. **Ops runs Monday on Thursday production.** Scrap, shipments, and overtime look calm, but the floor already closed Friday's shift. Trust drops because the board is a day behind the plant.

3. **QuickBooks or ERP lag looks like a Power BI bug.** Bank rules, delayed vendor bills, and unposted inventory are source timing. The BI team gets the ticket, finance waits, and nobody owns the lag.

4. **Accruals miss the overnight extract.** The close file lands after the scheduled refresh, so the model is "current" and still missing the entries that closed the period.

5. **As-of is not labeled on the page.** Executives read a revenue tile as today when it is really the last successful extract. Silence on the timestamp is how a one-day lag becomes a credibility problem.

6. **People export and freeze their own Thursday.** Each function keeps a file that matched its close and Power BI becomes a suggestion. The [Excel vs Power BI for financial reporting](/blog/excel-vs-power-bi-financial-reporting) debate starts over inside the same week.

7. **Month-end compounds the miss.** A daily one-day lag is annoying. At close it is a restatement argument, because late invoices, inventory cuts, and reversing entries all land after the model already declared itself done.

A closed period in the GL and an open period in the dataset are two products. Calling both "the numbers" is the error.

## How to fix it: name the close clock in the model

1. **Write the as-of rule in one sentence.** For example: "This pack is GL-posted through the last closed local day, plus warehouse transactions through 6 a.m." If you cannot say it, the room will invent it.

2. **Put the timestamp on the page.** Last refresh is not enough. Show the source extract time, close status, and which period is locked. A tile without an as-of is a guess.

3. **Separate operational grain from signed books.** Shipments and production can be near real time. Signed P&L is posted. Do not mash them into one unlabeled "Revenue."

4. **Schedule refresh after the close path, not before it.** If accruals post at 7 p.m. Friday, a 6 p.m. refresh is a Thursday pack with a Friday label. Move the job or add a close-triggered refresh.

5. **Name the lag that will never go away.** Bank feeds, 3PL files, and vendor invoices carry delay. Document it, and do not promise same-day cash if the bank file lands tomorrow.

6. **Treat QuickBooks and ERP extracts as dated artifacts.** A QBO export is a photo of a moment. Store the extract time and do not pretend a connector is a live ledger.

7. **Give finance a close checklist that includes the model.** Period lock, extract, refresh, reconciliation to the trial balance, then publish. A green Power BI refresh is one row on that list, not the sign-off.

8. **Stop calling a successful refresh "the books."** [Refresh can succeed and still be wrong](/blog/refresh-succeeded-data-still-wrong). Freshness is the same class of miss: plumbing that looks healthy while the decision runs a day late.

## Where QuickBooks and ERP lag usually hide

Bank rules post overnight. Inventory valuation waits on a count file. Customer credits sit in a queue until someone approves them. That is source latency the model must declare, not a Power BI defect.

If your Monday pack claims Friday close without naming those feeds, you are presenting a hope as a signed period. Put the lagging feeds on the as-of line, or keep them off the flash page until they land.

## Monday pack acceptance

Finance should accept the pack the way it accepts a flash, against a checklist. Confirm the period lock, then check that the extract ran after the lock and the refresh ran after the extract. Label any operational cuts that run past the GL. Only then does the tile leave draft.

Without acceptance, "refreshed" is a system status, not a management product.

## What a named close clock looks like

Monday's pack says it plainly: period locked Friday 6 p.m., extract 7:12 p.m., refresh 7:40 p.m., operational shipments through Sunday night, and GL through the locked period only.

Finance and ops can disagree about a number, but not about which day they are looking at. The semantic model can hold both grains if you label them, but it cannot invent a close the source has not posted.

## Executive takeaway

If the books closed Friday and Power BI still shows Thursday, you do not have a dashboard problem. You have two calendars. Name the as-of, put it on the page, and refresh after the close path. Then the Monday pack is a close artifact, not a rumor about last week.

Want to see where your close clock and your dataset clock diverge? [Book a session](https://www.alluviumbi.com/contact). We'll map one locked period, the extract, and the refresh that should follow it. Or start with a [free Model Health check](https://www.alluviumbi.com/power-bi-model-health).
