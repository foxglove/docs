---
title: API
description: The Foxglove REST API offers a programmatic interface for accessing and interacting with Foxglove resources.
---

The Foxglove REST API offers a programmatic interface for accessing and interacting with Foxglove resources.

## API keys

Organization admins must create an API key from the [Settings page](https://console.foxglove.dev/settings/apikeys).

![API key management](/img/docs/api/keys.webp)

The [Foxglove API](https://foxglove.dev/docs/api) provides endpoints for interacting with the following:

- Data resources
  - [Devices](/organizing/devices)
  - [Recordings](/organizing/recordings)
  - [Events](/organizing/events)
- Visualization tools
  - [Layouts](/visualizing/layouts)
  - [Extensions](/extensions/introduction)

View the [Foxglove API Reference](https://foxglove.dev/docs/api) for more details on all available endpoints.

## Python client

_Note: As of v0.5.0, all methods require the use of keyword arguments._

Foxglove provides a Python client library ([`py-data-platform`](https://github.com/foxglove/py-data-platform)) to more easily interact with the Foxglove API.

See specific examples for each endpoint in the [API reference](https://foxglove.dev/docs/api).

```python
from foxglove_data_platform.client import Client

token = "<YOUR API TOKEN HERE>"
client = Client(token=token)
```
