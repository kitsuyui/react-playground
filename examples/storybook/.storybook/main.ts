import type { StorybookConfig } from '@storybook/react-vite'
import wasm from 'vite-plugin-wasm'
import topLevelAwait from 'vite-plugin-top-level-await'
import { cjsInterop } from 'vite-plugin-cjs-interop'

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
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
    return withStorybookViteTweaks(config)
  }
}
export default config

const withStorybookViteTweaks = (
  config: Parameters<NonNullable<StorybookConfig['viteFinal']>>[0]
) => {
  return withStorybookSsr(
    withStorybookOptimizeDeps(withStorybookPlugins(withStorybookBuild(config)))
  )
}

const withStorybookBuild = (
  config: Parameters<NonNullable<StorybookConfig['viteFinal']>>[0]
) => {
  config.build = {
    ...(config.build || {}),
    target: 'esnext',
  }
  return config
}

const withStorybookPlugins = (
  config: Parameters<NonNullable<StorybookConfig['viteFinal']>>[0]
) => {
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
  return config
}

const withStorybookOptimizeDeps = (
  config: Parameters<NonNullable<StorybookConfig['viteFinal']>>[0]
) => {
  config.optimizeDeps = {
    ...(config.optimizeDeps || {}),
    include: [
      ...(config.optimizeDeps?.include || []),
      '@kitsuyui/rectangle-dividing',
    ],
  }
  return config
}

const withStorybookSsr = (
  config: Parameters<NonNullable<StorybookConfig['viteFinal']>>[0]
) => {
  config.ssr = {
    ...(config.ssr || {}),
    noExternal: [
      '@kitsuyui/rectangle-dividing',
    ],
  }
  return config
}
