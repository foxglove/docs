---
title: Recorded data
---
export const meta = {
  title: "Introduction",
  description:
    "Foxglove Studio can inspect data via multiple sources – including live ROS and non-ROS connections, as well as local and remote recorded data files (ROS 1 and ROS 2, PX4 ULogs, MCAP).",
  heroImage: "/img/docs/studio/connection/data-sources.webp",
};

Foxglove Studio can inspect data via multiple sources – including live and recorded data, [ROS](/ros) and [non-ROS](/docs/studio/connection/foxglove-websocket) connections, as well as local and remote recorded data files.

On opening Foxglove Studio, you will see a dialog with a list of all possible data sources (i.e. local file, remote file, live connection, sample data) – click into any of these options to start visualizing your data.

![data source dialog](/img/docs/studio/connection/dialog.webp)

Once you've loaded or connected to a data source, open the _Topics_ tab in the left sidebar to view your current data source's topics – including their schema names, message counts, and publish rates.

![topics tab](/img/docs/studio/connection/tab.jpeg)

All pre-recorded data sources (i.e. ROS 1, ROS 2, MCAP, and PX4 ULog files), whether they are loaded locally or from a remote URL, will be preloaded into Foxglove Studio. This means that you can visualize data over the course of the entire file at once.

_For more information on the MCAP file format, check out the [GitHub repo](https://github.com/foxglove/mcap) and [Introducing the MCAP File Format](/blog/introducing-the-mcap-file-format). If you're interested in support for data formats that are not currently included, please [share](/community) the protocols or serialization formats you're using._

## By live connection

Depending on your live connection, you have access to different capabilities:

|                        | [ROS 1](/docs/studio/connection/ros-native) | [ROS 2](/docs/studio/connection/ros-native)                     | [Rosbridge](/docs/studio/connection/rosbridge)                  | [Foxglove WebSocket](/docs/studio/connection/custom#live-connection) |
| ---------------------- | ------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | -------------------------------------------------------------------- |
| Stream ROS 1 data      | ✓                                           |                                                                 | ✓                                                               | ✓                                                                    |
| Stream ROS 2 data      |                                             | ✓                                                               | ✓                                                               | ✓                                                                    |
| Stream custom data     |                                             |                                                                 |                                                                 | ✓                                                                    |
| Custom message schemas | ✓                                           | [_ros2#1159_](https://github.com/ros2/ros2/issues/1159)         | ✓                                                               | ✓                                                                    |
| Publish messages       | ✓                                           | [_studio#1661_](https://github.com/foxglove/studio/issues/1661) | ✓                                                               | ✓ (ROS 1, ROS 2, JSON)                                               |
| Call services          |                                             |                                                                 | ✓                                                               | ✓ (ROS 1, ROS 2)                                                     |
| Call actions           |                                             |                                                                 |                                                                 |                                                                      |
| Read & set parameters  | ✓                                           | [_studio#2614_](https://github.com/foxglove/studio/issues/2614) | [_studio#2645_](https://github.com/foxglove/studio/issues/2645) | ✓                                                                    |
