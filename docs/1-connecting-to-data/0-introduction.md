---
title: Introduction
description: Foxglove can connect to a live data connection for real-time visualization, or load local and Foxglove-imported data files for visualization playback.
---

Foxglove can connect to a live data connection for real-time visualization, or load local and Foxglove-imported data files for visualization playback.

|               | Details                                                                                                        | Supported formats                      |
| ------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| Sample data   | Load [sample data adapted from nuScenes](https://www.nuscenes.org/nuscenes) in an example layout (remote file) | N/A                                    |
| Live data     | Inspect real-time data coming in from a live robotics stack or a remote source (e.g. S3 bucket)                | ROS 1, ROS 2, [MCAP](https://mcap.dev) |
| Local data    | Inspect data stored locally on your computer                                                                   | ROS 1, [MCAP](https://mcap.dev)        |
| Imported data | Inspect data imported to the Foxglove platform                                                                 | ROS 1, [MCAP](https://mcap.dev)        |


### Getting started

When you first open the [visualization interface](https://studio.foxglove.dev), you will see an "Open data source" dialog:

![Data source dialog](/img/docs/connecting-to-data/dialog.png)

Once you've connected to a data source, Foxglove will display its topics (with schema names, message count, publish rates) in the sidebar:

<img alt="sidebar" src="/img/docs/connecting-to-data/sidebar.png" width="300"/>
