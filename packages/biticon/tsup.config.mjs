import { defineConfig } from 'tsup'

export default defineConfig({
  target: 'es2020',
  format: ['cjs', 'esm'],
  entry: [
    './src/**/*.{ts,tsx}',
    '!./src/**/*.test.{ts,tsx}',
    '!./src/**/*.spec.{ts,tsx}',
    '!./src/**/test.{ts,tsx}',
    '!./src/stories/**/*.stories.tsx',
    '!./src/stories/**/*.mdx',
  ],
  loader: {
    '.css': 'local-css',
  },
  sourcemap: true,
  dts: true,
  // static link dependencies
  noExternal: [
    // Do not include custom utilities in dependencies
    '@kitsuyui/cipher',
  ],
})
