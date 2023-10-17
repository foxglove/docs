---
title: Recordings
description: Recordings represent every data file recorded by your organization's devices.
---

Recordings represent every data file recorded by your organization's devices.

Import, delete, and search recordings from the [Recordings page](https://console.foxglove.dev/recordings):

![Recordings page](/img/docs/recordings/index.png)

Hover over each recording to visualize it using Foxglove [panels](../visualization/panels/introduction). Open the recording's "Actions" menu to delete it or to download it as an `.mcap` or `.bag` file:

![Recording actions](/img/docs/recordings/menu.png)

Select specific time ranges of data to download from the [Timeline page](https://console.foxglove.dev/timeline).

![Timeline page](/img/docs/recordings/timeline.png)

### Actions

|                            | Definition                                                                                           | CLI command                                                                                                                                                                               |
| -------------------------- | ---------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Import**                 | Import a data recording for a device in your organization                                            | `foxglove data import ~/data/bags/gps.bag --device-id dev_drpLqjBZYUzus3gv`                                                                                                               |
| **Delete**                 | Delete a data recording imported into your organization                                              | N/A                                                                                                                                                                                       |
| **Attach contextual data** | Import [MCAP](https://mcap.dev) files with [metadata records](https://mcap.dev/spec#metadata-op0x0c) | N/A                                                                                                                                                                                       |\
| **Attach auxiliary data**  | Import [MCAP](https://mcap.dev) files with [attachments](https://mcap.dev/spec#attachment-op0x09)    | N/A                                                                                                                                                                                       |
| **Download**               | Download a data recording as an [MCAP](https://mcap.dev) or ROS 1 `.bag` file                        | `$ foxglove data export --device-id dev_flm75pLkfzUBX2DH --start 2001-01-01T00:00:00Z --end 2022-01-01T00:00:00Z --output-format mcap0 --topics /gps/fix,/gps/fix_velocity > output.mcap` |
