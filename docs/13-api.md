---
title: API
description: The Foxglove REST API offers a programmatic interface for accessing and interacting with Foxglove resources.
---

The Foxglove REST API offers a programmatic interface for accessing and interacting with Foxglove resources.

The [Foxglove API](/api) provides endpoints for interacting with the following:

- Data resources
  - [Devices](/docs/devices)
  - [Recordings](/docs/recordings)
  - [Events](/docs/events)
- Visualization tools
  - [Layouts](/docs/visualization/layouts)
  - [Extensions](/docs/visualization/extensions/introduction)

View the [Foxglove API Reference](/api) for more details on all available endpoints.

## API keys

Organization admins must create an API key from the [Settings page](https://app.foxglove.dev/~/settings/apikeys).

![API key management](/img/docs/api/keys.webp)

## Python client

_Note: As of v0.5.0, all methods require the use of keyword arguments._

Foxglove provides a Python client library ([`py-data-platform`](https://github.com/foxglove/py-data-platform)) to more easily interact with the Foxglove API.

See specific examples for each endpoint in the [API reference](/api).

```python
from foxglove_data_platform.client import Client

token = "<YOUR API TOKEN HERE>"
client = Client(token=token)
```
