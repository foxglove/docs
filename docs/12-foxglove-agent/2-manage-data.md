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

The Foxglove Agent receives filesystem notifications when files are created in the data directory. This notification is triggered when a file is created. To avoid triggering notifications on incomplete files, data files should be [renamed](https://man7.org/linux/man-pages/man1/rename.1.html) into the `STORAGE_ROOT` directory after writing (use `mv` rather than `cp`). Alternatively, you can write files into the `STORAGE_ROOT` directory with an ignored filename suffix, and then rename it to remove the suffix after writing. The ignored suffix defaults to `.active` and can be customized with the `WATCH_IGNORE_SUFFIX` environment variable.

**Note:** The ROS 1 bag writer uses an `.active` suffix on incomplete files by default, and can be used to write directly into the `STORAGE_ROOT`.

### Import to cloud

Recordings for your device will initially appear in the [Recordings page](https://console.foxglove.dev/recordings). In order to visualize and download this data, you can select these recordings and click "Import". Once the import status is displayed as "complete", the recording is available. You can also do this with the [Recordings API](https://docs.foxglove.dev/api/#tag/Recordings/paths/~1recordings~1%7Bid%7D~1import/post).

### Delete recording files

You can delete recording files as needed to manage disk space on your device. Files that were imported will remain available in Foxglove after the original is deleted. Files that were not imported before deletion will no longer appear in the Recordings page.
