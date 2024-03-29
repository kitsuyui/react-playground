# @kitsuyui/react-stopwatch

[![npm version](https://badge.fury.io/js/@kitsuyui%2Freact-stopwatch.svg)](https://badge.fury.io/js/@kitsuyui%2Freact-stopwatch)

Simple stopwatch React component.

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
import { StopWatchContainer, MinimalStopwatch } from '@kitsuyui/react-stopwatch'

const Stopwatch = () => {
  return (
    <StopwatchContainer>
      <StopwatchContext.Consumer>
        {(props: StopwatchProps) => <MinimalStopwatch {...props} />}
      </StopwatchContext.Consumer>
    </StopwatchContainer>
  )
}
```

StopwatchContainer is a component that provides StopwatchContext.
Stopwatchs are pure components that do not depend on StopwatchContext. Accept StopwatchProps as props.
So you can define your own Stopwatch component by same interface.

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

export type StopwatchProps = StopwatchValue & StopwatchActions
```

## License

MIT
