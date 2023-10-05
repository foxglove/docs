---
title: User Scripts
description: Publish pseudo topics internally to Foxglove using custom scripts. Manipulate, reduce, and filter existing messages and output them for useful visualization.
---

Publish pseudo topics internally to Foxglove using custom scripts. Manipulate, reduce, and filter existing messages and output them for useful visualization.

User scripts can transform both playback and preloaded data:

- **Playback data** – Messages streaming frame-by-frame into Foxglove; e.g. data for the [Raw Messages](/docs/visualization/panels/raw-messages) or [3D](/docs/visualization/panels/3d) panel

- **[Preloaded data](/docs/visualizing/playback#preloading)** – Messages for the entire data range being played back; e.g. data for the [Plot](/docs/visualization/panels/plot) or [State Transitions](/docs/visualization/panels/state-transitions) panel

When transforming preloaded data, Foxglove creates two instances of the running user script – one handles the full data range, while the other handles just the current playback frame of messages. Each instance of the user script receives the messages in [receive time order](/docs/visualizing/playback#message-ordering).

## Getting started

User Scripts uses TypeScript to typecheck messages in your scripts.

TypeScript is a superset of JavaScript, so you can Google syntactic questions (e.g. how to manipulate arrays, or access object properties) using JavaScript terms, and semantic questions (e.g. how to make an object property optional) using TypeScript terms.

Resources:

- [Basic Types](https://www.typescriptlang.org/docs/handbook/basic-types.html)
- [Gitbook](https://basarat.gitbook.io/typescript/getting-started/why-typescript)

### Writing your first script

Every script must declare 3 exports:

- `inputs` – An array of input topics to transform
- `output` – Name of the transformed output topic
- `script` – A function that takes messages from input topics, transforms them, and then publishes messages on the output topic; must be the [default export](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export#description)

Here is a basic script that echoes its input on a new output topic, `/studio_script/echo`:

```typescript
import { Input, Message } from "./types";

export const inputs = ["/rosout"];
export const output = "/studio_script/echo";

export default function script(event: Input<"/rosout">): Message<"rosgraph_msgs/Log"> => {
  return event.message;
}
```

If you drag in a `.bag` file, you should now be able to inspect the `/studio_script/echo` topic in the [Raw Messages panel](/docs/visualization/panels/raw-messages).

When you create a new script, you’ll be presented with some boilerplate:

```typescript
import { Input, Message } from "./types";

type Output = {
  hello: string;
};

export const inputs = ["/input/topic"];
export const output = "/studio_script/output_topic";

export default function script(event: Input<"/input/topic">): Output {
  return {
    hello: "world!",
  };
}
```

You’ll notice a few things:

- The `Input` and `Message` types are imported from the `./types` module, which provides helper types for your `Input` events and messages
- The `Output` type has some default properties that the `script` function's output must adhere to

`Input` is a generic type, meaning that it takes a parameter in order to be used. It is left empty on purpose as you'll need to populate it with the name of your input topic, e.g. `Input<"/rosout">`.

As for the `Output` type, you can either manually type out your output with the properties you care about (i.e. what is available in the boilerplate) or use one of the dynamically generated types from the `Message` type imported above. For instance, if you want to publish an array of markers, you can return the type `Message<"visualization_msgs/MarkerArray">`.

It's not always obvious how message properties affect the visualized output – strictly typing your scripts helps you debug issues at compile time rather than at runtime. With that said, you can disable Typescript checks when working on a rough draft of your script by adding `// @ts-expect-error` on the line above the one you want to ignore.

#### Using multiple input topics

In some cases, you will want to define multiple input topics:

```typescript
import { Input, Message } from "./types";

export const inputs = ["/rosout", "/tf"];
export const output = "/studio_script/echo";

export default function script(event: Input<"/rosout"> | Input<"/tf">): { data: number[] } => {
  if (event.topic === "/rosout") {
    // read event.message fields expected for /rosout messages
  } else {
    // read event.message fields expected for /tf messages
  }

  return { data: [] };
};
```

This snippet uses union types to assert that the message in the `script` function can take either a /rosout or /tf topic. Use an if/else clause to differentiate between incoming topics' schema names when manipulating messages.

To combine messages from multiple topics, create a variable in your script's global scope to reference every time your `script` function is invoked. Check timestamps to make sure you are not publishing out-of-sync data.

```typescript
import { Input, Message, Time } from "./types";

export const inputs = ["/rosout", "/tf"];
export const output = "/studio_script/echo";

let lastReceiveTime: Time = { sec: 0, nsec: 0 };
const myScope: {
  tf?: Message<"tf2_msgs/TFMessage">;
  rosout?: Message<"rosgraph_msgs/Log">;
} = {};

export default function script(event: Input<"/rosout"> | Input<"/tf">): { data: number[] } | undefined => {
  const { receiveTime } = message;
  let inSync = true;

  if (receiveTime.sec !== lastReceiveTime.sec || receiveTime.nsec !== lastReceiveTime.nsec) {
    lastReceiveTime = receiveTime;
    inSync = false;
  }

  if (message.topic === "/rosout") {
    myScope.rosout = event.message;
  } else {
    myScope.tf = event.message;
  }

  if (!inSync) {
    return { data: [] };
  }
};
```

#### Using global variables

The `script` function will receive all of the [variables](/docs/visualizing/variables) as an object every time it is called. Each time a new message is received, the `script` function will be re-run with the latest variable values:

```typescript
import { Input, Message } from "./types";

type Output = {};
type GlobalVariables = { someNumericaVar: number };

export const inputs = [];
export const output = "/studio_script/";

export default function script(event: Input<"/foo_marker">, globalVars: GlobalVariables): Output => {
  if (event.message.id === globalVars.someNumericaVar) {
    // Message's id matches $someNumericaVar
  }

  return { data: [] };
};
```

### Debugging

User scripts are not executed unless the output topic is being used somewhere within your layout.

To debug your script, first add a Raw Messages panel subscribing to the output topic to your layout. From there, you can either inspect the incoming topic directly, or invoke `log(someValue)` throughout the user script to print values to the _Logs_ section at the bottom of the panel.

The only value you cannot `log()` is one that is, or contains, a function definition. You can also log multiple values at once, e.g. `log(someValue, anotherValue, yetAnotherValue)`.

The following log statements will not produce any errors:

```typescript
const addNums = (a: number, b: number): number => a + b;
log(50, "ABC", null, undefined, { abc: 2, def: false });
log(1 + 2, addNums(1, 2));
```

But these containing function definitions will:

```typescript
log(() => {});
log(addNums);
log({ subtractNums: (a: number, b: number): number => a - b });
```

Invoking `log()` outside your `script` function will invoke it once, when your script is registered. Invoking `log()` inside your `script` function will log that value every time your `script` function is called.

Note that if your topic publishes at a high rate, using `log()` will significantly slow down your code.

### FAQ

**What if I don't want to produce a message every time publish is called?**

Do an early (or late) `return` in your function body when you don't want to publish. For example, let's say you only wanted to publish messages when a constant in the input is not 3:

```typescript
import { Input } from "./types";

export const inputs = ["/state"];
export const output = "/studio_script/manual_metrics";

export default function script(event: Input<"/state">): { metrics: number } | undefined => {
  if (event.message.constant === 3) {
    // Do not publish any message
    return;
  }
  return {
    // Your data here
  };
};
```

In Typescript, if you return without a value, it will implicitly return `undefined`. Note the union return type for the `script` function – we've indicated to Typescript that this function can return `undefined`.

**Can I return arbitrary JSON data in a message?**

Yes! User Scripts supports the json type. You can import it from the `./types` module:

```typescript
import { Input } from "./types";

export const inputs = ["/state"];
export const output = "/studio_script/json_data";

type Output = {
  data: {
    foo: number,
    bar: string,
    nestedData: {
       foo: number[],
       bar: boolean,
    }
  }
}

export default function script(event: Input<"/state">): Output => {
  return {
    data: {
      foo: 123,
      bar: "string",
      nestedData: {
        foo: [1, 2, 3],
        bar: true,
      },
    },
  };
};
```

### Using `@foxglove/schemas`

Import and use types from the [`@foxglove/schemas`](https://github.com/foxglove/schemas) package in user scripts:

```typescript
import { Input } from "./types";
import { Color, Pose } from "@foxglove/schemas";

export const inputs = ["/imu"];
export const output = "/studio_script/json_data";

type Output = {
  color: Color;
  pose: Pose;
};

export default function script(event: Input<"/imu">): Output {
  return {
    color: { r: 1, g: 1, b: 1, a: 1 },
    pose: {
      position: { x: 1, y: 1, z: 1 },
      orientation: { x: 1, y: 1, z: 1, w: 1 },
    },
  };
}
```

## Utilities and templates

The sidebar's _Utilities_ tab includes functions that can be imported for use in any script (e.g. `import { compare } from "./time.ts"`). The `types.ts` utility file is generated from the currently loaded data source, and contains type definitions for all found schemas.

We currently do not allow importing 3rd-party packages, but [let us know](/slack) if there are packages that would be useful to you!

The _Templates_ tab includes boilerplate for writing common scripts, like one that publishes a `MarkerArray`. If you have any other use cases that would work well as a template, please [let us know](/slack).

## Settings

| General                 |                                              |
| ----------------------- | -------------------------------------------- |
| **Auto-format on save** |  Auto-format the code in your script on save |

## Shortcuts

- `Cmd` + `s` – Save script changes
