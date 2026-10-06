---
title: "Shared Capacity Throttled the Close. Nobody Noticed Until Thursday"
description: "Month-end refresh lost out to someone else’s dataset. Capacity is an operating risk, not an IT curiosity."
pubDate: 2026-09-18
tags:
  - Power BI
  - Capacity
  - Finance
draft: false
---

Month-end started Sunday night, and the certified close model sat in the queue with everything else. Someone’s sandbox ran. Someone’s sprawl ran. Someone’s “just a test” dataset ran. Shared capacity did what shared capacity does, and it throttled.

The close model finished late, or thin, or after the first flash meeting. Nobody was watching the capacity metrics. Finance noticed on Thursday, when the pack was already late and the exports had already started.

A failed job is visible. A throttled job just looks like Power BI being slow, and slow is how close week gets lost without an incident.

![Black-and-white weir with a sheet of water backing up a wooded river](/blog/shared-capacity-throttled-the-close-hero.jpg)

## This is not a SKU, and it is not a failed refresh

Buying a bigger pool is not a program, as [premium capacity is not a strategy](/blog/premium-capacity-is-not-a-strategy) argues. Headroom is infrastructure. This post assumes you already have a pool, or a shared tenant, and still lose close week. The failure is in scheduling, isolation, and who is allowed to compete with the books.

A hard refresh failure is a finance event, covered in [refresh failures are a close risk](/blog/refresh-failures-are-a-close-risk). This is the cousin that never trips the fail flag. The job is running, waiting, and retrying, sharing a corridor with datasets that have no fiscal calendar.

[The 7 a.m. surprise](/blog/gateway-refresh-7am-surprise) is about a gateway dying before stand-up. Here the clock is close week, not first shift. The user is the controller, not the supervisor, and the symptom is a spinner, a late as-of, and a pack that slips to Thursday.

Sprawl makes it worse. [Dashboard sprawl is a tax](/blog/dashboard-sprawl-is-a-tax), and unused pages still keep a schedule, as [unused reports are a governance smell](/blog/unused-reports-are-a-governance-smell) explains. Shared capacity does not know which jobs are the close. It knows who arrived first.

Close week is peak load. Throttling shows up as queues, delayed starts, and jobs that overlap the meeting. The report still opens, and yesterday’s as-of is easy to miss. The competing job is often a sandbox or a departmental model. None of those are the close, and all of them can starve it.

Nobody owned the corridor. IT owns the SKU and finance owns the pack. Capacity metrics sit in an admin view nobody with a P&L opens. By Thursday it is too late, because exports have already forked the numbers.

## The costs of sharing the corridor with the close

1. **Close week loses to an average Tuesday.** You sized for the mean, and the books do not close on the mean. A pool that is quiet in week two and choked on day three of close has failed the only week that matters to finance.

2. **Sandboxes compete with the books.** If a test dataset can take the same capacity as the certified close model, you do not have a close control. Courtesy is not isolation.

3. **Throttling does not look like an incident.** A failure can page someone. A slow job pages no one, so finance discovers the lag from a missing number instead of a banner.

4. **People hedge with extracts.** After one bad Thursday, someone pulls a file on Tuesday “so we have something,” and that file becomes the pack. You taught the close to distrust the product.

5. **The next purchase is a bigger SKU with no schedule.** Headroom without freeze windows and isolation is a wider hallway for the same collision. The floor still needs traffic rules.

6. **Interactive use fights refresh.** In close week everyone is in the reports. The controller waits on a visual that waits on someone else’s full reload. That is unmanaged concurrency, not “Power BI is slow.”

7. **Month-end stays a scavenger hunt.** A throttled model produces the same hunt described in [month-end still takes a week](/blog/why-month-end-still-takes-a-week): which as-of, which extract, which number the flash already used. Capacity became a close activity that nobody put on the close calendar.

A shared pool is a valid architecture. An unowned shared pool during fiscal cutoff is a control gap.

## How to treat capacity as close risk

1. **Put close-week capacity on the finance calendar.** List it the same way you list trial balance and flash: which jobs must complete, by when, on which pool. If that sentence does not exist, Thursday is the design.

2. **Isolate certified close models from sandboxes and sprawl.** Use separate capacity, separate workspace policy, or a freeze that actually freezes. Test jobs do not get a vote during cutoff. If isolation requires a SKU, that SKU is a control purchase, not a substitute for strategy.

3. **Schedule by business priority, not first come.** Close datasets go first, then the ops models the Monday pack needs, then everything else. Default schedules are not a policy. They are a rubber stamp.

4. **Freeze non-essential refresh during the window.** Unused reports, departmental experiments, and full-history reloads can wait until Friday. A freeze is a close procedure, so announce it and enforce it. Courtesy emails are not a freeze.

5. **Watch throttling like a bank feed.** In close week, a named person opens capacity metrics and refresh history before the first finance meeting and checks queue time, delays, failures, and CPU. If the only person who can see those screens is on vacation, you are back to one person acting as the gateway.

6. **Banner late data without waiting for a complaint.** If the certified model missed its SLA, the pack shows stale so users do not have to guess. Visible lag is manageable. Invisible lag becomes Thursday.

7. **Size for the close peak, then prove it.** A load test in week two is theater. Replay close-week concurrency. If the pool only works when half the company is out, you have a quiet hallway, not headroom.

8. **Retire jobs that only take up space.** A dataset with no owner and no meeting does not get a close-week slot. Sprawl competes with the books.

9. **Do not walk away after a capacity purchase.** Headroom helps, but traffic rules finish the job. The SKU cannot say no to a sandbox. A close policy can.

## What a close that survives shared load looks like

On Sunday night the certified jobs start first and the sandboxes stay quiet. Monday’s flash meets the SLA or shows a banner. Finance saw the state of the corridor on Sunday, not through a VP on Thursday. Capacity you can see is an operating input. Capacity hidden behind a dashboard that looks successful is a close activity nobody is managing.

## Executive takeaway

Shared capacity will throttle the close if the close has to compete with everything else and nobody watches until the pack is late.

That is not an IT curiosity. It is a finance control built from isolation, scheduling, a freeze, metrics, and a banner. Buy headroom if you need it, but not as a substitute for traffic rules.

Want to know whether close week is losing the capacity queue? [Book a session with Alluvium](/contact). We will map the certified jobs, the competing refresh, and the window finance should own. To check the close model itself, start with a [free Model Health check](/power-bi-model-health).

<!-- wordcount: 1190 -->
