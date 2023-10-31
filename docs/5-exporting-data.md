---
title: Exporting data
description: Import ROS 1 (.bag) and MCAP (.mcap) data files into the Foxglove platform for later visualization and analysis.
---

Export your data to visualize them in Foxglove and other debugging and visualization tools.

Once you've imported data to Foxglove, you can export select ranges of this data to export as a [MCAP](https://mcap.dev) (`.mcap`) or ROS 1 (`.bag`) file, or stream the data directly to third party debugging tools like Jupyter Notebooks or visualization tools like [Foxglove](https://foxglove.dev/studio).

### Download recording or event

Select a recording from the [Recordings page](https://console.foxglove.dev/recordings) or an event from the [Events](https://console.foxglove.dev/events) to download it.

When downloading MCAP files, all associated metadata records and attachments are included. You can also download MCAP files' attachments separately, under the recording details page's _Attachments_ tab.

### Download time range

Use the [Timeline page](https://console.foxglove.dev/timeline) to find the data you are interested in:

![search](/img/docs/exporting-data/search.webp)

Zoom in and out of your data, and navigate to time ranges of interest. Click any column in the timeline to zoom in on the data you want.

After locating the data you want, click a coverage bar or select a time range by dragging and clicking the selected region:

![export via Timeline](/img/docs/exporting-data/timeline-export.webp)

Download the selected data as an `.mcap` or `.bag` file, or launch it in Foxglove for immediate visualization.
