---
title: Playback
description: When visualizing a local or rmote data file, you can navigate its contents using the playback bar controls.
---

When visualizing a local or rmote data file, you can navigate its contents using the playback bar controls.

Format the current timestamp display, seek back and forth at increments of 100ms, loop playback, and configure playback speed.

![playback bar](/img/docs/app-concepts/playback/bar.webp)

**Note**: The playback bar is hidden when connected to live data.

## Message ordering

Data streamed into Foxglove typically have several types of timestamps:

- **Receive time (live connections) or `log_time` (MCAP)**
  - Timestamp at which a message was received by the recording service
  - Can vary if the recording service is running on the robot vs an external client
- **Header stamp ([ROS 1](http://docs.ros.org/en/noetic/api/std_msgs/html/msg/Header.html) and [ROS 2](https://docs.ros2.org/latest/api/std_msgs/msg/Header.html))**
  - Timestamp from the message's `header.stamp` field, set to a custom value by user.
  - Can vary with clock skew when working with distributed systems
- **Publish time (ROS 2) or `publish_time` (MCAP)**
  - Timestamp at which a message was published
  - Can vary with clock skew when working with distributed systems

Both Foxglove and the [Foxglove WebSocket protocol](https://github.com/foxglove/ws-protocol/blob/main/docs/spec.md) play messages in receive time, or `log_time`, order.

### Recorded data

Though all Foxglove [panels](/docs/studio/panels/introduction) order messages by receive time, some – like the [Plot](/docs/studio/panels/plot) and [State Transitions](/docs/studio/panels/state-transitions) panels – can be configured to order messages by header stamp as well.

### Live data

To get accurate measurements of time between messages (e.g. for a control signal), have your Foxglove WebSocket server override your messages' receive time by sending custom [`Time` messages](https://github.com/foxglove/ws-protocol/blob/main/docs/spec.md#time).

## Message latching

By default, ROS 1 `.bag` files, MCAP files, and Foxglove data streams will play back using message latching. This means that when seeking within your data, every panel in the layout will automatically display the last data it saw for that topic – even if that data is infrequently published or was not published at that exact moment in time. For Foxglove data streams, visualizing them will load the last seen messages for each subscribed topic – even if those messages are from before your current data segment's start time.

## Loading data

Foxglove optimizes the way it loads data in order to streamline pausing, seeking, and stepping through complex robotics data.

### Message "lookback"

When seeking to an arbitrary point in your loaded data, it's unlikely that every topic you are visualizing has a message at exactly the time you jumped to. The vast majority of your topics will have messages sometime before or after that exact seek point.

To ensure that your layout still displays something reasonable, Foxglove performs a “lookback” on your data. Essentially, it looks for the most recent message on each subscribed topic. This ensures that even when seeking to an arbitrary point in your data, Foxglove will still display reasonable data for all the panels in your layout – even if their messages occurred at different times.

### Latched topics

When seeking to a given timestamp, Foxglove fetches the last message on all subscribed topics – even if they occurred multiple minutes before your seek location. This allows panels to accurately display data from infrequently published topics (like a map, for example), even while seeking around to multiple points in your data at random.

### Preloading

While most Foxglove panels – like the [Raw Messages](/docs/studio/panels/raw-messages) and [Image](/docs/studio/panels/image) panels – display just the most recent message for a given topic, others like the [Plot](/docs/studio/panels/plot) and [Map](/docs/studio/panels/map) panels benefit from visualizing messages across the data's entire time range. Seeing a complete view of one's data makes spotting anomalies, summarizing robot behavior, and recognizing trends and patterns much easier. Preloading data allows these panels to access all their historical data throughout playback.

Even panels that visualize their most recently seen data can benefit from preloading. For example, the [3D panel](/docs/studio/panels/3d) preloads its transform messages to accurately position its markers. Robots often have many coordinate frames (e.g. joints of a robot arm, cameras on a self-driving car), each with their own markers. To render markers from different frames in a single 3D scene, the panel needs to use transforms to calculate the position of these visual elements in a common coordinate space. Since transforms accumulate and update over time, looking at just the latest message would result in an incompletely or incorrectly rendered scene. By preloading all transforms, the 3D panel can accurately position its markers, regardless of where and how often you decide to seek in your data.

## User interactions

### Creating events

Navigate to the [Foxglove console](https://console.foxglove.dev)’s [“Recordings” page](https://console.foxglove.dev/recordings) and select a data recording to “Visualize”.

The window that opens with your Foxglove data source will display a bookmark icon on the playback bar.

![Event icon](/img/docs/app-concepts/playback/event-icon.webp)

Seek to a point of interest in your data, then click that bookmark icon to add an event to your data at that point on the timeline.

![Create event](/img/docs/app-concepts/playback/create-event.webp)

These events will also persist to your Foxglove console account's [“Events” page](https://console.foxglove.dev/events).

### Viewing events

Open the _Data source_ sidebar and select the “Events” tab to see a list of all events associated with the current data source.

When streaming Foxglove data, the playback bar will display events using blue bars. Hovering on a blue bar will display its metadata in a tooltip.

![Event tooltip](/img/docs/app-concepts/playback/event-tooltip.webp)

If the _Data source_ sidebar is open to your list of events, hovering on an event will also highlight the corresponding event metadata in that sidebar pane.

![Event hover](/img/docs/app-concepts/playback/event-hover.webp)

### Searching events

Open the Data source sidebar and click on the “Events” tab to see all your events. The search input field at the top of the tab uses the [same query syntax supported in the web console](/docs/data-platform/events#search-events). Type in some queries to filter events by metadata keys and values and find events of interest.

## Shortcuts

- `Space` – Pause or play
- `Shift` + `←` – Seek backward 10ms
- `Shift` + `→` – Seek forward 10ms
- `←` – Seek backward 100ms
- `→` – Seek forward 100ms
- `Alt` + `←` – Seek backward 500ms
- `Alt` + `→` – Seek forward 500ms
