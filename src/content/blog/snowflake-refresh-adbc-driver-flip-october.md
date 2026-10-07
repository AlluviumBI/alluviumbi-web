---
title: "Your Snowflake Refresh Will Flip Drivers in October. Close Won't Wait."
description: "Microsoft plans a phased ADBC default for Snowflake in Power BI this October. Pilot the new driver before close week blanks the Monday pack."
pubDate: 2026-10-06
tags:
  - Power BI
  - Snowflake
  - Private Equity
  - Refresh
  - Close
draft: false
---

Monday's pack opens blank. Snowflake still has the rows. Power BI still shows the app. Something quiet changed under the connector.

Microsoft is moving Snowflake (and similar warehouse) connections from the old embedded ODBC driver onto a new Arrow driver called ADBC. In October 2026, Microsoft plans to begin enabling that new path as the tenant default in phases. Close will not wait for a surprise flip.

![Railroad tracks disappearing into thick fog with signal posts](/blog/snowflake-refresh-adbc-driver-flip-october-hero.svg)

## The driver can change without a dramatic ticket

Mid-market PE portfolio ops and finance teams that run Snowflake into Power BI for Monday packs rarely think about the connector's engine. They think about as-of time, row counts, and whether the operating partner sees yesterday or last Thursday.

Microsoft's Power Query docs are clear: Power BI is moving embedded ODBC drivers to ADBC for Snowflake and similar warehouses. The tenant setting is "Users can connect to data sources by using Apache Arrow database connectivity (ADBC)." Disabled keeps the old driver default; Enabled makes the new driver default. Workspace admins can override for testing. Per connection, explicit Implementation wins: "2.0" is the new driver; "1.0" is the old one.

Connections without a pin follow those defaults. When the default flips, refreshes move engines without a backlog ticket.

This sits next to [refresh failures as a close risk](/blog/refresh-failures-are-a-close-risk): a green schedule that lands wrong or late still burns the meeting. It also sits next to the [7am gateway surprise](/blog/gateway-refresh-7am-surprise), another quiet path change that shows up as missing Monday numbers.

Do not confuse this with [Snowflake is not a semantic model](/blog/snowflake-not-a-semantic-model). Warehouse storage is not the product. Trusted measures and a defendable as-of are. A driver flip is a different failure mode: the warehouse can be fine while the pack is not.

## How a quiet flip becomes a blank Monday pack

Unpinned Snowflake connections inherit whatever the tenant or workspace says. When Microsoft begins enabling the tenant setting by default in phases in October 2026 (planned), some tenants move first. Yours might be later. Close week does not care which phase you are in when it hits.

Cloud refreshes follow the tenant and workspace path. On-prem gateway refreshes stay on gateway-bundled ODBC today. That is a deferral, not forever. Microsoft plans to begin removing ODBC from the service in early Q1 2027 (planned, subject to readiness), and plans ODBC stop shipping with Desktop and the gateway in Spring 2027 (planned). Gateway buys time, not a permanent opt-out.

Desktop queries stay on the driver they were authored against until you re-create the source. Types, durations, and casts can differ even when row counts look close. "Refresh succeeded" is not "Monday pack trusted."

Microsoft's audit notebook inventories old-driver pins. It is a starting list, not a certificate. High-value packs still need side-by-side proof. If the PE firm just raised the reporting bar, a surprise flip in the first board cycle burns trust fast. See [The PE Firm Just Closed. Your Reporting Bar Just Moved.](/blog/pe-firm-closed-reporting-bar-moved).

## The costs of waiting for the default flip

1. **The Monday pack blanks or skews without a loud outage.** Leaders see empty tiles or wrong types. The room blames "Snowflake." The warehouse was fine. The path changed.

2. **Close week becomes an emergency pilot.** You validate under calendar pressure instead of on purpose. Fixes land after the operating review, not before.

3. **Trust leaves the product after one bad pack.** After one wrong flash, the operating partner asks for the Excel again. Adoption dies while the app count stays green.

