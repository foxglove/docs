---
title: Introduction
description: Connect to a live data source for real-time visualization. You can also load local and Foxglove-imported data files for playback.
---

Clicking "Visualize" from the [Foxglove dashboard](https://app.foxglove.dev/~/dashboard) will take you to an "Open data source" dialog.

![Data source dialog](/img/docs/connecting-to-data/dialog.png)

### Data sources

Connect to a [live data source](/docs/connecting-to-data/live-data) or load [local](/docs/connecting-to-data/local-data) and [Foxglove-imported](/docs/connecting-to-data/imported-data) files to visualize their data.

|                                                                                         | Use case                                                                                        | Supported formats                                                                                                                                                                                                                                                                                                                                            |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [**Live data**](/docs/connecting-to-data/live-data)<br/>"Open connection"               | Inspect real-time data coming in from a live robotics stack or a remote source (e.g. S3 bucket) | <ul><li>[ROS 1](/docs/connecting-to-data/frameworks/ros1#live-data)</li><li>[ROS 2](/docs/connecting-to-data/frameworks/ros2#live-data)</li><li>[Custom](/docs/connecting-to-data/frameworks/custom#live-data)</li><li>[MCAP](/docs/connecting-to-data/frameworks/mcap#live-data)</li><li>[Velodyne](/docs/connecting-to-data/frameworks/velodyne)</li></ul> |
| [**Local data**](/docs/connecting-to-data/local-data)<br/>"Open local file"             | Inspect data stored locally on your computer                                                    | <ul><li>[ROS 1](/docs/connecting-to-data/frameworks/ros1#local-data)</li><li>[MCAP](/docs/connecting-to-data/frameworks/mcap#local-data)</li><li>[PX4 ULog](/docs/connecting-to-data/frameworks/px4#local-data)</li></ul>                                                                                                                                    |
| [**Imported data**](/docs/connecting-to-data/imported-data)<br/>"Upload and share data" | Inspect data imported to the Foxglove platform                                                  | <ul><li>[ROS 1](/docs/connecting-to-data/frameworks/ros1#imported-data)</li><li>[MCAP](/docs/connecting-to-data/frameworks/mcap#imported-data)</li></ul>                                                                                                                                                                                                     |

If you're curious about Foxglove, but don't have your own robotics data on hand, you can "Explore sample data" to load [sample data adapted from nuScenes](https://www.nuscenes.org/nuscenes) in an example layout.

Once connected, Foxglove will display the data source's topics in the sidebar:

<img alt="sidebar" src="/img/docs/connecting-to-data/sidebar.png" width="300"/>
