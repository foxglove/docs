---
title: Local data
description: Foxglove can load local ROS 1 (.bag) and MCAP (.mcap) files for visualization.
---

import LocalDataDirections from "../../src/components/docs/connecting-to-data/LocalDataDirections";

Foxglove can load local data files for visualization.

### Supported formats

|                                           | File extension |
| ----------------------------------------- | -------------- |
| **[ROS 1](frameworks/ros1#local-data)**   | `.bag`         |
| **[ROS 2](frameworks/ros2#local-data)**   | `.db3`         |
| **[MCAP](frameworks/mcap#local-data)**    | `.mcap`        |
| **[PX4 ULog](frameworks/px4#local-data)** | `.ulg`         |

Since ROS 2 `.db3` files do not contain their message definitions, we recommend first converting those into self-contained MCAP files before loading into Foxglove.

### Getting started

<LocalDataDirections/>

## Links and resources

- [MCAP](https://mcap.dev)
- [Introducing the MCAP File Format](/blog/introducing-the-mcap-file-format)
