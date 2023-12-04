import { defineConfig } from 'tsup'
export default defineConfig({
  target: 'es2020',
  format: ['cjs', 'esm'],
  entry: [
    './src/**/*.{ts,tsx}',
    '!./src/**/*.test.{ts,tsx}',
    '!./src/**/test.{ts,tsx}',
  ],
  sourcemap: true,
  dts: true,
})
