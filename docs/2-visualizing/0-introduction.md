---
title: Introduction
description: After connecting to a data source, leverage Foxglove's visualization and debugging tools to start exploring your data.
---

Download Foxglove as a [desktop app](/download) (available on Linux, Windows, or macOS), or navigate to the [web app](https://studio.foxglove.dev) in a Chrome browser window.

<iframe
  className="max-w-full max-h-full"
  width="840"
  height="472"
  src="https://www.youtube.com/embed/ySVzQ3iFw90"
  title="YouTube video player – Getting Started with Foxglove Studio"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

## Desktop-only features

Some features are only available via the desktop app:

- Opening a [native ROS 1 or ROS 2 connection](../1-connecting-to-data/4-frameworks/0-ros1#native)
- Connecting to your [Velodyne LIDAR hardware](../1-connecting-to-data/4-frameworks/5-velodyne)
- Loading local URDF and mesh resources in the [3D panel](./4-panels/3d) using URLs prefixed with `package://`
- [Creating shareable links](./8-shareable-links) prefixed with `foxglove://`
- Installing [extensions](../3-extensions/0-introduction) via the [extension marketplace](https://github.com/foxglove/studio-extension-marketplace)

## Interface

[Connect to a data source](../1-connecting-to-data/0-introduction) to explore it with Foxglove's visualization and debugging tools.

![top nav](/img/docs/visualizing/navigation.jpeg)

| component         | description                                                                                                              |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **App menu**      | Connect to a [data source](/docs/connecting-to-data/introduction#data-sources), toggle the sidebars, or view resources   |
| **Add panel**     | Add a [panel](/docs/visualization/panels/introduction) to the current layout                                             |
| **Layout menu**   | Save your workspace view as a [layout](/docs/visualizing/layouts) and share it with teammates                            |
| **Left sidebar**  | Edit panel settings (Panel), view data source's topics (Topics), and troubleshoot issues with your connection (Problems) |
| **Right sidebar** | Set [variables](/docs/visualizing/variables) for your current layout                                                     |
| **User menu**     | Sign in to your Foxglove account, configure preferences, manage [extensions](/docs/extensions/getting-started), and more |

## Settings

Configure Foxglove app settings, privacy preferences, and experimental features.

Click into the _Preferences_ tab in the app sidebar to configure the following settings.

### General

| field                                                                                  | description                                                                                                                                                                      |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Color scheme**                                                                       | Choose between light or dark mode, or follow your OS settings                                                                                                                    |
| **Display timestamps in**                                                              | Timezone used to display timestamps                                                                                                                                              |
| **Timestamp format**                                                                   | Formatting used to display timestamps                                                                                                                                            |
| **Message rate (Hz)**                                                                  | Message pipeline's frame rate; lowering frame rate will reduce CPU usage and redraw frequency for certain panels; rendering will continue at the usual 60fps for smooth playback |
| **Language**                                                                           | App language ([contribute translations](https://github.com/foxglove/studio/blob/main/CONTRIBUTING.md#localization))                                                              |
| **Updates**                                                                            | Toggle ability to automatically update the desktop app                                                                                                                           |
| [**ROS_PACKAGE_PATH**](https://wiki.ros.org/ROS/EnvironmentVariables#ROS_PACKAGE_PATH) | Paths to search for ROS packages (local file paths or `package://` URLs); separate paths with standard OS path separator (e.g. ':' on Unix)                                      |

### Privacy

Decide whether you want to send anonymized usage data or crash reports to the Foxglove team. All data will be used to improve the app.

These settings require an app relaunch to take effect.

### Extensions

Select the [Foxglove extensions](/docs/extensions/getting-started) you want to install.

### Experimental features

These features are not recommended for regular use – they are either deprecated or in active development or testing.

Reach out in the [Slack community](/join-slack), if you have any questions about any of these features.

## Links and resources
- [Getting Started with Foxglove](https://www.youtube.com/watch?v=ySVzQ3iFw90)
