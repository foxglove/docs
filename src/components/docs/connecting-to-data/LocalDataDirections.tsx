import React, { ReactElement } from "react";

const LocalDataDirections = (): ReactElement => {
  return (
    <>
      <p>To load a local file for visualization, you have several options:</p>
      <ul>
        <li>Double-click the file from your file manager</li>
        <li>
          Drag-and-drop the file into <a href="https://studio.foxglove.dev">Foxglove</a> directly
        </li>
        <li>
          <p>
            "Open local file" in the "Open data source" dialog to select a file from your filesystem
          </p>
          <img alt="Local file dialog" src="/img/docs/connecting-to-data/local-file.png" />
        </li>
      </ul>
    </>
  );
};

export default LocalDataDirections;
