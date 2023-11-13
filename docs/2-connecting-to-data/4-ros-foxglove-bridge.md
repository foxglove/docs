---
title: ROS Foxglove bridge
description: Use the ROS Foxglove bridge with the Foxglove WebSocket connection to visualize your live ROS 1 or ROS 2 data. The Foxglove bridge connects your ROS stack to Foxglove via the Foxglove WebSocket protocol.
---

Use the ROS Foxglove bridge to visualize your live [ROS 1](/docs/connecting-to-data/frameworks/ros1#foxglove-websocket) or [ROS 2](/docs/connecting-to-data/frameworks/ros2#foxglove-websocket) data via the Foxglove WebSocket connection.

The Foxglove bridge connects your ROS stack to Foxglove via the Foxglove WebSocket protocol. It is implemented as a C++ node for high performance and low overhead.

### Overview

The `foxglove_bridge` uses the [Foxglove WebSocket protocol](https://github.com/foxglove/ws-protocol), a similar protocol to [`rosbridge`](https://github.com/RobotWebTools/rosbridge_suite), but with the ability to support additional schema formats such as ROS 2 `.msg` and ROS 2 `.idl`, parameters, graph introspection, and non-ROS systems. The bridge is written in C++ and designed for high performance with low overhead to minimize the impact to your robot stack.

### Installation

The `foxglove_bridge` package is available for ROS 1 Melodic and Noetic, and ROS 2 Humble and Rolling. Earlier releases of ROS will not be supported due to API design and/or performance limitations. The package can be installed with the following command:

```bash
$ sudo apt install ros-$ROS_DISTRO-foxglove-bridge
```

### Launch

Start the `foxglove_bridge` from your ROS workspace using `roslaunch` in ROS 1 or `ros2 launch` in ROS 2. Optional configurations and their default values are below.

```bash
$ ros2 launch foxglove_bridge foxglove_bridge_launch.xml
```

Add `foxglove_bridge` to your launch file if you plan to use it anytime your robot is online.

#### Configuration

Configure bridge behavior with the following parameters. Set parameters at initialization via a launch file or the command line – they cannot be modified at runtime.

- **port** – The TCP port to bind the WebSocket server to. Must be a valid TCP port number, or 0 to use a random port. Defaults to `8765`.
- **address** – The host address to bind the WebSocket server to. Defaults to `0.0.0.0`, listening on all interfaces by default. Change this to `127.0.0.1` to only accept connections from the local machine.
- **tls** – If `true`, use Transport Layer Security (TLS) for encrypted communication. Defaults to `false`.
- **certfile** – Path to the certificate to use for TLS. Required when **tls** is set to `true`. Defaults to `""`.
- **keyfile** – Path to the private key to use for TLS. Required when **tls** is set to `true`. Defaults to `""`.
- **topic_whitelist** – List of regular expressions ([ECMAScript grammar](https://en.cppreference.com/w/cpp/regex/ecmascript)) of whitelisted topic names. Defaults to `[".*"]`.
- **send_buffer_limit** – Connection send buffer limit in bytes. Messages will be dropped when a connection's send buffer reaches this limit to avoid a queue of outdated messages building up. Defaults to `10000000` (10 MB).

ROS 1 only:

- **max_update_ms** – Maximum number of milliseconds to wait in between polling `roscore` for new topics, services, or parameters. Defaults to `5000`.

ROS 2 only:

- **num_threads** – Number of threads to use for the ROS node executor. This controls the number of subscriptions that can be processed in parallel. 0 means one thread per CPU core. Defaults to `0`.
- **max_qos_depth** – Maximum depth used for the QoS profile of subscriptions. Defaults to `10`.

### Development

To build from source or to contribute to the project, check out the [`ros-foxglove-bridge` GitHub repo](https://github.com/foxglove/ros-foxglove-bridge/).
