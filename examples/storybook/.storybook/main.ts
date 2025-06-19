import type { StorybookConfig } from '@storybook/react-vite'
import wasm from 'vite-plugin-wasm'
import topLevelAwait from 'vite-plugin-top-level-await'
import { cjsInterop } from 'vite-plugin-cjs-interop'

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../packages/*/src/stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../../../packages/*/src/stories/**/*.mdx',
  ],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-docs",
  ],

  framework: '@storybook/react-vite',

  // https://storybook.js.org/docs/sharing/storybook-composition

  staticDirs: ['../public'],

  core: {
    builder: '@storybook/builder-vite',
    disableTelemetry: true,
  },
  async viteFinal(config, _) {
    config.plugins = [
      ...(config.plugins || []),
      wasm(),
      topLevelAwait(),
      cjsInterop({
        dependencies: [
          'react-use',
        ],
      }),
    ]
    config.optimizeDeps = {
      ...(config.optimizeDeps || {}),
      include: [
        ...(config.optimizeDeps?.include || []),
        '@kitsuyui/rectangle-dividing',
      ],
    }
    config.ssr = {
      ...(config.ssr || {}),
      noExternal: [
        '@kitsuyui/rectangle-dividing',
      ],
    }
    return config
  }
}
export default config
