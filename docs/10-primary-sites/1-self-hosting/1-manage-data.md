---
title: Manage data
description: Manage your self-hosted Primary Site's data.
---

Manage your self-hosted Primary Site's data.

### Uploading data

To import data to Foxglove, self-managed users must upload their recordings to their configured inbox bucket. Once acknowledged, the pending import will appear on the [Recordings page](https://app.foxglove.dev/~/recordings). Once processed, its data will be available via the [API](/api) and [CLI](/docs/cli).

#### Prevent duplication with idempotency keys

Foxglove's upload APIs use one of two mechanisms to ensure recordings are processed only once:

- Internally, Foxglove creates a unique idempotency key to avoid duplicates after reception.
- For recordings associated with a device, Foxglove will verify that its content hash doesn't match any other recording already processed for that device before indexing it. For recordings without an associated device, users can provide a unique `key` parameter to help Foxglove avoids processing the same upload more than once. Data files for duplicate requests are written to a deterministic location and thus require no clean up.

### Adding metadata to imports

Associate your recording with metadata information for more self-contained files:

- **Object metadata** - For ROS bag files
- **MCAP metadata** – For [MCAP files](https://mcap.dev)

Both types of metadata support the following keys:

- **Device name** – Name of device associated with the recording (must match an existing Foxglove device)
- **Device ID** – ID of device associated with the recording (must match an existing Foxglove device)
- **Key** – Idempotency key associated with the recording

If a device ID is specified in both MCAP metadata and object metadata, object metadata will take precedence.

If an MCAP file has more than one metadata record with `name="foxglove"`, the file's last record will take precedence.

#### Object metadata

Add object metadata to your files using the following key names:

- `foxglove_device_name`
- `foxglove_device_id`
- `foxglove_key`

To ensure that your file is not read before your metadata is set, write the file and set the metadata in the same operation.

#### MCAP metadata

Add MCAP metadata to your files using `name="foxglove` and the following key names:

- `deviceName`
- `deviceId`
- `key`

An example using [MCAP's Python library](https://mcap.dev/docs/python/):

```py
mcap_writer.add_metadata(
  name="foxglove",
  metadata={ "deviceId": "dev_abc123" },
)
```

### Cloud CLI uploads

You can use the command line to upload objects with metadata to various cloud SDKs. Adapt the following examples to your team's unique needs.

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
