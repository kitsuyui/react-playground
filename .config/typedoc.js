/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  name: 'react-playground',
  entryPoints: [
    '../packages/*/src/**/*.ts',
    '../packages/*/src/**/*.tsx',
],
  excludeExternals: true,
  excludePrivate: true,
  excludeProtected: true,
  excludeInternal: true,
  tsconfig: './tsconfig.json',
  exclude: [
    '**/node_modules/*',
    '**/dist/*',
    '**/*.test.ts',
    '**/*.test.tsx',
    '**/*.spec.ts',
    '**/*.spec.tsx',
    '**/*.stories.ts',
    '**/*.stories.tsx',
    '**/__tests__/**/*',
  ],
  out: '../build/typedocs',
}
