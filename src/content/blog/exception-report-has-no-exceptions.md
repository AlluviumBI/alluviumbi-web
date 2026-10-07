---
title: "Why Your Exception Report Has No Exceptions"
description: "If everything is red, nothing is. Thresholds that never fire, or fire on noise, get ignored."
pubDate: 2026-09-17
tags:
  - Power BI
  - Operations
  - KPIs
draft: false
---

The exception report opens and everything is red. Or nothing is.

The room scrolls anyway, and leaders bring their own list. The page that was supposed to focus the hour turns into weather.

Thresholds that never fire, or fire on noise, get ignored. That is not a color-picker problem. It is a management rule that never made it into the model.

![Black-and-white cracked dry riverbed with no water](/blog/exception-report-has-no-exceptions-hero.jpg)

## An exception is an action, not a color

This is not an unused report, the problem covered in [unused reports are a governance smell](/blog/unused-reports-are-a-governance-smell). It is not [the dashboard nobody opens](/blog/nobody-opens-the-dashboard), either. People open this page. They just do not believe it, so they open it and ignore the red.

It is also not the red tile that never explains itself, which is [variance is a question, not a red tile](/blog/variance-is-a-question-not-a-red-tile). That page fires and nobody knows what to do. This problem sits earlier. The rule that decides whether anything fires is broken, so everything is red or nothing is.

A KPI still needs a sentence, because [measures nobody can explain are not KPIs](/blog/measures-nobody-can-explain). Exception logic needs a second sentence: the threshold that means a person has to act before the next cycle. Red without a rule trains the room to squint past the page.

## Why thresholds go dead or go loud

Some thresholds are round numbers from a workshop. Some sit at the wrong grain, flagging a daily blip the weekly meeting cannot act on. Some have no owner, because the analyst picked a color and the plant manager never signed it. Politics makes the line polite. History leaves last year’s target in the measure.

None of that is a visual skill gap. Conditional formatting will faithfully display a rule the company does not mean.

## The costs of an exception report with no exceptions

1. **Red teaches the room to ignore the page.** In the first week they discuss every tile. By the fourth week they discuss none. Attention is a budget, and you spent it on noise.

2. **The real exceptions move to Slack and the deck.** Someone knows which line is actually on fire and says so in the meeting, because the page did not. Power BI becomes a backdrop while the operating system stays oral.

3. **Prep time returns.** If the page cannot rank what matters, someone builds a pack that can. You paid for an exception report and rehired the slide ritual, which is one reason the weekly ops review turns back into a deck.

4. **Owners cannot be assigned.** An action needs a threshold, a person, and a cycle. A wall of red has no person, and a wall of green has no cycle. Accountability needs a line someone will defend.

5. **Grain errors flood the list.** A customer miss that is noise at the day level and real at the week level will either always fire or never fire, depending on which tile you painted. The exception is not wrong. It is on the wrong clock.

6. **Thresholds rot in place.** Nobody reviews fire rates or compares them to process capability. Last year’s five percent is this year’s wallpaper. Change control never touches the rule, because the rule was never treated as a product.

7. **Trust dies in both directions.** When the page cries wolf, leaders stop looking. When it never cries, leaders stop looking. Either way the certified exception report is furniture, not a control.

If an exception report cannot change what the hour discusses, it is just a chart.

## How to make exceptions fire on purpose

1. **Define an exception as a management action.** “Off target” is not enough. Name what must happen before the next review: a call, a capacity move, a quality hold, a pricing flag. If nothing would change, it is a status, not an exception.

2. **Set the line from the process, not the workshop.** Look at history, and at what the plant, the warehouse, or the commercial team actually treats as act-now. Round numbers are slogans, and slogans paint everything red.

3. **Separate watch from act.** A watch list can be wide. An act list must be short. Use two measures, two bands, or two pages. One color for both is how watch turns into noise.

4. **Name an owner for each threshold.** The steward owns the measure sentence, and the operational leader owns the line that means “I will move.” If the plant manager will not sign the threshold, it does not belong on the exception page.

5. **Match the exception’s grain to the decision.** Shift exceptions go to the huddle, weekly exceptions to the staff review, and monthly exceptions to the commercial pack. Painting a monthly target onto a daily tile is how you get a permanent red sky.

6. **Review fire rates on a schedule.** Each month, look at how often each rule fired, how often it produced an action, and how often the room ignored it. A rule that always fires is broken, and so is a rule that never fires. Tuning is the product work.

7. **Put the short list on the agenda.** The weekly review starts with what crossed the act line, not a tour of the page. If the list is empty, say so. Empty can be good. Fake empty, because the line is polite, is not.

8. **Kill or split any report that cannot produce a short list.** If everything is red, the page is not an exception report. If nothing is red and the business still has fires, it is not one either. Retire it or rebuild it, using the ritual in [how to retire a dashboard](/blog/how-to-retire-a-dashboard). Do not keep a museum because it is certified.

9. **Keep the rule next to the tile.** Show the threshold, the grain, the owner, and the cycle. If a leader cannot see why something is red, they will not act. Hidden rules are how tribal thresholds survive.

## What a working exception page looks like

The weekly review opens a short list of five things, not fifty, and each one has an owner. Watch items exist, but they are not painted as fires. An empty list can be true, because quiet is not the same as mute. The page stops pretending that every variance is a decision.

## Executive takeaway

Thresholds are management rules, so put them in the model as rules, with an action, an owner, a grain, and a cycle. Tune the fire rates, and keep the list short enough for the hour.

Want to know why your exception report never produces an exception you would act on? [Book a session](/contact). We’ll map one KPI line (the threshold, the grain, and the owner) and whether it belongs on the page. Or start with a [free Model Health check](/power-bi-model-health).

<!-- wordcount: 1100 -->
