import type { Hello } from "./types/hello";

const obj = {
  "key": "val"
}

function test(): Hello {
  console.log("all good");

  const { key } = obj;

  console.log(key)

  return {
    yes: true
  }
}

test();
