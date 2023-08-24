---
title: Introduction
description: Foxglove can connect to a live data connection for real-time visualization, or load local and Foxglove-imported data files for visualization playback.
---

Foxglove can connect to a live data connection for real-time visualization, or load local and Foxglove-imported data files for visualization playback.

## Data sources

|               | Details                                                                                                        | Supported formats                      |
| ------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| Sample data   | Load [sample data adapted from nuScenes](https://www.nuscenes.org/nuscenes) in an example layout (remote file) | N/A                                    |
| Live data     | Inspect real-time data coming in from a live robotics stack or a remote source (e.g. S3 bucket)                | ROS 1, ROS 2, [MCAP](https://mcap.dev) |
| Local data    | Inspect data stored locally on your computer                                                                   | ROS 1, [MCAP](https://mcap.dev)        |
| Imported data | Inspect data imported to the Foxglove platform                                                                 | ROS 1, [MCAP](https://mcap.dev)        |

## Connect to a data source

When you first open the [visualization interface](https://studio.foxglove.dev), you will see an introductory "Open data source" dialog:

![Data source dialog](/img/docs/studio/getting-started/dialog.webp)

Once connected, Foxglove will display information about the data source in the sidebar (e.g. start time, end time, list of topics).
