import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "app.js",
  output: {
    sourcemap: false,
    format: "es",
    file: "app.output.js",
  },
  plugins: [resolve({ browser: true })],
};
