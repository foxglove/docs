---
title: Get Started
description: Set up your first webhook.
---

import AccountRequiredHeader from "../../src/components/docs/icons/AccountRequiredHeader";

<AccountRequiredHeader badgeText="Closed Beta, contact us for access" />

This page will guide you through these steps:

- Create a webhook
- Test connectivity with a `ping` event
- View your delivery history
- Retry a delivery attempt

### Prerequisites

To start using webhooks, you will need:

- An application that exposes an HTTP(S) endpoint on the public internet. If your application runs inside a VPN, you can use a webhook proxy or HTTP proxy to forward notifications to your internal application.
- Admin access to a Foxglove organization on a Enterprise plan.

### Create a new webhook

Log into [Foxglove](https://console.foxglove.dev) and navigate to _Settings_ -> _Webhooks_.

Click the "+" button in the top right to create a new webhook.

Give it a name, and fill in your public API endpoint URL under _URL_. Select at least one event type to subscribe to, and click "Add".

After your webhook is created, you will be shown a secret token which you can use to verify the sender of notifications.

### Test with a `ping` event

You should see your new webhook listed under _Webhooks_. Click it to view its details.

To test connectivity, you can click the _Ping_ button in the top right to trigger a `ping` event.

Your application will receive a POST request with a body similar to this:

```
{
  "timestamp": "2022-10-01T06:54:29.078Z",
  "deliveryAttemptedAt": "2022-10-01T06:54:31.021Z",
  "eventId": "whev_uDYJSMFeVF2y5ZfL",
  "webhookId": "whk_KS6UE8rZfJ5CrBSY",
  "payload": {
    "type": "ping",
    "webhookId": "whk_KS6UE8rZfJ5CrBSY"
  }
}
```

### View delivery attempt history

If you refresh the webhook page in your browser, you should see a new _Delivery_ entry at the top of the page.

If your previous delivery was successful, you should see a `200` in the delivery row. If your application did not respond, or responded with a non-200 HTTP status, you should see a failed delivery attempt under _Deliveries_. Click through to see the failure time, 500 response status and `Server Error` response body in the details.

### Retry a failed delivery attempt

You can manually retry a failed delivery attempt by clicking `Retry` from the failed delivery details page.

### Next steps

Congratulations! 🦊 You can now configure webhooks, view delivery attempts, and retry them manually.
