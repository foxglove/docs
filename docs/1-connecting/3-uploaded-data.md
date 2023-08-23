---
title: Uploaded data
---

export const meta = {
  title: "Visualizing data",
  description:
    "Use Foxglove Data Platform's web console to visualize your data recordings in Foxglove Studio.",
};

> Use Foxglove Data Platform's web console to export your data as [MCAP](https://mcap.dev) (`.mcap`) or ROS 1 (`.bag`) files and to visualize it in Foxglove Studio.

Once you've imported recordings to Foxglove Data Platform, you can export parts of it as a file or stream the data directly to debugging and visualization tools like [Foxglove Studio](/studio).

## Visualize a recording or event

Select any recording from the _Recordings_ page or event on the _Events_ page to "View in Studio":

![view in Foxglove Studio](/img/docs/data-platform/view-in-studio.webp)

## Visualize a custom time range

Use the _Timeline_ view to find the data you are interested in:

![search](/img/docs/data-platform/search.webp)

Use the date picker or the "year", "month", or "week" tabs to navigate to time ranges of interest. Click any column in the timeline to zoom in on the data you want.

After locating the data you want in the "hour" view, click a coverage bar or select a time range by dragging and clicking the selected region:

![export via Timeline](/img/docs/data-platform/timeline-export.webp)

Launch this data in Studio for immediate visualization.

## Uploading from local storage

> Use Foxglove Data Platform's web console to import and interact with your robotics data.

You can import your recordings either via the web console or the CLI. Before you can import your recordings, you'll need to create devices to associate with your recordings. These devices could represent real robots or simulated robots.

You can import ROS 1 [.bag](https://wiki.ros.org/Bags) files or [MCAP](https://mcap.dev/) files directly. Custom data or ROS 2 files must first be [converted](/blog/importing-your-ros2-data-into-foxglove-data-platform) to MCAP files.

## Add a device

Go to the _Devices_ page, and click "Add device":

![add device](/img/docs/data-platform/add-device.webp)

Create a uniquely named device for every robot you want to track. This will allow your team members to add data recorded on these devices.

You can also create and list devices via the CLI.

```
$ foxglove devices add --name "my device"
$ foxglove devices list
```

## Import data

Click the "Import data" button on the _Recordings_ or _Timeline_ page.

Select the recorded data file you want to import, as well as the device you want to associate with this recording:

![import](/img/docs/data-platform/import.webp)

When importing [MCAP files](https://mcap.dev/) with metadata records or attachments, Foxglove Data Platform will index and display them under the _Metadata_ and _Attachments_ tabs on the recording's details page:

![recording metadata](/img/docs/data-platform/recording-metadata.webp)

### CLI

```bash
$ foxglove data import ~/data/bags/gps.bag --device-id dev_drpLqjBZYUzus3gv
```

## View recordings

Once you've imported a file you can view it on the [Recordings](https://console.foxglove.dev/recordings) page.

You can also go to the [Timeline](https://console.foxglove.dev/timeline) page to view all imported data as ranges on a timeline.

Or use the CLI tool to list the recordings:

```bash
$ foxglove data imports list
```

## Additional resources

- [Import ROS 2 data](/blog/importing-your-ros2-data-into-foxglove-data-platform)