4. **Gateway deferral creates a false sense of safety.** Cloud paths flip. Gateway paths lag. Two engines, one brand of "refresh." Nobody owns the difference until it bites.

5. **Unpinned connections become a lottery.** Some workspaces override. Some do not. Side-by-side packs disagree for reasons nobody documented.

6. **Desktop and Service diverge.** Authors refresh on one driver. The Service runs another. Classic "works on my machine" with a warehouse twist.

7. **Duration shifts without a capacity story.** The new driver may be faster or slower on your shape. If you never timed it, Monday is your load test.

8. **The hold-period clock keeps ticking.** Hoping the flip "just works" is avoidable close risk under ownership that expects a stable pack.

## How to fix it: pilot the new path before close week

1. **Inventory Snowflake connections that feed the Monday pack.** Note which are unpinned, which pin the old driver, and which already pin the new one. Microsoft's audit notebook helps find pins. Your close calendar names which items matter.

2. **Stand up a pilot workspace override.** Enable the new driver default in one workspace. Keep production on the current default until you prove the pack.

3. **Validate on a cloud path, not only through the gateway.** Gateway-bundled ODBC will not show you the new engine. If Monday runs in the cloud, test in the cloud.

4. **Prove three things: row counts, column types, refresh duration.** Compare against the old-driver baseline on the same as-of. Write the numbers down. "Looks fine" is not a sign-off.

5. **Opt in per connection for critical datasets.** Set Implementation to the new driver on the close pack first. Explicit pins beat hoping the tenant flip is gentle.

6. **Re-create Desktop queries when you need a true new-driver test.** Delete and re-add the source if the file still binds the old path. Then refresh and compare.

7. **Name an owner for the tenant decision.** Who enables the org default, and when relative to close? Silence is how October becomes a surprise.

8. **Treat gateway as a dated deferral.** If you stay on gateway ODBC for a timing reason, put new-driver validation on the roadmap with a date. Spring 2027 plans are not theoretical forever.

9. **Put driver path on the close checklist.** Next to credentials and gateway health. Same seriousness as [refresh failures as close risk](/blog/refresh-failures-are-a-close-risk).

10. **Decide the tenant default after the pilot, not during close week.** Enable when the pack proves out. Document the pin policy for new Snowflake connections so the next model does not inherit lottery behavior.

## What good looks like

The Monday pack refreshes on the new driver with matching row counts and types. Duration is known. The tenant default is a deliberate flip after proof, not a phased surprise.

Unpinned connections are rare on close-critical datasets. New Snowflake sources get an explicit Implementation and a named owner.

Sponsors see a one-page before/after: counts, types, minutes. Not "Microsoft changed something" mid-meeting.

## A practical sequence before October's phased default

Week one: inventory Snowflake models behind the pack. Mark pins and cloud vs gateway.

Week two: pilot the new driver. Side-by-side on one real as-of. Capture mismatches.

Week three: fix casts and duration. Re-time. Get finance sign-off.

Week four: pin critical connections, schedule the tenant decision off close week, write the rule for new sources.

Dull sequence. Fewer blank Mondays.

Leaders should ask: "Which Snowflake connections feeding Monday are still unpinned, and who owns the driver default before the phased flip?" If nobody knows, you are volunteering for a quiet outage.

## Executive takeaway

Your Snowflake refresh will flip drivers in October. Close will not wait.

Microsoft plans to begin enabling the new Arrow driver as the tenant default in phases. A quiet warehouse-driver change can blank or skew the Monday pack before anyone files a ticket. Pilot the new path on purpose. Prove row counts, types, and duration. Then decide the tenant default before close week, not during it.

Need a close-safe path from Snowflake into a trusted Monday pack? [See Acquisition Performance Visibility](https://www.alluviumbi.com/acquisition-performance-visibility). Or [contact Alluvium](https://www.alluviumbi.com/contact) to map driver pins, pilot workspace, and the refresh SLA behind your operating review.
