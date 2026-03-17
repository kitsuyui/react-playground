# @kitsuyui/react-binary

[![npm version](https://badge.fury.io/js/@kitsuyui%2Freact-binary.svg)](https://badge.fury.io/js/@kitsuyui%2Freact-binary)

This is a React component representing a binary value.

## Design role

This package provides binary/text visualization primitives.
`Bits` is the structural primitive, and `SimpleBitString` / `DetailedBitString` are concrete visualizations built on top of it.

## Demo

Storybook: https://react-playground.docs.kitsuyui.com/storybook/

## Installation

### npm

```sh
npm install @kitsuyui/react-binary
```

### yarn

```sh
yarn add @kitsuyui/react-binary
```

### pnpm

```sh
pnpm add @kitsuyui/react-binary
```

## Usage

```tsx
import {
  Bits,
  DetailedBitString,
  SimpleBitString,
  type BitsProps,
  type DetailedBitStringProps,
  type SimpleBitStringProps,
} from '@kitsuyui/react-binary'
```

## License

MIT
