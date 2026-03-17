# @kitsuyui/react-wavebox

[![npm version](https://badge.fury.io/js/@kitsuyui%2Freact-wavebox.svg)](https://badge.fury.io/js/@kitsuyui%2Freact-wavebox)

Wavebox is a component that deforms vertically and horizontally. It is useful for debugging responsive layouts.

## Design role

This package is an animated layout primitive with an exported provider layer.
`WaveBoxProvider` owns time-varying size state, `SizedBox` is the pure sized container, and `WaveBox` is the default composition.

## Demo

Storybook: https://react-playground.docs.kitsuyui.com/storybook/

## Installation

### npm

```sh
npm install @kitsuyui/react-wavebox
```

### yarn

```sh
yarn add @kitsuyui/react-wavebox
```

### pnpm

```sh
pnpm add @kitsuyui/react-wavebox
```

## Usage

```tsx
import { WaveBox, WaveBoxProvider, SizedBox } from '@kitsuyui/react-wavebox'
```

Use `WaveBox` as the default animated composition.
Use `WaveBoxProvider` and `SizedBox` when you want to control how the animated size state is rendered.

## License

MIT
