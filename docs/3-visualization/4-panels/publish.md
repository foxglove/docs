---
title: Publish
description: Publish messages on a topic back to your robotics stack.
---

Publish messages on a topic back to your robotics stack.

## Settings

### General

| field              | description                                                    |
| ------------------ | -------------------------------------------------------------- |
| **Editing mode**   | Whether you want to edit the message to publish; On by default |
| **Button title**   | Defaults to "Publish"                                          |
| **Button tooltip** | Defaults to "Connect to ROS to publish data"                   |
| **Button color**   | Defaults to green                                              |

## User interactions

Specifying the topic you want to publish your message on will automatically infer its schema name and populate the text field with a JSON message template.

Clicking into the schema name field will provide a dropdown list of common ROS schemas. Selecting a schema will also populate the text field with a JSON message template.

Edit the template to customize the message you want to send back to your ROS stack, before hitting "Publish".

![publish panel](/img/docs/visualization/panels/publish/panel.webp)

The "Publish" button will be disabled if Foxglove is not connected to a data source that supports publishing. When connecting to a WebSocket server that implements the [Foxglove WebSocket protocol](/docs/2-connecting-to-data/4-frameworks/2-custom.mdx), the server must declare the [`clientPublish`](https://github.com/foxglove/ws-protocol/blob/main/docs/spec.md#server-info) capability in order to support publishing from Foxglove.
