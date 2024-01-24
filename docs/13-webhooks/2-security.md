---
title: Security
description: Secure your webhook endpoint.
---

import AccountRequiredHeader from "../../src/components/docs/icons/AccountRequiredHeader";

<AccountRequiredHeader badgeText="Requires Team or Enterprise plan" />

Secure your webhook endpoint.

### Verify the signature

Verifying signatures prevents an attacker from forging webhook delivery content.

After creating a webhook, a secret token is displayed once. This token is used as a HMAC secret key to sign the bytes of the full webhook delivery request body. Include the signature in the request's `fg-webhook-signature` header for verification.

Here's a Python example:

```python
import hmac

def request_originates_from_foxglove(token, request_body, request_headers):
    signature = request_headers["fg-webhook-signature"]
    digest = hmac.new(token, msg=request_body, digestmod="sha256").hexdigest()
    return hmac.compare_digest(digest, signature)
```

### Protect against replay attacks

If an attacker is able to obtain a copy of a legitimate webhook delivery, they can re-send it to your endpoint.

Ensure your endpoint's behavior is idempotent by de-duplicating notifications on (`webhookId`, `webhookEventId`). You can also use `deliveryAttemptedAt` to reject deliveries older than 1 minute.
