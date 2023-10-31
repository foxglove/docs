---
title: Live data
description: Connect to live data sources with the Foxglove WebSocket, Rosbridge, and Velodyne Lidar connections. You can also load remote data files via URL.
---

Connect to live data sources with the Foxglove WebSocket, Rosbridge, and Velodyne Lidar connections. You can also load remote data files via URL.

### Supported formats

|                        | Supported formats                                                                                                                                                                                                           | Configuration options                                            |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| **Foxglove WebSocket** | <ul><li>[ROS 1](frameworks/ros1#foxglove-websocket)</li><li>[ROS 2](frameworks/ros2#foxglove-websocket)</li><li>[Custom](frameworks/custom#foxglove-websocket)</li><li>[MCAP](frameworks/mcap#foxglove-websocket)</li></ul> | WebSocket URL                                                    |
| **Rosbridge**          | <ul><li>[ROS 1](frameworks/ros1#rosbridge)</li><li>[ROS 2](frameworks/ros2#rosbridge)</li></ul>                                                                                                                             | WebSocket URL                                                    |
| **ROS 1**              | [ROS 1](frameworks/ros1#native) (Desktop app only)                                                                                                                                                                          | `ROS_MASTER_URI` and `ROS_HOSTNAME`                              |
| **Velodyne Lidar**     | [Velodyne](frameworks/velodyne) (Desktop app only)                                                                                                                                                                          | UDP port                                                         |
| **Remote file**        | <ul><li>[ROS 1](frameworks/ros1#remote-file)</li><li>[MCAP](frameworks/mcap#remote-file)</li></ul>                                                                                                                          | Requires [CORS setup](#cross-origin-resource-sharing-cors-setup) |


### Limitations

When connecting to a live robotics stack, each connection will have different capabilities.

|                             | Foxglove WebSocket (recommended) | Rosbridge                                                       | ROS 1 |
| --------------------------- | -------------------------------- | --------------------------------------------------------------- | ----- |
| **Stream ROS 1 data**       | ✓                                | ✓                                                               | ✓     |
| **Stream ROS 2 data**       | ✓                                | ✓                                                               |       |
| **Stream custom data**      | ✓                                |                                                                 |       |
| **Custom message schemas**  | ✓                                | ✓                                                               | ✓     |
| **Publish messages**        | ✓ (ROS 1, ROS 2, JSON)           | ✓                                                               | ✓     |
| **Call services**           | ✓                                | ✓                                                               |       |
| **Call actions**            |                                  |                                                                 |       |
| **Read and set parameters** | ✓                                | [`studio#2645`](https://github.com/foxglove/studio/issues/2645) | ✓     |

### Cross-Origin Resource Sharing (CORS) setup

To load remote data files, you must host your files in a server or cloud provider that supports Cross-Origin Resource Sharing (CORS) and accepts range requests.

When loading remote data into Foxglove for playback and analysis, we recommend hosting your files in a cloud provider like [Amazon Simple Storage Service (S3)](https://aws.amazon.com/pm/serv-s3/), [Google Cloud Storage (GCS)](https://cloud.google.com/storage), or [Azure Storage](https://azure.microsoft.com/en-us/product-categories/storage/). You can also host files on your own server, but it may be difficult and time-consuming to set up support for [Cross-Origin Resource Sharing (CORS)](https://web.dev/cross-origin-resource-sharing/) and [range requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/Range_requests).

If your data is sensitive, generate and use a signed URL – make sure that you point to the resource directly, as redirects will not work with CORS:

- **S3** – [Sharing objects using presigned URLs](https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html)
- **GCS** – [Signed URLS](https://cloud.google.com/storage/docs/access-control/signed-urls)
- **Azure Storage** – [Grant limited access to Azure Storage resources using shared access signatures (SAS)](https://docs.microsoft.com/en-us/azure/storage/common/storage-sas-overview)

This signed URL will work for a limited period of time. You can set up your server to only sign URLs for authenticated users.

Finally, set up your CORS configuration. Check out the following example of a [Terraform](https://www.terraform.io/) config for an S3 bucket ([docs](https://registry.terraform.io/providers/hashicorp%20%20/aws/latest/docs/resources/s3_bucket_cors_configuration)):

```
cors_rule {
  allowed_methods = ["GET", "HEAD", "OPTIONS"]
  allowed_origins = ["https://studio.foxglove.dev"]
  allowed_headers = ["*"]
  expose_headers = ["ETag", "Content-Type", "Accept-Ranges", "Content-Length"]
}
```

And a Terraform config for a GCS bucket ([docs](https://registry.terraform.io/providers/hashicorp/google/latest/docs/resources/storage_bucket#cors)):

```
cors {
  origin = ["https://studio.foxglove.dev"]
  method = ["GET", "HEAD", "OPTIONS"]
  response_header = ["ETag", "Content-Type", "Accept-Ranges", "Content-Length"]
}
```

## Links and resources

- [MCAP](https://mcap.dev)
- [Introducing the MCAP File Format](https://foxglove.dev/blog/introducing-the-mcap-file-format)
- [Open a Foxglove bridge connection](https://foxglove.dev/blog/announcing-the-new-foxglove-bridge-for-live-ros-data)
