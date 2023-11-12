
# Shell-13

![version](https://img.shields.io/npm/v/@gtile/shell-13)
![downloads/week](https://img.shields.io/npm/dw/@gtile/shell-13)


GJS TypeScript type definitions for Shell-13, generated from library version 13.0.0 using [ts-for-gir](https://github.com/gjsify/ts-for-gir) v3.2.3.


## Install

To use this type definitions, install them with NPM:
```bash
npm install @gtile/shell-13
```

## Usage

You can import this package into your project like this:
```ts
import Shell from '@gtile/shell-13';
```

Or if you prefer CommonJS, you can also use this:
```ts
const Shell = require('@gtile/shell-13');
```

### Ambient Modules

You can also use [ambient modules](https://github.com/gjsify/ts-for-gir/tree/main/packages/cli#ambient-modules) to import this module like you would do this in JavaScript.
For this you need to include `@gtile/shell-13` or `@gtile/shell-13/ambient` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@gtile/shell-13'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@gtile/shell-13"],
  ...
}
```

Now you can import the ambient module with TypeScript support: 

```ts
import Shell from 'gi://Shell?version=13';
```

### Global import

You can also import the module with Typescript support using the global `imports.gi` object of GJS.
For this you need to include `@gtile/shell-13` or `@gtile/shell-13/import` in your `tsconfig` or entry point Typescript file:

`index.ts`:
```ts
import '@gtile/shell-13'
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    ...
  },
  "include": ["@gtile/shell-13"],
  ...
}
```

Now you have also type support for this, too:

```ts
const Shell = imports.gi.Shell;
```

### Bundle

Depending on your project configuration, it is recommended to use a bundler like [esbuild](https://esbuild.github.io/). You can find examples using different bundlers [here](https://github.com/gjsify/ts-for-gir/tree/main/examples).

## Other packages

All existing pre-generated packages can be found on [gjsify/types](https://github.com/gjsify/types).
