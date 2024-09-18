# Personal Notes

## tsup

- __Entry point__

    Since we'll have to be transpiling our code for both `commonjs (.cjs)` and `esm (.mjs)` (_since those installing the package might opt for either_), we needed to specify the `entry points` for both modules.

    in the `package.json` file, the `"module": "./dist/index.mjs"` key-val is to specify the path to the `esm` module, assuming someone installing the package was using `"type": "module"` in his `package.json`.

    If he didn't specify and left the default `"type": "commonjs"` nodejs will be smart enough to use `"main": "./dist/index.js"` in our package.json in place of `commonjs` as his entry point to the package

  - [`tsup`](https://tsup.egoist.dev/) will help us with this transpilation
  - Also checkout this article about [tree-shaking with tsup](https://dorshinar.me/posts/treeshaking-with-tsup)

- __@types__

    the `"types": "./dist/index.d.ts"` specifies where our types will be kept assuming someone was using `TypeScript` and wanted to use some of our types.

## Publishing npm pkg

- Read [here](https://docs.npmjs.com/cli/v10/using-npm/scope#publishing-scoped-packages) on how to publish a `scoped` package
