---
title: "Snowflake Is Not a Semantic Model. Your Measures Still Need an Owner."
description: "A clean Snowflake warehouse still produces five Revenues if each Power BI team invents measures. The platform is not the trusted model."
pubDate: 2026-09-10
tags:
  - Power BI
  - Snowflake
  - Semantic Model
  - Governance
draft: false
---

Snowflake looks finished.

Tables are clean. Roles are tidy. Pipelines land on schedule. Leadership hears “we have a warehouse now” and assumes the Monday numbers will finally agree.

Then finance, sales, and ops each build a Power BI model on top of the same Snowflake objects. Each invents Revenue. Each invents Margin. Each invents Bookings. Five versions walk into the QBR.

The warehouse did its job. Nobody owned the measures.

![Black-and-white rocky cliff with fog cascading into a valley under a sunburst sky](/blog/snowflake-not-a-semantic-model-hero.jpg)

## A platform is not a trusted model

Mid-market manufacturers buy Snowflake to stop fighting file drops and tribal SQL. That is rational. A well-run warehouse is a better landing zone than nightly CSVs and heroic extracts.

What it is not: a semantic model. Snowflake stores grain, history, and keys. Power BI—or another governed semantic layer—still has to name the business logic, relationships, and measures leaders will defend in a meeting.

When every team connects Desktop straight to Snowflake and writes its own DAX, you recreate the wild west one cloud higher. The [semantic model is the product](/blog/semantic-model-is-the-product). The warehouse is the factory floor underneath it.

This is the cousin of [why Power BI reports show different numbers](/blog/why-power-bi-reports-show-different-numbers) and [certified datasets vs the wild west](/blog/certified-datasets-vs-wild-west). Clean storage does not certify a measure. An owner does.

## The costs of treating Snowflake as the model

1. **Five Revenues from one warehouse.** Each Power BI workspace defines recognition, returns, and intercompany differently. The room argues about truth. Snowflake is innocent.

2. **Margin fights move upstream, not away.** Cost allocation, freight, and scrap still need a steward. Without one, [margin definitions that don’t survive a meeting](/blog/margin-definitions-that-dont-survive) simply relocate into cloud-connected pbix files.

3. **Self-service becomes self-conflict.** Analysts feel empowered. Executives feel lied to. Adoption metrics look healthy while trust collapses.

4. **Certification becomes a sticker on a table.** Promoting a Snowflake schema is not the same as certifying Booked Revenue. Leaders need a named measure in a governed dataset, not a schema diagram.

5. **DAX sprawl replaces SQL sprawl.** The same CASE logic that used to live in ten reports now lives in ten models. Nobody can explain the measure—see [measures nobody can explain](/blog/measures-nobody-can-explain).

6. **Refresh and capacity pain hide definition debt.** Teams blame warehouse lag or Premium capacity when the real issue is three incompatible definitions of the same noun.

7. **Onboarding creates more twins.** Every new analyst clones a “working” model and tweaks a filter. The estate grows. The source of truth does not.

8. **Finance refuses to sign.** Controllers will not defend a number that lives in someone’s Desktop file pointed at Snowflake. Sign-off requires ownership, change control, and a single place to change the logic.

## How to fix it: own the measures on top of the warehouse

1. **Separate landing from meaning.** Snowflake holds curated tables with keys, history, and quality checks. The Power BI semantic model holds relationships and measures. Do not ask either layer to do the other’s job.

2. **Inventory the nouns that start fights.** Revenue. Bookings. Backlog. Margin. On-hand. Scrap. Write which decision uses which noun. Assign a steward per noun—finance, ops, or sales—before more models spawn.

3. **Build one certified semantic model for the core pack.** Import or DirectQuery from governed Snowflake objects into a single shared model for Monday and close. Promote that dataset. Retire twin Revenue measures in satellite workspaces.

4. **Name measures like adults.** Booked revenue accrual. Shipped not billed. Pipeline weighted. Do not hide two logics under “Actuals.” Names are the first control.

5. **Put change control on measure edits.** Who can change Margin. What review happens before Prod. How the old definition is versioned. A warehouse ACL is not a measure change log.

6. **Stop Desktop-to-Snowflake as the default path for executive pages.** Exploration sandboxes can connect wide. The QBR pack cannot. Route critical pages through the certified model only.

7. **Publish as-of and basis on the page.** Warehouse freshness and measure basis are different labels. Show both. Pair with [finance accrual vs ops cash](/blog/finance-accrual-ops-cash) when clocks collide.

8. **Retire twin models on a schedule.** Pick one disputed KPI. Consolidate the measure. Delete or archive the competing pages. Repeat. Do not wait for a “platform reboot.”

9. **Tie certification to the measure, not the cloud logo.** A certified dataset means a human will defend the number. Snowflake being “enterprise” does not make your DAX enterprise.

## What good looks like

Snowflake lands clean, keyed, historical data on a refresh contract. Power BI exposes a small set of owned measures with stewards and change control. Sales, finance, and ops open different pages—but they open the same Revenue definition.

New analysts extend the certified model. They do not invent a sixth Revenue in a personal workspace.

The warehouse remains valuable. It stops being mistaken for the product leaders actually trust.

Do not confuse warehouse roles with measure stewards. A Snowflake role that can select from FINANCE.MART does not own Booked Revenue. Ownership means a named human who will change the definition, explain it in the QBR, and refuse silent forks in satellite workspaces.

## A Monday test you can run this week

Open the three Power BI files or workspaces that feed your hardest meeting. Search for Revenue, Margin, and Bookings. Count distinct DAX definitions that claim the same noun. If the count is greater than one, Snowflake did not fail you. Measure ownership did.

Then ask who is allowed to change each definition in production. If the answer is “whoever has Desktop and a Snowflake role,” you have a platform—not a trusted model.

That test takes an hour. The cleanup takes longer. Start with the noun that burned the last QBR, not with a warehouse redesign slide.


## Where mid-market teams get stuck

IT finishes the warehouse migration and declares victory. Analytics keeps shipping personal models because the certified path is slow or missing. Finance keeps a shadow workbook “just until the model catches up.” Six months later the shadow is the real close pack and Snowflake is an expensive file server with better SQL.

The fix is sequencing, not another platform. Land the tables. Name the grain. Stand up the semantic model with three owned measures. Point the Monday pack at that model. Only then widen self-service.

If you reverse the order—self-service first, ownership later—you fund the fight you meant to end.

## Executive takeaway

A clean Snowflake warehouse still produces five Revenues if each Power BI team invents measures.

The platform is not the trusted model. Own the measures. Certify one semantic model for the decisions that matter. Let Snowflake be the landing zone it is good at being.

Need a 30-minute look at whether your Snowflake estate is feeding one model or five Revenues? [Contact Alluvium](https://www.alluviumbi.com/contact). We’ll map one disputed KPI from warehouse table to Power BI measure and show where ownership is missing.
