---
title: Manage data
description: Start processing data with your Foxglove On-Device Agent
---

Start processing data with your Foxglove On-Device Agent.

All recordings should be placed in a directory identified by the `--storage-root` flag given to the binary. Subdirectories within this storage root are allowed.

### Watch mode

If `--watch-mode[=true]` is supplied to the binary, the On-Device Agent watches the directory supplied with the `--storage-root` command-line argument. No further steps are needed for the agent to become aware of recordings on the device.

### Manual mode

If you are not running in watch mode, you may notify the agent of new recordings via an HTTP request.

1. Start the agent with the `--port` command to start a server on the specified port. If not specified, a default of 9099 is used.
2. Write the recording to the storage root directory
3. Make an HTTP POST request to the agent's `/v1/recordings` endpoint. The request body must include a `path` relative to the `--storage-root` setting:

Example:

```shell
$ curl -X POST http://localhost:9099/v1/recordings -d '{"path": "path/to/log.mcap" }'
```

The agent will store information about the file and notify the Foxglove control plane. Your recording will appear on the [Recordings page](https://console.foxglove.dev/recordings) and be available via the recordings API endpoint.

### Import to cloud

To access device data in Foxglove, you must first import it to your Primary Site in the cloud.

Queue import for any edge recording using the Foxglove API or the [Recordings page](https://console.foxglove.dev/recordings). The agent will process this queue using available bandwidth resources.

Once import to your Primary Site is complete, you can use the Foxglove API to access the recording.
