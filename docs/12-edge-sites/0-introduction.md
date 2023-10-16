---
title: Introduction
description: Edge Sites are on-site data storage centers, located in physical proximity to where your robots are operating. They are designed to safely store data on-premises before you decide to forward it to the cloud, mitigating the risks of unpredictable network connectivity or low bandwidth.
---

import AccountRequiredHeader from "../../src/components/docs/icons/AccountRequiredHeader";

<AccountRequiredHeader badgeText="Requires Enterprise plan" />

Edge Sites are on-site data storage centers, located in physical proximity to where your robots are operating. They are designed to safely store data on-premises before you decide to forward it to the cloud, mitigating the risks of unpredictable network connectivity or low bandwidth. Whether your robots operate in a warehouse, farm field, or garage, Edge Sites help you pull your data on-demand from these resource-constrained environments for further analysis.

You can create and name any number of Edge Sites via the [Sites settings page](https://console.foxglove.dev/settings/sites) to get visibility into what data is at the edge, and whether that data has been [queued for import](manage-data#import-to-primary) to your Primary Site in the cloud. Each created edge site must belong to and send data to a Primary Site.

Familiarity with [Kubernetes](https://kubernetes.io/) and [Helm](https://helm.sh/) is required to deploy and manage your edge site.
