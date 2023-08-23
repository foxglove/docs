---
title: Live data
description: Foxglove supports connecting to live data sources with the Foxglove WebSocket, Rosbridge, and Velodyne Lidar connections. You can also load remote data files via URL.
---

Foxglove supports connecting to live data sources with the Foxglove WebSocket, Rosbridge, and Velodyne Lidar connections. You can also load remote data files via URL.


## Connections

|                    | Supported formats                                                                                                                                                                                                                                                                                                               | Configuration options                                      |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| Foxglove WebSocket | <ul><li>[ROS 1](/docs/connecting-to-data/frameworks/ros1#foxglove-websocket)</li><li>[ROS 2](/docs/connecting-to-data/frameworks/ros2#foxglove-websocket)</li><li>[Custom](/docs/connecting-to-data/frameworks/custom#foxglove-websocket)</li><li>[MCAP](/docs/connecting-to-data/frameworks/mcap#foxglove-websocket)</li></ul> | WebSocket URL                                              |
| Rosbridge          | <ul><li>[ROS 1](/docs/connecting-to-data/frameworks/ros1#rosbridge)</li><li>[ROS 2](/docs/connecting-to-data/frameworks/ros2#rosbridge)</li></ul>                                                                                                                                                                               | WebSocket URL                                              |
| ROS 1              | [ROS 1](/docs/connecting-to-data/frameworks/ros1#native) (Desktop app only)                                                                                                                                                                                                                                                     | `ROS_MASTER_URI` and `ROS_HOSTNAME`                        |
| Velodyne Lidar     | [Velodyne](/docs/connecting-to-data/frameworks/velodyne) (Desktop app only)                                                                                                                                                                                                                                                     | UDP port                                                   |
| Remote file        | <ul><li>[ROS 1](/docs/connecting-to-data/frameworks/ros1)</li><li>[MCAP](/docs/connecting-to-data/frameworks/mcap)</li></ul>                                                                                                                                                                                                    | Requires [CORS setup](/docs/connecting-to-data/cors-setup) |


## Limitations

When connecting to ROS data, each connection will have different capabilities.

|                         | Foxglove WebSocket (recommended) | Rosbridge                                                       | ROS 1 |
| ----------------------- | -------------------------------- | --------------------------------------------------------------- | ----- |
| Stream ROS 1 data       | ✓                                | ✓                                                               | ✓     |
| Stream ROS 2 data       | ✓                                | ✓                                                               |       |
| Stream custom data      | ✓                                |                                                                 |       |
| Custom message schemas  | ✓                                | ✓                                                               | ✓     |
| Publish messages        | ✓ (ROS 1, ROS 2, JSON)           | ✓                                                               | ✓     |
| Call services           |                                  |                                                                 |       |
| Call actions            |                                  |                                                                 |       |
| Read and set parameters | ✓                                | [`studio#2645`](https://github.com/foxglove/studio/issues/2645) | ✓     |

## Links and resources

- [MCAP](https://mcap.dev)
- [Introducing the MCAP File Format](/blog/introducing-the-mcap-file-format)
- [Open a Foxglove bridge connection](/blog/announcing-the-new-foxglove-bridge-for-live-ros-data)
