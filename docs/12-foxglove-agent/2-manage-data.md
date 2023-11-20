---
title: Manage data
description: Start processing data with your Foxglove Agent
---

import AccountRequiredHeader from "../../src/components/docs/icons/AccountRequiredHeader";

<AccountRequiredHeader badgeText="Requires Enterprise plan" />

Start processing data with your Foxglove Agent.

All recordings should be placed in a directory identified by the `STORAGE_ROOT` configuration setting in `/etc/foxglove/agent/envfile`.

### Import to cloud

Recordings for your device will initially appear in the [Recordings page](https://console.foxglove.dev/recordings). In order to visualize and download this data, you can select these recordings and click "Import". Once the import status is displayed as "complete", the recording is available. You can also do this with the [Recordings API](https://docs.foxglove.dev/api/#tag/Recordings/paths/~1recordings~1%7Bid%7D~1import/post).
