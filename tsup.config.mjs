import { defineConfig } from 'tsup'

export default defineConfig({
  target: 'es2020',
  format: ['cjs', 'esm'],
  entry: [
    './src/**/*.{ts,tsx}',
    '!./src/**/*.test.{ts,tsx}',
    '!./src/**/test.{ts,tsx}',
    '!./src/**/*.spec.{ts,tsx}',
    '!./src/**/spec.{ts,tsx}',
    '!./src/**/*.stories.{ts,tsx}',
    '!./src/**/stories.{ts,tsx}',
  ],
  loader: {
    '.css': 'local-css',
  },
  sourcemap: true,
  dts: true,
})
