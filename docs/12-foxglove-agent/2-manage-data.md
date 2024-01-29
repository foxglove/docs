---
title: Manage data
description: Start processing data recordings with your Foxglove Agent.
---

import AccountRequiredHeader from "../../src/components/docs/icons/AccountRequiredHeader";

<AccountRequiredHeader badgeText="Requires Enterprise plan" />

Start processing data recordings with your Foxglove Agent.

### Set up directory

Configure the `STORAGE_ROOT` setting in `/etc/foxglove/agent/envfile` with the directory you want to monitor for newly recorded data files.

### Adding recording files

Move your completed recordings into the `STORAGE_ROOT`. The Agent will be notified by the filesystem when a new recording is available.

You should take care that the file contents are complete when the create notification occurs. For example, you should not stream log data directly to an mcap file in the storage root. You should also move (`mv`) files into place rather than copy (`cp`) them. If using ROS1, this is handled correctly for you because recordings are written to an ".active" file, and the Agent ignores the "active" suffix by default.

### Import to cloud

Recordings for your device will initially appear in the [Recordings page](https://console.foxglove.dev/recordings). In order to visualize and download this data, you can select these recordings and click "Import". Once the import status is displayed as "complete", the recording is available. You can also do this with the [Recordings API](https://docs.foxglove.dev/api/#tag/Recordings/paths/~1recordings~1%7Bid%7D~1import/post).

### Delete recording files

You can delete recording files as needed to manage disk space on your device. Files that were imported will remain available in Foxglove after the original is deleted. Files that were not imported before deletion will no longer appear in the Recordings page.
