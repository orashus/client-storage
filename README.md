# Welcome to `client-storage` PKG

![current version]( https://img.shields.io/badge/@latest-0.0.1-gold)
[![current version]( https://img.shields.io/badge/Author-RashJrEdmund-blue)](https://github.com/rashjredmund)

_`client-storage` is a simple wrapper around the browser's localStorage and sessionStorage APIs, it abstracts the lengthy "localStorage.getItem()" etc ways of accessing local or session storage, adds more functionality to these methods and also come with a type safe approach_

_`client-storage` can also help in server rendered applications such as those built with [NextJs](https://nextjs.org/) In that, you could decide to have a fall-back response for what ever you are getting hence throwing an error on the server if the browser `window` is not defined_

- __table of content__
  - [installations](#add-to-your-projects-dependencies)
  - [how to use](#how-to-use)
  - [personal notes](./PERSONAL_NOTES.md) # a few notes on my findings

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

- First import the `CLIENT_STORAGE` class from `"@orashus/client-storage"`

```ts
  import { CLIENT_STORAGE } from "@orashus/client-storage";

  const localStorage = new CLIENT_STORAGE("local");

  const sessionStorage = new CLIENT_STORAGE("session");
```

___

NOTE!! __For the rest of this guide, we'll be using the `localStorage` instance__

