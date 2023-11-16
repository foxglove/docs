---
title: Introduction
description: As a robotics observability platform, Foxglove helps teams explore, collaborate on, and ultimately make sense of their data more efficiently.
---

To take your robots out of the lab and into production, you must first understand how your robots sense, think, and act.

**As an observability platform, Foxglove helps robotics teams explore, collaborate on, and make sense of their robots' data – for more intelligent iteration and accelerated development.**

![Foxglove](/img/docs/introduction/hero.png)

## Supported workflows

Foxglove provides a wide array of developer tooling for every step of the robotics development process.

- **Record**
  - Record multimodal data in a variety of encoding formats (MCAP, ROS 1, ROS 2, Protobuf, etc.)
- **Ingest**
  - Import recordings from local machines and edge sites into a central cloud repository
- **Process**
  - Index the data by device, time, and topic
  - Set retention policies to manage your team's data store
  - Configure webhooks to integrate with the rest of your data pipeline
- **Collaborate**
  - Annotate logs with [metadata and events](/docs/events) for easier search and discovery
  - Create shared [layouts](/docs/visualization/layouts) for tackling repeated visualization and debugging tasks
  - Rely on collective knowledge to triage incidents and analyze the root cause of an issue

### General setup

- [Create a free account](/docs/organization-setup/account), or [upgrade to a paid plan](https://foxglove.dev/pricing) for your robotics organization
- (Optional) [Implement Okta SSO](/docs/organization-setup/okta-sso)
- Invite collaborators to join your Foxglove organization
- Use the default Foxglove-hosted [cloud account](/docs/primary-sites/introduction), or set up a [self-hosted alternative](/docs/primary-sites/self-hosting/installation) for finer-grained control
- Build data ingestion pipelines using the [Foxglove REST API](/api)
- Install [Edge sites](/docs/edge-sites/installation) to import data from wherever your robots are recording – even in connectivity-constrained environments

### Getting started

- Record multimodal data using a variety of [supported encoding formats](/docs/connecting-to-data/local-data#supported-formats)
  - [MCAP](https://mcap.dev) allows multiple streams of structured and unstructured data in one file (e.g. ROS, Protobuf, JSON Schema, etc.)
- [Import](/docs/importing-data) local data recordings, organized by timestamp and recording [device](/docs/devices)
- Annotate [recordings](/docs/recordings) with metadata and [events](/docs/events)
- Arrange and configure [panels](/docs/visualization/panels/introduction) into custom visualization and debugging [layouts](/docs/visualization/layouts)
- [Stream imported data](/connecting-to-data/imported-data) to Foxglove and [third-party tools like Jupyter Notebooks](/docs/integrations/jupyter-notebooks) for analysis

## Links and resources

- [Create a free account](https://console.foxglove.dev/) - [Dashboard](https://console.foxglove.dev/dashboard)
- [Download the desktop app](https://foxglove.dev/download) (for Linux, Windows, and macOS)
- [Browse tutorials](https://foxglove.dev/tutorials)
