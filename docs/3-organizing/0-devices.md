---
title: Devices
description: Devices represent every real and simulated robot that your organization wants to track.
---

Devices represent every real and simulated robot that your organization wants to track.

When importing data into Foxglove, you can associate each data recording with the device that recorded it.

## Create device

Create a uniquely named device for every robot your organization wants to track.

|        |                                                           |
| ------ | --------------------------------------------------------- |
| In app | Create at [Devices](https://console.foxglove.dev/devices) |
| CLI    | `$ foxglove devices add --name "my device"`               |

## List devices

List your organization's devices.

|        |                                                              |
| ------ | ------------------------------------------------------------ |
| In app | View list at [Devices](https://console.foxglove.dev/devices) |
| CLI    | `$ foxglove devices list`                                    |

## Delete device

Delete a device created in your organization.

|        |                                                                  |
| ------ | ---------------------------------------------------------------- |
| In app | Select device at [Devices](https://console.foxglove.dev/devices) |
| CLI    | `$ foxglove devices delete --name "my device"`                   |

## Custom properties

Custom properties are predefined metadata fields that can be associated with a device. They are set by admins for their organization.

### Create custom property

Admins can go into the [Custom properties settings](https://console.foxglove.dev/settings/custom-properties) to create custom properties for their organization's devices.

Each custom property must include:

- **Key** – Unique identifier (e.g. `version`)
- **Value type** – Enforced type for the custom property's value (e.g. "Single-line text")

For example, an admin could create a custom device property called `version` that accepts numeric values. Any organization member can now add a `version` number to the team's robots to track their hardware versions.

### Set and edit custom property values

Once an admin has created a custom device property, any organization member can now go to any device page to set and edit custom property values (e.g. setting Device A's `version` to 65).

### Query devices by custom property

After assigning custom property values to various resources, go to [Devices](https://console.foxglove.dev/devices) to query by those values (e.g. devices with a `version` set to 65).
