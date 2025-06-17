import { defineConfig } from 'tsup'

export default defineConfig({
  target: 'es2020',
  format: ['cjs', 'esm'],
  entry: [
    './src/**/*.{ts,tsx}',
    '!./src/**/*.spec.{ts,tsx}',
    '!./src/stories/**/*.stories.tsx',
    '!./src/stories/**/*.mdx',
  ],
  loader: {
    '.css': 'local-css',
  },
  sourcemap: true,
  cjsInterop: true,
  dts: true,
  noExternal: [
    '@kitsuyui/number-time/toText',

    // react-use is licensed as public domain.
    // and it is cjs module. I waant to use it both in cjs and esm.
    // So I bundle it.
    // https://github.com/streamich/react-use/blob/master/LICENSE
    'react-use',
  ],
})
