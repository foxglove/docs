---
title: Via API
---


export const meta = {
  title: "Introduction",
  description: "Foxglove Data Platform REST API.",
};

The Foxglove REST API offers a programmatic interface for accessing and interacting with Foxglove Data Platform.

**Organization admins** must create an API key from the [_Settings_ page](https://console.foxglove.dev/settings/apikeys).

![API key management](/img/docs/data-platform/api-keys.webp)

See the [API reference](https://foxglove.dev/docs/api) for documentation on available endpoints.

## Python client

We provide a Python client library ([`py-data-platform`](https://github.com/foxglove/py-data-platform)) to more easily interact with the Foxglove API.

Note: As of v0.5.0, all methods require the use of keyword arguments.

See specific examples under endpoint documentation in the [API reference](https://foxglove.dev/docs/api).

```python
from foxglove_data_platform.client import Client

token = "<YOUR API TOKEN HERE>"
client = Client(token=token)
```
