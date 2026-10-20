---
title: "Copilot Now Answers From Your Power BI Model. Make Sure the Model Is Right."
description: "Copilot Chat can answer from your Power BI model. If margin definitions disagree today, Copilot will just say the wrong number faster."
pubDate: 2026-10-20
tags:
  - Power BI
  - Copilot
  - Semantic Model
  - Model Health
  - Governance
draft: false
---

Someone types a margin question into Microsoft 365 Copilot Chat. A sentence comes back with a citation. The room treats it like the Monday pack.

That is the new normal. Copilot can attach a report or a model and answer in plain English from the measures and relationships already in Power BI. If finance and ops disagree on margin today, Copilot will just say the wrong number faster.

![Still lake reflecting a treeline in grayscale](/blog/copilot-answers-from-power-bi-model-make-sure-model-is-right-hero.svg)

## Can Copilot access Power BI data now?

Yes. In the September 2026 feature summary, Microsoft marked Power BI data answers in Microsoft Copilot Chat as generally available. Users can search for Power BI content, attach a report or paste a link, and ask in natural language. Fabric IQ grounds the reply in the data, measures, relationships, and business logic already defined in the semantic model, with citations. Existing permissions and row-level security still decide what each person can see.

The Fabric IQ plugin in Microsoft 365 Copilot Cowork is generally available on the same wave. Attach a report or model and keep the analysis inside a multi-step task instead of bouncing to a dashboard tab.

Microsoft’s September 28 blog states that for Fabric and Power BI customers this capability is on by default in Copilot Chat and Cowork. Administrators still control whether Fabric data is available in Microsoft 365 Copilot, and Purview DLP and information protection apply. Do not confuse this with the separate preview that puts Microsoft 365 Copilot inside Power BI itself; that admin setting starts off by default. This post is about answers that leave the model and show up in Chat and Cowork.

So when someone asks can Copilot access Power BI data, the honest answer is: if they can see the report or model, Copilot can read the same product and speak from it. Copilot access is not a second data lake. It is another interface on the semantic model you already ship.

## The C-suite stake is not the chat box

The demo always sounds clean. The risk is the product underneath. Copilot will repeat whatever the model says, right or wrong. It does not invent a finance definition of margin when ops coded contribution into the same measure name. It does not settle three workspaces with three different DAX paths. It accelerates the definition you already published.

That is why [margin definitions that do not survive a meeting](/blog/margin-definitions-that-dont-survive) become folklore at chat speed. Version control will not save you either: [Git will not fix three definitions of margin](/blog/git-wont-fix-three-definitions-of-margin). Conversational analytics without a trusted model was already [just chat](/blog/conversational-analytics-needs-a-trusted-model). The news is that the chat now sits where executives already work, with citations that look official.

Treat the semantic model as the product. Reports are brochures. Copilot Chat is a spoken brochure. Both read the same shelf. If the shelf is wrong, fluency is a megaphone.

## Who can ask Copilot about margin

There is a second control worth deciding before the first executive demo. Semantic model editors can now block read-only users from reaching a model through Copilot and Microsoft’s MCP tools. The setting lives in the Copilot section of the model and reads roughly: allow any person with read-only access to use AI on the model and its related reports. It applies across Power BI Copilot experiences, Microsoft 365 Copilot Chat and Cowork, data agents, and remote Fabric and Power BI MCP servers. Turn it off and read-only users lose AI access to that model. By default the switch stays enabled, preserving today’s open behavior.

Someone has to decide who can ask AI about margin and payroll. Permissions and row-level security still bound the rows a user can see. This switch decides whether a read-only viewer can query the model through Copilot at all. Leaving the default open is a choice. Blocking read-only AI access without fixing definitions is also a choice. Neither one repairs a bad measure. Both belong beside [who can change a measure](/blog/who-can-change-a-measure).

Name the models that feed flash, inventory, and plant stand-up. Decide which stay open to read-only Copilot access and which require write permission before AI can touch them. Write the decision next to the steward name.

## The costs of turning Copilot on before the model is ready

1. **Wrong numbers travel with citations.** A fluent sentence that cites the Monday pack looks more authoritative than a disputed tile. The room stops asking which margin and starts acting.

2. **Finance and ops argue faster, not less.** If the model already encodes two definitions under one label, Copilot surfaces the conflict in the first follow-up instead of in the second dashboard click.

3. **Sensitive questions land in Chat.** Margin, payroll, scrap, and customer contribution become plain-English prompts. Without the per-model switch reviewed, read-only users may reach AI on models leadership never meant for conversational use.

4. **Green refresh still hides sick structure.** Copilot answers from the last successful refresh. A healthy pipeline over a bloated, relationship-risky dataset is confident wrongness with a better interface.

5. **Trust leaves for Excel again.** When Copilot and the controller disagree, people open the file they already believe. Demo debt becomes program debt when a polished walkthrough on a dirty twin teaches the company that chat replaces stewardship.

## Fix definitions and model health first

1. **Agree the words before you invite the chat.** Name gross, contribution, and board margin as separate measures with owners. If the English word still means three bags of cost, do not let Copilot say “margin” yet.

2. **Score the models that will feed Copilot.** Relationships, unused columns, and DAX risk are not vanity lint. Treat a [model health score like close insurance](/blog/model-health-score-close-insurance) on every dataset that will answer executive questions in Chat.

3. **Put a steward on every Copilot-facing model.** Not “the BI team.” A person who can change the measure, plus a backup.

4. **Decide the who-can-ask switch per model.** Open by default is fine for many operational models. Block read-only Copilot and MCP access on payroll, margin, and other sensitive twins until policy is clear.

5. **Verify permissions and row-level security as if Chat were a report.** Copilot respects what the user can already see. Broken RLS in a report is broken RLS in Chat, only louder.

6. **Pilot with one trusted product model.** Attach the certified, scored model that already feeds the Monday pack. Skip the analyst sandbox with orphaned measures.

7. **Write a one-sentence rule for the room.** “We do not decide from Copilot answers on models below the health bar.” When someone pastes a Chat reply into the QBR, ask which model and measure it cited.

8. **Re-score after every structural change.** New filters, contribution logic, or date tables change what Copilot will say tomorrow. Silent growth is how garnish returns.

## What good looks like

Executives ask Copilot about the same model the Monday pack uses. Citations point to measures finance and ops already signed. Read-only AI access is intentional on some models and blocked on others. Model health sits on the close calendar beside refresh status. That is answers from your Power BI model done as governance, not as a feature launch.

## Executive takeaway

Copilot Chat can now answer from your Power BI model, generally available and on by default for Fabric and Power BI customers in Chat and Cowork according to Microsoft. The C-suite question is not whether the interface works. It is whether the model deserves to be repeated in plain English. Fix definitions. Score health. Decide who can ask.

Need a scored look at whether the models Copilot will read are close-ready or close-risky? Start with a free [Power BI model health](https://www.alluviumbi.com/power-bi-model-health) check, then [Book a Session](https://www.alluviumbi.com/contact).
