---
title: Installation
description: Install and configure a Foxglove On-Device Agent.
---

Install and configure a Foxglove On-Device Agent.

### Prerequisites

<p class="Debug">System requirements on-robot?</p>

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

Download the latest On-Device Agent binary <span class="Debug">{name?} from {?}</span>

### Run the agent

Copy the binary to your device, and run with the provided command-line arguments.

<p class="Debug">suggest some sort of process management tool here? init.d or whatever</p>

<p class="Debug">Note: code block below is TBD — what are the minimum set of flags?</p>

```sh
./foxglove-device-agent \
    --device-token ${DEVICE_TOKEN_SECRET} \
    --storage-root "./my-directory"
```

#### Upload Credentials

If you will be uploading recordings from your On-Device Agent to the Foxglove-hosted platform, you do not need to take additional steps.

If you want to upload recordings to a Primary Site that you manage, you will need to provide credentials to the binary.

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

### Confirm running

If misconfigured, the agent will log errors and exit with a nonzero status.

<p class="Debug">status will depend on how you launch...?</p>

<p class="Debug">Future: Can we have a step that confirms running? Maybe a check-in timestamp on device-info?</p>

### Next steps

To add recordings to your site, see [Manage Data](./manage-data).
