---
title: Importing data
description: Import ROS 1 (.bag) and MCAP (.mcap) data files into the Foxglove platform for later visualization and analysis.
---

Import [ROS 1](/docs/connecting-to-data/frameworks/ros1#imported-data) (`.bag`) and [MCAP](/docs/connecting-to-data/frameworks/mcap#imported-data) (`.mcap`) data files into the Foxglove platform for later visualization and analysis.

Check out the [MCAP docs](https://mcap.dev) for more information on [converting other data formats](https://foxglove.dev/blog/importing-your-ros2-data-into-foxglove-data-platform) – like ROS 2, Protobuf, JSON, and more – into the MCAP file format.

### (Optional) Add devices

To organize files by the robot they were recorded on, create uniquely named devices for every real or simulated robot you want to track. Files do not have to be associated with a device to import them.

Click "Add device" on the [Devices page](https://app.foxglove.dev/~/devices) to create your devices:

![add device](/img/docs/importing-data/add-device.webp)

### Import files

Import data from the [Recordings](https://app.foxglove.dev/~/recordings) or [Timeline](https://app.foxglove.dev/~/timeline) page:

![Recordings page](/img/docs/recordings/index.png)

Alternatively, you can click on one of your created devices on the [Devices page](https://app.foxglove.dev/~/devices) to go to its details page – from there, you can import data directly to that device.

Select the file you want to import, and the device you want to associate with the recording if desired:

![import](/img/docs/importing-data/import.webp)

When importing [MCAP files](https://mcap.dev/) with metadata records or attachments, Foxglove will index and display them under the _Metadata_ and _Attachments_ tabs on the recording's details page:

![recording metadata](/img/docs/importing-data/recording-metadata.webp)

### View recordings

View imported data as a list on the [Recordings page](https://app.foxglove.dev/~/recordings), or as ranges on a timeline on the [Timeline page](https://app.foxglove.dev/~/timeline).

## Links and resources

- [Import ROS 2 data](https://foxglove.dev/blog/importing-your-ros2-data-into-foxglove-data-platform)
