---
title: Table
---

Display topic data in a tabular format.

Use [message path syntax](/docs/studio/app-concepts/message-path-syntax) to drill down to an array of values inside a message.

Each element in that array will now be displayed as a separate row in your table, and each field in each element will be displayed as a separate column.

e.g. for a topic like `/perception.tracked_objects`, you may see something like:

| `id` | `type`  | `isMoving` |
| ---- | ------- | ---------- |
| 123  | "human" | `true`     |
| 456  | "car"   | `false`    |
| 789  | "car"   | `true`     |

As you play through your data, the table's values will update with the latest message values.

## User interactions

To sort the table rows by a specific column's values, click that column's header. To multi-sort, hold `Shift` to click multiple column headers.
