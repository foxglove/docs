import React, { ReactElement } from "react";

const ImportedDataDirections = (): ReactElement => {
  return (
    <>
      <p>
        After <a href="/docs/recordings">importing data to Foxglove</a>, select individual resources
        to "Visualize" on the <a href="https://console.foxglove.dev/recordings">Recordings</a> or{" "}
        <a href="https://console.foxglove.dev/events">Events</a> pages:
      </p>

      <img
        alt="Visualize on Recordings page"
        src="/img/docs/connecting-to-data/visualize-recordings.png"
      />

      <p>
        You can also select a custom time range of data (can span multiple recordings and/or events)
        to "Visualize" on the <a href="https://console.foxglove.dev/timeline">Timeline</a> page:
      </p>

      <img
        alt="Visualize on Timeline page"
        src="/img/docs/connecting-to-data/visualize-timeline.png"
      />
    </>
  );
};

export default ImportedDataDirections;
