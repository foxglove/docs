---
title: Playback
description: When visualizing a local or remote data file, you can navigate its contents using the playback bar controls.
---

When visualizing a local or remote data file, you can navigate its contents using the playback bar controls.

![playback bar](/img/docs/visualization/playback/bar.png)

### Message ordering

Robotics data typically includes several types of timestamps.

Both Foxglove and the [Foxglove WebSocket protocol](https://github.com/foxglove/ws-protocol/blob/main/docs/spec.md) play messages in receive time, or `log_time`, order. Some Foxglove [panels](/docs/visualization/panels/introduction) – like the [Plot](/docs/visualization/panels/plot) and [State Transitions](/docs/visualization/panels/state-transitions) – can be configured to order messages by header stamp.

|                  | Frameworks                                                                                                                                                            | Description                                       | Notes                                                                                                                        |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| **Receive time** | <ul><li>ROS 1</li><li>ROS 2</li><li>MCAP (`log_time`)</li></ul>                                                                                                       | When message is received by the recording service | <ul><li>For live connections</li><li>Varies if the recording service is running on the robot vs an external client</li></ul> |
| **Header stamp** | <ul><li>[ROS 1](http://docs.ros.org/en/noetic/api/std_msgs/html/msg/Header.html)</li><li>[ROS 2](https://docs.ros2.org/latest/api/std_msgs/msg/Header.html)</li></ul> | Message's `header.stamp` field, set by user       | Varies with clock skew when working with distributed systems                                                                 |
| **Publish time** | <ul><li>ROS 2</li><li>MCAP (`publish_time`)</li></ul>                                                                                                                 | When message is published                         | Varies with clock skew when working with distributed systems                                                                 |

For accurate measurements of time between messages (e.g. for a control signal), send custom [`Time` messages](https://github.com/foxglove/ws-protocol/blob/main/docs/spec.md#time) in your Foxglove WebSocket server to override your messages' receive time.

### Message loading

Foxglove optimizes how it loads your complex robotics data, for more streamlined seeking and playback.

#### Message "lookback"

When seeking to an arbitrary point in your loaded data, it's unlikely that every topic you are visualizing has a message at exactly the time you jumped to. The vast majority of your topics will have messages sometime before or after that exact seek point.

To ensure that your layout still displays something reasonable, Foxglove performs a “lookback” on your data. Essentially, it looks for the most recent message on each subscribed topic. This ensures that even when seeking to an arbitrary point in your data, Foxglove will still display reasonable data for all the panels in your layout – even if their messages occurred at different times.

#### Latched topics

By default, ROS 1 `.bag` files, MCAP files, and Foxglove data streams will play back using message latching.

When seeking within your data, Foxglove fetches the last message on all subscribed topics – even if they occurred multiple minutes before your seek location. Every panel in the layout will then automatically display the last data it saw for that topic – even if that data is infrequently published or was not published at that exact moment in time. For Foxglove data streams, Foxglove will load the last seen messages for each subscribed topic – even if those messages are from before your current data segment's start time.

Message latching allows panels to accurately display data from infrequently published topics (like a map, for example), even while seeking around to multiple points in your data at random.

#### Preloading

While most Foxglove panels – like the [Raw Messages](/docs/visualization/panels/raw-messages) and [Image](/docs/visualization/panels/image) panels – display just the most recent message for a given topic, others like the [Plot](/docs/visualization/panels/plot) and [Map](/docs/visualization/panels/map) panels benefit from visualizing messages across the data's entire time range. Seeing a complete view of one's data makes spotting anomalies, summarizing robot behavior, and recognizing trends and patterns much easier. Preloading data allows these panels to access all their historical data throughout playback.

Even panels that visualize their most recently seen data can benefit from preloading. For example, the [3D panel](/docs/visualization/panels/3d) preloads its transform messages to accurately position its markers. Robots often have many coordinate frames (e.g. joints of a robot arm, cameras on a self-driving car), each with their own markers. To render markers from different frames in a single 3D scene, the panel needs to use transforms to calculate the position of these visual elements in a common coordinate space. Since transforms accumulate and update over time, looking at just the latest message would result in an incompletely or incorrectly rendered scene. By preloading all transforms, the 3D panel can accurately position its markers, regardless of where and how often you decide to seek in your data.

## User interactions

- Format the current timestamp display
- Seek back and forth at increments of 100ms
- Loop playback
- Configure playback speed
- Create, view, and search [events](/docs/events)

## Shortcuts

- `Space` – Pause or play
- `Shift` + `←` – Seek backward 10ms
- `Shift` + `→` – Seek forward 10ms
- `←` – Seek backward 100ms
- `→` – Seek forward 100ms
- `Alt` + `←` – Seek backward 500ms
- `Alt` + `→` – Seek forward 500ms
