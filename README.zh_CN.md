# VITE-PLUGIN-TEMPLATE

用于修改 Vite 的入口 html 文件。

## 安装

**vite version:** >=2.0.0

```bash
yarn add vite-plugin-template -D
```

or

```bash
npm i vite-plugin-template -D
```

## 使用

假设你需要在不同环境中分别使用 `index.dev.html` 和 `index.prod.html`。

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

**注意**，根目录必须要有 `index.html` 文件，虽然实际不会用到，但是如果没有的话 Vite 不能正常运行。
