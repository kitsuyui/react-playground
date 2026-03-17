# @kitsuyui/react-clock

[![npm version](https://badge.fury.io/js/@kitsuyui%2Freact-clock.svg)](https://badge.fury.io/js/@kitsuyui%2Freact-clock)

Simple clock React component.

## Design role

This package provides time-related primitives.

- `ClockContextProvider` is the state/controller layer for current time updates
- `AnalogClock` and `DigitalClock` are standalone time views
- `InlineAnalogClock` is an inline visualization primitive that behaves like text/icon content

## Demo

Storybook: https://react-playground.docs.kitsuyui.com/storybook/

## Installation

### npm

```sh
npm install @kitsuyui/react-clock
```

### yarn

```sh
yarn add @kitsuyui/react-clock
```

### pnpm

```sh
pnpm add @kitsuyui/react-clock
```

## Usage

```tsx
import {
  ClockContextProvider,
  ClockContext,
  AnalogClock,
  DigitalClock,
} from '@kitsuyui/react-clock'

const Clock = () => {
  return (
    <ClockContextProvider>
      <ClockContext.Consumer>
        {(date: Date) => (
          <>
            <AnalogClock timezone="Asia/Tokyo" date={date} />
            <DigitalClock timezone="America/New_York" date={date} />
          </>
        )}
      </ClockContext.Consumer>
    </ClockContextProvider>
  )
}
```

`ClockContextProvider` is a component that provides `ClockContext`.
Clock views are pure components that do not depend on the context directly.
Just pass the date and timezone as props.
So you can define your own Timer component by same interface.

## License

MIT
