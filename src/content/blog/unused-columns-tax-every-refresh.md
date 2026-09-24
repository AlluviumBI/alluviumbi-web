---
title: "Unused Columns Don't Sit Quietly. They Tax Every Refresh"
description: "Wide ERP extracts left just in case inflate VertiPaq and gateway minutes. Model health means cutting columns that never reach a visual or measure."
pubDate: 2026-09-24
tags:
  - Power BI
  - Model Health
  - Performance
  - Governance
draft: false
---

The extract includes every ERP column "just in case." Two hundred fields. Twelve reach a visual. Eight feed measures. The rest sit in VertiPaq and ride along every refresh.

They do not sit quietly. They tax gateway minutes, capacity, and the patience of everyone waiting on the morning pack.

Model health means cutting columns that never earn their keep.

![Black-and-white factory worker under a suspended turbine rotor](/blog/unused-columns-tax-every-refresh-hero.svg)

## Bloat is a close tax, not a free option

Mid-market manufacturers pull wide tables because mapping feels slower than importing everything. Someone might need the field later. Later rarely comes. The column stays. Refresh grows. Desktop still feels snappy on a filtered sample. The Service pays full freight—classic [Desktop fast, Service slow](/blog/power-bi-desktop-fast-service-slow) gap.

Hidden columns feel harmless. They still compress, refresh, and travel through the gateway. Hiding is not deleting. Removal is.

If [the semantic model is the product](/blog/semantic-model-is-the-product), size and shape are product attributes. You would not ship unused parts in every unit "just in case." Do not ship unused columns through the gateway every night.

This sits next to [refresh failures as close risk](/blog/refresh-failures-are-a-close-risk): long refreshes miss windows. Bloat is how green schedules still arrive late.

## How unused columns accumulate

ERP and MES extracts land as "select star" views or flat files. Power Query keeps the width. The model inherits it.

High-cardinality text—notes, long descriptions, free-form reason codes—never appears in a visual but dominates memory.

Surrogate keys and audit columns imported twice through related tables. Relationships need keys. They do not need every staging leftover.

Deprecated attributes left for "one old report." The report retired. The column did not.

Incremental refresh helps row count. It does not forgive a fat row. Wide history still hurts.

"We might need it for ad hoc" becomes policy. Ad hoc happens in Excel exports anyway. The certified model keeps paying the tax for hypothetical slicers.

Duplicate label columns—code and description and long description—all imported. Visuals use one. VertiPaq stores three.

## The costs of polite bloat

1. **Gateway and capacity burn on dead weight.** Minutes disappear into columns nobody queries. Close windows shrink. Someone blames the network. Often the model is overweight.

2. **Refresh slips without a dramatic failure.** The job finishes—after the stand-up started. Leaders see yesterday. Trust erodes the same way as an outright failure.

3. **Developers optimize the wrong layer.** Teams add aggregations or Premium SKUs before removing unused fields. Expensive fix. Root cause remains.

4. **Model health scores rot.** Relationship and DAX issues hide behind size noise. Or size is the issue and nobody treats it as ownership work.

5. **Exploration models become production.** A wide sandbox gets certified because the visuals look good. [Certification without fitness](/blog/certified-datasets-vs-wild-west) endorses the tax.

6. **Security and privacy surface area grows.** Extra columns mean extra fields in exports and accidental exposure. Governance debt rides along with performance debt.

7. **Change impact balloons.** Every source change risks more columns. Testing slows. Teams fear cleanup because the model feels fragile.

8. **Finance waits on plumbing.** The meeting starts late because the model was busy loading fields no slide uses. That is not analytics value. That is inventory you never sell.

## How to fix it: cut what never reaches a decision

1. **Inventory column usage for close-critical datasets.** Which columns hit visuals, measures, relationships, or sort/hierarchy roles? Everything else is a candidate to remove.

2. **Remove in Power Query early.** Do not import then hide. Hidden columns still refresh. Drop them at the source step when the business does not need them downstream.

3. **Prefer thin views upstream.** Ask for a curated extract or warehouse view for analytics. "Select star" is a temporary bridge, not an architecture.

4. **Attack high-cardinality text first.** Notes and long strings are frequent villains. Keep them in a separate detail path if someone truly drills—or leave them out of the certified model.

5. **Re-measure refresh after each cut.** Prove gateway minutes and VertiPaq size. Cleanup without a before/after becomes a debate instead of a win.

6. **Put bloat on the model health checklist.** Size trend and unused-column count belong next to relationship risk before month-end.

7. **Set a promotion rule.** No certification if unused-column share is unknown. [Wild west rules](/blog/certified-datasets-vs-wild-west) need a thinness bar, not only a badge.

8. **Name an owner for model diet.** Cleanup is work. Without a steward, "later" never ships. Same ownership lesson as [who can change a measure](/blog/who-can-change-a-measure).

9. **Separate archive from operational models.** Historical curiosity fields can live in a secondary dataset. The flash model stays lean.

10. **Revisit quarterly.** New tickets add columns. Schedule a diet pass. Continuous import without continuous removal is how debt returns.

## What good looks like

The flash dataset refreshes inside the window with margin to spare. Column inventory is short enough to review in a meeting. Analysts who need obscure ERP attributes use a governed secondary source—not the executive model.

People still ask for "one more field." They get a yes with a size cost, or a no with a reason. Silence is no longer the default.

A practical monthly rhythm helps. Week after close: list the top tables by size. Mid-month: cut unused columns on the worst offender and re-time refresh. Week before close: freeze width increases except P0 fields with a named approver. Dull work. Shorter mornings.

## Start with one overweight fact table

Pick the widest table behind revenue, inventory, or scrap. Export column usage. Cut twenty fields that never appear in visuals or measures. Refresh twice. Record minutes and size.

If nothing breaks in a week of real use, cut the next twenty. Stop when the model is explainable and inside the SLA. Then write the thinness rule into promotion.

Share the before/after with finance and ops sponsors. Minutes returned to the morning pack are easier to defend than abstract "model hygiene." Cleanup becomes a close improvement, not an analytics hobby.

Leaders should ask: "Which columns in our close model never reach a visual or measure—and why are we still refreshing them?" If nobody knows, you are paying a tax without a receipt.

## Executive takeaway

Unused columns do not sit quietly. They tax every refresh.

Wide ERP extracts left "just in case" inflate VertiPaq and gateway minutes. Model health means cutting what never reaches a visual or measure, owning the diet, and refusing to certify overweight mystery meat. Then morning packs arrive on time because the product stopped carrying dead weight.

Need a model-bloat and refresh-time pass on the datasets behind your flash? [Contact Alluvium](https://www.alluviumbi.com/contact). We will map unused columns, size drivers, and the cuts that give minutes back to the close.
