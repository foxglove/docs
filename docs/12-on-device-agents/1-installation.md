---
title: Installation
description: Install and configure a Foxglove On-Device Agent.
---

Install and configure a Foxglove On-Device Agent.

### Prerequisites

The On-Device Agent runs in Linux on AMD64 or ARM64 systems. The agent is designed to run with minimal memory usage and does not impose hard requirements.

The agent must have an internet connection which is able to reach https://api.foxglove.dev, at least intermittently.

For _watch mode_, the agent requires a filesystem that supports `fsnotify`. See [Manage Data](./manage-data) for more information on watch mode and its alternative.

### Create a device

Create a device [Devices page](https://console.foxglove.dev/devices), or select a device you have already created.

### Create a device token

This requires the `admin` role.

On the device details page, click the Device Tokens tab.

Click "Create new token". When you create the token, a secret key is generated and displayed only once. Copy this secret, which you'll need to provide when running the binary on your robot.

#### API

You may also create a device token using the Foxglove API.

In Console, visit the [API keys settings](https://console.foxglove.dev/settings/apikeys) and create an API key with the appropriate "deviceToken" capabilities (list, create, etc).

Use this key to create device tokens using the [device token API endpoints](/api#tag/Device-Tokens) <span class="Debug">(verify link once published)</span>.

### Download the device agent binary

Download the latest On-Device Agent binary <span class="Debug">{name?} from {github repo releases/latest - TBD}</span>

```sh
curl https://example.com
```

<span class="Debug">command tbd</span>

### Run the agent

Copy the binary to your device, and run with the provided command-line arguments.

<p class="Debug">[todo] wyatt to create a systemd file</p>

```sh
./foxglove-device-agent \
    --device-token ${DEVICE_TOKEN_SECRET} \
    --storage-root "./my-directory"
```

<p class="Debug">[todo] wyatt to confirm minimal set of flags</p>

Additional flags may be supplied as documented in this section. <span class="Debug">list the relevant ones here?</span>

Configuration may also be supplied by environment variables (e.g. `STORAGE_ROOT='./my-directory'`).

#### Upload Credentials

If you will be uploading recordings from your On-Device Agent to the Foxglove-hosted platform, you do not need to take additional steps.

<p class="Debug">TBD if self-managed is supported (FG-5761)</p>

If you want to upload recordings to a Primary Site that you manage, you will need to provide credentials to the binary.

<!--
##### Google Cloud Platform

<p class="Debug">TBD</p>

```sh

```

##### AWS

<p class="Debug">TBD</p>

```sh

```

##### Azure

```sh
  --azure-storage-account-name
  --azure-storage-service-url
```
-->

### Confirm running

If misconfigured, the agent will log errors and exit with a nonzero status.

For systemd, `sysctl status` will report that the agent is running.

### Next steps

To add recordings to your On-Device Agent, see [Manage Data](./manage-data).
