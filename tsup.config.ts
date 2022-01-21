import type { Options } from "tsup";
import { replace } from "esbuild-plugin-replace";

export function defineConfig(options?: Options): Options {
  return {
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
    ...(options || {}),
  };
}
