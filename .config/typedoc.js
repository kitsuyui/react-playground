/** @type {import('typedoc').TypeDocOptions} */
module.exports = {
  entryPoints: ['../packages/*/'],
  excludeExternals: true,
  excludePrivate: true,
  excludeProtected: true,
  excludeInternal: true,
  entryPointStrategy: 'packages',
  exclude: [
    'node_modules',
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
