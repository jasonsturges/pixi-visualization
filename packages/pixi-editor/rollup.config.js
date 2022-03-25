import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import pkg from "./package.json";

export default [
  // browser-friendly UMD build
  {
    input: "src/index.js",
    output: {
      name: "PixiEditor",
      file: pkg.browser,
      format: "umd",
      globals: { "pixi.js": "PIXI" },
    },
    external: [ "pixi.js" ],
    plugins: [
      resolve(),
      commonjs()
    ],
  },

  // CommonJS (for Node) and ES module (for bundlers) build.
  {
    input: "src/index.js",
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" },
    ],
    external: [ "pixi.js" ],
  },
];
