---
title: "How to Retire a Dashboard Without a Fight"
description: "Retiring a report takes an owner, a replacement, and a date. Silence is how zombie dashboards survive."
pubDate: 2026-08-14
tags:
  - Power BI
  - Governance
  - Dashboards
draft: false
---

Retiring a report takes an owner, a replacement, and a date. Silence is how zombies survive.

You can run inventories forever. If nothing ever gets turned off, the estate is a museum with a refresh schedule.

![Black-and-white fallen tree at the edge of a living forest](/blog/how-to-retire-a-dashboard-hero.jpg)

## This is the funeral, not the census or the front door

[Dashboard sprawl is a tax](/blog/dashboard-sprawl-is-a-tax) covers the whole estate: inventory, certify, retire. This piece covers the ritual itself. Who speaks, what replaces the page, when the bookmark dies, and how you handle the one person who still cares.

[Stop commissioning a dashboard per question](/blog/stop-commissioning-a-dashboard-per-question) is about intake, or how the next file gets born. This post is about how the old one is allowed to die. If you only cut demand, the attic stays full. If you only catalog, the attic gets labels.

Retirement is change work, not a workspace setting. People bookmarked a page because it once saved them. They will not notice a wiki tag, but they will notice a broken link on Monday. That moment is either a fight or a planned handoff.

## What a retirement ritual contains

Write down three facts before you hide anything.

**Owner.** The person allowed to turn it off, with a name and a backup. “The business” does not count. If nobody will sign off on the switch, you do not have a candidate for retirement. You have a rumor that it is unused.

**Replacement.** Where the same decision lives now. It might be a certified app, connected Excel on the model, or a labeled working paper with an expiry date. “Nowhere” is fine only when the decision itself is dead. “Nowhere, but keep refreshing just in case” is how zombies stay fed.

**Date.** Pick the day the file stops being official, the day refresh stops, and the day the workspace gets archived. A vague “soon” is how last year’s report outlives its author.

Announce those three facts, then follow through. The fight should happen at the announcement, while you can still answer questions. A fight after a silent takedown gets personal.

## What an unowned sunset costs

1. **Zombies eat the morning window.** Unused reports still refresh and collide at 6 a.m. [The 7 a.m. surprise](/blog/gateway-refresh-7am-surprise) is often a job nobody needed. Every retirement is capacity you do not have to buy.

2. **The certified number stays buried.** People open the page they know, so the old name wins and the steward’s app looks empty. [Adoption](/blog/nobody-opens-the-dashboard) fails because the wrong door still works.

3. **Risk sits in the long tail.** Old RLS, stray columns, and vendors left in a filter pile up there. Nobody reviews a report that “might still be used,” and access that was fine for a project is not fine two years later. See [hidden costs of Power BI governance](https://www.alluviumbi.com/blog/the-hidden-costs-of-poor-power-bi-governance-and-how-to-fix-it).

4. **Analysts rebuild instead of pointing.** Copying feels safer than retiring, so drift continues. You end up paying to keep two truths alive and then paying again to explain [why reports show different numbers](/blog/why-power-bi-reports-show-different-numbers).

5. **Every takedown becomes political.** Without a ritual, removal looks like a slight. With one, it looks like operations. Silence teaches hoarding, and then cleanup needs a hero project.

6. **Intake has nowhere to send people.** You told teams to stop commissioning new pages. If the old page still lives, they keep using it and keep asking for twins. Retirement is what makes the intake rule real.

Do not invent usage percentages. Pull the usage data you have and ask the EA who builds the pack. If both are quiet, that silence is data. It is not a reason to sneak.

## What not to do

Do not delete on a Friday with no redirect. That earns you a VP screenshot and a zombie back from the dead by Monday.

Do not recertify everything instead of retiring it. Most of the estate is working paper. Treat it that way.

Do not wait for unanimous consent, because unanimous consent is how nothing dies. The owner decides, and the announcement is the appeal window.

Do not retire the certified model to punish sprawl. Retire the brochures and keep the product. Killing the model because twenty reports hung off it is arson.

Do not measure success by reports deleted in a week. Measure refresh jobs gone, meetings pointed at the certified app, and zombies that stayed dead at 90 days.

## How to retire it without a brawl

1. **Prove neglect or replacement before you pick a date.** You need usage near zero for a full cycle, *or* a certified view that already answers the same decision. “I don’t like this page” is not a reason. If usage is real, you have a migration, not a funeral. Say so and fund the move.

2. **Name the owner of the off switch.** This is often the domain steward, not the original author, because authors leave and stewards stay. If the author is the only one who understands the page, you also have a [tribal-knowledge problem](/blog/tribal-knowledge-in-the-data-model). Name who turns it off anyway.

3. **Write the replacement in one line.** “Use Plant Throughput app, page Shift.” “Use Inventory cash, connected Excel.” “Decision retired, no report.” Put that line in the announcement, on a banner on the old page, and in the app navigation. People follow a door, not a lecture.

4. **Publish the calendar.** On day 0, post a banner: “this page sunsets on DATE, go here.” Tell the known users from your usage data, not the whole company. At sunset, redirect to a landing page that names the replacement. Then stop the refresh and archive the workspace so it no longer looks live. Keep the gaps short. A long deprecation turns into wallpaper.

5. **Hold office hours, not a trial.** Run one session with the replacement on screen. If someone has a recurring need the certified model cannot meet, that becomes a model backlog item or a labeled sandbox. It is not a stay of execution for the zombie. If they push back hard, they just volunteered to own a *new* product with a steward. They did not earn a permanent twin.

6. **Log the funeral and watch for resurrection.** Record what died, what replaced it, the date, and the owner. Review at 30 and 90 days. A copy that shows up under a new name is an intake failure, so send it through [the commissioning rule](/blog/stop-commissioning-a-dashboard-per-question). The ritual is what you do *this week* to one file.

Change leadership is the real job: [data project management](https://www.alluviumbi.com/data-project-management-change-leadership). If nobody can say which decisions the estate serves, you need a [roadmap](/analytics-ai-strategy-roadmap) before a mass grave. Start with one domain and prove one quiet sunset.

## What good looks like

The old URL no longer pretends to be current. It points somewhere. Refresh jobs match the certified set, not the attic. When someone asks for a report by its old name, a person can give the new name in one breath.

Fights still happen, but they happen in the open during the two-week window. They do not show up as a surprise outage.

If you cannot name who is allowed to turn a report off, you do not have governance. You have a warehouse with no loading dock.

## Frequently asked questions

**What if a senior leader still uses the old page?**
Then it is a migration. Give them the banner, the replacement, the date, and a walkthrough. Rank does not keep a zombie alive. Rank gets a better handoff.

**Should we keep a read-only archive forever?**
A dated export or an archived workspace is fine. A live refresh of an unofficial truth is not an archive. It is a competitor.

**How is this different from unused reports as a smell?**
[That piece](/blog/unused-reports-are-a-governance-smell) is the diagnostic. This one is the ceremony once you have picked a body.

**Do we need a CoE to retire files?**
No. You need an owner, a replacement line, and a date. A committee without those three is how silence wins.

## Get started

Pick one zombie. Write down the owner, the replacement, and the date. Announce it, then turn it off.

Want a sunset that sticks? [Book a session](/contact). We’ll map one report, the certified door it should point to, and the calendar, not a catalog project. For a baseline on the model first, start with a [Free Model Health check](/power-bi-model-health).

<!-- wordcount: 1280 -->
