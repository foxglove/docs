---
title: Concepts
description: Description of concepts used in Webhooks.
---

import AccountRequiredHeader from "../../src/components/docs/icons/AccountRequiredHeader";

<AccountRequiredHeader badgeText="Closed Beta, contact us for access" />

### Webhooks

A webhook subscribes your endpoint to notifications for a set of event types.

A webhook can be disabled and re-enabled. When disabled, notifications will not be delivered to your endpoint.

When you create a webhook, you receive a random token. This token allows you to verify the origin of POST requests to your endpoint. See [Webhook Security](3-security.md) for details on how to secure your webhook endpoint.

### Webhook events

Webhook events are records of occurrences within your Foxglove org. A webhook event consists of a _timestamp_, an _event type_, and data about the event, specific to that type.

The following event types are available:

| Name                 | Description                                                                     | Payload Data                                                                          |
| -------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `recording.imported` | Occurs when a recording finishes [importing](./importing-data).                 | `recordingId`: The recording ID.                                                      |
| `device.created`     | Occurs when a new [Device](./importing-data#add-a-device) is added to your Org. | `deviceId`: The device ID.                                                            |
| `event.created`      | Occurs when a new [Event](./events) is added to your Org.                       | `eventId`: The event ID.                                                              |
| `ping`               | Ping event for debugging webhook endpoint connectivity.                         | `webhookId`: The webhook being pinged. Only this webhook will receive a notification. |

### Notifications

A notification is what your webhook endpoint receives when an event occurs. Notifications are delivered as POST requests to your HTTP(S) endpoint.

A notification is delivered in the following form:

#### Request headers

| Key                    | Value                                                                                |
| ---------------------- | ------------------------------------------------------------------------------------ |
| `Content-Type`         | `application/json`                                                                   |
| `fg-webhook-signature` | a SHA256 HMAC signature verifying the request body as originating from your webhook. |

#### Request body

A JSON object with the following keys:

| Key                   | Type                        | Description                                                                                                                           |
| --------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `timestamp`           | RFC3339-formatted timestamp | When the event occurred                                                                                                               |
| `deliveryAttemptedAt` | RFC3339-formatted timestamp | When this delivery was attempted                                                                                                      |
| `webhookId`           | string                      | The ID of the webhook that notified your endpoint                                                                                     |
| `eventId`             | string                      | A unique ID for this event. This is not unique across all notifications, since more than one webhook can notify about the same event. |
| `payload`             | object                      | Data about the event.                                                                                                                 |

The `payload` attribute will be an object with a `type` attribute matching the event type and some additional keys depending on the event type. See [Webhook Events](#webhook-events) above for descriptions of those keys.

### Deliveries

A delivery is an attempt to deliver a notification to your endpoint. Foxglove records recent deliveries along with details of failures, which can be viewed in the [setting for your Webhook](https://console.foxglove.dev/settings/webhooks/).

#### Delivery semantics

We target at-least-once delivery semantics for webhook notifications. This means a notification can be delivered more than once. Admins may also manually retry failed deliveries. This means your application may receive a notification long after the event occurs.

The combination of the `webhookId` and `webhookEventId` in the notification request body is unique to that notification. To de-duplicate notification deliveries, you can use (`webhookId`, `webhookEventId`) as an idempotency key.
