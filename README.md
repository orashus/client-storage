# Welcome to `client-storage` PKG

![current version]( https://img.shields.io/badge/@latest-0.0.1-gold)
[![current version]( https://img.shields.io/badge/Author-RashJrEdmund-blue)](https://github.com/rashjredmund)

_`client-storage` is a simple wrapper around the browser's localStorage and sessionStorage APIs, it abstracts the lengthy "localStorage.getItem()" etc ways of accessing local or session storage, adds more functionality to these methods and also come with a type safe approach_

_`client-storage` can also help in server rendered applications such as those built with [NextJs](https://nextjs.org/) In that, you could decide to have a fall-back response for what ever you are getting hence throwing an error on the server if the browser `window` is not defined_

- __table of content__
  - [installations](#add-to-your-projects-dependencies)
  - [how to use](#how-to-use)
  - [personal notes](#personal-notes)

## Add to your project's `dependencies`

To install run

```bash
  # npm
  npm install @orashus/client-storage

  # pnpm
  pnpm install @orashus/client-storage

  # yarn
  yarn add @orashus/client-storage
```

## How to use

First

## Personal Notes

- __Entry point__
  
  Since we'll have to be transpiling our code for both `commonjs (.cjs)` and `esm (.mjs)` (_since those installing the package might opt for either_), we needed to specify the `entry points` for both modules.

  in the `package.json` file, the `"module": "./dist/index.mjs"` key-val is to specify the path to the `esm` module, assuming someone installing the package was using `"type": "module"` in his `package.json`.

  If he didn't specify and left the default `"type": "commonjs"` nodejs will be smart enough to use `"main": "./dist/index.js"` in our package.json in place of `commonjs` as his entry point to the package

  - [`tsup`](https://tsup.egoist.dev/) will help us with this transpilation
  - Also checkout this article about [tree-shaking with tsup](https://dorshinar.me/posts/treeshaking-with-tsup)

- __@types__

  the `"types": "./dist/index.d.ts"` specifies where our types will be kept assuming someone was using `TypeScript` and wanted to use some of our types.
