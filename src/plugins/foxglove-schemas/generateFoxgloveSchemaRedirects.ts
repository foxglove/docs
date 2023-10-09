import { foxgloveMessageSchemas, foxgloveEnumSchemas } from "@foxglove/schemas/internal";
import { kebabCase } from "lodash";

/**
 * Generate redirects from the old docs site to the new one
 * /studio/messages/* -> /visualizing/supported-messages/*
 */
export function generateFoxgloveSchemaRedirects(): import("@docusaurus/plugin-client-redirects").PluginOptions["redirects"] {
  return [
    ...Object.values(foxgloveMessageSchemas).map((schema) => ({
      from: `/studio/messages/${kebabCase(schema.name)}`,
      to: `/visualizing/supported-messages/${kebabCase(schema.name)}`,
    })),
    ...Object.values(foxgloveEnumSchemas).map((schema) => ({
      from: `/studio/messages/${kebabCase(schema.name)}`,
      to: `/visualizing/supported-messages/${kebabCase(schema.name)}`,
    })),
  ];
}
