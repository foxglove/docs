---
title: Manage data
description: Manage your self-hosted Primary Site's data.
---

Manage your self-hosted Primary Site's data.

### Upload data

To import data to the platform, self-managed users must upload their recordings
to the inbox bucket using one of the methods below.

Once the import is acknowledged by the platform, you will see the pending
import on the [Recordings page](https://console.foxglove.dev/recordings). Once
processed, the uploaded data will be available via the API and CLI.

#### Usage note: Idempotency keys
Foxglove's upload APIs use one of two mechanisms to ensure recordings are
processed only once, preventing duplicates.
1. Internally, Foxglove creates a unique idempotency key to avoid duplicates after reception.
2. For uploaders, if the recording is associated with a device, Foxglove will
   skip indexing of a recording if its content hash matches a recording already
   processed for that device. Without a device link, users can provide a `key`
   parameter to ensure Foxglove's backend identifies and avoids processing the
   same upload more than once. Data files for duplicate requests will be written
   to a deterministic location and thus require no clean up.

#### Importing your files
Your self-hosted deployment is connected to object notifications from your
configured inbox bucket. To import a recording, you will upload it to your inbox
bucket.

To associate your recording with metadata information, there are two available
mechanisms: object metadata and MCAP metadata. The primary advantage of using
object metadata is that it is applicable to ROS bag files. For MCAP files, MCAP
metadata accomplishes the same task while resulting in a more self-contained
file. The supported metadata keys are,
* Device name:  The name of a device to associate with the recording. Must match one that exists in Foxglove.
* Device ID: The ID of a device to associate with the recording. Must match one that exists in Foxglove.
* Key: An idempotency key to associate with the recording.

##### Object metadata
If configuring the above with object metadata, use the key names
`foxglove_device_name`, `foxglove_device_id`, and `foxglove_key`. To ensure that
your file is not read before your metadata is set, ensure that you set write the
file and set the metadata in the same operation.

##### MCAP metadata
To accomplish the same with MCAP metadata, add a Metadata record to your MCAP
file with the name "foxglove", and use the `deviceName`, `deviceId`, or `key`
values.

Python example:

```py
mcap_writer.add_metadata(
  name="foxglove",
  metadata={ "deviceId": "dev_abc123" },
)
```

If the device ID is specified in both MCAP metadata and object metadata as documented above, object metadata takes precedence.

If more than one metadata record is present in the MCAP with the name `foxglove`, only the last record in the file will be used.

#### Cloud CLI uploads

The following are some examples of how to upload objects with metadata to the
various cloud SDKs. You can adapt to your needs according to the directions
above.

##### Microsoft Azure

```bash
$ az storage blob upload -f ~/data/bags/gps.bag --container-name inbox --account-name yourorgfgstorage -n gps.bag --overwrite --metadata foxglove_device_id=dev_03ooHzt1GRRdnGrP
```

##### Google Cloud Storage

```bash
$ gsutil -h "x-goog-meta-foxglove_device_id:<your device id>" cp <input.bag> gs://<your inbox bucket>/<path>
```

##### Amazon S3

```bash
$ aws s3 cp input.bag s3://<inbox-bucket>/<path> --metadata '{"foxglove_device_id": "<your device ID>"}'
```
