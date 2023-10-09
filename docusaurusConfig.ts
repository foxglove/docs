/// <reference types="prism-react-renderer" />

import { Config } from "@docusaurus/types";
import darkCodeTheme from "prism-react-renderer/themes/dracula";
import lightCodeTheme from "prism-react-renderer/themes/github";
import "redocusaurus";

import foxgloveSchemasPlugin, {
  generateFoxgloveSchemaRedirects,
} from "./src/plugins/foxglove-schemas";

const docusaurusConfig: Config = {
  title: "Foxglove | Docs",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://foxglove.dev",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  headTags: [
    // Add Google Font version of Inter
    { tagName: "link", attributes: { rel: "preconnect", href: "https://fonts.googleapis.com" } },
    {
      tagName: "link",
      attributes: { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "true" },
    },
    {
      tagName: "link",
      attributes: {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap",
      },
    },
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./navigation.js"),
          editUrl: "https://github.com/foxglove/docs/tree/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      } satisfies import("@docusaurus/preset-classic").Options,
    ],
    [
      "redocusaurus",
      {
        config: "./api-docs/redocly.yaml",
        specs: [
          {
            spec: "./api-docs/specs/v1.yaml",
            route: "/api/",
          },
        ],
        theme: {
          primaryColor: "#9480ed",
        },
      } satisfies import("redocusaurus").PresetOptions,
    ],
  ],

  plugins: [
    foxgloveSchemasPlugin,
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [...generateFoxgloveSchemaRedirects()],
      } satisfies import("@docusaurus/plugin-client-redirects").Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: undefined,
      logo: {
        alt: "Foxglove",
        src: "img/foxglove-typemark-dark.svg",
        href: "/",
        target: "_self",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docsSidebar",
          position: "left",
          label: "Documentation",
        },
        {
          to: "/api",
          label: "API Reference",
          position: "left",
        },
        {
          href: "https://foxglove.dev/",
          label: "Back to Foxglove",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Foxglove",
          items: [
            { label: "Docs", to: "/" },
            { label: "API reference", to: "/api" },
          ],
        },
        {
          title: "Community",
          items: [
            { label: "Slack", href: "https://foxglove.dev/slack" },
            { label: "Twitter", href: "https://twitter.com/foxglovedev" },
            { label: "GitHub", href: "https://github.com/foxglove" },
          ],
        },
      ],
      copyright: `Copyright © Foxglove`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  } satisfies import("@docusaurus/preset-classic").ThemeConfig,
};

export = docusaurusConfig;
