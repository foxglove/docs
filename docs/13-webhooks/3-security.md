---
title: Security
description: Secure your webhook endpoint.
---

import AccountRequiredHeader from "../../src/components/docs/icons/AccountRequiredHeader";

<AccountRequiredHeader badgeText="Closed Beta, contact us for access" />

Secure your webhook endpoint.

### Verify the signature

When you create a webhook, you will be shown a secret token which is only displayed once.

This token is used as a HMAC secret key to sign the webhook delivery request body. This signature
will be included with the request in a `fg-webhook-signature` header.

Here's an example of a verification function in Python.

```python
import hmac

def request_originates_from_foxglove(token, request_body, request_headers):
    signature = request_headers["fg-webhook-signature"]
    digest = hmac.new(token, msg=request_body, digestmod="sha256").hexdigest()
    return hmac.compare_digest(digest, signature)
```

### Protect against replay attacks

Verifying signatures prevents an attacker from forging webhook delivery content. However, if an attacker is able to obtain a copy of a legitimate webhook delivery, they can re-send it to your endpoint.

You can ensure your endpoint's behavior is idempotent by de-duplicating notifications on (`webhookId`, `webhookEventId`). You can also use `deliveryAttemptedAt` to reject deliveries older than 1 minute.
