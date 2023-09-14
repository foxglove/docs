import {
  FoxgloveEnumSchema,
  foxgloveEnumSchemas,
  FoxgloveMessageSchema,
  foxgloveMessageSchemas,
} from "@foxglove/schemas/internal";
import { kebabCase } from "lodash";
import path from "path";

const editUrl = `https://github.com/foxglove/docs/tree/main/${path.relative(
  path.join(__dirname, "../../.."),
  __filename,
)}`;

const panels = {
  "3d": { name: "3D", slug: "3d" },
  image: { name: "Image", slug: "image" },
  log: { name: "Log", slug: "log" },
  map: { name: "Map", slug: "map" },
} as const;

const foxgloveSchemasToPanels = {
  [foxgloveMessageSchemas.CameraCalibration.name]: [panels.image],
  [foxgloveMessageSchemas.Color.name]: [panels["3d"], panels.image],
  [foxgloveMessageSchemas.CompressedImage.name]: [panels.image],
  [foxgloveMessageSchemas.FrameTransform.name]: [panels["3d"], panels.image],
  [foxgloveMessageSchemas.GeoJSON.name]: [panels.map],
  [foxgloveMessageSchemas.Grid.name]: [panels["3d"], panels.image],
  [foxgloveMessageSchemas.ImageAnnotations.name]: [panels.image],
  [foxgloveMessageSchemas.LaserScan.name]: [panels["3d"], panels.image],
  [foxgloveMessageSchemas.LocationFix.name]: [panels.map],
  [foxgloveMessageSchemas.Log.name]: [panels.log],
  [foxgloveMessageSchemas.PointCloud.name]: [panels["3d"], panels.image],
  [foxgloveMessageSchemas.PoseInFrame.name]: [panels["3d"], panels.image],
  [foxgloveMessageSchemas.PosesInFrame.name]: [panels["3d"], panels.image],
  [foxgloveMessageSchemas.RawImage.name]: [panels.image],
  [foxgloveMessageSchemas.SceneUpdate.name]: [panels["3d"], panels.image],
  [foxgloveEnumSchemas.LogLevel.name]: [panels.log],
  [foxgloveEnumSchemas.PositionCovarianceType.name]: [panels.map],
};

const foxgloveSchemasToParentTypes = new Map<string, Set<string>>();
function addChildren(schema: FoxgloveMessageSchema) {
  for (const field of schema.fields) {
    if (field.type.type === "nested") {
      let parents = foxgloveSchemasToParentTypes.get(field.type.schema.name);
      if (!parents) {
        parents = new Set();
        foxgloveSchemasToParentTypes.set(field.type.schema.name, parents);
      }
      parents.add(schema.name);
      addChildren(field.type.schema);
    }
  }
}
for (const schema of Object.values(foxgloveMessageSchemas)) {
  addChildren(schema);
}

type GeneratedPage = {
  slug: string;
  title: string;
  markdownContent: string;
};

