---
title: Manage data
description: Manage your self-hosted Primary Site's data.
---

Manage your self-hosted Primary Site's data.

### Upload data

When uploading data to the inbox bucket, you need to add a `foxglove_device_id` metadata key that corresponds to a device ID in your Foxglove organization.

Create a device from the [Devices page](https://console.foxglove.dev/devices) or using the CLI's `foxglove devices add` command.

Then, import data for that device according to your cloud provider.

#### Microsoft Azure

```bash
$ az storage blob upload -f ~/data/bags/gps.bag --container-name inbox --account-name yourorgfgstorage -n gps.bag --overwrite --metadata foxglove_device_id=dev_03ooHzt1GRRdnGrP
```

#### Google Cloud Storage

```bash
$ gsutil -h "x-goog-meta-foxglove_device_id:<your device id>" cp <input.bag> gs://<your inbox bucket>/<path>
```

#### Amazon S3

```bash
$ aws s3 cp input.bag s3://<inbox-bucket>/<path> --metadata '{"foxglove_device_id": "<your device ID>"}'
```

You will see the pending import on the [Recordings page](https://console.foxglove.dev/recordings). Once processed, the uploaded data will be available via the API and CLI.

### Specify a device in MCAP metadata

If you are importing MCAP files, you can specify the associated device ID in an [MCAP metadata record](https://mcap.dev/specification/index.html#metadata-op0x0c) rather than in object metadata as described above. You may also specify a device name rather than an ID.

1. Include a metadata record named `foxglove`
2. In that record, either:
   - add your device ID with a key of "deviceId"
   - add your device name with a key of "deviceName"

Note, if referring to a device by name, that the device must be known to Foxglove in advance. If you supply a device name which doesn't have an associated Foxglove ID, your import will fail. Add the device from the [Devices page](https://console.foxglove.dev/devices).

Python example:

```py
mcap_writer.add_metadata(
  name="foxglove",
  metadata={ "deviceId": "dev_abc123" },
)
```

If the device ID is specified in both MCAP metadata and object metadata as documented above, object metadata takes precedence.

If more than one metadata record is present in the MCAP with the name `foxglove`, only the last record in the file will be used.
