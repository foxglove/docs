---
title: Introduction
---

> Foxglove Studio is a visualization and debugging tool for your robotics data, conveniently packaged as desktop and web apps.

Download Foxglove Studio as a [desktop app](/download) (available on Linux, Windows, or macOS), or simply navigate to the [web app](https://studio.foxglove.dev) in a Chrome browser window.

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

Some app features are only available via our desktop app:

- Opening a [native ROS 1 or ROS 2 connection](/docs/studio/connection/ros-native)
- Connecting to your [Velodyne LIDAR hardware](/docs/studio/connection/velodyne)
- Loading local URDF and mesh resources in the [3D panel](/docs/studio/panels/3d) using URLs prefixed with `package://`
- [Creating shareable links](/docs/studio/building-and-sharing-links) prefixed with `foxglove://`
- Installing [extensions](https://foxglove.dev/docs/studio/extensions/getting-started) via the [extension marketplace](https://github.com/foxglove/studio-extension-marketplace)

## Data sources

When you first load the app, you will see an introductory dialog, with "Open data source" options and "Help" resources. On subsequent app loads, you will also be able to reconnect to your most recently selected data sources in the "Recents" list.

![Data source dialog](/img/docs/studio/getting-started/dialog.webp)

If you want to get a sense of what you can visualize in Foxglove Studio before connecting to your own data, click on "Explore sample data" to load a [sample dataset adapted from nuScenes](https://www.nuscenes.org/nuscenes) in an example layout for playback. Hover over each panel to see its name and toolbar, and seek to different places on the playback bar to see the panels update with new information.

![Sample nuScenes data](/img/docs/studio/getting-started/nuscenes.webp)

## Navigation

The app's top nav bar contains the following items:

- _App menu_
  - _File_ – Connect to a [local or remote data source](/docs/studio/connection/data-sources)
  - _View_ – Toggle the app's left and right sidebars
  - _Help_ – View community resources
- _Add panel_ – Add a [panel](/docs/studio/panels/introduction) to the current layout
- _Layout menu_
  - Save your workspace view as a [layout](/docs/studio/layouts) and share it with teammates
- _Left sidebar_
  - _Panel_ – Edit a selected panel's settings
  - _Topics_ – View a list of topics in your data source
  - _Problems_ – View and troubleshoot issues with your data source connection
- _Right sidebar_ - Edit a selected panel's settings
  - _Variables_ - Set app-level [variables](/docs/studio/app-concepts/variables) for use throughout your current layout
- _User menu_ – Sign in to your Foxglove account, configure app and user preferences, manage [custom extensions](/docs/studio/extensions/getting-started), and more

![top nav](/img/docs/studio/getting-started/top-nav.jpeg)
