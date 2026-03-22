# @kitsuyui/react-alarm

Alarm state provider and replaceable default UI for React.

## Design role

This package provides:

- `AlarmContextProvider` as the alarm state/controller primitive
- `DefaultAlarm` as the replaceable default UI

Consumers can use the default UI, or consume `AlarmContext` directly and render their own interface.

## Demo

Storybook: https://react-playground.docs.kitsuyui.com/storybook/

## Installation

### npm

```sh
npm install @kitsuyui/react-alarm
```

### yarn

```sh
yarn add @kitsuyui/react-alarm
```

### pnpm

```sh
pnpm add @kitsuyui/react-alarm
```

## Usage

```tsx
import {
  AlarmContext,
  AlarmContextProvider,
  DefaultAlarm,
  type AlarmContextValue,
} from '@kitsuyui/react-alarm'

function AlarmExample() {
  return (
    <AlarmContextProvider>
      <AlarmContext.Consumer>
        {(context: AlarmContextValue) => <DefaultAlarm {...context} />}
      </AlarmContext.Consumer>
    </AlarmContextProvider>
  )
}
```

`AlarmContextProvider` owns the alarm schedule, ringing state, and optional browser notification behavior.
`DefaultAlarm` is the package-provided default UI on top of that context value.
You can replace the UI entirely by consuming `AlarmContext` yourself.

## License

MIT
