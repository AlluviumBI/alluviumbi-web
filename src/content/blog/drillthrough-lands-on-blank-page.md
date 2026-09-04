---
title: "Your Drillthrough Lands on a Blank Page"
description: "When Power BI drillthrough opens a blank page, executives lose trust in the live model. Fix filters, targets, and the detail grain before the next review."
pubDate: 2026-09-24
tags:
  - Power BI
  - Drillthrough
  - Executive Reporting
draft: false
---

An executive clicks the variance. Drillthrough opens.

White space. Wrong plant. Empty table. Or a page that looks alive until every visual says “no data.”

The room goes quiet. Someone says they will follow up offline. The live product just failed the only job that mattered in that moment: answer the next question without leaving the meeting.

![Black-and-white forest path winding through tall trees with dappled light on the trail](/blog/drillthrough-lands-on-blank-page-hero.jpg)

## Drillthrough is a promise, not a feature checkbox

Drillthrough tells leaders the model can go deeper in place. When it lands blank, the promise breaks in public.

This is not a training issue. Executives should not need a scavenger hunt through bookmarks, hidden pages, and filter panes to find the detail behind a red tile. If the product requires a guide to complete a click, the product is unfinished.

It is also not the same problem as [why Power BI reports show different numbers](/blog/why-power-bi-reports-show-different-numbers). Different numbers are a definition fight. A blank drillthrough is a navigation and grain failure. Both destroy trust. They fail for different reasons.

Broken drillthrough often appears right when the management cadence finally tries to use the live app. If the weekly review still runs on slides, see [the weekly ops review is a slide deck](/blog/weekly-ops-review-is-a-slide-deck). If the room does open Power BI and the click dies, you have a product defect in the decision path.

Leaders remember the failure longer than the roadmap slide that promised “self-serve exploration.” One blank page in a steering meeting can send the program back to screenshots for a quarter.

## Why drillthrough goes blank

The detail page expects filters the summary page never passes. Category is set. Region is not. The target page needs both, or it returns nothing.

The grain does not exist. The summary shows customer margin. The detail page wants order lines the model never modeled cleanly.

Row-level security hides rows the executive thought they could see, or the opposite path: summary aggregates across scopes the detail page cannot show under the same identity.

The target was built for a different report and never retested after a redesign. Fields renamed. Relationships changed. The drillthrough field list still points at yesterday’s columns.

Someone “cleaned up” pages and left orphan targets. The action still fires. The destination is gone, hidden, or empty by accident.

Multi-select and time intelligence make it worse. A path that works for one month and one plant fails for YTD and three plants. Demos rarely test the messy filter state executives actually use.

## The costs of blank drillthrough in the executive room

1. **The meeting loses the thread.** The interesting question dies in the click. Follow-up becomes email after the decision window closes.

2. **Leaders retreat to exports.** If live drill-down fails, Excel becomes the reliable path. That is the same adoption failure as [we paid for Power BI, people still email Excel](/blog/we-paid-for-power-bi-people-still-email-excel).

3. **Analysts become the drillthrough.** After the blank page, someone screenshares a private query. The room learns the model is optional. The person is required.

4. **Wrong filters create silent lies.** Worse than blank is a page that looks populated with the wrong context. An executive acts on another plant’s detail. Blank is embarrassing. Wrong is expensive.

5. **Trust in certified datasets erodes.** A [certified dataset](/blog/certified-datasets-vs-wild-west) that cannot answer the next click feels ceremonial. Certification without working navigation is a sticker.

6. **Build teams optimize summary polish.** Effort goes into the landing tile. Detail pages stay unfinished because demos rarely click through under live filters and real RLS roles.

7. **Exception management stalls.** Red tiles without working drill paths become decorations. Nobody can move from signal to driver in the same sitting.

8. **You train people to stop clicking.** After two failures, the room stops trying. Adoption metrics still show opens. Decision behavior shows avoidance.

## How to fix it: make the next click a product requirement

1. **List the five executive questions that must drill.** Variance to driver. Customer to orders. Plant to line. SKU to lots. Owner to actions. If a click is not on that list, do not promise drillthrough theater.

2. **Design summary and detail as one product.** Same grain contract. Same required filters. Same as-of label. Build them together. Do not bolt a detail page on after UAT applause.

3. **Pass the full context on purpose.** Test every drill path with the filters executives actually use: multi-selects, time intelligence, RLS roles, and “all” versus specific. Blank pages usually mean a missing filter, not a missing visual.

4. **Prove the grain in the model first.** If the fact table cannot support the detail question, stop building a page. Fix the [semantic model](/blog/semantic-model-is-the-product). A blank table is often honesty about a model gap—honesty that should have happened in design, not in the boardroom.

5. **Add an intentional empty state.** When filters legitimately return nothing, say why. “No orders for this customer in the selected period” beats a white canvas. Silence reads as breakage.

6. **Regression-test drillthrough after every model change.** Renamed fields, relationship edits, and measure moves break actions quietly. Put drill paths in the release checklist next to refresh success.

7. **Separate steward diagnostics from executive drill.** Deep technical pages can exist. They should not be the target of a CEO click. Executive drillthrough should land on a short, labeled driver view.

8. **Watch one live review and count failed clicks.** Do not survey. Observe. Every blank or wrong landing is a defect with an owner and a fix date.

9. **Retire dead actions.** If a drillthrough cannot be repaired this sprint, remove the action so the UI stops lying. A non-clickable tile is clearer than a trapdoor to nowhere.

## What good looks like

The executive clicks once. The detail page opens with the same plant, period, and metric context. Drivers are visible. Filters are obvious. Empty results explain themselves in plain language.

Nobody reaches for a side workbook to finish the thought. The next question stays in the model. The meeting keeps moving.

Over a month, failed-click counts drop. Export spikes before the review shrink because the live path finally completes the job.

## A note on “we’ll train them to click carefully”

Training does not fix a broken filter contract. It teaches people to fear the product.

If executives need a tip sheet to complete drillthrough, the tip sheet is evidence the page is unfinished. Put the engineering time into the path. Save training for the decisions the path unlocks.

## Executive takeaway

Blank drillthrough is not a small UX bug. It is a broken promise in the decision path.

Fix the grain. Pass the filters. Test the click under real executive context. Then the live app earns the follow-up that used to leave the room as an email.

Need a pass on the drill paths your leadership actually clicks? [Contact Alluvium](https://www.alluviumbi.com/contact). We will map the five questions, the filter contract, and the pages that must work in the meeting.

[Book a 30-minute consult](/contact).
