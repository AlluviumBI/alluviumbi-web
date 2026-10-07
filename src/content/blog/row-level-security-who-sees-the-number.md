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

Row-level security is how a mid-market company publishes one model and still lets each person see only their slice. It is not a DAX hobby. It is how you sleep at night.

![Black-and-white locked iron gate in fog, path beyond obscured](/blog/row-level-security-who-sees-the-number-hero.jpg)

## What executives mean by “who sees the number”

You have already decided which number is official, or you should have. That is [single source of truth as a decision](/blog/single-source-of-truth-is-a-decision). RLS answers the next question: official for whom?

A plant manager needs plant margin. A regional VP needs the region. The CFO needs the company. That is not three models. It is one product with a rule about rows.

Without that rule, people “solve” access with copies: a workbook for Plant A, a twin for Plant B, a file forwarded to a contractor, a PDF in email. Each copy is a leak waiting for a new hire, a wrong To: line, or a plant that should never see another plant’s labor rate.

Governance includes access, and the broader operating system is in [The Hidden Costs of Poor Power BI Governance](/blog/the-hidden-costs-of-poor-power-bi-governance-and-how-to-fix-it). This piece is the executive version of the row rule: not how to write a filter, but whether you have one.

## Forwarded workbooks are not a security model

Email feels like control. It is the opposite.

Someone with company-wide access exports, then forwards “just this tab.” The tab still holds other plants, a hidden sheet, or a pivot that expands. You did not grant Plant B a view. You handed the thread a souvenir of the whole company.

Shared folders do the same thing. “Plant_A_only.xlsx” sits next to a FINAL copy, permissions lag the org chart, and last summer’s intern still has the link.

Power BI without roles is not safer just because it lives in the cloud. If every viewer is an admin, or every report sits in a workspace the whole company can join, you built a nicer distribution list.

The honest pattern at a lot of mid-market firms is one service account, one wide dataset, and trust that people will “only look at their plant.” Trust is not a control.

## The costs of skipping RLS

1. **Competitive and labor data walks.** Plant margin, mix, and rates run the P&L. They are also how a rival plant, a vendor, or a restless manager starts a rumor. You will not see that leak in a usage dashboard. You will hear it in the parking lot.

2. **You multiply files to fake privacy.** Every “secure” copy is another refresh, another definition, and another chance to disagree in the meeting. Access by copy is [sprawl](/blog/dashboard-sprawl-is-a-tax) with a confidentiality label on the filename.

3. **The official model never gets used.** Finance will not put real margin on a report the wrong eyes can open, so the truth stays in a locked workbook. You paid for a platform and kept the sensitive number off it. Adoption dies for a security reason: [nobody opens the dashboard](/blog/nobody-opens-the-dashboard).

4. **Audit asks a question you cannot answer.** Who could see last month’s plant P&L? If the answer is “anyone with the file,” you have no story. Role-based views give you a list of roles and a test. Forwarded workbooks give you a shrug.

5. **Incidents become personal.** When a number turns up at the wrong plant, the fight is about character when it should be about a missing role. RLS replaces “I thought they knew not to look” with a system that never offers the row.

6. **Admins become the bottleneck and the risk.** One person with full view exports on request and becomes the copy machine. That account is also the one everyone shares when the person is out. A shared admin login is not break-glass access. It is a standing leak.

## What RLS is, and what it is not

RLS is a map from people or groups to the rows they may see, by plant, region, or legal entity. It should match the org chart and HR groups, not a clever filter nobody can explain.

It is not a substitute for deciding the number. A filtered wrong measure is still wrong, so fix the product first: [the semantic model is the product](/blog/semantic-model-is-the-product).

It is not hiding a column with a visual trick. If the data is in the model and the user can export or rebuild, a hidden column is theater.

It is not a reason to build twelve datasets. Twelve datasets is how definitions drift. One model with many roles is the point.

And it is not a tutorial. Your team can implement the filters. Your job is to demand roles, tests, and no shared god account.

## How to fix it

1. **Draw roles that match the org chart.** Plant manager, region, corporate, vendor-safe. Name them in language operators use. If HR already has plant groups, use those instead of a parallel universe of report roles that decays the day someone transfers.

2. **Put the rule on the model, not on a page.** Pages get copied and workspaces get duplicated. The row filter lives in the product that refreshes, and reports inherit it. If a new report can be published without the rule, you do not have RLS. You have a hope.

3. **Test as the plant manager.** Not as yourself, and not as the BI admin. Impersonate the role, open the report, and confirm the other plant is gone. Confirm the totals are the plant’s, not the company’s behind a slicer someone can clear. If you have never viewed the pack as the user who should not see Plant C, you have not tested.

4. **Retire the shared admin account for daily use.** Admins exist for publishing, refresh, and break-glass. They do not exist so every analyst can “just check.” Use named people, named groups, and MFA, so that when someone leaves, their access leaves with the group membership. A shared mailbox in the credential is a finding waiting to happen.

5. **Stop forwarding the pack as the access method.** If a contractor needs a slice, give them a role. If a plant needs a PDF, generate it from the filtered model, not from last month’s export. Treat emailing full extracts as an incident, not a convenience.

6. **Review the map when the org changes.** New plants, new regions, and managers covering two sites all change it. RLS that does not run on the same cadence as HR is how last year’s plant director still sees this year’s margin. Review quarterly at minimum, and immediately after a reorg.

Workspace hygiene still matters: who can publish, download, and share. RLS is the row rule inside a workspace you already locked. If reports still disagree once access is clean, the problem is definition, not security: [why Power BI reports show different numbers](/blog/why-power-bi-reports-show-different-numbers).

## What good looks like

The CFO publishes one margin model. Plant A cannot see Plant B, the regional VP sees the rollup they are paid to run, and corporate sees everything. Nobody emailed a workbook to fake that result.

A new plant manager lands in the right group on day one and never receives a “starter file” with the whole network in it. When audit asks who could see the number, you show roles and a test log instead of a folder of finals.

You sleep, not because people got nicer, but because the product does not offer the wrong row.

## Get started

If a forwarded file is still how plants get “their” P&L, you do not have security. You have courtesy.

Want to know whether your Power BI estate actually restricts rows? [Book a session with Alluvium](/contact). We will map roles to the org chart and tell you what to test as the plant manager. For a broader read on the model, start with a [free Model Health check](/power-bi-model-health).

<!-- wordcount: 1325 -->
