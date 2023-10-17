---
title: Okta SSO
---

import AccountRequiredHeader from "../../src/components/docs/icons/AccountRequiredHeader";

<AccountRequiredHeader badgeText="Requires Enterprise plan" />

Foxglove organizations can use Okta as authorization provider.

### Create Okta application

Create a new app integration on your Okta dashboard:

- **Sign-in method** – OIDC - OpenID Connect
- **Application type** – Single-Page Application
- **Grant type** – Authorization code
- **Sign-in redirect URI** – In `https://console.foxglove.dev/{YOUR-FOXGLOVE-SLUG}/signin` format (find `YOUR-FOXGLOVE-SLUG` on the [Settings page](https://console.foxglove.dev/settings))
- **Sign-out redirect URI** – `https://console.foxglove.dev/signin`
- **Trusted Origins** – Add `https://console.foxglove.dev`
- **Access** – Note that "Federation Broker Mode" is [incompatible](https://help.okta.com/en-us/Content/Topics/Apps/apps-fbm-known-issues.htm) with Okta tiles

### Enable Okta application tile

Optionally, you can enable Okta application tile sign in using these settings:

- **Login initiated by** – Either Okta or App
- **Login flow** – Redirect to app to initiate login (OIDC Compliant)
- **Login URI** – Same as the sign-in redirect URL in the previous step (`https://console.foxglove.dev/{YOUR-FOXGLOVE-SLUG}/signin`)
- **Application visibility** – Display application icon to users

This [Foxglove logo](/img/docs/organization-setup/okta/foxglove-logo-okta.png) works well as a custom tile icon.

### Foxglove OIDC configuration

Configure application settings on the [Okta SSO settings page](https://console.foxglove.dev/settings/oidc):

![Foxglove SSO settings](/img/docs/organization-setup/okta/settings.png)

- **Okta domain** – Find in the Okta dashboard's profile dropdown (`xxxxx.okta.com`)

  <img alt="Okta domain" src="/img/docs/organization-setup/okta/domain.png" width="400"/>

- **Client ID** – Find in the Applications list, below the app name

  <img alt="Okta clientId" src="/img/docs/organization-setup/okta/clientid.png" width="600"/>

### (Optional) Disable non-Okta sign in

Confirm that your Okta SSO setup works by signing out and signing back in with Okta SSO.

Use the [SSO settings tab](https://console.foxglove.dev/settings/oidc) to disable or re-enable all other authentication methods.

### Manage members

- **Provision members** – Any Okta user with access to the Foxglove Okta application can sign in. A new Foxglove account is automatically created on first sign in.

- **Remove users** – Revoke the user's access in Okta, then remove the associated user on Foxglove's [Team settings page](https://console.foxglove.dev/settings/team) to sign them out of Foxglove immediately. If non-Okta sign in methods are enabled for your account, emails matching your approved domains can always sign up.

## Links and resources

- [Create OIDC app integrations](https://help.okta.com/en-us/Content/Topics/Apps/Apps_App_Integration_Wizard_OIDC.htm)
