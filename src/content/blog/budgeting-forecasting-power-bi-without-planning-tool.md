---
title: "Budgeting and Forecasting in Power BI Without a Separate Planning Tool"
description: "Microsoft now lets finance plan on the Power BI model it already trusts. Here is what changed and what to fix before the next budget cycle."
pubDate: 2026-10-22
tags:
  - Power BI
  - Microsoft Fabric
  - Finance
  - Planning
draft: false
---

Every fall the same thing happens. Finance opens the budget cycle, pulls actuals out of Power BI, and pastes them into a planning tool or a workbook that lives on someone's laptop. The plan gets built over there. Then the plan gets copied back so the variance report has something to compare against. Two systems, two sets of numbers, and a month of reconciling them before anyone talks about the business.

Microsoft has made that copy step optional. On October 7 it published [Planning in Microsoft Fabric: From insight to action](https://community.fabric.microsoft.com/t5/Fabric-Updates-Blog/Planning-in-Microsoft-Fabric-From-insight-to-action/ba-p/5369552), and the plain reading is this: you can build budgets, forecasts, targets, and scenarios directly on the Power BI semantic model you already use for reporting. For a mid-size company that has been told it needs a separate planning platform, that changes the conversation.

![Rows of bare apple trees in winter snow, fruit still hanging](/blog/budgeting-forecasting-power-bi-without-planning-tool-hero.svg)

## What Microsoft actually announced

Planning in Microsoft Fabric became generally available in July 2026. The October post adds to it, and three pieces matter to a finance leader.

First, setup got simpler. A planner creates a plan, picks a semantic model, connects with their own signed-in identity, and starts working. Microsoft says the existing permissions and data access controls still apply, so nothing new has to be secured. The plan follows the same access rules your reports already use.

Second, writeback. Microsoft describes a new writeback configuration experience that makes it easier to add budgets, forecasts, and scenarios back into the same semantic model the plan is built on. Microsoft's [planning documentation](https://learn.microsoft.com/en-us/fabric/iq/plan/overview) says the plan results are written to a SQL database in Fabric, and the plan table can then be added to that model. The plan does not live in a side file. It sits next to the actuals, inside the model your reports already read.

Third, the plan becomes part of what Microsoft calls Fabric IQ. The post frames it this way: semantic models capture what happened, Real-Time Intelligence captures what is happening, and Planning captures what should happen. Copilot and Microsoft's data agents can then reason over all three. That is a forward-looking claim from Microsoft, and it is worth watching rather than betting the cycle on.

## Why budgeting and forecasting in Power BI changes the close

Here is the part that matters for budgeting and forecasting in Power BI. When the plan and the actuals share one model, variance is a measure, not a meeting. Nobody has to export, paste, and hope the account mapping still lines up. The question shifts from "whose number is right" to "what do we do about the gap."

Microsoft's own line on this is that it is the difference between explaining variance after the quarter closes and course-correcting while it is still open. That is the real prize for a CFO. Not prettier charts. Earlier warning.

It also cuts the number of places a number can drift. Every copy is a chance for a filter, a currency, or a hierarchy to slip. One model with plan and actuals side by side removes a whole class of argument. We wrote about how that argument starts in [Why Your Forecast Never Ties to Actuals](/blog/forecast-never-ties-to-actuals). This post is about what you can now do instead.

## The catch: the model has to be ready

Planning on your semantic model only works as well as the model does. If the model is messy, the plan inherits the mess, and now it is written back where everyone can see it.

Before the next budget cycle, a finance team should be able to answer a few questions without guessing. Does the model carry the same chart of accounts finance plans against, or a reporting rollup that only sort of matches? Is there one date table that knows your fiscal calendar? Are departments, cost centers, and entities defined once, with an owner who can say what each one means? Is row-level security set up the way you want planners to see data, since the plan uses the same permissions?

If any of those answers is "it depends who you ask," fix that first. Writeback into a model nobody trusts just moves the spreadsheet fight into a new room.

## When you may still want a separate planning tool

This is not a reason to rip out a planning system that works. Some companies run driver-based models with deep workforce or capital planning logic that took years to build. If that system is trusted and the handoff to reporting is clean, leave it alone.

The case for planning in Fabric is strongest when the current plan is a pile of workbooks, when the actuals and the plan never agree on structure, or when the company has been quoted a separate platform and is not sure it needs one. In those cases the model you already maintain for reporting can now carry the plan, and that is worth a hard look before signing anything new.

Check the capacity question early. Microsoft's [planning prerequisites](https://learn.microsoft.com/en-us/fabric/iq/plan/overview-prerequisites) say the semantic models used in planning must sit on a Microsoft Fabric capacity (F SKU) or a Power BI Premium capacity (P1 and up). Power BI Pro and Premium Per User are not supported for planning scenarios that rely on XMLA endpoints, and some smaller capacities can hit XMLA and memory limits. Microsoft also [bills planning use against that capacity](https://learn.microsoft.com/en-us/fabric/iq/plan/resources/billing-fabric-plan) in 30-day sessions by role: Planner, Stakeholder, or Viewer. If your reports run on Pro licenses today, that is a real decision, not a setting. How far the Copilot and agent features are ready for your data is a separate question to test on your own model.

## How to start without betting the cycle

Pick one plan, not all of them. An operating expense budget for one division is a good first test. It has a clear owner, a known structure, and actuals that already live in the model.

Connect that plan to the semantic model and use the writeback setup Microsoft describes. Then build one variance view that compares plan to actuals in the same report your leaders already open. If the numbers line up and the planners can work without a side workbook, you have your answer. If they cannot, you have found exactly where the model needs work, which is worth knowing either way.

Keep the old process running in parallel for that first cycle. Retire it only when the new one has survived a real close.

## Executive takeaway

Budgeting and forecasting in Power BI no longer requires copying data into a separate planning tool. Planning in Microsoft Fabric lets finance plan on the semantic model it already trusts, with existing permissions and the plan written back beside the actuals. It needs Fabric or Premium capacity, not Pro alone. The payoff is plan and actuals in one place, so variance shows up while you can still act on it. The price of entry is a model clean enough to plan on.

If you want to know whether your model is ready to carry the budget, [talk it through with us](https://www.alluviumbi.com/contact).

*Photo: Apple Orchard Row with Fruit in Winter by Hayden Soloviev, [CC BY 4.0](https://creativecommons.org/licenses/by/4.0), via Wikimedia Commons. Converted to black and white.*
