---
title: Local data
description: Foxglove can load local ROS 1 (.bag) and MCAP (.mcap) files for visualization.
---

import LocalDataDirections from "../../src/components/docs/connecting-to-data/LocalDataDirections";

Foxglove can load local files for visualization.

### Supported formats

|              | File extension |
| ------------ | -------------- |
| **ROS 1**    | `.bag`         |
| **ROS 2**    | `.db3`         |
| **MCAP**     | `.mcap`        |
| **PX4 ULog** | `.ulg`         |

Since ROS 2 `.db3` files do not contain their message definitions, we recommend first converting those into self-contained MCAP files before loading into Foxglove.

### Getting started

<LocalDataDirections/>

## Links and resources

- [MCAP](https://mcap.dev)
- [Introducing the MCAP File Format](/blog/introducing-the-mcap-file-format)
