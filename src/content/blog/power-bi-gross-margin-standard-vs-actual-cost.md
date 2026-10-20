---
title: "Power BI Gross Margin: Standard Cost or Actual Cost? Decide Before Plant and Finance Argue"
description: "Power BI gross margin fights start when plant reads standard cost and finance closes at actual. Publish both measures and the variance between them."
pubDate: 2026-10-20
tags:
  - Power BI
  - Finance
  - Manufacturing
  - Gross Margin
draft: false
---

The plant manager opens the dashboard and sees healthy margin on the top SKUs. Finance opens the same page after close and sees a different number. Both are looking at something called Gross Margin. Both think the other person is wrong.

They are usually both right about their own cost basis, and the model is wrong for pretending there is only one. The plant reads margin at standard cost so production can manage rate and yield during the month. Finance closes at actual cost after variances post. Same product, two margins, one tile. The argument writes itself. A Power BI gross margin page earns trust when it stops hiding that split.

![Two tree trunks of different bark growing side by side on a leaf-covered forest floor](/blog/power-bi-gross-margin-standard-vs-actual-cost-hero.svg)

## Why one Power BI gross margin tile starts the fight

Manufacturing companies that run standard cost are not being difficult. They are running two clocks.

1. **Standard cost is the plan.** Each item carries a standard material, labor, and overhead cost. Plant reports use it all month so a change in margin means a change in rate, mix, or yield, not a purchase-price surprise that posted yesterday.
2. **Actual cost is the close.** Invoices, receipts, and production variances land in the ledger. Finance's gross margin at month end includes those variances. It is the number that ties to the P&L.
3. **The variance is real work.** Purchase price, usage, labor efficiency, and overhead volume variances explain the gap. Burying them inside one "Gross Margin" measure deletes the explanation the plant needs.
4. **Naming makes it worse.** When the model exposes one measure named Gross Margin, every report author grabs it. Plant packs and finance packs diverge only in filters, so the same label shows two truths.

This is a cost-basis problem. It is not the same fight as gross versus contribution naming, which we covered in [margin definitions that don't survive first contact](/blog/margin-definitions-that-dont-survive). It is also not the rollup problem where [customer margin disappears when the hierarchy changes](/blog/customer-margin-disappears-in-the-rollup). Fix the cost basis first or those other fights stay muddy.

## Publish both measures on purpose

Do not pick a winner. Name both, and put the bridge between them where everyone can see it.

1. **Gross Margin at Standard.** Revenue less standard cost of sales, using the standard the plant runs to. Label it with the word Standard in the measure name and on the visual.
2. **Gross Margin at Actual.** Revenue less actual cost of sales, including the variances finance posts. Label it Actual.
3. **Cost Variance (Standard to Actual).** The bridge between them, in dollars, with a percent of standard cost or of revenue if finance wants it. This line is the conversation, not a footnote.
4. **Matching percent measures.** Gross Margin % at Standard and Gross Margin % at Actual, each dividing by the same revenue measure so the percents are comparable.
5. **An owner for each definition.** Plant owns the standard view for daily and weekly packs. Controller owns the actual view for close and board. Both sign the written definitions.

When someone asks for "the" Power BI gross margin number, point them at the pair. If a report only needs one, it still uses the full name so the next author does not remix it.

## How to build it without another year of debate

The model work is straightforward once the names are locked.

1. **Land revenue once.** One revenue measure both margins share. If revenue differs between plant and finance, that is a different problem and it will poison every margin view.
2. **Land standard cost from the item or BOM source the plant trusts.** Keep the effective date. A standard that changed mid-month needs a rule finance and plant agree on before the measure ships.
3. **Land actual cost from the ledger or the inventory valuation the close uses.** Map the variance accounts so the actual margin can be tied to the P&L line.
4. **Write the three dollar measures and the two percents.** Hide raw cost columns. Authors should not be able to drag a naked cost field onto a page and invent a third margin.
5. **Put standard, actual, and variance on the same page.** Side by side by product, plant, or customer. The eye should land on the variance when the two margins disagree.
6. **Watch the relationships.** A bi-directional filter that pulls cost through the wrong path will make both margins look right on a detail row and wrong in the rollup, which is the failure mode in [bi-directional relationships and wrong margins](/blog/bi-directional-relationships-wrong-margins). Keep cost relationships single-direction unless you can prove the filter path.

## What plant and finance each get

Plant gets a weekly pack at standard: margin by product and cell, rate and yield next to it, no month-end variance noise in the middle of the run. Finance gets a close pack at actual: margin that ties to the P&L, variance by type, and a short bridge from the standard view the plant has been watching all month.

The board can see both when the story needs it. Leading with one number and footnoting the other is how the argument returns.

Stay on cost basis in the naming. Do not overload this page with contribution margin, throughput, or EBITDA bridges. Those definitions matter, but they are separate sentences. Mixing them into the standard-versus-actual fight guarantees nobody trusts the Power BI gross margin tile again.

## Executive takeaway

Power BI gross margin fights in manufacturing often start because plant manages at standard cost and finance closes at actual. Publish Gross Margin at Standard, Gross Margin at Actual, and the variance between them as named measures. One tile with one name is what starts the argument.

If plant and finance still open the same page and see two different truths, [talk it through with us](https://www.alluviumbi.com/contact).

*Photo: Twin trunks by Bob Harvey, [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0), via Geograph Britain and Ireland and Wikimedia Commons. Converted to black and white.*
