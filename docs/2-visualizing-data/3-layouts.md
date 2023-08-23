---
title: Layouts
---

import AccountRequiredHeader from "../../src/components/docs/icons/AccountRequiredHeader";

Configure and arrange [Foxglove panels](TBD) into custom layouts to better tackle your visualization and debugging workflows.

Layouts allow you to have the ideal tools ready for the task at hand. A perception engineer may develop layouts for calibrating various sensors, a planning engineer may have a few for visualizing different routing algorithm outputs, and a controls engineer may build one for plotting robot kinematics.

By creating and sharing layouts designed to meet specific needs, you can revisit a particular setup for a common task or share that setup with a teammate solving a similar problem.

## Personal layouts

**Create, save, and switch between your personal layouts in the sidebar's _Layouts_ tab.** When signed in to your [Foxglove account](/docs/studio/signing-in), your personal layouts will be synced across all of your devices.

Use each layout's details menu to **rename, duplicate, export, or delete any personal layout**. To save, revert, duplicate, or delete multiple layouts at once, press `Cmd` to select multiple layouts or `Shift` to select a range of adjacent layouts, then right-click for the context menu. If you're [signed in](/docs/studio/signing-in), you will have the additional option to **share the layout with your team**. Otherwise, your personal layouts will remain accessible to only you – they cannot be viewed, loaded, or edited by anyone else.

Use the "Import layout" icon in the top right to load an exported layout file.

![layouts tab](/img/docs/studio/layouts/tab.webp)

**After editing a personal layout**, you can take either of the following actions:

- Save your changes to the layout
- Discard your changes and revert to the last explicitly saved version of the layout

![modified personal layout options](/img/docs/studio/layouts/modified-personal.webp)

Taking any of the following actions will **automatically edit your loaded layout**:

- Adding or removing panels
- Configuring panels
- Adjusting playback settings
- Changing [variable](/docs/studio/app-concepts/variables) values

<AccountRequiredHeader headerId="team-layouts" headerText="Team layouts" />

Share any of your personal layouts with the members of your organization to make it a team layout. **Once shared, team layouts can be edited, renamed, or deleted by any member of that organization.**

![team layouts](/img/docs/studio/layouts/team.webp)

**This allows teams to curate a set of canonical layouts to accomplish common tasks** – e.g. for calibrating radar sensors, visualizing planning algorithm outputs, or viewing logs. Instead of maintaining marginally different setups for different tasks, teammates can use layouts preconfigured by workflow experts to avoid redundant work and accelerate development.

Team layouts work very similarly to personal layouts – i.e. you can rename, copy, export, and delete them – but operate more as templates than evolving snapshots of a workspace.

![team layout options](/img/docs/studio/layouts/team-options.webp)

**If you edit a team layout and then try switching to another layout**, you'll be prompted to take one of the following actions:

- Save your changes as a separate personal layout (reverts changes to team layout)
- Overwrite the team layout with your changes
- Discard your changes and revert to the last explicitly saved version of the layout
