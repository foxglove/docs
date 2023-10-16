---
title: Variables
description: Variables are values that can be set globally for a Foxglove layout.
---

Variables are values that can be set globally for a Foxglove layout. They’re prefixed with a `$` for easy reference (e.g. `$my_global_var`) and can be set to any valid string, number, boolean, or `undefined`. It can also be set to an array containing any of those primitive values (e.g. `["x", 2, false]`), or a map of strings to any of those primitive values (e.g. `{"x": 2, "y": false}`).

Open the sidebar's "Variables" tab to view, add, and update variables.

![variables tab](/img/docs/visualization/variables/tab.webp)

Certain panels like the [3D](/docs/visualization/panels/3d) and [Variable Slider](/docs/visualization/panels/variable-slider) panels have built-in ways to update variable values with user interactions. Panels that support [message path syntax](/docs/visualization/message-path-syntax) – like [Raw Messages](/docs/visualization/panels/raw-messages), [Plot](/docs/visualization/panels/plot), and [State Transitions](/docs/visualization/panels/state-transitions) – can reference variables to dynamically decide what to visualize.

You can leverage variables to quickly switch between subsets of your data – for example:

- Create a `$my_ID` variable in the _Variables_ tab, and set its value to `101`
- Type `/my_objects.objects[:]{id==$my_ID}` in a [Raw Messages panel](/docs/visualization/panels/raw-messages) to inspect the object whose `id` field equals `101`
- Add `/my_objects.objects[:]{id==$my_ID}.velocity` as a y-axis value in a [Plot panel](/docs/visualization/panels/plot) to plot that same object's `velocity`

## Shortcuts

- Click input + `↑` – Increment numeric variable values
- Click input + `↓` – Decrement numeric variable values
