import React, { ReactElement } from "react";

const ImportedDataDirections = (): ReactElement => {
  return (
    <>
      <p>
        After <a href="/docs/importing-data">importing data to Foxglove</a>, select individual
        resources to "Visualize" on the{" "}
        <a href="https://app.foxglove.dev/~/recordings">Recordings</a> or{" "}
        <a href="https://app.foxglove.dev/~/events">Events</a> pages:
      </p>

      <img
        alt="Visualize on Recordings page"
        src="/img/docs/connecting-to-data/visualize-recordings.png"
      />

      <p>
        Select a custom time range of data (can span multiple recordings or events) to "Visualize"
        on the <a href="https://app.foxglove.dev/~/timeline">Timeline</a> page:
      </p>

      <img
        alt="Visualize on Timeline page"
        src="/img/docs/connecting-to-data/visualize-timeline.png"
      />
    </>
  );
};

export default ImportedDataDirections;
