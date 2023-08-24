---
title: Introduction
description: With Foxglove, you can connect to a live data source for real-time visualization. You can also load local and Foxglove-imported data files for playback.
---

With Foxglove, you can connect to a live data source for real-time visualization. You can also load local and Foxglove-imported data files for playback.

|               | Details                                                                                                        | Supported formats                                        |
| ------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| **Sample data**   | Load [sample data adapted from nuScenes](https://www.nuscenes.org/nuscenes) in an example layout (remote file) | N/A                                                      |
| [**Live data**](/docs/connecting-to-data/live-data)     | Inspect real-time data coming in from a live robotics stack or a remote source (e.g. S3 bucket)                | <ul><li>[ROS 1](TBD)</li><li>[ROS 2](TBD)</li><li>[Custom](TBD)</li><li>[MCAP](https://mcap.dev)</li><li>Velodyne</li></ul> |
| [**Local data**](/docs/connecting-to-data/local-data)    | Inspect data stored locally on your computer                                                                   | <ul><li>[ROS 1](TBD)</li><li>[MCAP](https://mcap.dev)</li><li>PX4 ULog</li></ul>                          |
| [**Imported data**](/docs/connecting-to-data/imported-data) | Inspect data imported to the Foxglove platform                                                                 | <ul><li>[ROS 1](TBD)</li><li>[MCAP](https://mcap.dev)</li></ul>                          |


### Getting started

When you first open the [visualization interface](https://studio.foxglove.dev), you will see an "Open data source" dialog:

![Data source dialog](/img/docs/connecting-to-data/dialog.png)

Once you've connected to a data source, Foxglove will display its topics (with schema names, message count, publish rates) in the sidebar:

<img alt="sidebar" src="/img/docs/connecting-to-data/sidebar.png" width="300"/>
