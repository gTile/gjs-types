
# Json-1.0

![version](https://img.shields.io/npm/v/@gtile/json-1.0)
![downloads/week](https://img.shields.io/npm/dw/@gtile/json-1.0)


GJS TypeScript type definitions for Json-1.0, generated from library version 1.8.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v3.2.3.

JSON-GLib is a library for reading and parsing JSON using GLib and GObject data types and API.

## Install

To use this type definitions, install them with NPM:
```bash
npm install @gtile/json-1.0
```

## Usage

You can import this package into your project like this:
```ts
import Json from '@gtile/json-1.0';
```

Or if you prefer CommonJS, you can also use this:
```ts
const Json = require('@gtile/json-1.0');
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@gtile/json-1.0` or `@gtile/json-1.0/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@gtile/json-1.0'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@gtile/json-1.0"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
import Json from 'gi://Json?version=1.0';
```

### Global import

You can also import the module with Typescript support using the global `imports.gi` object of GJS.
For this you need to include `@gtile/json-1.0` or `@gtile/json-1.0/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@gtile/json-1.0'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@gtile/json-1.0"],
  ...
}
```

Now you have also type support for this, too:

```ts
const Json = imports.gi.Json;
```

### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).

