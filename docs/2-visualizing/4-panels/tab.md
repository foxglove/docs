---
title: Tab
description: Group related panels into tabs to organize your layout.
---

Group related panels into tabs to organize your layout.

<div className="flex flex-wrap">
  <img
    src="/img/docs/studio/panels/tab/first.webp"
    alt="first tab"
    style={{ width: "calc(50% - 5px)", marginRight: 10 }}
  />
  <img
    src="/img/docs/studio/panels/tab/second.webp"
    alt="second tab"
    style={{ width: "calc(50% - 5px)" }}
  />
</div>

## User interactions

Select panels to group using `Cmd` + click. Simply click a selected panel to deselect it. It's important to note that selecting multiple panels is disabled when the _Panel settings_ tab is open, as only one panel can be selected at a time for editing.

Hovering over a selected panel will present the following options:

![selecting tab action](/img/docs/studio/panels/tab/selection.webp)

- **Group in tab**
  - Combines selected panels under a **single tab** in a new Tab panel
  - Use to organize layout by keeping related panels together
  - For panels that should moved around the layout together
- **Create x tabs**
  - Create **separate tabs** for each selected panel in a new Tab panel
  - Use to conserve space in a crowded layout
  - For panels that do not need to be visible all the time or all at once

You can also create a Tab panel by adding a blank one to your layout from the sidebar's _Add panel_ tab. Add child panels directly from the _Add panel_ tab, or drag and drop existing panels in the layout into your Tab panel. Panels can also be dragged and dropped out of a Tab panel.

To name a tab, click into its default name to edit it. Add more tabs to an existing Tab panel using the plus icon. Drag and drop tabs to reorder them, either within their parent Tab panel and across multiple Tab panels.

<div className="relative h-0" style={{ paddingBottom: "55%" }}>
  <iframe
    className="absolute w-full h-full max-w-full max-h-full top-0 left-0"
    src="https://www.youtube.com/embed/SCDO8RVcUBE"
    title="YouTube video player – Using the Tab Panel in Foxglove"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</div>

## Shortcuts

- `Cmd` + `a` – Select all panels in the current layout
