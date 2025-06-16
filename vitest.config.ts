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
      // workaround for testing with wasm
      '@kitsuyui/rectangle-dividing',
    ],
  },
  test: {
    /**
     * globals: true allows you to use describe, test, etc. without importing them
     * It is better to import them explicitly to avoid future liabilities, so it is not set to globals: true
     */
    globals: false,
    exclude: [
      ...configDefaults.exclude,
      'node_modules',
      'dist',
      'coverage',
      'stories/**',
      '**/*.stories.tsx',
    ],
    coverage: {
      include: ['**/src'],
      exclude: [
        '**/src/stories/**',
        '**/src/**/*.stories.tsx',
        '**/src/**/*.stories.mdx',
        '**/src/**/*.spec.tsx',
      ],
    },
    environment: 'jsdom',
  },
  /**
   * clearScreen: true clears the screen when running tests. The default is true
   * If you are watching multiple processes, the results of other processes will also be cleared, so it is set to false
   */
  clearScreen: false,
})