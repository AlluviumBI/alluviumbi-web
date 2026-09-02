---
title: "Row-Level Security Is How You Sleep at Night"
description: "If the wrong plant can see another plant’s margin, you do not have a reporting problem. You have an access problem."
pubDate: 2026-06-05
tags:
  - Power BI
  - Security
  - Governance
draft: false
---

If the wrong plant can see another plant’s margin, you do not have a reporting problem. You have an access problem.

Row-level security is how a mid-market company publishes one model and still lets people see only their slice. It is not a DAX hobby. It is how you sleep at night.

![Black-and-white locked iron gate in fog, path beyond obscured](/blog/row-level-security-who-sees-the-number-hero.jpg)

## What executives mean by “who sees the number”

You already decided, or you should have, which number is official. That is [single source of truth as a decision](/blog/single-source-of-truth-is-a-decision). RLS is the next sentence: official for whom.

A plant manager needs plant margin. A regional VP needs the region. The CFO needs the company. Those are not three models. They are one product with a rule about rows.

Without that rule, people “solve” access with copies. A workbook for Plant A. A twin for Plant B. A file forwarded to a contractor. A PDF in email. Each copy is a leak waiting for a new hire, a wrong To: line, or a plant that should never see another plant’s labor rate.

Governance includes access. The broader operating system is in [The Hidden Costs of Poor Power BI Governance](https://www.alluviumbi.com/blog/the-hidden-costs-of-poor-power-bi-governance-and-how-to-fix-it). This piece is the exec version of the row rule. Not how to write a filter. Whether you have one.

## Forwarded workbooks are not a security model

Email feels like control. It is the opposite.

Someone with company-wide access exports. Someone forwards “just this tab.” The tab still has other plants, a hidden sheet, or a pivot that expands. You did not grant Plant B a view. You granted the thread a souvenir of the company.

Shared folders do the same. “Plant_A_only.xlsx” sits next to a FINAL copy. Permissions lag the org chart. Last summer’s intern still has the link.

Power BI without roles is not safer just because it is in the cloud. If every viewer is an admin, or every report is in a workspace that the whole company can join, you built a nicer distribution list.

The honest pattern in a lot of mid-market firms: one service account, one wide dataset, trust that people will “only look at their plant.” Trust is not a control.

## The costs of skipping RLS

1. **Competitive and labor data walks.** Plant margin, mix, and rates are how you run the P&L. They are also how a rival plant, a vendor, or a restless manager starts a rumor. You will not see the leak in a usage dashboard. You will hear it in a parking-lot conversation.

2. **You multiply files to fake privacy.** Every “secure” copy is another refresh, another definition, another chance to disagree in the meeting. Access-by-copy is [sprawl](/blog/dashboard-sprawl-is-a-tax) with a confidentiality label on the filename.

3. **The official model never gets used.** Finance will not put real margin on a report the wrong eyes can open. They keep the truth in a locked workbook. You paid for a platform and kept the sensitive number off it. Adoption dies for a security reason: [nobody opens the dashboard](/blog/nobody-opens-the-dashboard).

4. **Audit asks a question you cannot answer.** Who could see last month’s plant P&L. If the answer is “anyone with the file,” you do not have a story. Role-based views give you a list of roles and a test. Forwarded workbooks give you a shrug.

5. **Incidents become personal.** When a number shows up in the wrong plant, the fight is about character. It should be about a missing role. RLS turns “I thought they knew not to look” into a system that does not offer the row.

6. **Admins become the bottleneck and the risk.** One person with full view exports on request. They are now the copy machine. They are also the single account everyone shares when that person is out. Shared admin is not a break-glass. It is a standing leak.

## What RLS is—and is not

It is a map from people or groups to the rows they may see. Plant. Region. Legal entity. Match the org chart and HR groups. Not a clever filter nobody can explain.

It is not a substitute for deciding the number. A filtered wrong measure is still wrong. Fix the product first: [the semantic model is the product](/blog/semantic-model-is-the-product).

It is not hiding a column with a visual trick. If the data is in the model and the user can export or rebuild, a hidden column is theater.

It is not a reason to build twelve datasets. Twelve datasets is how definitions drift. One model, many roles, is the point.

It is not a tutorial. Your team can implement the filters. Your job is to demand roles, tests, and no shared god account.

## How to fix it

1. **Draw roles that match the org chart.** Plant manager. Region. Corporate. Vendor-safe. Name them in language operators use. If HR already has groups for plants, use those. Do not invent a parallel universe of report roles that decay the day someone transfers.

2. **Put the rule on the model, not on a page.** Pages get copied. Workspaces get duplicated. The product that refreshes is where the row filter lives. Reports inherit. If a new brochure can be published without the rule, you do not have RLS. You have a hope.

3. **Test as the plant manager.** Not as you. Not as the BI admin. Impersonate the role. Open the report. Confirm the other plant is gone. Confirm totals are the plant, not the company with a slicer that someone can clear. If you have never viewed the pack as the user who should not see Plant C, you have not tested.

4. **Kill the one admin account for daily use.** Admins exist for publish, refresh, and break-glass. They do not exist so every analyst can “just check.” Named people. Named groups. MFA. When someone leaves, the group membership leaves with them. A shared mailbox in the credential is a finding waiting to happen.

5. **Stop forwarding the pack as the access method.** If a contractor needs a slice, give them a role. If a plant needs a PDF, generate it from the filtered model, not from last month’s export. Treat email of full extracts as an incident, not a convenience.

6. **Review the map when the org changes.** New plant. New region. A manager covering two sites. RLS that is not on the same cadence as HR is how last year’s plant director still sees this year’s margin. Quarterly is a minimum. After reorgs, immediately.

Workspace hygiene still matters: who can publish, download, share. RLS is the row rule inside a workspace you already locked. If reports still disagree after access is clean, that is definition, not security: [why Power BI reports show different numbers](/blog/why-power-bi-reports-show-different-numbers).

## What good looks like

The CFO publishes one margin model. Plant A cannot see Plant B. The regional VP sees the rollup they are paid to run. Corporate sees all. Nobody emailed a workbook to fake that outcome.

A new plant manager is in the right group on day one. They never receive a “starter file” with the whole network in it.

When audit asks who could see the number, you show roles and a test log. You do not show a folder of finals.

You sleep. Not because people are nicer. Because the product does not offer the wrong row.

## Get started

If a forwarded file is still how plants get “their” P&L, you do not have security. You have courtesy.

Need a 30-minute look at whether your Power BI estate actually restricts rows? [Contact Alluvium](/contact). We will map roles to the org chart and tell you what to test as the plant manager—not a filter tutorial.

[Book a 30-minute consult](/contact).

<!-- wordcount: 1291 -->
