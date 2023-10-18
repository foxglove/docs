---
title: Settings
description: Foxglove organization admins can use the settings to modify the subscription plan, invite and manage team members, and configure organization-wide settings like sites and custom device properties.
---

Foxglove organization admins can use the [Settings page](https://console.foxglove.dev/settings) to modify the subscription plan, invite and manage team members, and configure organization-wide settings like sites and custom device properties.

### General

On the [General settings page](https://console.foxglove.dev/settings/general), admins can:

- **Organization name** – Edit the organization name
- **Subscription** – View and modify plan details
- **Approved domains** – New users signing in with email addresses from these domains are automatically added to the organization
- **Usage** – Shows data storage usage
- **Danger zone** – Delete the organization

### Team

On the [Team settings page](https://console.foxglove.dev/settings/team), admins can:

- View a list of all team members (name, email address, last seen, role)
- Invite or remove team members
- Modify team members' roles ("admin", "user")

### Sites

On the [Sites settings page](https://console.foxglove.dev/settings/sites), admins can:

- Look up the status, name, and ID of their Foxglove- and self-hosted [Primary Sites](/docs/primary-sites/introduction)
- Look up the status, name, and ID of their on-premises [Edge Sites](/docs/edge-sites/introduction)
- Add Foxglove-hosted Primary Sites
- Add Edge Sites

### Custom properties

On the [Custom properties settings page](https://console.foxglove.dev/settings/custom-properties), admins can set predefined metadata fields (i.e. [custom properties](/docs/devices#custom-properties)) for the whole organization to associate with their devices.

### API keys

On the [API keys settings page](https://console.foxglove.dev/settings/apikeys), admins can:

- Generate API keys for accessing the [Foxglove API](/docs/api)
- Enable, disable, or permanently delete generated API keys
- Configure the API key's capabilities per data resource (e.g. read-only for devices, read and write for recordings, etc.)

### SSO

On the [SSO settings page](https://console.foxglove.dev/settings/oidc), admins can configure Okta SSO OIDC settings like the Okta domain, client ID, and more.

Foxglove currently supports both [Microsoft](https://foxglove.dev/blog/announcing-microsoft-sign-in) and [Okta SSO](/docs/organization-setup/okta-sso).

### Extensions

On the [Insights settings page](https://console.foxglove.dev/settings/insights), admins can install Foxglove [extensions](/docs/visualization/extensions/introduction) across the organization to better support the team's unique workflows. Enabled extensions are automatically installed for all signed in team members.

Use the `foxglove` CLI to [write](/docs/visualization/extensions/introduction#writing-an-extension) and [publish](/docs/visualization/extensions/publish) Foxglove extensions.

### Insights

On the [Insights settings page](https://console.foxglove.dev/settings/insights), admins can understand how their team members are leveraging the platform.

#### Import volume

Track the net and cumulative volume of data your Foxglove organization has imported week-over-week:

![imports](/img/docs/organization-setup/insights/imports.webp)

Understand your team's data storage bill, whether you are nearing your plan’s data limit, and the time periods during which the team imported the most data.

#### Occurring events

Track the number of events added for a given week of collected data, by week:

![events](/img/docs/organization-setup/insights/events.webp)

Understand your team's data coverage, as well as whether you're taking full advantage of this data organization strategy.
