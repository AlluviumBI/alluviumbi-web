---
title: "Power BI Workspace Admin vs Member"
description: "Power BI workspace admin vs member: admins control who is in the workspace and whether it exists. Members publish and share. Assign each on purpose."
pubDate: 2026-11-05
tags:
  - Power BI
  - Microsoft Fabric
  - Workspaces
  - Governance
draft: false
---

A new analyst needs to publish a report. Someone opens the workspace, clicks Manage access, and picks the top role on the list because it is the fastest way to make the error go away. Six months later the workspace has five admins, nobody remembers why, and a setting changed on a Tuesday that nobody owns.

The difference in Power BI workspace admin vs member is not about who does more work. It is about who controls the workspace itself. Members run the content. Admins run the room the content lives in. Hand out each role on purpose and the workspace stays something your team can trust.

![Black and white image of an old key in a door lock](/blog/power-bi-workspace-admin-vs-member-hero.svg)

## Power BI workspace admin vs member: what each role can do

Microsoft lists four [workspace roles in Power BI](https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-roles-new-workspaces): Admin, Member, Contributor, and Viewer. Admin and Member share most of the day-to-day work. Both can create, edit, and delete content, publish and update the workspace app, share items, and add people to the workspace with lower permissions.

A few things stay with the Admin alone:

1. **Update or delete the workspace.** Only an admin can change the workspace's settings or remove it.
2. **Add or remove anyone, including other admins.** A member can add people at a lower role, but cannot remove anyone and cannot change an existing person's role. Microsoft notes that an admin has to remove the person first before a member can add them back at a new level.
3. **Let contributors update the app.** That delegation is an admin decision.

In Fabric, [workspace roles](https://learn.microsoft.com/en-us/fabric/fundamentals/roles-workspaces) build on the Power BI roles. Microsoft lists connecting a workspace to a Git repository and creating a workspace identity as admin-only capabilities.

Three details are easy to miss. If someone is in several groups, they get the highest role any of those groups grants. In a shared capacity, everyone added to the workspace needs a Power BI Pro or Premium Per User license. Viewers skip that requirement only on a Premium capacity or on a Fabric capacity of F64 or larger, per [Microsoft's Fabric licenses page](https://learn.microsoft.com/en-us/fabric/enterprise/licenses). On smaller Fabric capacities, Viewers still need Pro or Premium Per User.

## Which role fits which person

1. **Admin: the owner and one named backup.** These are the people accountable for who is in the workspace and how it is configured. Two is a strong default. One is a single point of failure, and our post on [vacation coverage](/blog/workspace-has-no-vacation-coverage) covers why.
2. **Member: the lead who publishes and shares.** The person who ships the app and brings new viewers in, without the power to remove people or delete the workspace.
3. **Contributor: the builders.** Developers who create and edit reports and semantic models but do not decide who sees them.
4. **Viewer: everyone who reads.** Microsoft recommends the Viewer role when row-level security needs to apply to people browsing the workspace. For a wide audience, an app is usually the cleaner path.

Assign roles to security groups rather than to individuals where you can. The roster then follows the org chart instead of someone's memory.

## A new option for keeping settings in the right hands

Microsoft has introduced a preview policy that lets tenant admins [allow workspace settings editing](https://community.fabric.microsoft.com/t5/Fabric-Updates-Blog/Using-Allow-workspace-settings-editing-policy-in-Fabric-Preview/ba-p/5377845) by a named group. Team leads can run their own workspaces while security-sensitive settings, starting with networking and encryption, stay with that group. Being a workspace admin no longer has to mean control over everything. It is in preview, so test it before you build your process around it.

## A short access review you can run this week

1. **Count the admins in each workspace that feeds a leadership report.** More than two deserves a reason.
2. **Name the owner and the backup.** If nobody can, that is the first fix.
3. **Move individuals into groups.** Start with the workspaces behind the apps leaders open most.
4. **Step down roles that exceed the job.** A builder rarely needs Admin. A reader never does.
5. **Put the review on the calendar.** Quarterly is enough for most teams, and offboarding should trigger it too.

## Executive takeaway

Admins decide who is in the workspace, how it is configured, and whether it exists. Members publish, share, and bring people in at lower roles. Keep Admin to an owner and a backup, give Member to the person who ships the app, and use groups so access follows the team. Clear roles are a small discipline that keeps trusted reporting trusted.

If your workspaces have grown more admins than owners, [book a session with us](https://www.alluviumbi.com/contact) and we will help you sort the roster out.
