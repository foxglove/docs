---
title: Introduction
description: Panels are modular visualization interfaces that can be configured and arranged into Foxglove layouts.
---

Panels are modular visualization interfaces that can be configured and arranged into Foxglove layouts.

Find the full list of available panels in the "Add panel" menu.

![panels thumbnail](/img/docs/visualization/panels/thumbnail.png)

### Add to layout

Click any panel name to add it to your current layout. Alternatively, drag and drop a panel name into your current layout to add it to a specific location.

Each panel's top bar contains the following:

- **Menu** – Common panel actions, like splitting the panel or changing it to another panel type
- **Settings** – Click the cog icon to open the panel's settings

Use the top bar to easily drag a panel around the layout.

### Edit settings

Click the cog icon in each panel's top bar to view and edit its settings in the sidebar. The selected panel will be designated with a purple border.

![panel settings tab](/img/docs/visualization/panels/settings-tab.png)

Clicking different panels in your layout while the sidebar's panel settings are open will switch to its settings.

### Drag-and-drop topics

Filter your data source's topics – and their contained [message paths](/docs/visualization/message-path-syntax) – using the sidebar's Topics tab:

![panel settings tab](/img/docs/visualization/panels/filter-topics.png)

Drag-and-drop filter results into certain panels for easy instant visualization:

- **All topics** – [Raw Messages](/docs/visualization/panels/raw-messages) and [Table](/docs/visualization/panels/table) panels
- **[Image and image annotation topics](/docs/visualization/panels/image#message-schemas)** – [Image](/docs/visualization/panels/image) panel
- **Message paths** – [Plot](/docs/visualization/panels/plot) and [State Transitions](/docs/visualization/panels/state-transitions) panels

To drag-and-drop multiple message paths, use `Shift` to select a range of adjacent items, or `Ctrl` (`Cmd` on macOS) to select multiple non-adjacent items:

![panel settings tab](/img/docs/visualization/panels/multi-drag-and-drop.png)

## Shortcuts

- `Cmd` + `a` – Select all panels in the current layout
- `Cmd` + `b` – Close sidebar if open
- Hover on panel + `` ` `` – Show panel shortcuts (remove from layout or split)
- Click input + Drag right – Increment numeric panel setting values
- Click input + Drag left – Decrement numeric panel setting values
