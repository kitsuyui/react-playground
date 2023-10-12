# @kitsuyui/react-clock

[![npm version](https://badge.fury.io/js/@kitsuyui%2Freact-clock.svg)](https://badge.fury.io/js/@kitsuyui%2Freact-clock)

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
  ClockContainer,
  AnalogClock,
  DigitalClock,
} from '@kitsuyui/react-clock'

const Clock = () => {
  return (
    <ClockContainer>
      <DateContext.Consumer>
        {(date: Date) => (
          <>
            <AnalogClock timezone="Asia/Tokyo" date={date} />
            <DigitalClock timezone="America/New_York" date={date} />
          </>
        )}
      </DateContext.Consumer>
    </ClockContainer>
  )
}
```

ClockContainer is a component that provides DateContext.
Clocks are pure components that do not depend on DateContext. Only the date and timezone are passed as props.
So you can define your own Timer component by same interface.

```typescript
export interface ClockProps {
  timezone: string
  date: Date
}
```

## License

MIT
