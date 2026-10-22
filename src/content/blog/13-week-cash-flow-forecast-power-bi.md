---
title: "Your Lender Wants a 13-Week Cash Flow Forecast. Stop Rebuilding It Every Monday."
description: "A rolling 13 week cash flow forecast fails when finance retypes AR, POs, and the bank file. Load actuals once and keep assumptions in finance's hands."
pubDate: 2026-10-22
tags:
  - Power BI
  - Private Equity
  - Finance
  - Cash Flow
draft: false
---

The deal closed, and the sponsor or the lender wants a rolling 13 week cash flow forecast every Monday. Finance already knows how to build one. They pull the AR aging, open the purchase order report, export the bank file, and type the next thirteen weeks into a workbook. Receipts go in one column. Disbursements go in another. Ending cash is a formula that breaks when someone inserts a row.

By mid-morning the sheet looks done. Then the operating partner asks which invoices shifted and whether the bank balance is Friday's close or Monday's open. Somebody spends the afternoon reconciling numbers that were supposed to be ready before the call. The forecast is not hard. Rebuilding the actuals every week is.

![Fast mountain river flowing around boulders through a conifer forest](/blog/13-week-cash-flow-forecast-power-bi-hero.svg)

## Why the 13 week cash flow forecast keeps getting rebuilt

A 13 week cash flow forecast is a short runway. Thirteen columns of cash in, cash out, and ending cash. The math is simple. The weekly rebuild is not.

1. **The actuals live in three places.** Open AR sits in the ERP. Open purchase orders sit in purchasing or another module. The bank balance sits in the bank file or a treasury download. Each Monday those three get retyped into the sheet.
2. **The assumptions live in one person's head.** Customer payment timing, vendor terms, payroll timing, tax dates, and the cushion the CFO wants all sit in cells that nobody else can explain. When that person is out, the forecast is late or wrong.
3. **Forecast and actual never sit side by side.** The sheet shows what was planned. Last week's actual gets overwritten when the new week starts. Nobody can see where last Monday's forecast missed without digging through a saved copy.
4. **Cash and working capital get mixed.** Working capital is a point-in-time balance. The 13-week view is a flow over time. Mixing AR aging into a cash forecast without a clear collection timing rule produces a number that looks precise and fails the first question.

The reporting bar moves the day a deal closes, which we covered in [how the reporting bar moves after a PE close](/blog/pe-firm-closed-reporting-bar-moved). The 13-week cash call is usually where that bar shows up first for treasury and the CFO.

## What belongs in the model and what stays with finance

Keep the forecast assumptions where finance can edit them. Put the repeating actuals in a model that refreshes.

1. **Load open AR with due dates and customer terms.** The model ages receipts into the weeks where cash is expected, using a finance-owned collection curve instead of a one-off paste.
2. **Load open purchase orders and known disbursements.** Vendor payments, payroll, rent, debt service, and tax dates land as scheduled cash out by week. Finance can override a week without rewriting the whole sheet.
3. **Load the bank balance as of a stated cutoff.** Show the as-of date on the page. Friday close of business works for most teams. Do not hide whether the opening cash is before or after Monday's wire.
4. **Keep the forecast drivers in a table finance owns.** Payment timing by customer group, holdbacks, one-time items, and the minimum cash target belong in rows finance can change without a developer.
5. **Write forecast, actual, and variance by week as named measures.** The Monday page shows this week's actual next to last week's forecast, then the next twelve weeks. The variance is its own column.

That split matters. The model applies the rule finance wrote. It does not invent payment timing.

## How to build a rolling 13 week cash flow forecast without a six-month project

Start with the cash you already know, and take the steps in this order.

1. **Agree on the week definition and the cutoff.** Weeks start on Monday or on the company's fiscal week. Opening cash is the bank balance as of the cutoff. Write that down before anyone builds a visual.
2. **Land AR, open POs, and the bank file in one model** with a shared date table and shared customer, vendor, and entity keys. If the company owns more than one entity after the close, map them now so the rollup is not another Monday paste.
3. **Build the thirteen week spine.** One row per week, rolling forward each refresh. Keep prior weeks in a snapshot so last week's forecast is still there for the variance.
4. **Separate known from assumed.** Known items come from open documents and scheduled payments. Assumed items come from the finance driver table. Label them differently so a guess is not treated like a posted invoice.
5. **Add the forecast-versus-actual page first.** Before the polished thirteen-week chart, give finance a page that shows last week's forecast, this week's actual, and the gap by category. That page earns trust faster than a waterfall.
6. **Name the owners.** The controller or treasury lead owns the drivers and the overrides. The analyst owns the refresh. The Monday packet does not go out until both have looked at the variance page.

Inventory still hides cash in the balances, which we covered in [why slow stock reporting hides cash](/blog/inventory-is-cash-slow-stock-reporting). The 13-week forecast does not replace that work. It shows when the cash is expected to move.

## What the Monday call should open on

Give the room one page: opening cash, thirteen weeks of inflows and outflows, ending cash against the minimum the lender cares about, and last week's forecast-versus-actual. A second page holds AR and PO detail.

Cash is the point of the call. Charts that do not answer where cash is tied up this week lose the room, which is the argument in [cash, not charts, on Monday](/blog/cash-not-charts-cfo-monday). A rolling 13 week cash flow forecast answers that when the actuals stop getting retyped.

## Executive takeaway

A 13 week cash flow forecast fails when finance rebuilds AR, open POs, and the bank file into a new sheet every Monday. Load those actuals into one model, keep the timing assumptions in a table finance owns, and put forecast-versus-actual beside the next thirteen weeks. The Monday call starts from numbers nobody retyped.

If the weekly forecast after a close still gets rebuilt in Excel, see how we approach [acquisition performance visibility](https://www.alluviumbi.com/acquisition-performance-visibility), or [Book a Session](https://www.alluviumbi.com/contact).

*Photo: Fast mountain river flowing through the conifer forest by Smith Michael L, U.S. Fish and Wildlife Service, public domain, via Wikimedia Commons. Converted to black and white.*
