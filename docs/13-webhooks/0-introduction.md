---
title: Introduction
description: Webhooks notify your software when events happen within your Foxglove organization.
---

import AccountRequiredHeader from "../../src/components/docs/icons/AccountRequiredHeader";

<AccountRequiredHeader badgeText="Closed Beta, contact us for access" />

Webhooks notify your software when events happen within your Foxglove organization.

When you create a webhook, notifications about events are delivered to your webhook endpoint as HTTPS POST requests with a JSON body.

Go to the [Webhooks settings page](https://console.foxglove.dev/settings/webhooks/) to view a recent history of successful and failed deliveries.

## Concepts

### Endpoints

Webhooks deliver POST requests to an HTTPS endpoint of your application. Your endpoint must be accessible over the public internet.

Your endpoint must respond quickly to HTTPS requests. A response time over 5 seconds is considered a timeout and the delivery may be retried.

### Webhooks

A webhook subscribes your endpoint to notifications for a set of event types.

A webhook can be disabled and re-enabled. When disabled, notifications will not be delivered to your endpoint.

When you create a webhook, you receive a random token. This token allows you to verify that POST requests to your endpoint originated from your webhook. You can also [secure your webhook endpoints](2-security.md).

### Webhook events

Webhook events are records of occurrences within your Foxglove organization.

A webhook event consists of a _timestamp_, an _event type_, and additional data about the event specific to that type.

| event type           | description                                                                          |
| -------------------- | ------------------------------------------------------------------------------------ |
| `recording.imported` | When a recording finishes [importing](/docs/importing-data)                          |
| `device.created`     | When a new [Device](/docs/importing-data#add-a-device) is added to your organization |
| `event.created`      | When a new [Event](/docs/events) is added to your organization                       |
| `ping`               | Ping event for debugging webhook endpoint connectivity                               |

### Notifications

A notification is what your webhook endpoint receives when an event occurs. Notifications are delivered as POST requests to your HTTPS endpoint. Notifications may be delivered more than once.

The HTTP request of a notification contains the signature in the header and the notification details in the body.

#### Request headers

| key                    | value                                                                                                                                   |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `Content-Type`         | `application/json`                                                                                                                      |
| `fg-webhook-signature` | A SHA256 HMAC digest of the entire request body bytes, with your webhook token as the secret. Used to verify the sender of the request. |

#### Request body

The request body is formatted as a JSON object with the following keys:

| key              | type                        | description                                   |
| ---------------- | --------------------------- | --------------------------------------------- |
| `timestamp`      | RFC3339-formatted timestamp | When the webhook event occurred               |
| `attemptedAt`    | RFC3339-formatted timestamp | When the delivery was attempted               |
| `webhookId`      | string                      | ID of the webhook that notified your endpoint |
| `webhookEventId` | string                      | ID of the associated webhook event            |
| `type`           | string                      | Type of event                                 |

An additional property has an object type – its name and value properties depend on the event type:

| event type           | name        | value properties                                                                |
| -------------------- | ----------- | ------------------------------------------------------------------------------- |
| `recording.imported` | `recording` | - `id`: Recording ID <p/> - `path`: The filepath the recording was created with |
| `device.created`     | `device`    | `id`: Device ID                                                                 |
| `event.created`      | `event`     | `id`: Event ID                                                                  |
| `ping`               | `webhook`   | `id`: Webhook ID                                                                |

### Deliveries

A delivery is a record of an attempt to deliver a notification to your endpoint. Foxglove displays a recent history of successful and failed deliveries on the [Webhook settings page](https://console.foxglove.dev/settings/webhooks/).

#### Delivery semantics

Foxglove guarantees at-least-once delivery for webhook notifications. Each notification has a unique combination of `webhookId` and `webhookEventId` values. This can be used to de-duplicate deliveries of notifications received by your endpoint.

Either a non-response or a non-2xx HTTP status are considered failures. Failures will be automatically retried up to 5 times, with an increasing delay between attempts. You can use the [Retry-After](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After) header on your endpoint's response to set a minimum bound on this delay time.

Admins can also manually retry failed deliveries. Manual retries disable the automatic retry mechanism for that notification.
