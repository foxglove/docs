---
title: Local data
description: Foxglove can load local ROS 1 (.bag) and MCAP (.mcap) files for visualization.
---

import LocalDataDirections from "../../src/components/docs/connecting-to-data/LocalDataDirections";

Foxglove can load local files for visualization.

### Supported formats

- ROS 1 (`.bag`) files
- ROS 2 (`.db3`) files
- MCAP (`.mcap`) files
- PX4 ULog (`.ulg`) files


Since ROS 2 `.db3` files do not contain their message definitions, we recommend first converting those into self-contained MCAP files before loading into Foxglove.

### Getting started

<LocalDataDirections/>

## Links and resources

- [MCAP](https://mcap.dev)
- [Introducing the MCAP File Format](/blog/introducing-the-mcap-file-format)
