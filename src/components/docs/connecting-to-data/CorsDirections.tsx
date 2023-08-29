import React, { ReactElement } from "react";

const CorsDirections = (): ReactElement => {
  return (
    <p>
      Check out the{" "}
      <a href="/docs/connecting-to-data//live-data#cross-origin-resource-sharing-cors-setup">
        directions for setting up CORS
      </a>{" "}
      to load remote data files into Foxglove.
    </p>
  );
};

export default CorsDirections;
