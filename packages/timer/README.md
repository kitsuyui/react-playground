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
import { TimerContainer, MinimalTimer } from '@kitsuyui/react-timer'

const Timer = () => {
  return (
    <TimerContainer>
      <TimerContext.Consumer>
        {(timer: TimerProps) => <MinimalTimer {...timer} />}
      </TimerContext.Consumer>
    </TimerContainer>
  )
}
```

TimerContainer is a component that provides TimerContext.
Timers are pure components that do not depend on TimerContext. Accept TimerProps as props.
So you can define your own Timer component by same interface.

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

export type TimerProps = TimerValue & TimerActions
```

## License

MIT
