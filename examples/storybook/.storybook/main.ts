import { createRequire } from "node:module";
import { dirname, join } from "node:path";
import type { StorybookConfig } from '@storybook/react-webpack5';

const require = createRequire(import.meta.url);
const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../packages/*/src/stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../packages/*/src/stories/**/*.mdx',
  ],

  addons: [
    getAbsolutePath("storybook-addon-swc"),
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-webpack5-compiler-swc"),
    getAbsolutePath("@storybook/addon-docs")
  ],

  framework: {
    name: getAbsolutePath("@storybook/react-webpack5"),
    options: {},
  },

  // https://storybook.js.org/docs/sharing/storybook-composition

  staticDirs: ['../public'],

  webpack: async (config) => {
    config.experiments = {
      asyncWebAssembly: true,
      syncWebAssembly: true,
    }
    return config
  }
}
export default config

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}
