---
title: Introduction
description: Webhooks notify your software when events happen within your Org.
---

import AccountRequiredHeader from "../../src/components/docs/icons/AccountRequiredHeader";

<AccountRequiredHeader badgeText="Requires Enterprise plan" />

Webhooks notify your software when events happen within your Org. Webhooks are useful when building automated systems that consume data after it has been uploaded, or to synchronize state between your Org and your own internal services.

You create a _webhook_ that causes _notifications_ about _events_ to be _delivered_ to your _webhook endpoint_. Notifications are delivered as HTTP POST requests with a JSON payload.

### Webhooks

A webhook subscribes your endpoint to notifications for a set of event types.

Webhooks can be disabled and re-enabled. When disabled, notifications will not be delivered to your API endpoint.

When you create a webhook, you receive a random token. This token allows you to verify the origin of POST requests to your endpoint. See [Webhook Security](2-security.md) for details on how to secure your webhook endpoint.

Admins can create, edit, and delete webhooks in [Org Settings](https://console.foxglove.dev/settings/webhooks/).

### Webhook events

Webhook events are records of occurrences within Foxglove. A webhook event consists of a _timestamp_, an _event type_, and data about the event, specific to that type.

When an event occurs, all webhooks that subscribe to that event type receive a notification containing event data.

The following event types are available:

| Name                 | Description                                                                     | Additional keys                                                                       |
| -------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `recording.imported` | Occurs when a recording finishes [importing](./importing-data).                 | `recordingId`: The recording ID.                                                      |
| `device.created`     | Occurs when a new [Device](./importing-data#add-a-device) is added to your Org. | `deviceId`: The device ID.                                                            |
| `event.created`      | Occurs when a new [Event](./events) is added to your Org.                       | `eventId`: The event ID.                                                              |
| `ping`               | Ping event for debugging webhook endpoint connectivity.                         | `webhookId`: The webhook being pinged. Only this webhook will receive a notification. |

### Notification

A notification is what your webhook endpoint receives when an event occurs. Notifications are delivered as JSON-formatted POST requests to an HTTPS endpoint on the public internet.

A notification is delivered in the following form:

#### Request Headers

| Key                    | Value                                                                    |
| ---------------------- | ------------------------------------------------------------------------ |
| `Content-Type`         | `application/json`                                                       |
| `fg-webhook-signature` | a signature verifying the request body as originating from your webhook. |

#### Request Body

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

We target at-least-once delivery semantics for webhook notifications. This means a notification can be delivered more than once. Admins may also manually retry failed deliveries. This means your application may receive a notification long after the event occurs.

In the [Settings](https://console.foxglove.dev/settings/webhooks/) page for your webhook you can view a history of recent
deliveries, and see failure details for deliveries that fail.

[Set up a Webhook](./1-get-started.md) to get started.
