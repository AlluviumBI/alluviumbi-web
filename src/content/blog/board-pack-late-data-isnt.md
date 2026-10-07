---
title: "Your Board Pack Is Late Because the Data Isn’t"
description: "The board pack slips while the actuals already exist. Assembly, pasting, and versioning are the drag, not the data."
pubDate: 2026-05-25
tags:
  - Power BI
  - Finance
  - Board
draft: false
---

The board pack slips a day, then another, and everyone blames “the data.”

The data is often already there. Actuals hit the ledger, the plant already shipped, and cash already moved. What runs late is assembly: pasting, chasing commentary, versioning, and building a PDF that has to look like last quarter’s.

![Black-and-white still lake at first light with a dark treeline](/blog/board-pack-late-data-isnt-hero.jpg)

## The problem

Close produces numbers. The pack produces a document. Those are different jobs, and the first can be on time while the second is still a war of tabs.

Someone exports and someone pastes. Someone waits on a narrative from a unit that already has the figure. Someone saves Pack_v7_FINAL_Monday. The director packet goes out late, and the meeting opens with “use the file I just sent.”

That is not an ERP outage. It is a production process with no owner and no source of actuals the pack is allowed to read.

Excel versus Power BI is the wrong fight here. Keep formatted statements in Excel if the committee needs them, and put shared actuals in a model. We drew that boundary in [Excel vs Power BI for financial reporting](/blog/excel-vs-power-bi-financial-reporting). This piece is about the clock, and why the pack misses the send even when the books already know.

## Timing, not tooling theater

Boards do not need a live dashboard in the room. They need a packet they can read on a plane, with numbers that will not change between Sunday night and Tuesday morning. That packet is late for three boring reasons.

**The actuals are not official until someone pastes them.** The model or the trial balance already has the figure. The pack is a copy, and copies lag.

**Commentary is chained to the copy.** Leaders will not write narrative on a moving target. If the number is still being typed, the memo waits. If it came from a refresh the controller already signed, the memo can start.

**Versioning happens over email.** Two directors have two files, and a third has a printout from Friday. Sometimes the “late pack” is an on-time pack that got forked.

Power BI does not have to become the board printer. It has to stop being absent from the actuals the printer uses.

## The costs

1. **The committee loses calendar, not insight.** A day of delay is a day of pre-read that does not happen. The meeting becomes a first read and decisions slip to the next cycle. That is a governance problem with time, not with chart color.

2. **Finance burns the weekend on collation.** Controllers did not finish close so they could be desktop publishers. Paste-and-reconcile is skilled people doing a merge that software already did upstream.

3. **Numbers drift between versions.** Friday’s pack and Monday’s pack differ by a paste, a filter, or a tab someone forgot to hide. Directors notice and trust takes the hit. The data was stable. The document was not.

4. **Units game the clock.** If the pack is a scavenger hunt, every department holds its slide until the last hour. You taught them that official means “whatever made the PDF.”

5. **Flash and board tell different stories.** Ops already saw a dashboard, and the pack shows a workbook. If they disagree, you get the three-number meeting described in [Why Power BI Reports Show Different Numbers](/blog/why-power-bi-reports-show-different-numbers). Late packs make it worse, because people compare timestamps instead of definitions.

6. **You buy tools to speed up pasting.** New add-ins and new portals sit on the same assembly line. Spend should go to official actuals and a connected pack, not a prettier clipboard.

Month-end drag has many causes. We mapped manual finance reporting in [How Power BI Consulting Solves Finance Reporting Pain Points](/blog/power-bi-for-finance-reporting-consulting). The specific failure here is the packet clock.

## What not to do

Do not move the whole board book into Power BI so it is “live.” Live is the opposite of a locked pre-read. Directors need a freeze, not a tile that changes during the call.

Do not keep two sets of actuals, one for the flash and one for the pack. That guarantees a Sunday fight.

Do not wait for a perfect close calendar before you connect the pack. Connection does not replace judgment. It removes re-keying.

Do not treat the executive assistant as the data warehouse. If the only person who can produce the pack is the one who knows which tabs to hide, you have a key-person risk, not a process.

## How to fix the clock

1. **Split actuals time from document time.** Name when official actuals freeze for the pack, when commentary is due, and when the PDF goes out. If those three times are one blob called “when finance is done,” you cannot manage any of them.

2. **Point the pack at the model and stop pasting.** The formatted P&L can stay in Excel. The cells that hold actuals should come from the same semantic model the rest of the company uses. Microsoft already documents Excel connected to a Power BI model, so use that pattern. If someone still types a total, that is a break, not a style choice.

3. **Freeze once.** After the controller signs the freeze, the pack does not chase a new extract. Exceptions get reissued with a version note, never quietly overwritten. Boards can live with a labeled restatement. They cannot live with mystery.

4. **Collect narrative on a stable number.** Commentary templates can sit in the same workbook or a short memo, not in a Slack thread waiting on a paste. The number arrives first, then the sentence.

5. **Send one outbound file.** It has one name, one timestamp, and one owner, and it replaces last quarter’s “use this one.” If directors want to drill, give them access to the certified report after the freeze instead of five attachments.

6. **Rehearse on a non-board cycle.** Prove the loop on a monthly flash or an ELT pack first, with the same actuals, freeze, and connected file. If that loop still slips, do not scale it to the directors. A [Quickstart](/power-bi-quickstart) can automate one painful actuals view, and [dashboard optimization](/power-bi-dashboard-optimization-ai-insights) is for the certified report that is too slow to be the source.

## What good looks like

Actuals are ready at the hour you already close. Producing the pack takes hours after the freeze, not days of re-keying.

The CFO can say, “The number in the book is the number in the model.” If a director asks for a cut, it is a filter on the same product, not a new extract.

Finance still writes like finance, with footnotes, reclasses, and tone. None of that requires a clipboard.

When the pack is late, you know which of the three clocks broke: freeze, narrative, or send. Nobody holds a postmortem titled “data.”

Governance still matters: access to the pre-read, who can change a measure after the freeze, and retiring last year’s pack files that still sit in a workspace. That operating system is covered in [Power BI governance](https://www.alluviumbi.com/blog/the-hidden-costs-of-poor-power-bi-governance-and-how-to-fix-it). Timing is the SLA you put on top.

If you cannot say which decisions the pack exists to support, you will keep adding tabs. That is a roadmap problem, and our [Data & AI Strategy Roadmap](/analytics-ai-strategy-roadmap) is built for it.

## Get started

Your board pack is a document, so treat it like one. Fund the actuals it reads, freeze them, and stop paying for paste with calendar days.

Want to see where the packet actually waits? [Book a session](/contact). We will map freeze, assembly, and send, not a project to put the board “in the cloud.” Or start with a [free Model Health check](/power-bi-model-health).

<!-- wordcount: 1243 -->
