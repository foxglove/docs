---
title: CLI
description: The foxglove CLI tool helps you import, export, and interact with your data from the command line.
---

The [`foxglove` CLI tool](https://github.com/foxglove/foxglove-cli) helps you import, export, and interact with your data from the command line.

### Installation

Download the latest release from your command line.

| OS      | architecture | command                                                                                                                  |
| ------- | ------------ | ------------------------------------------------------------------------------------------------------------------------ |
| linux   |
|         | amd64        | `$ curl -L https://github.com/foxglove/foxglove-cli/releases/latest/download/foxglove-linux-amd64 -o foxglove`           |
|         | arm64        | `$ curl -L https://github.com/foxglove/foxglove-cli/releases/latest/download/foxglove-linux-arm64 -o foxglove`           |
| darwin  |
|         | amd64        | `$ curl -L https://github.com/foxglove/foxglove-cli/releases/latest/download/foxglove-darwin-amd64 -o foxglove`          |
|         | arm64        | `$ curl -L https://github.com/foxglove/foxglove-cli/releases/latest/download/foxglove-darwin-arm64 -o foxglove`          |
| windows |
|         | amd64        | `$ curl -L https://github.com/foxglove/foxglove-cli/releases/latest/download/foxglove-windows-amd64.exe -o foxglove.exe` |
|         | arm64        | `$ curl -L https://github.com/foxglove/foxglove-cli/releases/latest/download/foxglove-windows-arm64.exe -o foxglove.exe` |

To install a specific release, see the [releases page](https://github.com/foxglove/foxglove-cli/releases).

### Getting started

Before interacting with your data, you must first authenticate with your [Foxglove account](/docs/data-platform/signing-in):

```bash
$ foxglove auth login
```

For a list of all available CLI commands:

```bash
$ foxglove -h
```

Enable shell autocompletion for subcommands and parameters (`bash`, `zsh`, `fish`, and `PowerShell` are supported):

```bash
$ foxglove completion <shell> -h
```

### Common actions

|                | Create                                                                                                                                    | List                         | Delete                                              |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | --------------------------------------------------- |
| **Devices**    | `foxglove devices add --name "my device"`                                                                                                 | `foxglove devices list`      | `foxglove devices delete --name "my device"`        |
| **Recordings** | `foxglove data import ~/data/bags/gps.bag --device-id dev_drpLqjBZYUzus3gv`                                                               | `foxglove data imports list` |                                                     |
| **Events**     | `foxglove events add --device-id dev_flm75pLkfzUBX2DH --timestamp 2022-01-01T12:00:00Z --duration-nanos 0 --metadata 'someKey:someValue'` | `foxglove events list`       |                                                     |
| **Extensions** | `foxglove extensions upload ./my-extension.1.0.0.foxe`                                                                                    | `foxglove extensions list`   | `foxglove extensions unpublish ext_BsGXKGsZ9c4WQF1` |
