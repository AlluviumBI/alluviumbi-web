---
title: "Shared Capacity Throttled the Close. Nobody Noticed Until Thursday."
description: "Month-end refresh lost to someone else’s dataset. Capacity is an operating risk, not an IT curiosity."
pubDate: 2026-09-18
tags:
  - Power BI
  - Capacity
  - Finance
draft: false
---

Month-end started Sunday night. The certified close model was in the queue with everything else.

Someone’s sandbox ran. Someone’s sprawl ran. Someone’s “just a test” dataset ran. Shared capacity did what shared capacity does. It throttled.

The close model finished late. Or it finished thin. Or it finished after the first flash meeting. Nobody watched the capacity metrics. Finance noticed Thursday, when the pack was already late and the exports had already started.

A failed job is visible. A throttled job looks like Power BI being slow. Slow is how close week gets lost without an incident.

![Black-and-white weir with a sheet of water backing up a wooded river](/blog/shared-capacity-throttled-the-close-hero.jpg)

## This is not a SKU, and it is not a failed refresh

Buying a bigger pool is not a program: [premium capacity is not a strategy](/blog/premium-capacity-is-not-a-strategy). Headroom is infrastructure. This post assumes you already have a pool—or a shared tenant—and still lose close week. The failure is scheduling, isolation, and who is allowed to compete with the books.

A failed 6 a.m. refresh is a finance event: [refresh failures are a close risk](/blog/refresh-failures-are-a-close-risk). Treat a hard fail like close risk, not a ticket. This post is the cousin that never trips the fail flag. The job is running. It is waiting. It is retrying. It is sharing a corridor with a dataset that does not have a fiscal calendar.

The huddle story is the gateway dying before stand-up: [the 7 a.m. surprise](/blog/gateway-refresh-7am-surprise). Here the clock is close week, not first shift. The user is the controller, not the supervisor. The symptom is a spinner, a late as-of, a pack that slips to Thursday.

Sprawl makes this worse: [dashboard sprawl is a tax](/blog/dashboard-sprawl-is-a-tax). Unused pages still have a schedule: [unused reports are a governance smell](/blog/unused-reports-are-a-governance-smell). Shared capacity does not know which jobs are the close. It knows who arrived first.

Close week is peak load. Throttling looks like queues, delayed starts, and jobs that overlap the meeting. The report still opens. Yesterday’s as-of is easy to miss. The competing job is often a sandbox or a departmental model. None of those are close. All of them can starve close.

Nobody owned the corridor. IT owns the SKU. Finance owns the pack. Capacity metrics sit in an admin view nobody with a P&L opens. Thursday is too late. Exports have already forked the numbers.

## The costs of sharing the corridor with the close

1. **Close week loses to average Tuesday.** You sized for the mean. The books do not close on the mean. A pool that is quiet in week two and choked on day three of close failed the only week that matters to finance.

2. **Sandbox is allowed to compete with the books.** If a test dataset can take the same capacity as the certified close model, you do not have a close control. Courtesy is not isolation.

3. **Throttling does not look like an incident.** A fail can page someone. A slow job pages no one. Finance discovers the lag from a missing number, not a banner.

4. **People hedge with extracts.** Once Thursday happens, someone pulls a file on Tuesday “so we have something.” That file becomes the pack. You taught the close to distrust the product.

5. **The next buy is a bigger SKU without a schedule.** Headroom without freeze windows and isolation is a wider hallway for the same collision. Floors need traffic rules.

6. **Interactive use fights refresh.** Close week, everyone is in the reports. The controller waits on a visual waiting on someone else’s full reload. That is unmanaged concurrency, not “Power BI is slow.”

7. **Month-end stays a scavenger hunt.** A throttled model produces the same hunt as [month-end still takes a week](/blog/why-month-end-still-takes-a-week): which as-of, which extract, which number the flash already used. Capacity became a close activity. Nobody put it on the close calendar.

A shared pool is a valid architecture. An unowned shared pool during fiscal cutoff is a control gap.

## How to treat capacity as close risk

1. **Put close-week capacity on the finance calendar.** Same way you put trial balance and flash. Which jobs must complete, by when, on which pool. If that sentence does not exist, Thursday is the design.

2. **Isolate certified close models from sandbox and sprawl.** Separate capacity, separate workspace policy, or a freeze that actually freezes. Test jobs do not get a vote during cutoff. If isolation requires a SKU, that SKU is a control purchase—not a strategy substitute.

3. **Schedule by business priority, not first-come.** Close datasets first. Then the ops models the Monday pack needs. Then the rest. Default schedules are not a policy. They are a stamp.

4. **Freeze non-essential refresh in the window.** Unused reports, departmental experiments, full-history reloads that can wait until Friday. A freeze is a close procedure. Announce it. Enforce it. Courtesy emails are not a freeze.

5. **Watch throttling like a bank feed.** In close week, someone with a name opens capacity metrics and refresh history before the first finance meeting. Queue time, delays, failures, CPU. If the only person who can see those screens is on vacation, you are back to a gateway-person.

6. **Banner late. Do not wait for a complaint.** If the certified model missed the SLA, the pack shows stale. Users should not have to guess. Visible lag is manageable. Invisible lag becomes Thursday.

7. **Size for the close peak, then prove it.** A load test in week two is theater. Replay close-week concurrency. If the pool only works when half the company is out, you have a quiet hallway, not headroom.

8. **Retire jobs that only occupy the corridor.** If a dataset has no owner and no meeting, it does not get a close-week slot. Sprawl is a competitor for the books.

9. **Do not walk away after a capacity buy.** Headroom helps. Traffic rules finish the job. The SKU cannot say no to a sandbox. A close policy can.

## What a close that survives shared load looks like

Sunday night, certified jobs start first. Sandbox is quiet. Monday’s flash matches the SLA—or shows a banner. Finance saw the corridor on Sunday, not from a VP on Thursday. Close is a peak. Capacity you can see is an operating input. Capacity that looks like a successful dashboard is a hidden close activity.

## Executive takeaway

Shared capacity will throttle the close if the close has to compete with everything else and nobody is watching until the pack is late.

That is not an IT curiosity. It is a finance control: isolation, schedule, freeze, metrics, banner. Buy headroom if you need it. Do not buy it as a substitute for traffic rules.

Need a 30-minute look at whether close week is losing the capacity queue? [Contact Alluvium](/contact). We’ll map certified jobs, the competing refresh, and the window finance should actually own.

<!-- wordcount: 1142 -->
