# @kitsuyui/react-measure

[![npm version](https://badge.fury.io/js/@kitsuyui%2Freact-measure.svg)](https://badge.fury.io/js/@kitsuyui%2Freact-measure)

React component that gets the size of the parent element and renders it.

## Design role

This package is a measurement primitive plus an auto-measuring default wrapper.
`MeasureBase` is the pure SVG visualization, and `AutoMeasure` binds that visualization to parent size measurement.

## Demo

Storybook: https://react-playground.docs.kitsuyui.com/storybook/

## Installation

### npm

```sh
npm install @kitsuyui/react-measure
```

### yarn

```sh
yarn add @kitsuyui/react-measure
```

### pnpm

```sh
pnpm add @kitsuyui/react-measure
```

## Usage

```tsx
import { AutoMeasure, MeasureBase } from '@kitsuyui/react-measure'
```

Use `AutoMeasure` when the component should measure its parent automatically.
Use `MeasureBase` when width and height are already known and you only need the pure visualization.

## License

MIT
