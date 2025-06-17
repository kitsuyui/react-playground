/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  entryPoints: ['../packages/*/'],
  excludeExternals: true,
  excludePrivate: true,
  excludeProtected: true,
  excludeInternal: true,
  entryPointStrategy: 'packages',
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
