# @kitsuyui/react-metronome

Metronome state provider and replaceable default UI for React.

## Design role

This package provides:

- `MetronomeContextProvider` as the metronome state/controller primitive
- `DefaultMetronome` as the replaceable default UI

Consumers can use the default UI, or consume `MetronomeContext` directly and render their own interface.

## Demo

Storybook: https://react-playground.docs.kitsuyui.com/storybook/

## Installation

### npm

```sh
npm install @kitsuyui/react-metronome
```

### yarn

```sh
yarn add @kitsuyui/react-metronome
```

### pnpm

```sh
pnpm add @kitsuyui/react-metronome
```

## Usage

```tsx
import {
  DefaultMetronome,
  MetronomeContext,
  MetronomeContextProvider,
  type MetronomeContextValue,
} from '@kitsuyui/react-metronome'

function MetronomeExample() {
  return (
    <MetronomeContextProvider>
      <MetronomeContext.Consumer>
        {(context: MetronomeContextValue) => <DefaultMetronome {...context} />}
      </MetronomeContext.Consumer>
    </MetronomeContextProvider>
  )
}
```

`MetronomeContextProvider` owns beat scheduling and tempo control.
`DefaultMetronome` is the package-provided default UI on top of that context value.
You can replace the UI entirely by consuming `MetronomeContext` yourself.

## License

MIT
