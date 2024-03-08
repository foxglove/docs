---
title: Events
description: Events represent points or time ranges of interest in your organization's recordings.
---

Events represent points or time ranges of interest in your organization's recordings. They help you quickly identify, categorize, and search for relevant subsets of your data.

Each event requires an associated device, timestamp, and duration (0 for an instantaneous event). It can also contain optional metadata.

### Add event during playback

Click “Visualize” for a recording on the [“Recordings” page](https://app.foxglove.dev/~/recordings). The data will open for playback in a new window – locate the bookmark icon on the playback bar:

![Event icon](/img/docs/visualization/playback/event-icon.webp)

Seek to a point of interest in your data, then click the bookmark icon to add an event at that point on the timeline.

![Add event](/img/docs/visualization/playback/create-event.webp)

Added events will also persist to the [“Events” page](https://app.foxglove.dev/~/events).

#### View and search during playback

View a list of all events associated with the current data source in the right sidebar's "Events" tab. The search input field uses the [same syntax as Foxglove event search](/docs/events#search) – filter events by metadata keys and values and find events of interest.

When streaming Foxglove recordings, the playback bar will also display events as blue bars. Hovering on a blue bar will display its metadata in a tooltip:

![Event tooltip](/img/docs/visualization/playback/event-tooltip.webp)

If the "Events" sidebar is open, hovering on an event on the playback timeline will highlight its corresponding information in the sidebar:

![Event hover](/img/docs/visualization/playback/event-hover.webp)

### Actions

Add, list, delete, and search events from the [Events page](https://app.foxglove.dev/~/events).

![create event](/img/docs/events/create-event.webp)

|            | Definition                                                 | CLI                    |
| ---------- | ---------------------------------------------------------- | ---------------------- |
| **Add**    | Add an event to flag interesting data in your organization | `TBD`                  |
| **List**   | View your organization's events                            | `foxglove events list` |
| **Delete** | Delete an event in your organization                       | `TBD`                  |

#### Search

Search events by device, time range, and metadata on the [Events page](https://app.foxglove.dev/~/events).

Use the syntax below to filter by metadata keys and values:

|                                | Specific key                      | Any key  |
| ------------------------------ | --------------------------------- | -------- |
| Specific value                 | `weather:rain`                    | `*:rain` |
| Any value                      | `weather:*`                       |          |
| Multiple values (all required) | `weather:rain weather:fog`        |          |
| Multiple values (1+ required)  | `weather:rain,fog,"mostly sunny"` |          |

A single word (e.g. `error`) will look for matching metadata keys or values.

## Links and resources

- [Add events to your data](https://foxglove.dev/blog/announcing-foxglove-data-platform-events)
- [API reference](/api#tag/Events)
