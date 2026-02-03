import { defineConfig } from 'tsdown'

export default defineConfig({
  target: 'es2020',
  format: ['cjs', 'esm'],
  entry: [
    './src/**/*.{ts,tsx}',
    '!./src/**/*.spec.{ts,tsx}',
    '!./src/stories/**/*.stories.tsx',
    '!./src/stories/**/*.mdx',
  ],
  platform: 'browser',
  splitting: true,
  treeshake: true,
  minify: true,
  sourcemap: true,
  cjsModuleInterop: true,
  dts: true,
  noExternal: [
    '@kitsuyui/number-time/toText',

    // react-use is licensed as public domain.
    // and it is cjs module. I want to use it both in cjs and esm.
    // So I bundle it.
    // https://github.com/streamich/react-use/blob/master/LICENSE
    'react-use',
  ],
  inlineOnly: false,
})
