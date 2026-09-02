---
title: "Why Sales Forecasts and Finance Bookings Never Tie Out"
description: "Pipeline and bookings use different calendars and exit criteria. Pretending they are one number is how the QBR breaks."
pubDate: 2026-08-19
tags:
  - Power BI
  - Sales
  - Finance
draft: false
---

Pipeline is not bookings. Bookings are not a weighted stage. Pretending they are one number is how the QBR breaks.

Sales runs a process: stage, exit criteria, close date, commit. Finance runs a different process: purchase order, invoice, fiscal period, what is allowed to hit the books. Both are legitimate. The failure is the slide that subtracts them.

![Black-and-white two parallel stone walls that stop short of meeting in an open field](/blog/sales-forecast-vs-finance-bookings-hero.jpg)

## This is not the three-slide meeting, and it is not plan versus actuals

When three departments walk in with three tiles, that is a definition fight: [why reports show different numbers](/blog/why-power-bi-reports-show-different-numbers). Do not retread that room here. You can certify one revenue measure and still blow the QBR, because sales is not trying to report revenue. Sales is trying to run a pipeline.

When finance’s *plan* will not subtract from finance’s *actuals*, that is grain and calendar inside one function: [why the forecast never ties to actuals](/blog/forecast-never-ties-to-actuals). Do not retread that bridge here. This post is two operating calendars: commercial exit versus finance recognition.

[Judgment:] if the QBR still opens with “sales says X, finance says Y,” you do not have a math problem. You have two processes sharing a title.

## Why pipeline and bookings refuse to meet

**Different “in.”** Pipeline “commit” means a stage gate and a date the seller believes. Finance “booked” means a document that survived credit, legal, and the close. A deal can be committed in CRM on Thursday and still not be a booking on Friday. The tile cannot know which exit you meant unless you named two measures.

**Different calendars.** Sales lives on close date and week. Finance lives on fiscal period and booking date. A Friday close that posts Monday is a win in one process and next month in the other. Subtraction looks like a miss. It is a clock.

**Different objects.** CRM opportunity. Quote. Order. Invoice. Revenue. Each has a grain. Weighted pipeline is a probability on an object finance does not keep. Bookings are a fact on an object CRM may never see. Mapping is a product, not a hallway translation.

**Different freeze.** Sales refreshes the forecast after the call. Finance freezes after the close. Comparing a live funnel to a locked ledger is how both teams feel honest and both numbers look wrong.

They are not arguing about Power BI. They are arguing which process the ELT is allowed to steer.

## What a fake tie costs

1. **The QBR becomes archaeology.** Two hours to reconstruct which deals were “in” for sales and still “out” for finance. The decision starts after people are tired. You paid senior time for a join that was never specified.

2. **Commit becomes a story.** If every gap is “timing and paperwork,” you cannot manage either. Timing would need a shared date table and two named dates. Paperwork would need a documented exit. Without those, every miss is narratable. Nothing is a control.

3. **Sellers learn the wrong game.** If the number that gets praised is weighted pipeline, they will stage-massage. If the number that gets paid is bookings, they will wait for the PO and ignore the forecast. You trained two behaviors and then asked why they do not match.

4. **Finance stops using the commercial page.** Once the tile has been wrong against the books, the controller brings a file. Sales keeps the CRM export. The ELT hears both. Trust leaks from the certified model backward, even when the model was never asked to be both processes.

5. **Shadow recon tabs become the system of record.** Someone owns a sheet that maps opportunity to order to invoice. It is not certified. It is how the QBR “ties.” When that person is out, the meeting invents the map again. That is tribal process, not a forecast.

6. **You buy a planning tool to hide the split.** A new funnel visual will not give sales and finance the same exit. A forced single measure will create a meeting about whose process is “real.” Two named facts would have been cheaper.

You do not need a promised conversion rate from a CRM vendor. If the chair still asks “is this booked,” the processes were never named.

## How to stop pretending they are one number

1. **Publish two measures with two sentences.** Forecast Commit (sales process). Bookings (finance process). Write include, exclude, grain, date, owner. They are allowed to differ in public. They are not allowed to share a title. Variance is then a designed page, not an argument. Unexplained names are how you got [measures nobody can explain](/blog/measures-nobody-can-explain).

2. **Name the two dates and one calendar.** Close date versus booking date versus fiscal period. One date table both facts can use. If sales will not adopt the fiscal calendar for the *comparison*, stop subtracting. Show the funnel on its clock and bookings on theirs, with a bridge that lists timing as a line, not a residual.

3. **Land the map as a product.** Opportunity to order to invoice is a table with an owner. Changes are change control. A private tab is not a semantic model. [The model is the product](/blog/semantic-model-is-the-product). The QBR brochure reads it.

4. **Freeze the commercial snapshot the meeting called.** Version the forecast the same way you version a plan. Live CRM next to locked books is a moving target. Sales can still work the live funnel. The QBR compares a named snapshot to named bookings.

5. **Put the bridge on the kernel, not in a side deck.** The certified model holds pipeline facts, booking facts, and the join. The pack filters to the version. A slide that reconstructs the gap in Excel after you have keys is a process miss. Keep commentary in Excel, connected: [Excel vs Power BI](/blog/excel-vs-power-bi-financial-reporting).

6. **Steer each process with its own control.** Sales ops owns stage exit and snapshot hygiene. Finance owns what hits the books. ELT owns which number they are managing *this meeting*. If they want one steering number, they pick it in writing. They do not pick it by forcing a tile.

If the two functions will not share a map, that is strategy before modeling: [single source of truth is a decision](/blog/single-source-of-truth-is-a-decision). A [roadmap](https://www.alluviumbi.com/-data-ai-strategy-roadmap) names which process the company runs. A [Quickstart](/power-bi-quickstart) can land pipeline next to bookings. Stewardship sits in [Managed Data & AI Advisory](https://www.alluviumbi.com/managed-data-ai-advisory).

## What good looks like

The QBR opens two labeled numbers. Nobody asks which is “real.”

The bridge is timing, documentation, or cancelled commit—named lines, not a shrug.

Sellers see the snapshot they locked. Finance sees the books they signed. The map has an owner.

The narrator is optional.

## Frequently asked questions

**Should sales and finance use one revenue measure?**
For *booked* actuals, yes—one finance sentence. For the *forecast*, no. Pipeline is a different object. One tile for both is how the QBR lies.

**Do we need to replace the CRM first?**
Not to name two measures, two dates, and a map in the model you already use. A new CRM with the same unnamed exits will still not tie.

**What if sales will not freeze a snapshot?**
Then do not compare live funnel to closed books. Show the live funnel as operational. Keep the QBR on a version or admit you are not reviewing a forecast.

## Get started

Stop subtracting pipeline from bookings and calling the remainder a miss. Name the two processes. Land the map.

Need a 30-minute look at why the next QBR still will not tie? [Contact Alluvium](/contact). We’ll map the exits, the dates, and the two measures the room should already be holding.

[Book a 30-minute consult](/contact).

<!-- wordcount: 1269 -->
