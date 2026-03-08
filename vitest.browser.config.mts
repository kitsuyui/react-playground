import { playwright } from '@vitest/browser-playwright'
import { configDefaults, defineConfig } from 'vitest/config'
import wasm from 'vite-plugin-wasm'
import topLevelAwait from 'vite-plugin-top-level-await'

export default defineConfig({
  plugins: [
    wasm(),
    topLevelAwait(),
  ],
  ssr: {
    noExternal: [
      '@kitsuyui/rectangle-dividing',
      'react-use',
    ],
  },
  test: {
    globals: false,
    include: ['packages/*/src/**/*.browser.spec.tsx'],
    exclude: [
      ...configDefaults.exclude,
      'node_modules',
      'dist',
      'coverage',
      'stories/**',
      '**/*.stories.tsx',
    ],
    coverage: {
      enabled: false,
    },
    setupFiles: ['./vitest.browser.setup.ts'],
    browser: {
      enabled: true,
      provider: playwright(),
      instances: [
        {
          browser: 'chromium',
          headless: true,
          viewport: {
            width: 1280,
            height: 720,
          },
        },
      ],
      screenshotFailures: false,
    },
  },
  clearScreen: false,
})
