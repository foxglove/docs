---
title: Introduction
description: After connecting to a data source, leverage Foxglove's visualization and debugging tools to start exploring your data.
---

Download Foxglove as a [desktop app](https://foxglove.dev/download) (available on Linux, Windows, or macOS), or navigate to the [web app](https://app.foxglove.dev) in a Chrome browser window.

<iframe
  className="max-w-full max-h-full"
  width="840"
  height="472"
  src="https://www.youtube.com/embed/ySVzQ3iFw90"
  title="YouTube video player – Getting Started with Foxglove"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

### Desktop-only features

Some features are only available via the [desktop app](https://foxglove.dev/download).

#### [Connecting to data](/docs/connecting-to-data/introduction)

- Opening a [native ROS 1 connection](/docs/connecting-to-data/frameworks/ros1#native)
- Connecting to your [Velodyne LIDAR hardware](/docs/connecting-to-data/frameworks/velodyne)
- Loading local URDF and mesh resources in the [3D panel](/docs/visualization/panels/3d) using URLs prefixed with `package://`

#### [Extensions](/docs/visualization/extensions/introduction)

- Installing extensions via the [marketplace](https://github.com/foxglove/studio-extension-marketplace)
- Installing extensions locally

#### Other

- [Creating shareable links](/docs/visualization/shareable-links) prefixed with `foxglove://`

### Interface

[Connect to a data source](/docs/connecting-to-data/introduction) to explore it with Foxglove's visualization and debugging tools.

![top nav](/img/docs/visualization/navigation.jpeg)

| component         | description                                                                                                                                                                                            |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **App menu**      | Connect to a [data source](/docs/connecting-to-data/introduction#data-sources), toggle the sidebars, or view resources                                                                                 |
| **Add panel**     | Add a [panel](/docs/visualization/panels/introduction) to the current layout                                                                                                                           |
| **Layout menu**   | Save your workspace view as a [layout](/docs/visualization/layouts) and share it with teammates                                                                                                        |
| **Left sidebar**  | Edit panel settings (Panel), view data source's topics (Topics), and troubleshoot issues with your connection (Problems)                                                                               |
| **Right sidebar** | Set layout-wide [variables](/docs/visualization/variables) (Variables), view playback metrics (Performance). Must enable debugging features in the _Visualization settings_ to see the Performance tab |
| **User menu**     | Sign in to your Foxglove account, configure preferences, manage [extensions](/docs/visualization/extensions/introduction), and more                                                                    |

## Settings

Configure Foxglove app settings, privacy preferences, and experimental features.

Open _Visualization settings_ from the user menu to configure the following settings.

### General

<<<<<<< HEAD
| field                                                                                  | description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Color scheme**                                                                       | Choose between light or dark mode, or follow your OS settings                                                                                                                    |
| **Display timestamps in**                                                              | Timezone used to display timestamps                                                                                                                                              |
| **Timestamp format**                                                                   | Formatting used to display timestamps                                                                                                                                            |
| **Message rate (Hz)**                                                                  | Message pipeline's frame rate; lowering frame rate will reduce CPU usage and redraw frequency for certain panels; rendering will continue at the usual 60fps for smooth playback |
| **Language**                                                                           | App language ([contribute translations](https://github.com/foxglove/studio/blob/main/CONTRIBUTING.md#localization))                                                              |
| **Updates**                                                                            | Toggle ability to automatically update the desktop app                                                                                                                           |
| [**ROS_PACKAGE_PATH**](https://wiki.ros.org/ROS/EnvironmentVariables#ROS_PACKAGE_PATH) | Paths to search for ROS packages (local file paths or `package://` URLs); separate paths with standard OS path separator (e.g. ':' on Unix)                                      |
| **Advanced**                                                                           | Enable features for debugging Foxglove                                                                                                                                           |
=======
| field                                                                                  | description                                                                                                                                                                                                 |
| -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Color scheme**                                                                       | Choose between light or dark mode, or follow your OS settings                                                                                                                                               |
| **Display timestamps in**                                                              | Timezone used to display timestamps                                                                                                                                                                         |
| **Timestamp format**                                                                   | Formatting used to display timestamps                                                                                                                                                                       |
| **Message rate (Hz)**                                                                  | Message pipeline's frame rate; lowering frame rate will reduce CPU usage and redraw frequency for certain panels; rendering will continue at the usual 60fps for smooth playback                            |
| **Language**                                                                           | App language                                                                                                                                                                                                |
| **Updates**                                                                            | Toggle ability to automatically update the desktop app                                                                                                                                                      |
| [**ROS_PACKAGE_PATH**](https://wiki.ros.org/ROS/EnvironmentVariables#ROS_PACKAGE_PATH) | Paths to search for ROS packages (local file paths or `package://` URLs); separate paths with standard OS path separator (e.g. ':' on Unix). <br/>_Example_: `/path/to/workspace/src:/opt/ros/noetic/share` |
>>>>>>> main

### Privacy

Decide whether you want to send anonymized usage data or crash reports to the Foxglove team. All data will be used to improve the app.

These settings require an app relaunch to take effect.

### Extensions

Select the [Foxglove extensions](/docs/visualization/extensions/introduction) you want to install.

### Experimental features

These features are not recommended for regular use – they are either deprecated or in active development or testing.

Reach out in the [Slack community](https://foxglove.dev/slack), if you have any questions about any of these features.

## Sidebars

### Panel

[Edit panel settings](/docs/visualization/panels/introduction#edit-settings) for any selected [panel](/docs/visualization/panels/introduction).

### Topics

View all topics available in the data source, along with their data types and message rates.

### Problems

See a list of playback errors to troubleshoot.

### Variables

Set layout-wide [variables](/docs/visualization/variables) that can be used in different panels with the [message path syntax](/docs/visualization/message-path-syntax).

### Performance

Display playback and data-streaming performance statistics. Displayed only when the "Enable panels and features for debugging Foxglove" setting is enabled in the app settings.

![playback performance panel](/img/docs/visualization/panels/studio-playback-performance/panel.webp)

The following statistics are displayed for a given playback session. "Instantaneous" statistics are reported based on the most recent frame, and also are averaged over the last 5 seconds.

#### Memory usage

Details the `jsHeapSizeLimit`, `usedJSHeapSize`, and `totalJSHeapSize`.

#### Main thread

##### Frame rate

The number of frames played per second. Though the player can play back at up to 60fps, this statistic will be lower if frames take longer than 16ms to render.

##### Latency

Measures time for information to travel from the data source to the visualization panels.

#### User scripts

Measures time spent executing user scripts, both individually and in total.

#### Data pipeline

##### Playback speed

The player tries to play at the speed specified by the user, but may not be able to keep up, given heavy layouts and large amounts of data. This chart displays the actual playback speed as a ratio of bag time to playback time.

##### Frame rate

The number of frames played per second. Though the player can play back at up to 60fps, this statistic will be lower if frames take longer than 16ms to render.

##### Bag frame time

The duration in bag-time for the rendered frames in milliseconds. To "keep up" with playback, Foxglove will often emit "larger" frames.

##### Data throughput

The amount of data received by the player in megabits per second. For remote bags, this includes topics that the player is not subscribed to.
This statistic does not account for Content-Encoding compression, so it may be larger than the actual network bandwidth.

### Logs

Filter logs by level (debug, info, warn, error) to troubleshoot.

## Links and resources

- [Getting Started with Foxglove](https://www.youtube.com/watch?v=ySVzQ3iFw90)
