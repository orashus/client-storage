# Welcome to `client-storage` PKG

<div align=center>
  <img src="https://github.com/orashus/client-storage/blob/main/assets/client-storage%20logo.png?raw=true" />
</div>

[![current version]( https://img.shields.io/badge/@latest-v0.0.16-gold)](https://www.npmjs.com/package/@orashus/client-storage)
[![author RashJrEdmund]( https://img.shields.io/badge/Author-RashJrEdmund-blue)](https://github.com/rashjredmund)

__What is client-storage__

- _`client-storage` is a simple wrapper around the browser's localStorage and sessionStorage APIs, it abstracts the lengthy "localStorage.getItem()" etc ways of accessing local or session storage, adds more functionality to these methods like you can configure for automatic parsing. It also comes with a type safe approach_

- _`client-storage` can also help in server rendered applications such as those built with [NextJs](https://nextjs.org/) In that, you could decide to have a fall-back value for what ever data you are getting from storage, this way, it won't throw an error on the server if the browser `window` is not defined_

__table of content__

- [installation](#installation)
- [how to use](#how-to-use)
  - [Reading from storage](#reading-from-storage)
  - [writing to storage](#writing-to-storage)
  - [Removing from storage](#removing-from-storage)
  - [Clearing all items from storage](#clearing-all-items-from-storage)
- [personal notes](./PERSONAL_NOTES.md) # a few notes on my findings

## Installation

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

- First import the `CLIENT_STORAGE` class from `"@orashus/client-storage"` and create an instance of the kind of storage you'd like to use.
  - choose between `local` for localStorage and `session` for sessionStorage

```ts
  import { CLIENT_STORAGE } from "@orashus/client-storage";

  const localStorage = new CLIENT_STORAGE("local");

  const sessionStorage = new CLIENT_STORAGE("session");
```

___

NOTE!! __For the rest of this guide, we'll be using the `localStorage` instance__

- #### Reading from storage

  - Basic

    ```ts
      const val = localStorage.get("test-key");
      // returns string by default
    ```

  - You could `parse` the value by setting the parse option to `true` like so

    ```ts
      const val = localStorage.get("test-key", { parse: true });
      // this will attempt to execute JSON.parse() on the read value
      // and will throw error if value is not a valid JSON
    ```

  - You could also assign a `fallback` value by updating the fallback option like so

    ```ts
      const val = localStorage.get("another-key", { fallback: "" });
      // Will return fallback if an error occurs or window is not defined
    ```

  #### Writing to storage

  - As simple as

    ```ts
      localStorage.save("key", { value: "pair" });
      // value will be stringified under the hood if it is not a string
    ```

  #### Removing from storage

  - Remove items from storage with

    ```ts
      localStorage.remove("key");
      // clears value from storage
    ```

  #### Clearing all items from storage

  - Remove all items from storage with

    ```ts
      localStorage.clear();
      // clears everything within storage
    ```

|

happy coding!
