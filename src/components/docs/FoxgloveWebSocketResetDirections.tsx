import React, { ReactElement } from "react";

const FoxgloveWebSocketResetDirections = (): ReactElement => {
  return (
    <>
      <h4>Resetting the connection</h4>
      <p>
        To reconnect to a Foxglove WebSocket in a different context, you must first clear out your
        most recently visualized data in Foxglove.
      </p>
      <p>
        To clear the state and reset your visualizations, resend the{" "}
        <a href="https://github.com/foxglove/ws-protocol/blob/main/docs/spec.md#fields">
          <code>serverInfo</code> message
        </a>{" "}
        with an updated value for its optional <code>sessionID</code> field (string value). This
        lets the Foxglove WebSocket connection know that you are initiating a new connection,
        instead of trying to reconnect to a dropped one.
      </p>
    </>
  );
};

export default FoxgloveWebSocketResetDirections;
