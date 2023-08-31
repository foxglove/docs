import React, { ReactElement } from "react";

const RosbridgeDirections = ({ rosVersion }: { rosVersion: 1 | 2 }): ReactElement => {
  return (
    <>
      <p>
        Connect directly to your running ROS stack via WebSockets using a Rosbridge connection. This
        connection option requires only a single open port between Foxglove and your robot.
      </p>

      <p>
        A{" "}
        <a href="https://wiki.ros.org/rosbridge_suite">
          <code>rosbridge</code>
        </a>{" "}
        connection uses a standard protocol to connect Foxglove to your ROS master over WebSockets.
        While it does require running an extra ROS node
        <a href="https://wiki.ros.org/rosbridge_server">
          <code>rosbridge_server</code>
        </a>
        , we recommend this option if you have a network firewall between ROS and Foxglove, as it
        requires your ROS host to have only one port open.
      </p>

      <p>
        To open a Rosbridge connection, make sure you’ve installed
        <a href="https://wiki.ros.org/rosbridge_suite">
          <code>rosbridge-suite</code>
        </a>
      </p>

      {rosVersion === 1 && (
        <p>
          <code>$ sudo apt install ros-noetic-rosbridge-suite // ROS 1 Noetic</code>
        </p>
      )}

      {rosVersion === 2 && (
        <p>
          <code>$ sudo apt install ros-galactic-rosbridge-suite // ROS 2 Galactic</code>
        </p>
      )}

      <p>
        Next, start the WebSocket server, and review the command printout to determine the port it
        is listening on (e.g. <code>ws://0.0.0.0:9090</code>):
      </p>

      <p>
        {rosVersion === 1 && <code>$ roslaunch rosbridge_server rosbridge_websocket.launch</code>}
        {rosVersion === 2 && (
          <code>$ ros2 launch rosbridge_server rosbridge_websocket_launch.xml</code>
        )}
      </p>

      <p>
        "Open connection" in the "Open data source" dialog, select "Rosbridge", then enter the URL
        to your Rosbridge server:
      </p>

      <img alt="Rosbridge dialog" src="/img/docs/connecting-to-data/rosbridge.png" />

      <p>
        To test your connection, open the sidebar to verify that Foxglove is receiving your data
        source's topics.
      </p>
    </>
  );
};
export default RosbridgeDirections;
