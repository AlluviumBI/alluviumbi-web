---
title: "Why Customer Margin Disappears in the Rollup"
description: "Plant looks profitable. Customer looks fine. The rollup hides freight, returns, or allocations. Name the grain."
pubDate: 2026-09-12
tags:
  - Power BI
  - Finance
  - Manufacturing
draft: false
---

The plant looks profitable. The customer looks fine. The company pack looks fine.

Then someone asks which customers earn their keep after freight, returns, and the costs that only exist when you ship to them.

The rollup cannot say. It averaged those costs into a plant, a region, or a convenient “other.” Customer margin did not get calculated wrong. It got hidden.

That is a grain problem. Not a color problem.

![Black-and-white two river currents mixing at a confluence](/blog/customer-margin-disappears-in-the-rollup-hero.jpg)

## This is not three meanings of the word margin

Finance already fights itself when gross, contribution, and the board view share one tile: [margin definitions that don’t survive a meeting](/blog/margin-definitions-that-dont-survive). Name those bags. Do not retread them here.

This post assumes you can say what margin includes. The remaining failure is where the cost attaches. Plant total. Product line. Customer. Invoice. A cost can be honest at one grain and a lie at another.

Freight out can be real and still vanish when you roll to the plant. Returns can sit in a warehouse bucket that never meets the customer. Allocations can make the P&L balance and the account look average.

A KPI still needs a sentence: [measures nobody can explain are not KPIs](/blog/measures-nobody-can-explain). Customer profitability has to name the grain, not just the bag. “Contribution after outbound freight, at customer, before corporate allocation” is a measure. “Margin” on a rolled plant tile is weather.

Ops manages the plant. Sales manages the account. Finance manages the rollup. Each unit can look profitable while cash leaks at the join.

## Why the rollup hides the customer

Speed: the close already has a plant P&L. Politics: a bad account inside a good plant is an argument; a plant total is calmer. Systems: freight, returns, energy, and SG&A attach at different keys. The model can union the tables and still average the customer away.

None of that is malice. Pricing still uses the average.

## The costs of a margin that only works when you roll

1. **Unprofitable customers hide inside a good plant.** The plant hit conversion. The region hit the pack. The customer who pays late, returns often, and needs expedited freight never appears as a decision. You cannot manage an account you cannot see.

2. **Freight, returns, and rebates become mystery allocations.** If outbound freight hits the plant, every customer in that plant looks the same. If returns hit a warehouse cost center, the account that caused them keeps its margin. The allocation can be defensible for the close and fatal for pricing.

3. **Mix decisions use the wrong unit.** Sales will protect a “strategic” account using plant-level contribution. Ops will protect a line using plant-level absorption. Both can be locally rational. The company still ships work that does not earn its keep after the costs that follow the customer.

4. **Sign-off never reaches the account.** The controller will sign a plant P&L. They will not sign a customer number that includes a plug. So customer profitability lives in a side workbook, and [finance won’t sign off on the dashboard](/blog/finance-wont-sign-off-on-the-dashboard) for the one view commercial actually needs.

5. **Copies fork the grain.** Someone needs “margin without the allocation” for a customer meeting. They export. Now there is a fourth grain. The official rollup still looks clean, so the copies feel justified. The meeting argues which file is kind.

6. **Incentives fight the P&L.** Sales paid on plant-loaded margin will fill the plant. Ops paid on conversion will keep the volume. Nobody is paid on customer contribution after dock costs. The rollup hid the scoreboard.

7. **The pack stays green while cash leaks.** Working capital sits in returns. Cash sits in freight you did not bill through. Expedites sit in a plant variance. Executives see a healthy rollup. The leak is one grain down.

A rolled number is not more true because it is bigger. It is often less true because it mixed units.

## How to name the grain before you roll

1. **Write the attach rule for every cost in the margin sentence.** What hits the customer key. What hits the shipment. What hits the plant and must never be averaged into an account. What is corporate and must stay corporate. If you cannot say it, do not publish customer margin.

2. **Split plant margin from customer margin.** They are different products. Plant margin is an operations score. Customer margin is a commercial score. One tile that pretends to be both will be used as both. That is how the rollup wins.

3. **Put freight, returns, and rebates on named lines.** Do not bury them in a plug called “other cost.” A commercial review that cannot see outbound freight is not a profitability review. It is a revenue review with a margin costume.

4. **Show the allocation, or refuse it.** If you allocate plant energy to customers, the rule belongs in the measure description and in the page. If the rule is “evenly,” say evenly. If you cannot defend it in the room, keep that cost at plant grain. A visible allocation is an argument you can have. A hidden one is a lie the rollup tells.

5. **Do not roll until the grain is honest.** Totals are allowed. Totals that reintroduce costs the customer view excluded—or drop costs the plant view included—are how trust dies. The exec pack can show plant. The commercial pack can show customer. Subtraction is not a virtue.

6. **Certify customer profitability as its own semantic product.** Steward. Grain. As-of. Refresh. A side workbook with last quarter’s freight file is not a product. It is how the last analyst left. [The semantic model is the product](/blog/semantic-model-is-the-product). Customer margin either lives there or it is folklore.

7. **Tie pricing exceptions to customer grain.** If a discount needs approval, the approval view is customer contribution after the costs that follow the order—not plant average. Otherwise every exception will look cheap.

8. **Give sales and ops the same named lines, different owners.** Sales owns the account result. Ops owns the plant result. Finance owns the sentences. Stop asking one tile to referee a three-way fight it was never built to see.

9. **Retire the “one margin” that only works at the top.** If the rolled tile cannot survive a customer filter, it is not a customer measure. Label it plant. Or region. Or company. Names are cheaper than another quarter of mix theater.

## What honest customer margin looks like

The commercial review opens a customer view. Freight, returns, and rebates are visible. Allocations are named or absent. The plant review still has a plant P&L. It does not pretend that P&L is an account list.

When a leader asks “which customers,” the model answers at the grain the cost follows. Finance will sign the sentence because it does not smuggle a close convention into a pricing meeting.

## Executive takeaway

Plant profitable, customer fine, company fine—and still leaking—is what a rollup is for if you never named the grain.

Margin definitions get you the bag. Customer profitability needs the attach rule. Freight, returns, and allocations will hide in any total you refuse to unbundle.

Need a 30-minute look at where customer margin disappears in the rollup? [Contact Alluvium](/contact). We’ll map one attach rule—freight, returns, or the allocation—and the grain the commercial meeting should actually use.

<!-- wordcount: 1219 -->
