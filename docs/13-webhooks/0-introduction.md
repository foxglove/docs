---
title: Introduction
description: Webhooks notify your software when events happen within your Org.
---

import AccountRequiredHeader from "../../src/components/docs/icons/AccountRequiredHeader";

<AccountRequiredHeader badgeText="Closed Beta, contact us for access" />

Webhooks notify your software when events happen within your Foxglove org. Webhooks help synchronize state by providing push notifications for these events.

You create a _webhook_ that causes _notifications_ about _events_ to be _delivered_ to your _webhook endpoint_. Notifications are delivered as HTTP(S) POST requests with a JSON body. Check the [Concepts](./1-concepts.md) page for more details on each.

In the [Settings](https://console.foxglove.dev/settings/webhooks/) page for your webhook you can view a history of recent deliveries, and see failure details for deliveries that fail.

[Set up a Webhook](./2-get-started.md) to get started.
