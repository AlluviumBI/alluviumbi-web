---
title: "Your Board Pack Is Late Because the Data Isn’t."
description: "The pack slips while actuals already exist. Assembly, paste, and versioning are the drag."
pubDate: 2026-05-25
tags:
  - Power BI
  - Finance
  - Board
draft: false
---

The board pack slips a day. Then another. Everyone blames “the data.”

The data is often already there. Actuals hit the ledger. The plant already shipped. Cash already moved. What is late is assembly: paste, commentary chase, versioning, and a PDF that must look like last quarter’s.

![Black-and-white still lake at first light with a dark treeline](/blog/board-pack-late-data-isnt-hero.jpg)

## The problem

Close produces numbers. The pack produces a document.

Those are different jobs. The first can be on time while the second is still a war of tabs.

Someone exports. Someone pastes. Someone waits on a narrative from a unit that already has the figure. Someone saves Pack_v7_FINAL_Monday. The director packet goes out late. The meeting starts with “use the file I just sent.”

That is not an ERP outage. That is a production process with no owner and no source of actuals the pack is allowed to read.

Excel versus Power BI is the wrong fight for this. Keep formatted statements in Excel if the committee needs them. Put shared actuals in a model. We drew that boundary in [Excel vs Power BI for financial reporting](/blog/excel-vs-power-bi-financial-reporting). This piece is about the clock. Why the pack misses the send even when the books already know.

## Timing, not tooling theater

Boards do not need a live dashboard in the room. They need a packet they can read on a plane, with numbers that will not change between Sunday night and Tuesday morning.

That packet is late for three boring reasons.

**The actuals are not official until someone pastes them.** The model, or the trial balance, already has the figure. The pack is a copy. Copies have lag.

**Commentary is chained to the copy.** Leaders will not write narrative on a moving target. If the number is still being typed, the memo waits. If the number came from a refresh the controller already signed, the memo can start.

**Versioning is email.** Two directors have two files. A third has a printout from Friday. The “late pack” is sometimes an on-time pack that was forked.

Power BI does not have to become the board printer. It has to stop being absent from the actuals the printer uses.

## The costs

1. **The committee loses calendar, not insight.** A day of delay is a day of pre-read that does not happen. The meeting becomes a first read. Decisions slip to the next cycle. That is governance of time, not a chart color.

2. **Finance burns the weekend on collation.** Controllers did not miss the close so they could be desktop publishers. Paste-and-reconcile is skilled people doing a merge that software already did upstream.

3. **Numbers drift between versions.** Friday’s pack and Monday’s pack differ by a paste, a filter, or a tab someone forgot to hide. Directors notice. Trust takes the hit. The data was stable. The document was not.

4. **Units game the clock.** If the pack is a scavenger hunt, every department delays their slide until the last hour. You trained them that official means “whatever made the PDF.”

5. **Flash and board tell different stories.** Ops already saw a dashboard. The pack shows a workbook. If they disagree, you get the three-number meeting. See [Why Power BI Reports Show Different Numbers](/blog/why-power-bi-reports-show-different-numbers). Late packs make that worse because people compare timestamps, not definitions.

6. **You buy tools to accelerate paste.** New add-ins. New portals. Same assembly line. Spend should hit the official actuals and a connected pack, not a prettier clipboard.

Month-end drag has many causes. Manual finance reporting is one we already mapped in [How Power BI Consulting Solves Finance Reporting Pain Points](/blog/power-bi-for-finance-reporting-consulting). Here the specific failure is the packet clock.

## What not to do

Do not move the entire board book into Power BI so it is “live.” Live is the opposite of a locked pre-read. Directors need a freeze, not a tile that changes during the call.

Do not keep two actuals: one for the flash, one for the pack. That guarantees a Sunday fight.

Do not wait for a perfect close calendar before you connect the pack. Connection does not replace judgment. It removes re-keying.

Do not treat the EA as the data warehouse. If the only person who can produce the pack is the person who knows which tabs to hide, you have a key-person risk, not a process.

## How to fix the clock

1. **Split actuals time from document time.** Name when official actuals are frozen for the pack. Name when commentary is due. Name when the PDF goes. If those three times are one blob called “when finance is done,” you cannot manage any of them.

2. **Point the pack at the model. Stop pasting.** The formatted P&L can stay Excel. The cells that are actuals should come from the same semantic model the rest of the company uses. Microsoft already documents Excel connected to a Power BI model. Use that pattern. If someone still types a total, that is a break, not a style choice.

3. **Freeze once.** After the controller signs the freeze, the pack does not chase a new extract. Exceptions are a reissue with a version note, not a quiet overwrite. Boards can live with a labeled restatement. They cannot live with mystery.

4. **Collect narrative on a stable number.** Commentary templates can sit in the same workbook or in a short memo. They should not sit in a Slack thread waiting on a paste. The number arrives. Then the sentence.

5. **One outbound file.** One name. One timestamp. One owner. Redirect last quarter’s “use this one.” If directors need a dashboard for drill, give them access to the certified report after the freeze. Do not send five attachments.

6. **Rehearse on a non-board cycle.** Prove the loop on a monthly flash or an ELT pack first. Same actuals. Same freeze. Same connected file. If that loop still slips, do not scale it to the directors. A [Quickstart](/power-bi-quickstart) can automate one painful actuals view. Optimization is for the certified report that is too slow to be the source: [dashboard optimization](/power-bi-dashboard-optimization-ai-insights).

## What good looks like

Actuals are ready on the hour you already close. The pack is a production job measured in hours after freeze, not days of re-key.

The CFO can say, “The number in the book is the number in the model.” If a director asks for a cut, it is a filter on the same product, not a new extract.

Finance still writes like finance. Footnotes. Reclasses. Tone. None of that requires a clipboard.

When the pack is late, you know which of the three clocks broke: freeze, narrative, or send. You do not hold a postmortem titled “data.”

Governance still matters. Access to the pre-read. Who can change a measure after freeze. Sunset of last year’s pack files sitting in a workspace. That is the operating system in [Power BI governance](https://www.alluviumbi.com/blog/the-hidden-costs-of-poor-power-bi-governance-and-how-to-fix-it). Timing is the SLA you put on top.

If you cannot say which decisions the pack exists to support, you will keep adding tabs. That is a roadmap problem: [Data & AI Strategy Roadmap](/analytics-ai-strategy-roadmap).

## Get started

Your board pack is a document. Treat it like one. Fund the actuals it reads, freeze them, and stop paying calendar for paste.

Need a 30-minute look at where the packet actually waits? [Contact Alluvium](/contact). We will map freeze, assembly, and send—not a project to put the board “in the cloud.”

[Book a 30-minute consult](/contact).

<!-- wordcount: 1243 -->
