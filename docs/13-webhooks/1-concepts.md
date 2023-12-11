---
title: Concepts
description: Description of concepts used in Webhooks.
---

import AccountRequiredHeader from "../../src/components/docs/icons/AccountRequiredHeader";

<AccountRequiredHeader badgeText="Closed Beta, contact us for access" />

### Endpoints

Webhooks deliver HTTP(S) POST requests to an HTTP endpoint of your application. Your endpoint must be accessible over the public internet.

### Webhooks

A webhook subscribes your endpoint to notifications for a set of event types.

A webhook can be disabled and re-enabled. When disabled, notifications will not be delivered to your endpoint.

When you create a webhook, you receive a random token. This token allows you to verify that POST requests to your endpoint originated from your webhook. See [Webhook Security](3-security.md) for details on how to secure your endpoint.

### Webhook events

Webhook events are records of occurrences within your Foxglove org. A webhook event consists of a _timestamp_, an _event type_, and data about the event, specific to that type.

The following event types are available:

| Name                 | Description                                                                              |
| -------------------- | ---------------------------------------------------------------------------------------- |
| `recording.imported` | Occurs when a recording finishes [importing](./importing-data).                          |
| `device.created`     | Occurs when a new [Device](./importing-data#add-a-device) is added to your organization. |
| `event.created`      | Occurs when a new [Event](./events) is added to your organization.                       |
| `ping`               | Ping event for debugging webhook endpoint connectivity.                                  |

### Notifications

A notification is what your webhook endpoint receives when an event occurs. Notifications are delivered as POST requests to your HTTP(S) endpoint.

A notification is delivered in the following form:

#### Request headers

| Key                    | Value                                                                                                                             |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `Content-Type`         | `application/json`                                                                                                                |
| `fg-webhook-signature` | a SHA256 HMAC digest of the entire request body, with your webhook token as the secret. Used to verify the sender of the request. |

#### Request body

A JSON object with the following keys:

| Key                   | Type                        | Description                                       |
| --------------------- | --------------------------- | ------------------------------------------------- |
| `timestamp`           | RFC3339-formatted timestamp | When the webhook event occurred                   |
| `deliveryAttemptedAt` | RFC3339-formatted timestamp | When this delivery was attempted                  |
| `webhookId`           | string                      | The ID of the webhook that notified your endpoint |
| `webhookEventId`      | string                      | The ID of the associated webhook event.           |
| `type`                | string                      | The type of event                                 |

There is also an additional property with an object value type. The property name and value properties depend on the event type:

| Event Type           | Name        | Value Properties                                                                     |
| -------------------- | ----------- | ------------------------------------------------------------------------------------ |
| `recording.imported` | `recording` | - `id`: The recording ID <p/> - `path`: The filepath the recording was created with. |
| `device.created`     | `device`    | - `id`: The device ID.                                                               |
| `event.created`      | `event`     | - `id`: The event ID.                                                                |
| `ping`               | `webhook`   | - `id`: The webhook ID.                                                              |

### Deliveries

A delivery is an attempt to deliver a notification to your endpoint. Foxglove records recent deliveries along with details of failures, which can be viewed in the [setting for your Webhook](https://console.foxglove.dev/settings/webhooks/).

#### Delivery semantics

We guarantee at-least-once delivery for webhook notifications. This means a notification can be delivered more than once. Admins may also manually retry failed deliveries.

The combination of the `webhookId` and `webhookEventId` in the notification request body is unique to that notification.
