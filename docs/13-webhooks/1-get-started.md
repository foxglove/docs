---
title: Get Started
description: Set up your first webhook.
---

import AccountRequiredHeader from "../../src/components/docs/icons/AccountRequiredHeader";

<AccountRequiredHeader badgeText="Requires Enterprise plan" />

Set up your first Webhook.

This section will guide you through these steps:

- Create a webhook
- Test connectivity with a `ping` event
- View your delivery history
- Retry a delivery attempt

### Prerequisites

To start using webhooks, you will need:

- a service that exposes an HTTP(S) endpoint on the public internet. If your service runs inside a VPN, you can use a webhook proxy or HTTP proxy to forward notifications to your internal service.
- Admin access to a Foxglove Org on a Enterprise plan.

### Set up an example service

To give us something to work with, we'll create a simple [Bottle](https://bottlepy.org/) app to receive webhook notifications, and make it available using [ngrok](https://ngrok.com).

To follow along, you'll need a Python 3 environment with the `bottle` package installed. You will
also need an `ngrok.com` account and the `ngrok` command-line utility installed.

Save this snippet to a new python file `serve.py`:

```python title=serve.py
import hmac
from pprint import pformat

from bottle import abort, request, route, run

TOKEN = b"" # fill in your token here after you create your subscription

@route("/webhooks", method="POST")
def handle_webhook():
    print("Request content", pformat(request.json))
    digest = hmac.new(TOKEN, msg=request.body.read(), digestmod="sha256").hexdigest()
    signature = request.headers.get("fg-webhook-signature")
    if signature is None or not hmac.compare_digest(digest, signature):
        print(f"Verification failed, expected {digest}, got {signature}")
        abort(400, "Client Error")
    print("Verified OK")
    return "OK"

if __name__ == "__main__":
    run(host="localhost", port=8080, debug=False)
```

Run your server in a terminal window with `python3 serve.py`. In a second window, open a tunnel to the public internet with `ngrok http 8080`. Take note of the forwarding URL, and test it with `curl`:

```bash
$ curl -X POST -H Content-Type:application/json https://your-forwarding-url.ngrok-free.dev/webhooks -d '["hello"]'
```

You should see `Request content ['hello']` printed in your server terminal window.

### Create a new webhook

Next, we'll set up our webhook. Log into [Foxglove](https://console.foxglove.dev) and navigate to _Settings_ -> _Webhooks_.

Click the "+" button in the top right to create a new webhook.

Give it a name, and fill in your public API endpoint URL under _URL_. Select at least one event type to subscribe to, and click "Add".

After your webhook is created, you will be shown a secret token which you can use to verify the origin of notifications. Copy it into `serve.py` as your `TOKEN` string.

### Test with a `ping` event

You should see your new webhook listed under _Webhooks_. Click it to view its details.

To test connectivity, you can click the _Ping_ button in the top right to trigger a `ping` event.

Wait a few seconds, and you should see something like the following in your server terminal window:

```
Request content {
  'timestamp': '2022-10-01T06:54:29.078Z',
  'deliveryAttemptedAt': '2022-10-01T06:54:31.021Z',
  'eventId': 'whev_uDYJSMFeVF2y5ZfL',
  'webhookId': 'whk_KS6UE8rZfJ5CrBSY',
  'payload': {
    'type': 'ping',
    'webhookId': 'whk_KS6UE8rZfJ5CrBSY'
  }
}
Verified OK
```

If you see nothing, or you see some other error response, don't worry - we'll go over how to debug connectivity issues next.

### View delivery attempt history

If you refresh the webhook page in your browser, you should see a new _Delivery_ entry at the top of the page.

If your previous delivery was successful, you should see a `200` in the delivery row. Failures are more interesting, so
lets modify our server to fail on every request:

```python
...

@route("/webhooks", method="POST")
def handle_webhook():
    # Insert this line at the top of the route handler
    abort(500, "Server Error")
    # Nothing below will run
    print("Request content", request.json)
    ...
```

Restart your server in the terminal window before continuing.

Now, trigger another `ping` event from the web UI. Pretty soon you should see the failed delivery attempt under _Deliveries_. Click through to see the failure time, 500 response status and `Server Error` response body in the details.

### Retry a failed delivery attempt

You can manually retry a failed delivery attempt by clicking `Retry` from the failed delivery details page.

First, remove the `abort(500, "Server Error")` line from your server, and restart it again to restore it to working order.

Then, click `Retry` and wait for the next delivery attempt. You should see a new successful delivery appear under _Deliveries_.

### Next steps

Congratulations! 🦊 You can now configure webhooks, view delivery attempts, and retry them manually.
