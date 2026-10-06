---
title: "The Analyst Who Became the Gateway"
description: "When refresh, access, and “what does this include” all route through one person, that is a bus-factor of one, not a compliment."
pubDate: 2026-09-16
tags:
  - Power BI
  - Ownership
  - Delivery
draft: false
---

Refresh fails, and someone messages the analyst. A VP needs access, and someone messages the analyst. Someone asks “what does this include?” and the message goes to the analyst too.

The tenant has workspaces, apps, and a gateway appliance, but the company still has one human routing path. That person is not a steward. They are infrastructure. A bus-factor of one is not a compliment. It is an unowned product propped up by a hero.

![Black-and-white wooden footbridge as the only crossing over a forest river](/blog/the-analyst-who-became-the-gateway-hero.jpg)

## Occupied is not the same as owned

This is not folklore inside the file, which is [tribal knowledge in the data model](/blog/tribal-knowledge-in-the-data-model). You can document the model and still route every runtime question to one inbox.

It is not the empty chair from [why your Power BI project has no owner](/blog/power-bi-project-has-no-owner) either. That chair is empty. This one is full, because the analyst became the path around the empty seats.

And it is not [who may change a measure](/blog/who-can-change-a-measure). Change control covers the formula. The analyst-as-gateway also resets credentials, grants access, explains the pack, and reruns Thursday’s refresh.

Waiting on IT is a different queue, covered in [the hidden cost of waiting on IT](/blog/hidden-cost-waiting-on-it-for-reports). Here the queue is one named person who absorbed operations, support, and meaning. The appliance can have a backup, as [when refresh fails before stand-up](/blog/gateway-refresh-7am-surprise) explains. This post is about the person every question has to cross.

Hero culture feels efficient until the hero is out. Then you discover you had a bridge, not a program.

## What “the gateway” actually does

They keep the refresh jobs in their head. They grant access as a favor. They hold the sentence for what Revenue includes, and they run the meeting because someone has to drive the page. Delivery never split runtime, access, and meaning, so one competent person absorbed all three.

## The costs of a person-as-gateway

1. **Vacation is an outage.** It is not a polite delay. Refresh, access, and “what does this include” all pause, and close week does not. The company will call it a staffing issue. It is an architecture issue with a calendar.

2. **The queue is a person, not a backlog.** Requests die in chat. There is no intake, no definition of done, and no steward list, so the loudest DM wins. Standing questions stay heroic extracts because the hero is available, as in [executive questions that should never be ad-hoc](/blog/questions-that-should-never-be-adhoc).

3. **Definitions live in messages.** The measure description is empty because the analyst will explain it live. When they are not in the thread, the room invents a sentence, and trust goes to whoever spoke last.

4. **Access is a favor, not a control.** Personal shares bypass groups, and row-level security gets waived “just this once.” When the analyst leaves, nobody can say who can see the number, or who should.

5. **Refresh is tribal operations.** The job succeeds most days, but the runbook is a person. Capacity collisions, credential rotation, and close-week order all live in one head. Finance learns about stale data from a VP, not from an on-call.

6. **Quality drops because one seat does three jobs.** The same person builds, supports, and explains. Building loses, support never ends, and meaning stays oral. You cannot even hire a successor, because a posting that says “owns Power BI” does not describe a role. It is a confession.

7. **Hero culture hides underfunding.** Leadership praises responsiveness, and that praise postpones a steward, a backup, group-based access, and a refresh SLA. The compliment is the cover.

8. **The product cannot be inherited.** A successor can be walked through the file and still fail on Monday, because Monday is not the file. Monday is the routing: who to call, which workspace is a lie, which refresh to rerun first. People do not scale. Paths do.

A bus-factor of one is a close risk, an access risk, and a meaning risk wearing the same hoodie.

## How to stop routing the company through one inbox

1. **Split runtime, access, and meaning.** Refresh and gateway operations get an on-call and a runbook. Access gets groups and a request path. Meaning gets a named steward who can say the sentence. In a small shop one person may still do two of these, but they should not be the only path for all three.

2. **Write down what the DMs currently hold.** That means the as-of and refresh order, who is in which group, and the measure sentences the room actually asks for. If it only exists in chat, it is not a product.

3. **Put refresh on an SLA with a backup.** Success means the certified model is current through the agreed grain before the first meeting that uses it. A second person must be able to rerun, rotate credentials, and declare data stale. If that is impossible, you have a gateway person, not a gateway.

4. **Move access off personal shares.** Use apps, groups, and roles so the analyst is not a permissions desk, and give every exception a named expiry. [Row-level security is who sees the number](/blog/row-level-security-who-sees-the-number), not who the analyst likes this week.

5. **Name a steward who is not the only builder.** The steward owns the sentence and the change path, and the builder ships. If they are the same person, at least name a backup steward and a backup builder. Occupied chairs still need deputies.

6. **Publish “what does this include” where the page lives.** Use the description, a glossary, or a certified info page. The next “is freight in this?” should not require a human to be online. If the model cannot say it, that is a product gap.

7. **Cross-train before the next outage.** A slide hour does not count. A second person should run close-week refresh, grant a group, and explain Revenue out loud. If they cannot, the bus-factor is still one. You just scheduled it.

8. **Measure the inbox.** Count how many requests are about refresh, access, or meaning, because that mix is your real org chart. A pile of meaning questions is a steward problem, a pile of access questions is an identity problem, and a pile of refresh questions is an operations problem. Stop hiring “another analyst” as the universal solvent.

9. **Stop praising the bottleneck.** Thank the person and fund the path. A compliment without a deputy is how you lose the person and the estate in the same quarter.

## What a company with a path looks like

Refresh has an SLA and a named backup. Access runs through groups, and the room can read what a measure includes without waiting. The analyst still builds but is no longer the appliance. Vacation is inconvenient, not an outage.

## Executive takeaway

If refresh, access, and meaning all route through one person, you do not have a Power BI program. You have a bus-factor. Split the path, write the runbook, name a backup, and put the sentence on the product.

Want to know whether one analyst has become the gateway? [Book a session with Alluvium](/contact). We will map refresh, access, and “what does this include,” and show which of them still depend on a single inbox. To check the model itself, request a [free Model Health check](/power-bi-model-health).

<!-- wordcount: 1211 -->
