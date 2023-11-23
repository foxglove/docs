---
title: Security
description: Secure your webhook endpoint.
---

import AccountRequiredHeader from "../../src/components/docs/icons/AccountRequiredHeader";

<AccountRequiredHeader badgeText="Requires Enterprise plan" />

Secure your webhook endpoint.

### Verify the origin of webhook deliveries

When you create a webhook, you will be shown a secret token which is only displayed once.

This token is used as a HMAC secret key to sign the webhook delivery request body. This signature
will be included with the request in a `fg-webhook-signature` header.

Here's an example of a verification function in Python.

```python
import hmac

def request_originates_from_foxglove(token, request_body, signature):
    digest = hmac.new(token, msg=request_body, digestmod="sha256").hexdigest()
    return hmac.compare_digest(digest, signature)
```

### Protect against replay attacks

Verifying signatures prevents an attacker from forging webhook delivery content. However, if an attacker is able to obtain a copy of a legitimate webhook delivery, they can send it to your endpoint repeatedly or at an unexpected time, potentially causing unexpected behavior.

Ideally, your system's behavior on notification delivery is idempotent. This means if a notification is delivered more than once, your application's state is not affected. This is enough to make replay attacks ineffective. However for some applications you will need to de-duplicate requests before taking action.

For every webhook notification, the combination of `webhookId` and `eventId` is unique. If a delivery arrives with the same (`webhookId`, `eventId`) as a previous request, your system can safely assume that it is a re-delivery of a previous notification. Therefore, by maintaining a cache of recent (`webhookId`, `eventId`) values received from
Foxglove, your system can de-duplicate requests before taking action.

In order to keep this cache from growing indefinitely, it is neccessary to expire keys after a certain period, let's say 5 minutes. Knowing this, an attacker might save an old webhook delivery, store it for more than 5 minutes, and then re-deliver it after the key has expired from the cache. To help prevent this, Foxglove includes a `deliveryAttemptedAt` timestamp in the POST request body of each delivery. Your system can reject requests where `deliveryAttemptedAt` is older than cache expiry period.

### Summary

In summary, a good practice for securing your webhook endpoint is to maintain a cache of recent (`webhookId`, `eventId`) values received, and for each request:

1. Verify the request body against `fg-webhook-signature` with your secret token. If verification fails, reject the request.
2. Parse the body content
3. Check if `deliveryAttemptedAt` is older than your cache expiry period. If so, reject the request.
4. Check if the `webhookId` and `eventId` match an existing entry in your cache. If so, reject the request.
5. Insert (`webhookId`, `eventId`) into your cache.
6. Act on the request body content.
