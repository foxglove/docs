import Layout from "@theme/Layout";
import React, { ReactElement } from "react";

export default function index(): ReactElement {
  return (
    <Layout>
      <div style={{ textAlign: "center" }}>
        <img
          alt="Foxglove logo"
          src="/img/full-logo.png"
          style={{ padding: "5em", paddingBottom: "1em", width: "70vw" }}
        />
        <h2 style={{ fontSize: "2rem" }}>
          The leading observability platform for robotics developers
        </h2>
        <div style={{ marginTop: "5em", display: "flex", justifyContent: "center" }}>
          <a href="/docs/introduction" style={{ textDecoration: "underline", marginRight: "20px" }}>
            View Docs
          </a>
          <a href="/api" style={{ textDecoration: "underline" }}>
            View API Reference
          </a>
        </div>
      </div>
    </Layout>
  );
}
