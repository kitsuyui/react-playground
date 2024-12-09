// https://jestjs.io/docs/configuration
export default {
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+.(t|j)sx?$': [
      '@swc/jest',
      {
        sourceMaps: true,
        jsc: {
          parser: {
            syntax: 'typescript',
          },
        },
      },
    ],
    '^.+\\.(css|scss)$': 'jest-transform-stub',
  },
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'identity-obj-proxy',
    "@kitsuyui/react-textfield": "<rootDir>/packages/textfield/dist/",
    "@kitsuyui/react-clock": "<rootDir>/packages/clock/dist/",
    "@kitsuyui/react-stopwatch": "<rootDir>/packages/stopwatch/dist/",
    "@kitsuyui/react-timer": "<rootDir>/packages/timer/dist/",
  },
  collectCoverageFrom: ['packages/*/src/**/*.(tsx|ts)'],
}