function generateMessagePage(schema: FoxgloveMessageSchema): GeneratedPage {
  const slug = kebabCase(schema.name);

  const jsonSchemaLink = `https://github.com/foxglove/schemas/blob/main/schemas/jsonschema/${schema.name}.json`;
  const protoLink = `https://github.com/foxglove/schemas/blob/main/schemas/proto/foxglove/${schema.name}.proto`;
  const flatbuffersLink = `https://github.com/foxglove/schemas/blob/main/schemas/flatbuffer/${schema.name}.fbs`;
  let ros1Name = `foxglove_msgs/${schema.name}`;
  let ros1Link = `https://github.com/foxglove/schemas/blob/main/schemas/ros1/${schema.name}.msg`;
  let ros2Name = `foxglove_msgs/msg/${schema.name}`;
  let ros2Link = `https://github.com/foxglove/schemas/blob/main/schemas/ros2/${schema.name}.msg`;
  if (schema.rosEquivalent) {
    const [pkg, msg] = schema.rosEquivalent.split("/");
    if (pkg && msg) {
      ros1Name = schema.rosEquivalent;
      ros1Link = `https://docs.ros.org/en/noetic/api/${pkg}/html/msg/${msg}.html`;
      ros2Name = `${pkg}/msg/${msg}`;
      ros2Link = `https://docs.ros2.org/galactic/api/${pkg}/msg/${msg}.html`;
    }
  }

  const supportedPanels = foxgloveSchemasToPanels[schema.name] ?? [];
  const parentTypes = foxgloveSchemasToParentTypes.get(schema.name) ?? new Set();

  const markdownContent = [
    `\
---
title: ${schema.name}
slug: ${slug}
custom_edit_url: ${editUrl}
---
`,
    `# \`${schema.name}\``,
    schema.description,

    supportedPanels.length > 0 &&
      `## Panel support\n\n\`${schema.name}\` is used in the ${new Intl.ListFormat().format(
        supportedPanels.map((panel) => `[${panel.name}](../panels/${panel.slug})`),
      )} panel${supportedPanels.length > 1 ? "s" : ""}.`,

    parentTypes.size > 0 &&
      `## Parent schema${parentTypes.size > 1 ? "s" : ""}\n\n\`${
        schema.name
      }\` appears in the ${new Intl.ListFormat().format(
        [...parentTypes]
          .sort()
          .map((parentType) => `[\`${parentType}\`](${kebabCase(parentType)})`),
      )} message schema${parentTypes.size > 1 ? "s" : ""}.`,

    "## Schema",
    [
      "field | type | description",
      "--- | --- | ---",
      ...schema.fields.map((field) => {
        let linkTarget: string;
        let linkText: string;
        switch (field.type.type) {
          case "primitive":
            linkTarget = `built-in-types#${field.type.name}`;
            linkText = field.type.name;
            break;
          case "nested":
            linkTarget = `${kebabCase(field.type.schema.name)}`;
            linkText = field.type.schema.name;
            break;
          case "enum":
            linkTarget = `${kebabCase(field.type.enum.name)}`;
            linkText = field.type.enum.name;
            break;
        }
        return [
          `\`${field.name}\``,
          `[\`${linkText}${
            typeof field.array === "number" ? `[${field.array}]` : field.array === true ? "[]" : ""
          }\`](${linkTarget})`,
          field.description.split("\n")[0]!,
        ].join("|");
      }),
    ].join("\n"),

    ...schema.fields.map((field) => {
      const firstLineEnd = field.description.indexOf("\n");
      if (firstLineEnd === -1) {
        return undefined;
      }
      const extendedDescription = field.description.substring(firstLineEnd + 1);
      return `\
### \`${field.name}\`

${extendedDescription}
`;
    }),

    "## Reference implementations",
    "Foxglove schemas are framework-agnostic, and can be implemented using any supported message encoding:",
    [
      "encoding | schema",
      "--- | ---",
      ...(
        [
          ["ROS 1", ros1Name, ros1Link],
          ["ROS 2", ros2Name, ros2Link],
          ["JSON", `foxglove.${schema.name}`, jsonSchemaLink],
          ["Protobuf", `foxglove.${schema.name}`, protoLink],
          ["FlatBuffers", `foxglove.${schema.name}`, flatbuffersLink],
        ] as const
      ).map(([framework, linkText, href]) => `${framework} | [\`${linkText}\`](${href})`),
    ].join("\n"),
    "You must use the schema names specified above for Foxglove to recognize the schema.",
  ]
    .filter(Boolean)
    .join("\n\n");
  return {
    slug,
    title: schema.name,
    markdownContent,
  };
}

function generateEnumPage(schema: FoxgloveEnumSchema): GeneratedPage {
  const slug = kebabCase(schema.name);
  const markdownContent = [
    `\
---
title: Enum ${schema.name}
slug: ${slug}
custom_edit_url: ${editUrl}
---
`,
    `# Enum \`${schema.name}\``,
    schema.description,

    `## Parent type`,
    `\`${schema.name}\` appears in the [\`${schema.parentSchemaName}\`](${kebabCase(
      schema.parentSchemaName,
    )}) message schema.`,

    "## Values",
    [
      "name | value | description",
      "--- | --- | ---",
      ...schema.values.map(({ name, value, description }) =>
        [`\`${name}\``, `${value}`, description ?? ""].join("|"),
      ),
    ].join("\n"),
  ]
    .filter(Boolean)
    .join("\n\n");
  return {
    slug,
    title: schema.name,
    markdownContent,
  };
}

export function generatePages(): GeneratedPage[] {
  const messagePages = Object.values(foxgloveMessageSchemas).map(generateMessagePage);
  const enumPages = Object.values(foxgloveEnumSchemas).map(generateEnumPage);
  return [
    ...messagePages.sort((a, b) => a.title.localeCompare(b.title)),
    ...enumPages.sort((a, b) => a.title.localeCompare(b.title)),
  ];
}
