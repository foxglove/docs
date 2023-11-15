---
title: Introduction
description: An On-Device Agent is a Foxglove process that runs on your robot. It's designed to monitor the robot's filesystem for logs and notify the Foxglove control plane when recordings are available for import. As with a Edge Site, you control which recordings are imported and when by selecting them for import.
---

import AccountRequiredHeader from "../../src/components/docs/icons/AccountRequiredHeader";

<AccountRequiredHeader badgeText="Requires Enterprise plan" />

An On-Device Agent is a Foxglove process that runs on your robot. It's designed to monitor the robot's filesystem for logs and notify the Foxglove control plane when recordings are available for import. As with a Edge Site, you control which recordings are imported and when by selecting them for import.

Your [Devices page](https://console.foxglove.dev/devices) lists the robots in your organization. Each device may or may not have an agent running. To set up an On-Device Agent, you'll create a Device Token for authorization, and install a single binary on your robot. You are responsible for the monitoring and lifecycle of the agent process.