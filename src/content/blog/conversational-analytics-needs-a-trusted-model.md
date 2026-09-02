---
title: "Conversational Analytics Without a Trusted Model Is Just Chat."
description: "Asking questions of data only works if the model already has agreed measures. Chat does not invent definitions."
pubDate: 2026-06-01
tags:
  - Power BI
  - Analytics
  - Semantic Model
draft: false
---

Leaders want to ask questions of the data in plain language. That instinct is right.

The failure is skipping the product those questions hit. If measures, grain, and owners are not agreed, a chat box does not create truth. It produces fluent guesses. Conversational analytics without a trusted model is just chat.

![Black-and-white hand holding a glass sphere with an inverted landscape inside](/blog/conversational-analytics-needs-a-trusted-model-hero.jpg)

## The problem

The demo is always clean. Type “what was margin by plant last month.” A sentence comes back. The room nods.

In the business, margin has three definitions. Plant is a hierarchy nobody mapped. Last month means closed books in finance and shipped in ops. The sentence still sounds sure.

You did not get insight. You got a confident paragraph on top of the same disagreement you already have in dashboards.

Natural-language questions are a interface. They inherit whatever the semantic model already is. If the model is a pile of extracts, chat is a faster way to argue.

This is not a feature bake-off. Product names and release trains do not fix a missing steward. Do not start with the box. Start with the measures the box is allowed to say.

## What “ask the model” actually requires

Conversational analytics is useful when three things are already true.

**The question maps to a named measure.** “Revenue” hits one definition. Not a search across five columns that all look like money.

**The grain can survive a follow-up.** “By customer” and “by plant” are not new projects. They are dimensions the product already has.

**Someone owns a wrong answer.** If the chat is mistaken, a steward can change the measure or the synonym list. If nobody owns it, the paragraph becomes folklore.

That is the same product we described as [the semantic model](/blog/semantic-model-is-the-product). Reports are brochures. Chat is another brochure—spoken, not plotted. It still reads the product.

If finance, ops, and sales already walk in with three numbers, do not add a fourth voice. Fix the meeting first: [Why Power BI Reports Show Different Numbers](/blog/why-power-bi-reports-show-different-numbers). Then let people ask questions of the one source you designated.

## The costs of chat on an untrusted model

1. **Speed multiplies error.** Dashboards at least sit still on a page someone can point at. A generated answer can pick a different column every session. You cannot reconcile a moving sentence.

2. **Executives trust tone.** Fluent language reads like finance. It is not a signature. A well-written wrong margin is worse than a slow correct one.

3. **Shadow definitions get a microphone.** The unofficial measure that never survived certification now answers the CEO. SSOT was a decision. Chat without a fence undoes it in one prompt. See [single source of truth](/blog/single-source-of-truth-is-a-decision).

4. **Analysts become cleanup, not leverage.** Every impressive demo creates a ticket: “why did it say that.” You did not reduce work. You moved it to after-the-fact forensics.

5. **Security follows the question, not the org chart.** People will ask for slices they should not see. Row-level rules and certified models have to be in place first. A conversational layer does not invent clearance.

6. **You spend budget on the microphone.** Licenses, experiments, training on how to prompt. The model is still two copies of revenue. Strategy alignment still matters: dashboards—and now chat—should serve decisions, not activity. [Why isn’t your Power BI investment driving results?](https://www.alluviumbi.com/blog/power-bi-strategy-alignment)

None of this means “never ask questions in English.” It means English is not a data model.

## What to fund instead of a demo

Fund the certified model for the questions leadership will actually ask on a Monday. Cash. Margin. Backlog. Inventory. Throughput. Whatever your cadence is.

Fund synonyms as a controlled list. “Sales” might mean bookings. Write that down. Do not let a language layer guess.

Fund the same freeze you want for the board pack. If actuals are not official until 7 a.m., chat should not quote yesterday’s draft as if it were close. Timing is a process. The pack version of that argument is [Your Board Pack Is Late Because the Data Isn’t](/blog/board-pack-late-data-isnt).

Fund Excel as a consumer of the same product when the answer must become a statement. A generated paragraph is not a 10-Q. Connected actuals still matter: [Excel vs Power BI](/blog/excel-vs-power-bi-financial-reporting).

Do not fund a second semantic layer because the first is embarrassing. Make the first one true.

If you cannot name the decisions the questions serve, you will chat about everything and govern nothing. That is a [roadmap](https://www.alluviumbi.com/-data-ai-strategy-roadmap) conversation.

## How to fix it

1. **Pick the questions that should never be ad hoc.** The ones that hit every ELT. Write them down. If the model cannot answer those with certified measures, you are not ready to converse. You are ready to model.

2. **Put those measures in one product, with a steward.** Grain. Exclusions. Refresh. The chat layer may only see that product. Sandbox models stay mute in executive channels.

3. **Label answers with the measure name.** “Booked revenue, finance definition, as of Tuesday refresh.” If the interface cannot show lineage, do not point it at the CEO. A number without a label is how you got three slides.

4. **Route follow-ups to dimensions you already trust.** Plant, region, product, customer. If someone asks a grain you do not have, the honest answer is “we don’t measure that yet.” A hallucinated split is not curiosity. It is fiction.

5. **Review missed and wrong answers like incidents.** Weekly, for a while. Wrong answers are model bugs or policy gaps. Treat them that way. Do not train users to “prompt better” around a broken definition.

6. **Prove it on one domain.** One certified model. Ten questions. Two weeks of leadership use. If the answers match the brochure and the pack, you earned a wider audience. If they do not, stop the experiment. A [Quickstart](/power-bi-quickstart) can still be the first automated report—on the model you intend to ask. Tuning the report is [optimization](/power-bi-dashboard-optimization-ai-insights). Keeping the product honest over time is [advisory](/managed-data-ai-advisory).

Sprawl makes this harder. Fifty reports, fifty places a language layer might look. Inventory, certify, retire before you add a microphone. That tax is [dashboard sprawl](/blog/dashboard-sprawl-is-a-tax). Governance still sits underneath: [hidden costs of poor Power BI governance](https://www.alluviumbi.com/blog/the-hidden-costs-of-poor-power-bi-governance-and-how-to-fix-it).

## What good looks like

A COO types a question the company already agreed to measure. The answer matches the certified report. The follow-up is a filter, not a new project.

A CFO sees a sentence and a label. They can challenge the measure, not the prose.

Analysts spend time changing the product when policy changes. They do not spend time explaining why the chat picked last year’s column.

People still use reports. Conversation is how they reach the product between meetings. It is not a second system of record.

You will still say no. Some questions are scenarios. Some are commentary. Some belong in a modeler, not in a sentence. Chat that knows when to stop is a feature.

## Get started

Do not buy a conversational layer to paper over disagreed measures. Agree the product. Then ask it questions.

Need a 30-minute look at whether your model can survive a plain-language question? [Contact Alluvium](/contact). We will map the measures a chat is allowed to speak—and the ones it must not.

[Book a 30-minute consult](/contact).

<!-- wordcount: 1209 -->
