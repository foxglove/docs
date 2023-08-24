---
title: Raw Messages
description: Inspect a particular message path in your data source.
---

Inspect a particular [message path](/docs/studio/app-concepts/message-path-syntax) in your data source.

As new messages are received for a given path, the collapsible tree will show just the latest data. You will be able to expand and collapse keys, and have those changes persist across playback.

![raw messages panel](/img/docs/visualizing/panels/raw-messages/panel.webp)

A link to the topic's schema is at the top of display for easy reference.

![raw messages schema](/img/docs/visualizing/panels/raw-messages/schema.webp)

Drilling down to a primitive value (i.e. number, string, boolean) will display that value in large text.

![raw messages large num display](/img/docs/visualizing/panels/raw-messages/large-num.webp)

## User interactions

### Diff mode

Compare messages by showing additions (green), deletions (red), and changes (yellow) to their fields across 3 categories:

- `"previous message"` – Compare consecutive messages for a given message path
- `"other source"` - Compare messages from different data sources for a given timestamp
- `"custom"` – Compare different topic messages for a given timestamp

![raw messages diff prev msg](/img/docs/visualizing/panels/raw-messages/diff/prev-msg.webp)
![raw messages diff custom](/img/docs/visualizing/panels/raw-messages/diff/custom.webp)

Click "Copy msg" to copy the current topic message to your clipboard.

Click the icon next to the message path to expand or collapse all nested fields in the displayed message.

![raw messages expand](/img/docs/visualizing/panels/raw-messages/expand.webp)
![raw messages collapse](/img/docs/visualizing/panels/raw-messages/collapse.webp)
