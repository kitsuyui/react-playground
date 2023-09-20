// https://jestjs.io/docs/configuration
// https://jestjs.io/docs/configuration
export default {
  ...require('@kitsuyui/jest-config'),
  moduleNameMapper: {
    '\\.css$': '<rootDir>/__mocks__/styleMock.js',
  },
}
