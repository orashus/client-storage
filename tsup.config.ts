import { defineConfig } from "tsup";


export default defineConfig({
  format: ["cjs", "esm"], // since we are transpiling our code to but both "cjs" and "mjs"
  entry: ["src/index.ts"],
  dts: true, // for our declarations  file
  shims: true,
  skipNodeModulesBundle: true,
  clean: true,
});
