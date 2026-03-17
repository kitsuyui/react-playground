# @kitsuyui/react-stopwatch

[![npm version](https://badge.fury.io/js/@kitsuyui%2Freact-stopwatch.svg)](https://badge.fury.io/js/@kitsuyui%2Freact-stopwatch)

Simple stopwatch React component.

## Design role

This package provides:

- `StopwatchContextProvider` as the stopwatch state/controller primitive
- `DefaultStopwatch` as the replaceable default UI

Consumers can use the default UI, or consume `StopwatchContext` directly and render their own interface.

## Demo

Storybook: https://react-playground.docs.kitsuyui.com/storybook/

## Installation

### npm

```sh
npm install @kitsuyui/react-stopwatch
```

### yarn

```sh
yarn add @kitsuyui/react-stopwatch
```

### pnpm

```sh
pnpm add @kitsuyui/react-stopwatch
```

## Usage

```tsx
import {
  StopwatchContextProvider,
  StopwatchContext,
  DefaultStopwatch,
  type StopwatchContextValue,
} from '@kitsuyui/react-stopwatch'

const Stopwatch = () => {
  return (
    <StopwatchContextProvider>
      <StopwatchContext.Consumer>
        {(props: StopwatchContextValue) => <DefaultStopwatch {...props} />}
      </StopwatchContext.Consumer>
    </StopwatchContextProvider>
  )
}
```

`StopwatchContextProvider` is the primitive state/controller layer.
`DefaultStopwatch` is the default UI layered on top of that context value.
You can replace the UI entirely by consuming `StopwatchContext` yourself.

```typescript
export interface StopwatchValue {
  elapsedTime: number
  running: boolean
}

export interface StopwatchActions {
  start(): void
  stop(): void
  toggle(): void
  reset(): void
}

export type StopwatchContextValue = StopwatchValue & StopwatchActions
```

## License

MIT
