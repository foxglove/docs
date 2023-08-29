---
title: Teleop
description: Teleoperate your robot by publishing `geometry_msgs/Twist` or `geometry_msgs/msg/Twist` messages on a given topic back to your live ROS stack.
---

Teleoperate your robot by publishing [`geometry_msgs/Twist`](https://docs.ros.org/en/api/geometry_msgs/html/msg/Twist.html) or [`geometry_msgs/msg/Twist`](https://github.com/ros2/common_interfaces/blob/master/geometry_msgs/msg/Twist.msg) messages on a given topic back to your live ROS stack.

![teleop panel](/img/docs/visualizing/panels/teleop/panel.webp)

To use the control pad to teleoperate your connected robot, you must be connected to your robot via a native or Rosbridge connection.

For more information on how to connect to a live ROS stack, check out our [supported data sources](/docs/connecting-to-data/introduction#data-sources).

## Settings

| General          |                                                                                                                                                                                                                                            |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Publish rate** | Rate of publishing your [`geometry_msgs/Twist`](https://docs.ros.org/en/api/geometry_msgs/html/msg/Twist.html) or [`geometry_msgs/msg/Twist`](https://github.com/ros2/common_interfaces/blob/master/geometry_msgs/msg/Twist.msg) messages  |
| **Topic**        | Topic to publish live [`geometry_msgs/Twist`](https://docs.ros.org/en/api/geometry_msgs/html/msg/Twist.html) or [`geometry_msgs/msg/Twist`](https://github.com/ros2/common_interfaces/blob/master/geometry_msgs/msg/Twist.msg) messages to |
| **Up button**    | Field (linear or angular x, y, or z) and value to publish when pressing the up button                                                                                                                                                      |
| **Down button**  | Field (linear or angular x, y, or z) and value to publish when pressing the down button                                                                                                                                                    |
| **Left button**  | Field (linear or angular x, y, or z) and value to publish when pressing the left button                                                                                                                                                    |
| **Right button** | Field (linear or angular x, y, or z) and value to publish when pressing the right button                                                                                                                                                   |

## Supported messages

To use this panel, your data source must provide messages conforming to one of the following supported schemas.

### `Twist`

| framework | schema                                                                                                         |
| --------- | -------------------------------------------------------------------------------------------------------------- |
| ROS 1     | [`geometry_msgs/Twist`](https://docs.ros.org/en/noetic/api/std_msgs/html/msg/ColorRGBA.html)                   |
| ROS 2     | [`geometry_msgs/msg/Twist`](https://github.com/ros2/common_interfaces/blob/master/geometry_msgs/msg/Twist.msg) |
