import React, { ReactElement } from "react";

import OpenSourcePackageCard, { Package } from "./OpenSourcePackageCard";

const rosPackages: Package[] = [
  {
    name: "@foxglove/ros1",
    description: "TypeScript implementation of ROS 1 protocol with a pluggable transport layer",
  },
  { name: "@foxglove/rosbag", description: "ROS 1 bag reader and writer abstract implementation" },
  { name: "@foxglove/rosbag2", description: "ROS 2 bag reader and writer abstract implementation" },
  {
    name: "@foxglove/rosbag2-node",
    description: "ROS 2 bag reader and writer for Node.js",
  },
  {
    name: "@foxglove/rosbag2-web",
    description: "ROS 2 bag reader and writer for the browser",
  },
  {
    name: "@foxglove/rosmsg",
    description: "ROS 1 and 2 message definition parser",
  },
  {
    name: "@foxglove/rosmsg-msgs-common",
    description: "Common ROS message definitions using @foxglove/rosmsg",
  },
  {
    name: "@foxglove/rosmsg-msgs-foxglove",
    description: "Foxglove ROS message definitions using @foxglove/rosmsg",
  },
  {
    name: "@foxglove/rosmsg-serialization",
    description: "ROS 1 message serialization for reading and writing bags and network messages",
  },
  {
    name: "@foxglove/rosmsg2-serialization",
    description: "ROS 2 message serialization for reading and writing bags and network messages",
  },
  {
    name: "@foxglove/rostime",
    description: "Primitives and helper methods for ROS Time and Duration",
  },
];

const otherPackages: Package[] = [
  {
    name: "@foxglove/cdr",
    description: "Common Data Representation (CDR) serialization and deserialization",
  },
  { name: "@foxglove/electron-socket", description: "Networking sockets for Electron apps" },
  {
    name: "@foxglove/just-fetch",
    description: "Isomorphic ponyfill wrapping fetch and node-fetch",
  },
  {
    name: "@foxglove/velodyne-cloud",
    description: "TypeScript library for converting Velodyne LIDAR packets to point cloud",
  },
  { name: "@foxglove/wasm-bz2", description: "Bzip2 decompression compiled to WebAssembly" },
  {
    name: "@foxglove/xmlrpc",
    description:
      "TypeScript library implementing an XMLRPC client and server with pluggable server backend",
  },
  { name: "@foxglove/eslint-plugin", description: "ESLint configuration used in Foxglove Studio" },
];

const Basics = (): ReactElement => (
  <div className="flex flex-row flex-wrap">
    <OpenSourcePackageCard
      name="Foxglove Studio"
      description="Open source desktop and web app for robotics data visualization and debugging"
      gitHubURL="studio"
      hideNpm
    />
    <OpenSourcePackageCard
      name="MCAP"
      description="Modular, performant, and serialization-agnostic container file format"
      gitHubURL="mcap"
      hideNpm
    />
    <OpenSourcePackageCard
      name="Foxglove WebSocket protocol libraries"
      description="Libraries for loading custom data into Foxglove Studio via WebSocket servers"
      gitHubURL="ws-protocol"
      pythonPackage="foxglove-websocket"
      npmPackage="@foxglove/ws-protocol"
    />
  </div>
);

const ROS = (): ReactElement => (
  <div className="flex flex-row flex-wrap">
    {rosPackages.map((eachPackage: Package) => (
      <OpenSourcePackageCard key={eachPackage.name} {...eachPackage} />
    ))}
  </div>
);

const Misc = (): ReactElement => (
  <div className="flex flex-row flex-wrap">
    {otherPackages.map((eachPackage: Package) => (
      <OpenSourcePackageCard key={eachPackage.name} {...eachPackage} />
    ))}
  </div>
);

const OpenSourceSoftware = { Basics, ROS, Misc };
export default OpenSourceSoftware;
