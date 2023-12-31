---
title: Raw Messages
description: Inspect a particular message path in your data source.
---

Inspect a particular [message path](/docs/visualization/message-path-syntax) in your data source.

As new messages are received for a given path, the collapsible tree will show just the latest message. You will be able to expand and collapse keys, and have those changes persist across playback.

![raw messages panel](/img/docs/visualization/panels/raw-messages/panel.webp)

A link to the topic's schema is at the top of display for easy reference.

![raw messages schema](/img/docs/visualization/panels/raw-messages/schema.webp)

Drilling down to a primitive value (i.e. number, string, boolean) will display that value in large text.

![raw messages large num display](/img/docs/visualization/panels/raw-messages/large-num.webp)

## Settings

### General

| field         | description                |
| ------------- | -------------------------- |
| **Font size** | Font size for text display |

## User interactions

### Diff mode

Compare messages by showing additions (green), deletions (red), and changes (yellow) to their fields across 3 categories:

- `"previous message"` – Compare consecutive messages for a given message path
- `"other source"` - Compare messages from different data sources for a given timestamp
- `"custom"` – Compare different topic messages for a given timestamp

![raw messages diff prev msg](/img/docs/visualization/panels/raw-messages/diff/prev-msg.webp)
![raw messages diff custom](/img/docs/visualization/panels/raw-messages/diff/custom.webp)

Click "Copy msg" to copy the current topic message to your clipboard.

Click the icon next to the message path to expand or collapse all nested fields in the displayed message.

![raw messages expand](/img/docs/visualization/panels/raw-messages/expand.webp)
![raw messages collapse](/img/docs/visualization/panels/raw-messages/collapse.webp)
