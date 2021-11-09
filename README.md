# VITE-PLUGIN-TEMPLATE

A Vite plugin for modifying the entry html file.

[中文文档](./README.zh_CN.md)

## Installation

**vite version:** >=2.0.0

```bash
yarn add vite-plugin-template -D
```

or

```bash
npm i vite-plugin-template -D
```

## Usage

Assuming you need `index.dev.html` or `index.prod.html` for different environments.

```ts
// vite.config.js
import { defineConfig } from 'vite'
import template from 'vite-plugin-template'

export default ({ mode }) => {
  // https://github.com/vitejs/vite/issues/1930#issuecomment-783747858
  const isProd = mode === 'production'

  return defineConfig({
    plugins: [
      template({
        template: isProd ? 'index.prod.html' : 'index.dev.html'
      }),
      // other plugins
    ]
  })
}
```

**NOTE THAT** there must be an `index.html` in the root directory to make sure Vite works properly, though this file will not actually be used.

## TODO

- [ ] test
