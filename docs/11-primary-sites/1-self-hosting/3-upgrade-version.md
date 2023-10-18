---
title: Upgrade version
description: Upgrade the version of your self-hosted Primary Site.
---

Upgrade the version of your self-hosted Primary Site.

Use Helm to perform in-place upgrades of the Primary Site software – these commands will use values configured during installation:

```shell
$ helm repo update
$ helm upgrade foxglove-primary-site foxglove/primary-site \
    --namespace foxglove
```
