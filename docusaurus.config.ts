// eslint-disable-next-line filenames/match-exported
import type { Options as RedirectsOptions } from "@docusaurus/plugin-client-redirects";
import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { config } from "dotenv";
import foxgloveSchemasPlugin, { generateFoxgloveSchemaRedirects } from "plugin-foxglove-schemas";
import { themes } from "prism-react-renderer";
import "redocusaurus";
import type { PresetOptions as RedocusaurusPresetOptions } from "redocusaurus";

config();

const docusaurusConfig: Config = {
  title: "Foxglove | Docs",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.foxglove.dev",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  markdown: {
    // Use CommonMark for .md and MDX for .mdx
    format: "detect",
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  headTags: [],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./navigation.js"),
          editUrl: "https://github.com/foxglove/docs/tree/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      } satisfies Preset.Options,
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
      } satisfies RedocusaurusPresetOptions,
    ],
  ],

  plugins: [
    foxgloveSchemasPlugin,
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [...generateFoxgloveSchemaRedirects()],
      } satisfies RedirectsOptions,
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
      theme: themes.github,
      darkTheme: themes.dracula,
    },
    algolia:
      process.env.ALGOLIA_APP_ID && process.env.ALGOLIA_API_KEY
        ? {
            appId: process.env.ALGOLIA_APP_ID,
            apiKey: process.env.ALGOLIA_API_KEY,
            indexName: "foxglove-pages",
            contextualSearch: true,
            searchParameters: {}, // optional
            searchPagePath: "search", // optional; false to disable
          }
        : undefined,
  } satisfies Preset.ThemeConfig,
};

export default docusaurusConfig;
