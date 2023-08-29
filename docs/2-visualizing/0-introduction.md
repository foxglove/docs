---
title: Introduction
description: After connecting to a data source, leverage Foxglove's visualization and debugging tools to start exploring your data.
---

After [connecting to a data source](/docs/connecting-to-data/introduction), leverage Foxglove's visualization and debugging tools to start exploring your data.

![top nav](/img/docs/visualizing/navigation.jpeg)

|                   | Description                                                                                                                          |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **App menu**      | Connect to a [data source](/docs/connecting-to-data/introduction#data-sources), toggle the sidebars, or view resources               |
| **Add panel**     | Add a [panel](/docs/visualization/panels/introduction) to the current layout                                                         |
| **Layout menu**   | Save your workspace view as a [layout](/docs/visualizing/layouts) and share it with teammates                                        |
| **Left sidebar**  | Edit panel settings (Panel), view data source's topics (Topics), and troubleshoot issues with your connection (Problems)             |
| **Right sidebar** | Set [variables](/docs/visualizing/variables) for your current layout                                                                 |
| **User menu**     | Sign in to your Foxglove account, configure preferences, manage [extensions](/docs/visualizing/extensions/getting-started), and more |

## Settings

Configure Foxglove app settings, privacy preferences, and experimental features.

Click into the _Preferences_ tab in the app sidebar to configure the following settings.

### General

|                                                                                        | Definition                                                                                                                                                                       |
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

Select the [Foxglove extensions](/docs/visualizing/extensions/getting-started) you want to install.

### Experimental features

These features are not recommended for regular use – they are either deprecated or in active development or testing.

Reach out in the [Slack community](/join-slack), if you have any questions about any of these features.

## Links and resources
- [Getting Started with Foxglove](https://www.youtube.com/watch?v=ySVzQ3iFw90)
