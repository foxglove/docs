---
title: Installation
description: Install and configure the Foxglove Agent.
---

import AccountRequiredHeader from "../../src/components/docs/icons/AccountRequiredHeader";

<AccountRequiredHeader badgeText="Requires Enterprise plan" />

Install and configure the Foxglove Agent.

### Prerequisites

- Debian-based Linux distribution (ARM64 and AMD64 architectures supported)
- HTTPS connectivity to `api.foxglove.dev` (stable connection not required)
- The filesystem hosting your recordings storage directory must support `fsnotify`
- Directory for storing local state files

### Create a device and device token

Create a device from the [Devices page](https://console.foxglove.dev/devices), or select one that you've already created.

An admin for your Foxglove organization can then go to that device's details page, navigate to the "Device Tokens" tab, and generate a secret token. This token will be displayed only once, and is required for agent configuration.

An admin can also create a device token via the Foxglove API. On the [API key settings page](https://console.foxglove.dev/settings/apikeys), create an API key with the appropriate `deviceToken` capabilities (list, create, etc), and use it to create device tokens via the [device tokens API endpoint](/api#tag/Device-Tokens).

### Download and upgrade the Foxglove Agent package

Download the latest `foxglove-agent` package for your architecture from the [releases page](https://github.com/foxglove/agent/releases). Install with `dpkg`:

```sh
$ dpkg -i foxglove-agent_1.0.0_amd64.deb
```

To upgrade the package, check the releases page for newer release versions to download.

### Run the Foxglove Agent

Configure the `FOXGLOVE_DEVICE_TOKEN` setting in `/etc/foxglove/agent/envfile` with the secret device token generated above. Set additional configuration options, such as your recording directory, according to instructions in that file.

Then, restart the service and check its status with `systemctl`:

```sh
$ systemctl restart foxglove-agent
$ systemctl status foxglove-agent
```

Consult the logs with `journalctl` for debugging:

```
$ journalctl -u foxglove-agent
```
