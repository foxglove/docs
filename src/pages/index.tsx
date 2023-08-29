import Layout from "@theme/Layout";
import React, { ReactElement } from "react";

export default function index(): ReactElement {
  return (
    <Layout>
      <div style={{ textAlign: "center" }}>
        <img
          alt="Foxglove logo"
          src="/img/full-logo.png"
          style={{ padding: "5em", paddingBottom: "1em", maxWidth: "500px", width: "100%" }}
        />
        <h2>The leading observability platform for robotics developers</h2>
        <div style={{ marginTop: "5em", display: "flex", justifyContent: "center" }}>
          <a
            href="/docs/introduction/why-foxglove"
            style={{ textDecoration: "underline", marginRight: "20px" }}
          >
            View Docs
          </a>
          <a href="https://foxglove.dev/docs/api" style={{ textDecoration: "underline" }}>
            View API Reference
          </a>
        </div>
      </div>
    </Layout>
  );
}
