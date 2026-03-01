# @kitsuyui/react-tab

[![npm version](https://badge.fury.io/js/@kitsuyui%2Freact-tab.svg)](https://badge.fury.io/js/@kitsuyui%2Freact-tab)

Simple tab React component.
This component is a base for creating tab UI components.
This component doesn't have any styles, positions, states, or any other details.
This component only provides an ideal structure for tab UI and its ReactContext.

So, you can customize the tab UI as you want.
Or you can compose this component with other components and CSS modules.

`TabUIBase` renders only the active tab content by default. Use `contentMode="keep-mounted"` to keep every tab content mounted, and read the active tab state from `TabContext` inside your custom content container.

## Demo

Storybook: https://react-playground.docs.kitsuyui.com/storybook/

## Installation

### npm

```sh
npm install @kitsuyui/react-tab
```

### yarn

```sh
yarn add @kitsuyui/react-tab
```

### pnpm

```sh
pnpm add @kitsuyui/react-tab
```

## License

MIT
