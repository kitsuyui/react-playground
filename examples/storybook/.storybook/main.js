import { createRequire } from "node:module";
import { dirname, join } from "node:path";
const require = createRequire(import.meta.url);
/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],

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
