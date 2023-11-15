---
title: Manage data
description: Start processing data with your Foxglove On-Device Agent
---

Start processing data with your Foxglove On-Device Agent.

### Watch mode

The On-Device Agent watches the directory supplied with the `--storage-root` command-line argument. No further steps are needed for the agent to become aware of recordings on the device.

### Manual mode

### Import to cloud

To access device data in Foxglove, you must first import it to your Primary Site in the cloud.

Queue import for any edge recording using the Foxglove API or the [Recordings page](https://console.foxglove.dev/recordings). The agent will process this queue using available bandwidth resources.

Once import to your Primary Site is complete, you can use the Foxglove API to access the recording.
