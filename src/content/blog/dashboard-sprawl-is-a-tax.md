---
title: "Dashboard Sprawl Is Not Self-Service. It’s a Tax"
description: "Fifty reports is not a program. Sprawl burns refresh, meetings, and the one number leadership needed."
pubDate: 2026-05-18
tags:
  - Power BI
  - Governance
  - Dashboards
draft: false
---

Self-service was supposed to make reporting faster. In most mid-market companies it just made more reports.

Fifty Power BI files is not a program. It is a tax on refresh, on meetings, and on the one number leadership actually needed this week.

![Black-and-white tangle of exposed tree roots on a riverbank](/blog/dashboard-sprawl-is-a-tax-hero.jpg)

## The problem

Someone needed a cut, so they copied a workspace, renamed a page, and published. Then another team did the same, then a contractor. Last year’s intern’s “final” file stayed live because nobody wanted to break a bookmark.

That is not enablement. It is inventory without an owner.

Governance is the operating system: stewardship, access, naming, and education. We covered it in [The Hidden Costs of Poor Power BI Governance](https://www.alluviumbi.com/blog/the-hidden-costs-of-poor-power-bi-governance-and-how-to-fix-it). This piece is about the symptom you can count: too many reports, too few certified sources, and nothing retired. People searching for “too many Power BI reports” are not asking for another theme. They want to stop paying for clutter.

You feel it in three places. Capacity groans at 6 a.m. The executive pack still starts with “which file.” Analysts spend Monday reconciling two versions of last month instead of answering this month.

## What sprawl actually is

Sprawl is not “we have a lot of users.” It is duplicate grain, duplicate measures, and duplicate owners for the same decision.

A plant scorecard, a plant workbook, and a plant page inside the regional dashboard can all be honest. They can also be three refresh jobs, three definitions of scrap, and three meetings that do not agree.

Self-service that works has a thin certified layer and a wide sandbox. Self-service that fails has no layer at all, so everything is published and everything is “the dashboard.”

If two of those files already disagree in the room, that is the meeting problem in [Why Power BI Reports Show Different Numbers](/blog/why-power-bi-reports-show-different-numbers). Sprawl is how you got three files in the first place.

## The costs

1. **Refresh becomes a lottery.** Every extra dataset is another gateway pull, another failure point, and another 7 a.m. surprise. Capacity is finite, and sprawl pretends it is not.

2. **Meetings start with archaeology.** Leaders do not need fifty pages. They need one number they can defend. When five reports claim the same KPI, the first agenda item is which one is current.

3. **The certified number drowns.** The one model finance would actually sign still exists, but nobody can find it. The loudest report wins while the quiet, correct one sits in a workspace named “Archive_v2.”

4. **Analysts rebuild instead of retire.** Copying a pbix is cheaper than asking who owns the original. Duplicated DAX is duplicated risk, and every copy drifts. Drift is not innovation.

5. **Adoption falls while license counts rise.** People stop opening Power BI because it is noisy and go back to a spreadsheet they trust. You paid for a platform and kept the inbox as the distribution system.

6. **Risk hides in the long tail.** Old reports still refresh and still expose columns. Nobody reviews them because they count as “self-service.” Access that was fine for a project team is not fine two years later.

This is not a cultural failure of curiosity. It is an unpaid cleanup job sitting on whoever still answers “what is the number.”

## What not to do

Do not freeze publishing. That just moves sprawl into email.

Do not launch a six-month catalog project before you retire anything. A catalog without a retire rule becomes another report.

Do not recertify everything. Most of the estate is working paper, so treat it that way.

Do not buy a new layer of tooling so you can keep every page. Inventory first, certify a few, and turn the rest off.

If the program has no decisions attached to it, that is a strategy problem, not a workspace setting. See the [Data & AI Strategy Roadmap](/analytics-ai-strategy-roadmap). If the files you keep are slow, that is a different job for [dashboard optimization](/power-bi-dashboard-optimization-ai-insights).

## How to fix it: inventory, certify, retire

You do not need a center of excellence to start. You need a list, a stamp, and a date.

1. **Inventory what leadership actually uses.** Pull usage. Ask the executive assistant who builds the pack, and ask the controller which file they open on close. Write a one-page list with name, owner, last viewed, and source dataset. If nobody can name an owner, the file is a candidate for retirement, not polish.

2. **Name the certified few.** Pick the models and reports that may speak for the company: revenue, margin, cash, inventory, on-time, or whatever your operating cadence actually argues about. Certification is a promise of this measure, this grain, this refresh window, and this steward. It is not a badge on fifty twins.

3. **Put a fence around the rest.** Sandbox workspaces are allowed, but they are labeled, they do not feed the board pack, and they do not get the same refresh SLA. People can still explore. They cannot silently become official.

4. **Retire on a calendar, not a feeling.** Announce a date, redirect bookmarks, and archive the file. If someone screams, they just volunteered to own it. If nobody screams, you were paying a tax for a ghost.

5. **Stop copying certified reports.** New questions hit the model, not a Save As. If the question is real and recurring, add a page or a measure with an owner. If it is a one-off, it stays in the sandbox or in Excel connected to the model.

6. **Review the list every quarter.** Sprawl returns the week you stop. Usage drops, owners leave, and a contractor publishes “v3.” Treat cleanup like close, as a recurring job instead of a hero project.

Start with one domain, such as finance or a single plant. Prove that a short certified set beats a long unowned one, then repeat.

## What “certified” has to mean

A certified report without a certified model is a pretty lie.

The stamp belongs on the semantic model first: grain, relationships, measures, refresh, and steward. The report is a view. Five reports on one trusted model can be healthy. Five reports on five private models are sprawl, even if the pages look identical.

Executives do not need to read a schema. They need to know which asset is funded. We make the full case in [the semantic model is the product](/blog/semantic-model-is-the-product). For now the operating rule is simpler: do not certify a brochure that sits on an unowned dataset.

## What good looks like in ninety days

Week one: a list. Ugly is fine, and a spreadsheet is fine.

Week two: five things that may be official, with owners named in writing and refresh windows named. Everything else is marked working or retire.

Week four: the first retire wave. Dead workspaces are gone, capacity is quieter, and the pack points at one place.

Day ninety: the ELT can answer “where is the number” without a Slack hunt. Analysts still build, but they build on the model or in a sandbox that cannot leak into the Monday meeting.

You will still have more than five reports. Plants need plant views and controllers need close artifacts. That is not sprawl. Sprawl is the unofficial twin of the official view.

## Get started

You do not need a new platform. You need an inventory, a short certified set, and a retire date.

Want to know which Power BI reports are actually earning their refresh? Start with a [free Model Health check](/power-bi-model-health) or [book a session](/contact). We will map usage, name the few that should be official, and flag what to turn off, without the catalog theater.

<!-- wordcount: 1252 -->
