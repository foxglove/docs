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

| component         | description                                                                                                                         |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **App menu**      | Connect to a [data source](/docs/connecting-to-data/introduction#data-sources), toggle the sidebars, or view resources              |
| **Add panel**     | Add a [panel](/docs/visualization/panels/introduction) to the current layout                                                        |
| **Layout menu**   | Save your workspace view as a [layout](/docs/visualization/layouts) and share it with teammates                                     |
| **Left sidebar**  | Edit panel settings (Panel), view data source's topics (Topics), and troubleshoot issues with your connection (Problems)            |
| **Right sidebar** | Set [variables](/docs/visualization/variables) for your current layout                                                              |
| **User menu**     | Sign in to your Foxglove account, configure preferences, manage [extensions](/docs/visualization/extensions/introduction), and more |

## Settings

Configure Foxglove app settings, privacy preferences, and experimental features.

Click into the _Preferences_ tab in the app sidebar to configure the following settings.

### General

| field                                                                                  | description                                                                                                                                                                                                 |
| -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Color scheme**                                                                       | Choose between light or dark mode, or follow your OS settings                                                                                                                                               |
| **Display timestamps in**                                                              | Timezone used to display timestamps                                                                                                                                                                         |
| **Timestamp format**                                                                   | Formatting used to display timestamps                                                                                                                                                                       |
| **Message rate (Hz)**                                                                  | Message pipeline's frame rate; lowering frame rate will reduce CPU usage and redraw frequency for certain panels; rendering will continue at the usual 60fps for smooth playback                            |
| **Language**                                                                           | App language                                                                                                                                                                                                |
| **Updates**                                                                            | Toggle ability to automatically update the desktop app                                                                                                                                                      |
| [**ROS_PACKAGE_PATH**](https://wiki.ros.org/ROS/EnvironmentVariables#ROS_PACKAGE_PATH) | Paths to search for ROS packages (local file paths or `package://` URLs); separate paths with standard OS path separator (e.g. ':' on Unix). <br/>_Example_: `/path/to/workspace/src:/opt/ros/noetic/share` |

### Privacy

Decide whether you want to send anonymized usage data or crash reports to the Foxglove team. All data will be used to improve the app.

These settings require an app relaunch to take effect.

### Extensions

Select the [Foxglove extensions](/docs/visualization/extensions/introduction) you want to install.

### Experimental features

These features are not recommended for regular use – they are either deprecated or in active development or testing.

Reach out in the [Slack community](https://foxglove.dev/slack), if you have any questions about any of these features.

## Links and resources

- [Getting Started with Foxglove](https://www.youtube.com/watch?v=ySVzQ3iFw90)
