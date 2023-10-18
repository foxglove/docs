---
title: Layouts
description: Arrange Foxglove panels into custom layouts to tackle your visualization and debugging workflows.
---

import AccountRequiredHeader from "../../src/components/docs/icons/AccountRequiredHeader";

With layouts, you can reuse a workspace for a recurring task or share it with a teammate solving a similar problem.

A perception engineer may develop layouts for calibrating various sensors, a planning engineer may have a few for visualizing different routing algorithm outputs, and a controls engineer may build one for plotting robot kinematics.

Use the "Layouts" menu to create, edit, and share layouts.

<img alt="Layouts menu" src="/img/docs/visualization/organization-layouts.png" width="300"/>

### Personal layouts

Personal layouts are accessible to only you – they cannot be viewed, loaded, or edited by anyone else.

When signed in, personal layouts are synced across all your devices, and can be shared with your organization.

#### Create

Use the "Layouts" menu's "Create new layout" option to start building a custom workspace.

![Layouts glossary](/img/docs/visualization/layouts-glossary.webp)

Add and position [panels](panels/introduction), configure their settings, adjust [playback settings](playback), and set [variable](variables) values.

#### Edit

When switching layouts after making edits to your current personal layout, you can take either of the following actions:

- **"Save changes"** – Save your changes to the layout
- **"Revert"** – Discard changes and revert to the last explicitly saved layout version

<img alt="Modified personal layout menu" src="/img/docs/visualization/modified-personal-layout.png" width="400"/>

#### Import and export

Use a layout's context menu to "Export..." it as a JSON file. Alternatively, open the app menu's "View" submenu to "Export layout to file...".

Use the "Layouts" menu's "Import from file..." option to load an exported layout JSON file. Alternatively, open the app menu's "View" submenu to "Import layout from file...".

#### Share

Use a layout's context menu to "Share with team..." – this will make a personal layout accessible to your entire organization.

#### Other

Use each layout's details menu to rename, duplicate, or delete any personal layout.

To perform a batch action on multiple layouts:

- Use `Cmd` to multi-select individual layouts
- Use `Shift` to select a range of adjacent layouts
- Right-click any selected layout's context menu to select a batch action


### Organization layouts

<AccountRequiredHeader />

Organization layouts allow teams to curate a set of canonical layouts to accomplish common tasks – e.g. for calibrating radar sensors, visualizing planning algorithm outputs, or viewing logs. Instead of maintaining marginally different setups for different tasks, teammates can use layouts preconfigured by workflow experts to avoid redundant work and accelerate development.

Organization layouts work very similarly to personal layouts – i.e. you can rename, copy, export, and delete them – but operate more as templates than evolving snapshots of a workspace.

<img alt="Modified team layout menu" src="/img/docs/visualization/modified-team-layout.png" width="400"/>

#### Edit

After editing an organization layout, you can take any of the following actions:

- **"Save changes"** – Overwrite the organization layout with your changes
- **"Revert"** – Discard changes and revert to the last explicitly saved layout version
- **"Make a personal copy"** – Save changes as a separate personal layout (reverts changes to organization layout)


#### Share

Use a personal layout's context menu to "Share with team..." – this will make it accessible to your entire organization.

Organization layouts can be edited, renamed, or deleted by any team member.
x
<img alt="Organization layouts" src="/img/docs/visualization/organization-layouts.png" width="300"/>
