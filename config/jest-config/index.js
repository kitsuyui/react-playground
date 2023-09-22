// https://jestjs.io/docs/configuration

// eslint-disable-next-line no-undef
module.exports = {
  extensionsToTreatAsEsm: [".ts", ".tsx"],
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  testEnvironment: "jsdom",
  transform: {
    "^.+.(t|j)sx?$": [
      "@swc/jest",
      {
        sourceMaps: true,
        jsc: {
          parser: {
            syntax: "typescript",
          },
        },
      },
    ],
  },
};
