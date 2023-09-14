"use strict";

// Allow the docusaurus config to be written in TypeScript
// Adapted from https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/website/docusaurus.config.js
// See also https://github.com/facebook/docusaurus/issues/7911
require("ts-node").register({
  scope: true,
  scopeDir: __dirname,
  transpileOnly: true,
});

module.exports = require("./docusaurusConfig");
