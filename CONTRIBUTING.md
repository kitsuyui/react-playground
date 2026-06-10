# Contributing to react-playground

Thank you for your interest!

## Prerequisites

- [Bun](https://bun.sh/) (see `package.json` for the expected version)
- [lefthook](https://lefthook.dev/) for local git hooks

## Setup

```sh
git clone https://github.com/kitsuyui/react-playground.git
cd react-playground
bun install
lefthook install
```

## Common Commands

| Command | Purpose |
|---|---|
| `bun run build` | Build all packages |
| `bun run lint` | Run Biome linter |
| `bun run typecheck` | Type-check with TypeScript |
| `bun run test` | Run Vitest tests |
| `bun run validate` | Run all checks |

## Submitting a Pull Request

1. Fork the repository and create a topic branch from `main`.
2. Make your changes, including tests for new behaviour.
3. Run `bun run validate` to confirm everything passes.
4. Open a pull request against `main` using the PR template.

## Reporting Bugs

Use the [bug report template](.github/ISSUE_TEMPLATE/bug_report.md).
Please include a minimal reproduction — a Storybook story or test snippet is ideal.

## Repository Structure

```
packages/   individual @kitsuyui/react-* packages
examples/   example applications
config/     shared tooling configuration
```

Each package under `packages/` is an independent npm package.
Changes to a single package should be scoped to that directory when possible.

## License

MIT
