const tsup = require("tsup");

module.exports = tsup.defineConfig({
  target: "es2020",
  format: ["cjs", "esm"],
  entry: [
    "./src/**/*.{ts,tsx}",
    "!./src/**/*.test.{ts,tsx}",
    "!./src/**/test.{ts,tsx}",
  ],
  clean: true,
  dts: true,
});
