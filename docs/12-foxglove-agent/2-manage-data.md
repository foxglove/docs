---
title: Manage data
description: Start processing data recordings with your Foxglove Agent.
---

import AccountRequiredHeader from "../../src/components/docs/icons/AccountRequiredHeader";

<AccountRequiredHeader badgeText="Requires Enterprise plan" />

Start processing data recordings with your Foxglove Agent.

### Set up directory

Configure the `STORAGE_ROOT` setting in `/etc/foxglove/agent/envfile` with the directory you want to monitor for newly recorded data files.

### Import to cloud

Recordings for your device will initially appear in the [Recordings page](https://console.foxglove.dev/recordings). In order to visualize and download this data, you can select these recordings and click "Import". Once the import status is displayed as "complete", the recording is available. You can also do this with the [Recordings API](https://docs.foxglove.dev/api/#tag/Recordings/paths/~1recordings~1%7Bid%7D~1import/post).

### Delete recording files

You can delete recording files as needed to manage disk space on your device. Files that were imported will remain available in Foxglove after the original is deleted. Files that were not imported before deletion will no longer appear in the Recordings page.
