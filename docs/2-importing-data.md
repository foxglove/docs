---
title: Importing data
description: Import ROS 1 (.bag) and MCAP (.mcap) data files into the Foxglove platform for later visualization and analysis.
---

import ImportedDataDirections from "../src/components/docs/connecting-to-data/ImportedDataDirections";

Import [ROS 1](frameworks/ros1#imported-data) (`.bag`) and [MCAP](frameworks/mcap#imported-data) (`.mcap`) data files into the Foxglove platform for later visualization and analysis.

Check out the [MCAP docs](https://mcap.dev) for more information on [converting other data formats](/blog/importing-your-ros2-data-into-foxglove-data-platform) – like ROS 2, Protobuf, JSON, and more – into the MCAP file format.

## Getting started

Before importing data, you must create uniquely named devices for every real or simulated robot you want to track. This will allow your team members to add data recorded on these devices. All imported files must be associated with a corresponding device.

### Adding devices

Click "Add device" on the [Devices page](https://console.foxglove.dev/devices) to create your devices:

![add device](/img/docs/importing-data/add-device.webp)

### Import files

Click the "Import data" button on the [Recordings](https://console.foxglove.dev/recordings) or [Timeline](https://console.foxglove.dev/timeline) page:

![Recordings page](/img/docs/recordings/index.png)

Alternatively, you can click on one of your created devices on the [Devices page](https://console.foxglove.dev/devices) to go to its details page – from there, you can import data directly to that device.

Select the file you want to import, as well as the device you want to associate with the recording:

![import](/img/docs/importing-data/import.webp)

When importing [MCAP files](https://mcap.dev/) with metadata records or attachments, Foxglove will index and display them under the _Metadata_ and _Attachments_ tabs on the recording's details page:

![recording metadata](/img/docs/importing-data/recording-metadata.webp)

### View recordings

View imported data as a list on the [Recordings page](https://console.foxglove.dev/recordings), or as ranges on a timeline on the [Timeline page](https://console.foxglove.dev/timeline).

## Additional resources

- [Import ROS 2 data](/blog/importing-your-ros2-data-into-foxglove-data-platform)
