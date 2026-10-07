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

The extract includes every ERP column "just in case." There are two hundred fields. Twelve reach a visual and eight feed measures. The rest sit in VertiPaq and ride along on every refresh.

They do not sit quietly. They tax gateway minutes, capacity, and the patience of everyone waiting on the morning pack. Model health means cutting the columns that never earn their keep.

![Black-and-white factory worker under a suspended turbine rotor](/blog/unused-columns-tax-every-refresh-hero.svg)

## Bloat is a close tax, not a free option

Mid-market manufacturers pull wide tables because mapping feels slower than importing everything. Someone might need the field later. Later rarely comes, so the column stays and refresh grows. Desktop still feels snappy on a filtered sample while the Service pays full freight, which is the classic [Desktop fast, Service slow](/blog/power-bi-desktop-fast-service-slow) gap.

Hidden columns feel harmless, but they still compress, refresh, and travel through the gateway. Hiding is not deleting. Removal is.

If [the semantic model is the product](/blog/semantic-model-is-the-product), size and shape are product attributes. You would not ship unused parts in every unit "just in case." Do not ship unused columns through the gateway every night.

This sits next to [refresh failures as close risk](/blog/refresh-failures-are-a-close-risk). Long refreshes miss windows, and bloat is how green schedules still arrive late.

## How unused columns accumulate

ERP and MES extracts land as "select star" views or flat files. Power Query keeps the width and the model inherits it.

High-cardinality text such as notes, long descriptions, and free-form reason codes never appears in a visual but dominates memory.

Surrogate keys and audit columns get imported twice through related tables. Relationships need keys. They do not need every staging leftover.

Deprecated attributes stay for "one old report." The report retired and the column did not.

Incremental refresh helps with row count, but it does not forgive a fat row. Wide history still hurts.

"We might need it for ad hoc" becomes policy, even though ad hoc work happens in Excel exports anyway. The certified model keeps paying the tax for hypothetical slicers.

Duplicate label columns, such as code, description, and long description, all get imported. Visuals use one and VertiPaq stores three.

## The costs of polite bloat

1. **Gateway and capacity burn on dead weight.** Minutes disappear into columns nobody queries and close windows shrink. Someone blames the network when the model is often just overweight.

2. **Refresh slips without a dramatic failure.** The job finishes after the stand-up has started, so leaders see yesterday. Trust erodes the same way it does after an outright failure.

3. **Developers optimize the wrong layer.** Teams add aggregations or Premium SKUs before removing unused fields. The fix is expensive and the root cause remains.

4. **Model health scores rot.** Relationship and DAX issues hide behind size noise. Or size is the issue and nobody treats it as ownership work.

5. **Exploration models become production.** A wide sandbox gets certified because the visuals look good. [Certification without fitness](/blog/certified-datasets-vs-wild-west) endorses the tax.

6. **Security and privacy exposure grows.** Extra columns mean extra fields in exports and more chances for accidental exposure. Governance debt rides along with performance debt.

7. **Change impact balloons.** Every source change touches more columns and testing slows. Teams fear cleanup because the model feels fragile.

8. **Finance waits on plumbing.** The meeting starts late because the model was busy loading fields no slide uses. That is not analytics value. It is inventory you never sell.

## How to fix it: cut what never reaches a decision

1. **Inventory column usage for close-critical datasets.** Find which columns feed visuals, measures, relationships, or sort and hierarchy roles. Everything else is a candidate for removal.

2. **Remove columns early in Power Query.** Do not import and then hide, because hidden columns still refresh. Drop them at the source step when nothing downstream needs them.

3. **Prefer thin views upstream.** Ask for a curated extract or warehouse view for analytics. "Select star" is a temporary bridge, not an architecture.

4. **Go after high-cardinality text first.** Notes and long strings are frequent villains. Keep them on a separate detail path if someone truly drills into them, or leave them out of the certified model.

5. **Re-measure refresh after each cut.** Prove the change in gateway minutes and VertiPaq size. Cleanup without before-and-after numbers becomes a debate instead of a win.

6. **Put bloat on the model health checklist.** Size trend and unused-column count belong next to relationship risk before month-end.

7. **Set a promotion rule.** No certification if the share of unused columns is unknown. [Wild west rules](/blog/certified-datasets-vs-wild-west) need a thinness bar, not only a badge.

8. **Name an owner for the model diet.** Cleanup is work, and without a steward "later" never ships. It is the same ownership lesson as [who can change a measure](/blog/who-can-change-a-measure).

9. **Separate archive from operational models.** Fields kept for historical curiosity can live in a secondary dataset so the flash model stays lean.

10. **Revisit quarterly.** New tickets add columns, so schedule a diet pass. Continuous import without continuous removal is how the debt returns.

## What good looks like

The flash dataset refreshes inside the window with margin to spare. The column inventory is short enough to review in a meeting. Analysts who need obscure ERP attributes use a governed secondary source, not the executive model.

People still ask for "one more field." They get a yes with a size cost, or a no with a reason. Silence is no longer the default.

A monthly rhythm helps. The week after close, list the top tables by size. Mid-month, cut unused columns on the worst offender and re-time the refresh. The week before close, freeze width increases except for priority fields with a named approver. It is dull work that buys shorter mornings.

## Start with one overweight fact table

Pick the widest table behind revenue, inventory, or scrap. Export column usage and cut twenty fields that never appear in visuals or measures. Refresh twice and record the minutes and size.

If nothing breaks in a week of real use, cut the next twenty. Stop when the model is explainable and inside the SLA, then write the thinness rule into promotion.

Share the before-and-after numbers with finance and ops sponsors. Minutes returned to the morning pack are easier to defend than abstract "model hygiene," and cleanup becomes a close improvement instead of an analytics hobby.

Leaders should ask: "Which columns in our close model never reach a visual or measure, and why are we still refreshing them?" If nobody knows, you are paying a tax without a receipt.

## Executive takeaway

Unused columns do not sit quietly. They tax every refresh. Cut what never reaches a visual or measure, own the diet, and refuse to certify overweight mystery meat. Then the morning pack arrives on time because the product stopped carrying dead weight.

Want a model-bloat and refresh-time review of the datasets behind your flash? Start with a [free Model Health check](/power-bi-model-health), or [book a session with Alluvium](/contact). We will map unused columns, size drivers, and the cuts that give minutes back to the close.
