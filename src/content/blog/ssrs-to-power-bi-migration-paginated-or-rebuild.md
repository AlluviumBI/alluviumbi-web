---
title: "SSRS to Power BI Migration: Which Reports Stay Paginated and Which Get Rebuilt"
description: "An SSRS to Power BI migration fails when every RDL is copied. Keep print reports paginated and rebuild weekly ops on a semantic model."
pubDate: 2026-10-20
tags:
  - Power BI
  - Migration
  - SSRS
  - Paginated Reports
draft: false
---

The plant grew up on SQL Server Reporting Services. Hundreds of RDL reports sit against the ERP database. Pick lists, invoices, and customer statements print every day. Weekly ops and margin packs get exported to Excel because nobody can explore them in the report viewer. Leadership wants Power BI. The first plan on the whiteboard is usually wrong: migrate every report as-is and call it done.

That plan copies the SQL and the confusion. An SSRS to Power BI migration works when you split the library first. Some reports stay paginated because they need to print. Others get rebuilt on a semantic model because people need to explore them. The rest get retired.

![A wooded trail forking into two paths under a dense canopy](/blog/ssrs-to-power-bi-migration-paginated-or-rebuild-hero.svg)

## What an SSRS to Power BI migration actually moves

Microsoft's guidance is clear on the packaging, and it is worth reading before anyone invents a tool plan. In Power BI, .rdl reports are called paginated reports. Supported SSRS versions for migration run from 2012 through 2022, and Power BI Report Server reports can move as well. For Power BI Report Server and SSRS after SQL Server 2016, including 2022, there is a built-in Publish tool into the Power BI service. For earlier SSRS versions, Microsoft publishes an RDL Migration Tool on GitHub. That tool converts shared data sources and datasets to embedded ones, checks unsupported features, and publishes passing reports as paginated reports to a workspace. It does not remove the reports that already exist on the server.

What does not migrate as-is includes shared data sources and datasets (the tool embeds them), image resources, KPIs, mobile reports, report models, and report parts. Reports that reference custom code DLL files are not supported. Map visualizations against an on-premises SQL Server need SQL Server spatial data types, and the gateway does not support those. Paginated reports are built for print and PDF. Interactive Power BI reports are built for exploration. Microsoft lays that out in [its plan to migrate .rdl reports to Power BI](https://learn.microsoft.com/en-us/power-bi/guidance/migrate-ssrs-reports-to-power-bi). None of that tells you which reports deserve which treatment. That decision is the migration.

## Three piles: paginated, rebuild, retire

Sort the RDL library before anyone hits Publish. Every report lands in one of three piles, and each pile has a different job.

1. **Stay paginated.** Pick lists, invoices, packing slips, customer statements, remittance advice, and any form that must land on paper or PDF with fixed page breaks stay as paginated reports. They need pixel control, not slicers. Move them with the Publish tool or the RDL Migration Tool, and fix what the checks flag before you schedule the next batch.
2. **Rebuild on a semantic model.** Weekly ops packs, margin by plant, scrap and yield, on-time delivery, and anything people currently export so they can filter and re-total belong in interactive Power BI reports on one model. Copying the RDL keeps the same SQL buried in fifty report definitions. Rebuilding once retires that duplication.
3. **Retire.** Unused reports, near duplicates, and packs that only one person opens on Friday do not deserve a migration slot. Find them by usage, not by anxiety. The article on [how to retire a dashboard](/blog/how-to-retire-a-dashboard) applies to RDL libraries the same way it applies to abandoned Power BI apps.

The mistake is treating every report like interactive Power BI. The other mistake is treating every report like paginated. Plants need both, and fewer of each than the folder count suggests.

## How to decide without a six-month inventory project

You do not need a perfect catalog. You need a rule the plant and finance will accept.

1. **Ask what the report is for on its worst day.** If the answer is "print this and put it on the dock" or "PDF this to the customer," it stays paginated. If the answer is "we export it so we can filter by plant and week," it gets rebuilt.
2. **Count the SQL copies.** When five RDLs each embed a near-identical query against the same order and inventory tables, that is a semantic model waiting to happen. One model, five thin reports, and the duplicate SQL goes away.
3. **Watch the Excel export.** Heavy export traffic is a signal the RDL is the wrong shape. People are rebuilding the analysis outside the tool. That is the same pattern we see when [a move from another BI tool is really a rebuild](/blog/tableau-to-power-bi-is-a-rebuild), and it shows up in SSRS shops just as often.
4. **Do not migrate every dashboard by default.** Some packs exist because the folder grew. [Don't migrate every dashboard](/blog/dont-migrate-every-dashboard) is still the right advice when the RDL count is in the hundreds.
5. **Pilot one print family and one ops family.** Move invoices or statements as paginated. Rebuild one weekly ops pack on a model with shared date, item, customer, and plant keys. Prove both paths before you schedule the rest of the library.

## What the rebuild has to finish

Moving a print report is mostly packaging. Rebuilding an ops report is modeling.

1. **Shared keys first.** Date, item, customer, vendor, plant, and entity mean the same thing in every measure. If each RDL defined scrap differently, the model forces one definition with an owner.
2. **Measures with plain names.** Margin, yield, on-time, and backlog get names a plant manager would use. Hide raw columns so nobody builds a second version.
3. **Retire the embedded SQL.** Once the interactive report is signed off, deprecate the old RDL. Leaving both live doubles support and starts a fight about which number is right.
4. **Keep paginated for the paper trail.** Shipping docs and statements can stay paginated when the ops pack moves. The migration is a split, not a purge of every .rdl.

For the wider path into Power BI from SSRS, another BI tool, Excel-as-BI, or a homegrown stack, the [Power BI migration](https://www.alluviumbi.com/power-bi-migration) landing is the overview. The split above is what most SSRS plants skip.

## Executive takeaway

An SSRS to Power BI migration works when print and PDF reports stay paginated, weekly ops and margin packs get rebuilt on a semantic model, and unused RDLs get retired instead of copied. Use Microsoft's Publish tool or RDL Migration Tool for the paginated path, and spend the real effort on the model that kills duplicate SQL.

If your plant is staring at hundreds of RDLs and a blank migration plan, [Book a Session](https://www.alluviumbi.com/contact).

*Photo: Two roads diverged in a wood by Tim Green, [CC BY 2.0](https://creativecommons.org/licenses/by/2.0), via Wikimedia Commons. Converted to black and white.*
