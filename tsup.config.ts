import { defineConfig, Options } from "tsup";
import { replace } from "esbuild-plugin-replace";

export default defineConfig({
  entry: [
    "packages/marx-export-button/src/index.ts",
    "packages/marx-inject-template-button/src/index.ts",
  ],
  outDir: 'dist',
  clean: true,
  format: ["cjs"],
  // format: ["esm", "cjs", "iife"],
  legacyOutput: true,
  noExternal: ["html2canvas"],
  esbuildPlugins: [
    replace({
      __DEV__: JSON.stringify(process.env.NODE_ENV),
    }),
  ],
});
