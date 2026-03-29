# @kitsuyui/react-dekamoji

[![npm version](https://badge.fury.io/js/@kitsuyui%2Freact-dekamoji.svg)](https://badge.fury.io/js/@kitsuyui%2Freact-dekamoji)

Dekamoji is a React component that changes the font size according to the size of the available space. It displays the largest possible font size that can be displayed in response to changes in layout bounds.

## Design role

This package is a fit-text layout primitive plus an auto-measuring default wrapper.
`SizedDekamoji` computes text size for a known width and height, while `AutoDekamoji` measures the parent and feeds that primitive.

## Demo

Storybook: https://react-playground.docs.kitsuyui.com/storybook/

## Installation

### npm

```sh
npm install @kitsuyui/react-dekamoji
```

### yarn

```sh
yarn add @kitsuyui/react-dekamoji
```

### pnpm

```sh
pnpm add @kitsuyui/react-dekamoji
```

## Usage

```tsx
import { AutoDekamoji, SizedDekamoji } from '@kitsuyui/react-dekamoji'
```

Use `AutoDekamoji` when the component should measure its parent automatically.
Use `SizedDekamoji` when the available width and height are already known.
Both components accept `implementation="dom" | "zoomer" | "pretext"` to compare the original hidden-DOM sizing, a `react-zoomer`-based strategy, and a `pretext`-based strategy.
They also accept text wrapping related CSS props such as `whiteSpace`, `overflowWrap`, `wordBreak`, and `lineBreak` so Storybook can compare how each strategy responds to different wrapping rules.

## License

MIT
