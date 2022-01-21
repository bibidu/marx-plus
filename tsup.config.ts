import { defineConfig, Options } from "tsup";
import { replace } from "esbuild-plugin-replace";

export default defineConfig([
  {
    entry: ["packages/marx-export-button/src/index.ts"],
    outDir: "dist/marx-export-button",
    clean: true,
    format: ["cjs"],
    legacyOutput: true,
    noExternal: ["html2canvas"],
    esbuildPlugins: [
      replace({
        __DEV__: JSON.stringify(process.env.NODE_ENV),
      }),
    ],
  },
  {
    entry: ["packages/marx-inject-template-button/src/index.ts"],
    outDir: "dist/marx-inject-template-button",
    clean: true,
    format: ["cjs"],
    legacyOutput: true,
    esbuildPlugins: [
      replace({
        __DEV__: JSON.stringify(process.env.NODE_ENV),
      }),
    ],
  },
]);
