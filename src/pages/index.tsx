import React, { ReactElement } from "react";
import { Navigate } from "react-router-dom";

export default function index(): ReactElement {
  return <Navigate to="/docs/introduction/why-foxglove" />;
}
