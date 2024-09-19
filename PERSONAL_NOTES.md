# Personal Notes

__table of content__

- [tsup](#tsup)
- [publishing npm pkg](#publishing-npm-pkg)
- [Configuring your pkg](#configuring-your-packagejson-file)
- [Cool npm cli commands](#cool-npm-cli-commands)
- [testing pkg](#testing-pkg)

|

__useful links__

- [how to publish a scoped package](https://docs.npmjs.com/cli/v10/using-npm/scope#publishing-scoped-packages)
  - note that you'll need the `--access public` specification since scoped pkgs are private by default

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

## Configuring your `package.json` file

  checkout this [documentation](https://docs.npmjs.com/cli/v10/configuring-npm/package-json) from [npmjs.com](https://docs.npmjs.com)

## Cool NPM CLI commands

- `npm login`
  - to login to your account through your cli
  
- `npm whoami`
  - to check who you are. It literally prints out your npm account username on the terminal

- `npm repo`
  - opens up the repository url that is set in the package.json of that project

- `npm publish`
  - publishes your package to [npmjs.com](https://docs.npmjs.com)
  - use the `--access public` specification to specify that is public since scoped packages are private by default
    - there exist a `--access restricted` flag as well

- `npm access public` or `npm access restricted`
  - will update the access of an already published package

- `npm unpublish <test_pkg_name>@<version>`
  - use to unpublish a single package version
  - you can unpublish all versions at once by running `npm unpublish <package_name> --force`

- `npm link`
  - to create a global symlink (symbolic link) of the package your are building. use this to test locally.
  - to use the symlink you created and simulate that package in another local project, navigate to the other project and run
    - `npm link <test_pkg_name>`
      - to link the package you are testing in this other local project
      - since it is a symlink, any changes you make in the original package will reflect in the places where you have linked the package

- `npm unlink`
  - to destroy the global symlink you created and unlink the package
  - or you also go to where you used the symlink and run `npm unlink <test_pkg_name>` though this will not remove the global synlink

## Testing PKG

- to test your package locally, use the `npm link` and `npm unlink` commands explained in the section above ([cool npm cli commands](#cool-npm-cli-commands) section)
