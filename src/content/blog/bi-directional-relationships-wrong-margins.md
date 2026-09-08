---
title: "Bi-Directional Relationships Don't Throw Errors. They Throw Wrong Margins."
description: "Flipping Power BI filter direction to fix a visual can quietly double-count. Wrong margins look like a definition fight. Fix the model."
pubDate: 2026-09-09
tags:
  - Power BI
  - Data Modeling
  - Margin
  - Relationships
draft: false
---

Someone flips a relationship to Both so a slicer "just works."

The visual lights up. The ticket closes. Nobody opens the margin measure to see what else that filter now reaches.

Finance and manufacturing then argue about inflated contribution, weird plant totals, or customer margins that do not tie to the P&L. It looks like a definition fight. Often it is a filter-direction fight with no error message.

![Black-and-white close-up of dark water ripples under a pale horizon](/blog/bi-directional-relationships-wrong-margins-hero.jpg)

## Both directions feel helpful. They are rarely free.

Power BI relationships carry filter context from one table to another. Single direction is the default for a reason: it keeps the model predictable.

Bi-directional filtering sends context both ways. That can unlock a visual that otherwise stays blank. It can also let a dimension filter bleed into another fact path, multiply rows through a many-to-many bridge, or change which customers and plants participate in a margin calculation.

The engine does not throw. Totals still calculate. The number is simply not the business meaning you thought you published.

This is cousin to [margin definitions that don't survive](/blog/margin-definitions-that-dont-survive) and [customer margin disappears in the rollup](/blog/customer-margin-disappears-in-the-rollup). Those posts are about what the measure includes. This one is about how filter paths quietly rewrite the grain under that measure.

Mid-market teams hit this when an analyst "fixes" a product-by-customer matrix, a plant hierarchy slicer, or a bridge table under time pressure. The report looks right in the demo. The close pack looks wrong in the room.

## Where bi-directional filtering goes wrong

A fact-to-dimension flip so a disconnected table can slice. The slice works. It also filters another fact table you forgot was related through a shared dimension.

A bridge for many-to-many product aliases set to Both. Row counts inflate. Revenue looks fine at a high level and wrong at the cut leadership actually uses.

Role-playing dimensions (ship-to vs bill-to, order date vs ship date) get tangled when filters travel farther than the star schema intended.

A "temporary" Both on a calendar or region table becomes permanent because removing it breaks three visuals someone built on the side effect.

None of these announce themselves as model defects. They announce themselves as arguments about margin.

## The costs of quiet filter bleed

1. **Margins inflate without a red flag.** Double-counting through a bi-directional bridge can lift contribution or gross margin in cuts that still look plausible. Leadership debates the definition. The model is multiplying.

2. **Plant and finance stop trusting the same page.** Ops sees a plant total that cannot reconcile to production. Finance sees a customer margin that cannot reconcile to the ledger. Both are "using Power BI." Both are right to be suspicious.

3. **Fixing the visual teaches the wrong habit.** The next blank visual gets another Both. The model accumulates exceptions. New hires inherit a relationship diagram nobody wants to explain.

4. **Certification becomes theater.** A [certified dataset](/blog/certified-datasets-vs-wild-west) with sneaky filter paths still ships wrong cuts. The badge survives. The trust does not.

5. **Reconciliations burn the people you can least spare.** Controllers and cost accountants rebuild the number in Excel to prove the dashboard. That is not adoption. That is a second close.

6. **Cross-functional meetings become definition theater.** Time goes to "what does margin mean" when the real question is "which tables are filtering which facts right now."

7. **Measures look guilty when relationships are guilty.** Teams rewrite DAX that was fine. Complexity rises. The root cause stays in the relationship view.

8. **Rollback is painful because the side effects have users.** Turning Both back to Single breaks the visual that justified the change. Without a proper pattern (bridge, role-playing, or a constrained measure), the team is stuck.

## How to fix it: keep filter paths boring

1. **Default to single-direction star schemas.** Facts filter from dimensions inward. If a visual needs the opposite, treat that as a modeling problem, not a property toggle.

2. **Ban casual Both in production models.** Require a short design note: why, which tables, what grain risk, and who approved it. No note, no Both.

3. **Prefer explicit patterns over filter magic.** Use bridge tables with clear cardinality, role-playing dimensions, or measures that apply `CROSSFILTER` only inside a controlled calculation. Scope the exception to the measure that needs it.

4. **Test margin at the grain leadership argues about.** Do not only check grand totals. Check customer, plant, product family, and period. Compare to a known extract. Bi-directional bugs love mid-level cuts.

5. **Watch for fan-out in relationship view.** Many-to-many and bi-directional edges next to margin facts deserve a red review. If you cannot draw the filter path on a whiteboard, do not ship it.

6. **Separate exploration models from certified finance models.** Sandbox experiments can try Both. The [semantic model that is the product](/blog/semantic-model-is-the-product) for close and pricing decisions should stay strict.

7. **Document the intended filter path for key measures.** One paragraph: which dimensions are allowed to filter revenue, cost, and margin. When a visual needs more, change the model deliberately.

8. **Add a relationship review to promotion.** Before a model moves toward Prod, someone other than the visual author inspects relationships. This pairs with [who can change a measure](/blog/who-can-change-a-measure): filter direction is as consequential as DAX text.

9. **When numbers disagree, inspect relationships before rewriting definitions.** Open Model view. Trace paths from the slicer to the fact. Many "margin definition" fights end in a Both that should never have shipped.

10. **Teach the symptom language to finance partners.** "This cut looks double-counted" and "this slicer changes an unrelated total" are model bugs. Give them a channel that reaches modeling, not only a help desk for "wrong formula."

## What good looks like

The certified margin model uses single-direction relationships by default. Exceptions are rare, documented, and tested at customer and plant grain. Visual authors who need a special filter get a measure or a bridge pattern—not a silent Both on a shared dimension.

Finance and manufacturing still debate policy. They stop debating inflated totals that only exist because filter context wandered.

## A short review checklist before you ship

Open Model view. For every relationship set to Both, write one sentence: which visual required it, which fact tables it can reach, and what grain could inflate. If you cannot finish the sentence, remove the Both and redesign.

Then pick one disputed page. Set the same customer, plant, and period filters. Compare margin, revenue, and cost to a controlled extract or to the model with that relationship forced to Single. Material differences without a business reason are your signal.

Finally, ask who will own the exception six months from now. If the answer is "whoever built the visual," you do not have a pattern. You have a future surprise. Put the exception next to [measures nobody can explain](/blog/measures-nobody-can-explain) on your stewardship list, or delete it.

## Executive takeaway

Bi-directional relationships do not throw errors. They throw wrong margins that look like definition disputes.

If a visual only works after flipping filter direction, stop and fix the model. Your close and pricing conversations depend on boring filter paths more than clever relationship settings.

Need a 30-minute review of whether filter direction is quietly rewriting your margins? [Contact Alluvium](/contact). We'll trace one disputed cut through the relationship paths and show what should stay single-direction.
