---
title: Annotate ROS enum fields
description: Annotate your ROS message definitions' enum fields for optimal visualization in Foxglove.
---

Annotate your ROS message definitions' enum fields for optimal visualization in Foxglove.

Since ROS messages do not have built-in support for enums, we've implemented a way for Foxglove to read annotated message definitions and display enum values (e.g. in the [Plot](/docs/visualization/panels/plot), [Raw Messages](/docs/visualization/panels/raw-messages), and [State Transitions](/docs/visualization/panels/state-transitions) panels) in a meaningful way.

## Before annotating

Previously, Foxglove could only display the value for an enum field if that field provided its own enum mapping.

For example, let's consider the following message definitions:

```cpp
// color_msgs/PrimaryColors
uint8 RED=1
uint8 YELLOW=2
uint8 BLUE=3

uint8 data
```

```cpp
// my_msgs/MySettings
color_msgs/PrimaryColors my_color
```

A `my_msgs/MySettings` message's `my_color` field would be interpreted using the enums in the `color_msgs/PrimaryColors` schema – i.e. Foxglove would display a `my_msgs/MySettings` message with `my_color: { data: 2 }` as `my_color: { data: YELLOW }`.

## After annotating

To annotate an enum field, convert it to a simple `uint8` and add a comment (formatted as `[enumSchemaName] [enumField]__foxglove_enum`) on the line before the field definition:

```cpp
// my_msgs/MySettings
color_msgs/PrimaryColors my_color__foxglove_enum
uint8 my_color
```

You can now remove the unnecessary `data` field:

```cpp
// color_msgs/PrimaryColors
uint8 RED=1
uint8 YELLOW=2
uint8 BLUE=3
```

You can now access the enum value directly with `mySettingsMsg.my_color`, instead of `mySettingsMsg.my_color.data`. Foxglove will still correctly display a `my_msgs/MySettings` message with `my_color: 2` as `my_color: YELLOW`.

This annotation will not add any bytes to the serialized ROS message, but it will add the necessary information (i.e. the constant values for `RED`, `YELLOW`, and `BLUE`) to the connection header.

**Note**: Foxglove can interpret multiple enum fields in the same message. Consider the message definitions below:

```cpp
// color_msgs/PrimaryColors
uint8 RED=1
uint8 YELLOW=2
uint8 BLUE=3
```

```cpp
// color_msgs/SecondaryColors
uint8 ORANGE=1
uint8 GREEN=2
uint8 PURPLE=3
```

```cpp
// my_msgs/MySettings
color_msgs/PrimaryColors my_primary_color__foxglove_enum
uint8 my_primary_color
color_msgs/SecondaryColors my_secondary_color__foxglove_enum
uint8 my_secondary_color
```

For `my_msgs/MySettings` messages, Foxglove will display `my_primary_color` as `RED`, `YELLOW`, or `BLUE`, and `my_secondary_color` as `ORANGE`, `GREEN`, or `PURPLE` –  even though both fields contain `1`, `2`, and `3` as possible enum values.
