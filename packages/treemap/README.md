# @kitsuyui/react-treemap

[![npm version](https://badge.fury.io/js/@kitsuyui%2Freact-treemap.svg)](https://badge.fury.io/js/@kitsuyui%2Freact-treemap)

Treemap is a component that displays boxes like a tree mapping chart.

## Design role

This package is a treemap layout primitive plus an auto-measuring default wrapper.
`SizedTreemap` calculates positioned regions for a known width and height, while `AutoTreemap` measures the parent and feeds that primitive.

## Demo

Storybook: https://react-playground.docs.kitsuyui.com/storybook/

## Installation

### npm

```sh
npm install @kitsuyui/react-treemap
```

### yarn

```sh
yarn add @kitsuyui/react-treemap
```

### pnpm

```sh
pnpm add @kitsuyui/react-treemap
```

## Usage

```tsx
import { AutoTreemap, SizedTreemap, TreemapContext } from '@kitsuyui/react-treemap'
```

Use `AutoTreemap` when the component should measure its parent automatically.
Use `SizedTreemap` when layout bounds are already known.
Use `TreemapContext` when each cell needs access to its computed rectangle metadata.

## License

MIT
