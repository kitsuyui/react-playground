# @kitsuyui/react-clock

[![npm version](https://badge.fury.io/js/@kitsuyui%2Freact-clock.svg)](https://badge.fury.io/js/@kitsuyui%2Freact-clock)

Simple clock React component.

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
  DateContext,
  AnalogClock,
  DigitalClock,
} from '@kitsuyui/react-clock'

const Clock = () => {
  return (
    <ClockContextProvider>
      <DateContext.Consumer>
        {(date: Date) => (
          <>
            <AnalogClock timezone="Asia/Tokyo" date={date} />
            <DigitalClock timezone="America/New_York" date={date} />
          </>
        )}
      </DateContext.Consumer>
    </ClockContextProvider>
  )
}
```

ClockContainer is a component that provides DateContext.
Clocks are pure components that do not depend on DateContext directly.
Just pass the date and timezone as props.
So you can define your own Timer component by same interface.

## License

MIT
