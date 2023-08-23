---
title: Introduction
---

Download Foxglove as a [desktop app](/download) (available on Linux, Windows, or macOS), or simply navigate to the [web app](https://studio.foxglove.dev) in a Chrome browser window.

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

Some app features are only available via our desktop app:

- Opening a [native ROS 1 or ROS 2 connection](/docs/studio/connection/ros-native)
- Connecting to your [Velodyne LIDAR hardware](/docs/studio/connection/velodyne)
- Loading local URDF and mesh resources in the [3D panel](/docs/studio/panels/3d) using URLs prefixed with `package://`
- [Creating shareable links](/docs/studio/building-and-sharing-links) prefixed with `foxglove://`
- Installing [extensions](https://foxglove.dev/docs/studio/extensions/getting-started) via the [extension marketplace](https://github.com/foxglove/studio-extension-marketplace)

## Data sources

When you first load the app, you will see an introductory dialog, with "Open data source" options and "Help" resources. On subsequent app loads, you will also be able to reconnect to your most recently selected data sources in the "Recents" list.

![Data source dialog](/img/docs/studio/getting-started/dialog.webp)

## Navigation

The app's top nav bar contains the following items:

- **App menu** – Connect to a [data source](/docs/studio/connection/data-sources), toggle the sidebars, or view resources
- **Add panel** – Add a [panel](/docs/studio/panels/introduction) to the current layout
- **Layout menu** - Save your workspace view as a [layout](/docs/studio/layouts) and share it with teammates
- **Left sidebar**
  - **Panel** – Edit a selected panel's settings
  - **Topics** – View a list of topics in your data source
  - **Problems** – View and troubleshoot issues with your data source connection
- **Right sidebar** - Edit a selected panel's settings
  - **Variables** - Set app-level [variables](/docs/studio/app-concepts/variables) for use throughout your current layout
- **User menu** – Sign in to your Foxglove account, configure app and user preferences, manage [custom extensions](/docs/studio/extensions/getting-started), and more

![top nav](/img/docs/studio/getting-started/top-nav.jpeg)
