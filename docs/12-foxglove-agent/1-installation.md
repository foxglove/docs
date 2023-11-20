---
title: Installation
description: Install and configure the Foxglove Agent.
---

import AccountRequiredHeader from "../../src/components/docs/icons/AccountRequiredHeader";

<AccountRequiredHeader badgeText="Requires Enterprise plan" />

Install and configure the Foxglove Agent.

### Prerequisites

The Foxglove Agent runs on debian-based Linux distributions. ARM64 and AMD64 architectures are supported. The agent requires HTTPS connectivity to `api.foxglove.dev`, but a stable connection is not required.

The agent expects recordings to be stored on a filesystem that supports `fsnotify`. The agent also requires a directory for storage of local state files.

### Create a device

The Foxglove Agent runs on your device.

Create a device [Devices page](https://console.foxglove.dev/devices), or select a device you have already created.

### Create a device token

This requires the `admin` role in Foxglove.

On the device details page, click the Device Tokens tab.

Click "Create new token". When you create the token, a secret token is generated and displayed only once. This will be supplied to the agent in configuration.

#### API

An admin may also create a device token using the Foxglove API.

Visit the [API key settings](https://console.foxglove.dev/settings/apikeys) and create an API key with the appropriate "deviceToken" capabilities (list, create, etc).

Use this key to create device tokens using the [device tokens API](/api#tag/Device-Tokens) <span class="Debug">(verify link once published)</span>.

### Download the device agent package

Download the latest `foxglove-agent` package for your architecture from the [releases page](https://github.com/foxglove/agent/releases) and install with dpkg, for example:

```sh
dpkg -i foxglove-agent-linux-amd64.deb
```

### Run the agent

Configure the `FOXGLOVE_DEVICE_TOKEN` setting in `/etc/foxglove/agent/envfile` with the secret token obtained above. Some additional configuration options such as your recording directory may also be set according to the instructions in that file.

When configuration is complete, restart the service and check its status with
`systemctl`.

```sh
systemctl restart foxglove-agent
systemctl status foxglove-agent
```

Consult the logs with `journalctl` for debugging.

```
journalctl -u foxglove-agent
```

### Next steps

To add recordings to your On-Device Agent, see [Manage Data](./2-manage-data).
