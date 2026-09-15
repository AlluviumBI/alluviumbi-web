---
title: "The Gateway Patch That Quietly Missed the Pack"
description: "A gateway patch or reboot in the close window blanks the pack without a loud outage. Put change control on the close calendar."
pubDate: 2026-09-15
tags:
  - Power BI
  - Gateway
  - Close Risk
  - Change Control
draft: false
---

IT patched the gateway host Tuesday night. Standard maintenance. The VM came back. Services looked fine.

Wednesday morning the exec pack was empty. Or it was Tuesday's data. The refresh failed while the box sat in reboot. Nobody in finance was on the change ticket.

That is not bad luck. That is a patch window that ignored the close calendar.

![Black-and-white mountain peaks above a sea of clouds at sunrise](/blog/gateway-patch-quietly-missed-the-pack-hero.jpg)

## Patch windows are close windows

On-prem gateways sit on Windows hosts that get updates, antivirus scans, and reboots. Mid-market IT runs those on a schedule that makes sense for servers. Finance closes on a schedule that makes sense for the books. When those calendars do not talk, the pack loses.

This is different from [credentials that expire](/blog/gateway-credentials-expire-close-calendar) and from [an unmonitored gateway](/blog/on-prem-gateway-close-risk-you-dont-monitor). Credentials fail loudly in the refresh history. An unmonitored box fails for lack of HA. A patch fails because someone chose a night that looked quiet for infrastructure and was loud for the close.

[Gateway refresh at 7 a.m.](/blog/gateway-refresh-7am-surprise) is often the morning after a silent change. The surprise is scheduled. You just did not put it on the close calendar.

## The costs of patching through close

1. **The pack misses without a dramatic ticket.** Refresh fails or runs late. Controllers chase. The flash goes out on last good data. The root cause is a reboot nobody in finance approved.

2. **Clustered HA does not help if both nodes patch together.** A pair patched in the same window is one failure with two names. Stagger and prove failover before close week.

3. **Antivirus and disk scans look like capacity death.** The gateway process starves. Refreshes time out. The service blames the dataset. The host was busy scanning.

4. **Drivers and gateway updates change behavior.** A "routine" upgrade alters how a source authenticates. Tuesday worked. Wednesday needs a reconfigure. Close does not wait for a reconfigure.

5. **Plant stand-ups and finance flash share the same path.** One patch blanks both. Ops and finance escalate separately. IT sees two tickets for one change.

6. **Postmortems blame Power BI.** Leadership hears "the dashboard failed." The true story is change control. The wrong narrative funds the wrong fix.

7. **People invent local extracts for close week.** Fear of the next patch creates shadow Excel. The gateway becomes optional. The certified model loses the only week that mattered.

8. **You cannot prove readiness without a pre-close drill.** If the first reboot test is month-end, you are using the books as a lab.

## How to fix it: change control on the close calendar

1. **Freeze gateway host changes in the close window.** Define the freeze: last three business days through flash plus one. Emergency only, with finance on the bridge.

2. **Require a finance-aware change ticket.** Patch, reboot, gateway upgrade, TLS change — same list. Approver includes the close owner, not only IT.

3. **Stagger HA nodes.** Patch one. Fail over. Prove refresh. Then the other. Same-night dual patch is a single point of failure with extra steps.

4. **Run a refresh smoke test after every host change.** Not "VM is up." A named dataset refresh against a close-critical source. Pass/fail before the ticket closes.

5. **Put gateway versions and host patch level on the close checklist.** Alongside credentials and capacity. If you do not know the version on Monday of close week, you are guessing.

6. **Schedule antivirus and heavy scans outside refresh hours.** Or exclude the gateway working directories with a documented exception. Quiet scans during the overnight pack are not quiet for the business.

7. **Alert on gateway service stop and host reboot.** Page someone before 7 a.m. A reboot at 1 a.m. should not be discovered by a blank tile.

8. **Drill once before close week.** Intentionally fail over or reboot a non-prod twin. Time the recovery. If recovery is longer than the refresh SLA, fix that before you touch Prod.

9. **Say the risk in language finance uses.** "We will reboot the path to the GL extract Tuesday night." Not "standard CU patch on VM42." Shared language is how calendars align.

## Close week, written as infrastructure language

Translate the freeze into host terms IT already uses: no CU install, no forced reboot, no gateway upgrade, no cluster-wide failover test, no full disk scan on the gateway volume. Exceptions need a severity label and a named finance approver.

When the change board speaks that language, the pack stops losing to "routine maintenance."


## What good looks like

Close week has a freeze. Patches wait. If a security emergency forces a change, finance is on the call, HA is staggered, and a smoke refresh passes before anyone sleeps.

The morning pack is either current or the room already knows why it is not. Surprise is gone.

## Credentials, monitoring, and patches are three controls

Do not collapse them. Credential rotation belongs on the close calendar. Monitoring catches silent death. Patch freezes stop planned reboots from stealing the flash.

Teams that fix only monitoring still lose close week to a CU install. Teams that freeze patches but never rotate secrets lose close week to an expired password. Teams that do both and skip HA still lose when the single host dies. Build all three, or admit which risk you are accepting in writing.

## Vendor maintenance windows

Cloud connectors and on-prem sources have their own patch nights. If ERP downtime overlaps gateway reboot, you get a compound miss. Ask source owners for their freeze calendar. Put it next to yours. The pack only needs one shared "do not touch" map for the last days of the period.

When a vendor forces an emergency change, the same rule applies: finance on the bridge, smoke refresh after, flash delay communicated early. Early bad news beats a blank tile at 7 a.m.


## Document the exception path

Emergencies happen. Write the exception before you need it: who can break the freeze, who must be notified, what smoke test is mandatory, and how the flash delay is communicated if the smoke test fails.

An unwritten exception path becomes an argument at 2 a.m. A written one becomes a five-minute call. Close week is not the time to invent process.


## Executive takeaway

A gateway patch that quietly misses the pack is a calendar collision. Infrastructure quiet is not close quiet.

Freeze the host in the close window. Approve changes with finance. Smoke-test refresh after every reboot. Then maintenance stops stealing the flash.

Need a 30-minute look at whether your gateway change calendar can hit the pack? [Contact Alluvium](https://www.alluviumbi.com/contact). We'll map patch windows, HA, and the smoke test that should follow every host change.
