# @kitsuyui/react-timer

[![npm version](https://badge.fury.io/js/@kitsuyui%2Freact-timer.svg)](https://badge.fury.io/js/@kitsuyui%2Freact-timer)

Simple timer React component.

## Demo

Storybook: https://react-playground.docs.kitsuyui.com/storybook/

## Installation

### npm

```sh
npm install @kitsuyui/react-timer
```

### yarn

```sh
yarn add @kitsuyui/react-timer
```

### pnpm

```sh
pnpm add @kitsuyui/react-timer
```

## Usage

```tsx
import {
  TimerContextProvider,
  TimerContext,
  DefaultTimer,
  type TimerContextValue,
} from '@kitsuyui/react-timer'

const Timer = () => {
  return (
    <TimerContextProvider>
      <TimerContext.Consumer>
        {(timer: TimerContextValue) => <DefaultTimer {...timer} />}
      </TimerContext.Consumer>
    </TimerContextProvider>
  )
}
```

`TimerContextProvider` is the primitive state/controller layer.
`DefaultTimer` is the default UI layered on top of that context value.
You can replace the UI entirely by consuming `TimerContext` yourself.

```typescript
export interface TimerValue {
  remaining: number
  running: boolean
}

export interface TimerActions {
  start(): void
  stop(): void
  toggle(): void
  reset(): void
  incrementTimerValue(value: number): void
  setTimerValue(value: number): void
}

export type TimerContextValue = TimerValue & TimerActions
```

## License

MIT
