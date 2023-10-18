import React, { ReactElement } from "react";
import { Redirect } from "react-router-dom";

export default function index(): ReactElement {
  return <Redirect to="/docs/introduction" />;
}
