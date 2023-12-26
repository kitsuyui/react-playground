# react-playground

[![codecov](https://codecov.io/gh/kitsuyui/react-playground/branch/main/graph/badge.svg?token=6QX8OLRKAD)](https://codecov.io/gh/kitsuyui/react-playground)

## What is this?

This is a repository for practicing React.
Create React components and check them with Storybook or write tests.
It only deals with content that is closed to React. It does not handle Next.js, etc.
For Next.js, see https://github.com/kitsuyui/nextjs-playground/ .
For TypeScript, see https://github.com/kitsuyui/ts-playground/ .

# Concept

## Wrapping

If you know how to use raw HTML, you know how to use it, so wrap it as it is as much as possible.

## Style specification

Basically, do not specify the style as much as possible. The style specification should be specified by the user of the component.
As an exception, `packages/style-{name}` contains a CSS framework with specific styles.

## Block elements

If there is a size specification, display it with that size. If there is no size specification, it is interpreted as width: auto, height: auto

## Inline elements

The size is determined by the font size specification.

## Demo & Documentations

- [x] [Storybook](https://react-playground.docs.kitsuyui.com/storybook/)
- [x] [typedocs](https://react-playground.docs.kitsuyui.com/typedocs/)

## Goal

- [x] npm package of components
- [x] Snapshot test of components
- [x] Storybook of components
- [x] Test coverage
- [ ] Separation method that maintains the extensibility of styles

## Features

- [x] `@kitsuyui/react-components` [![npm version](https://badge.fury.io/js/@kitsuyui%2Freact-components.svg)](https://badge.fury.io/js/@kitsuyui%2Freact-components)
  - [x] `@kitsuyui/react-clock` [![npm version](https://badge.fury.io/js/@kitsuyui%2Freact-clock.svg)](https://badge.fury.io/js/@kitsuyui%2Freact-clock) ... Clock
  - [x] `@kitsuyui/react-timer` [![npm version](https://badge.fury.io/js/@kitsuyui%2Freact-timer.svg)](https://badge.fury.io/js/@kitsuyui%2Freact-timer) ... Pomodoro timer
  - [x] `@kitsuyui/react-stopwatch` [![npm version](https://badge.fury.io/js/@kitsuyui%2Freact-stopwatch.svg)](https://badge.fury.io/js/@kitsuyui%2Freact-stopwatch) ... Stopwatch
  - [x] `@kitsuyui/react-dekamoji` [![npm version](https://badge.fury.io/js/@kitsuyui%2Freact-dekamoji.svg)](https://badge.fury.io/js/@kitsuyui%2Freact-dekamoji) ... Display big text whole screen
  - [x] `@kitsuyui/react-wavebox` [![npm version](https://badge.fury.io/js/@kitsuyui%2Freact-wavebox.svg)](https://badge.fury.io/js/@kitsuyui%2Freact-wavebox) ... Variable size box (for debug)
  - [x] `@kitsuyui/react-treemap` [![npm version](https://badge.fury.io/js/@kitsuyui%2Freact-treemap.svg)](https://badge.fury.io/js/@kitsuyui%2Freact-treemap) ... Put the box in the box like as marimekko chart
  - [x] `@kitsuyui/react-measure` [![npm version](https://badge.fury.io/js/@kitsuyui%2Freact-measure.svg)](https://badge.fury.io/js/@kitsuyui%2Freact-measure) ... Display size of the box (for debug)
  - [x] `@kitsuyui/react-textfield` [![npm version](https://badge.fury.io/js/%40kitsuyui%2Freact-textfield.svg)](https://badge.fury.io/js/%40kitsuyui%2Freact-textfield) ... Text field with IME support
  - [x] `@kitsuyui/react-editablelabel` [![npm version](https://badge.fury.io/js/%40kitsuyui%2Freact-editablelabel.svg)](https://badge.fury.io/js/%40kitsuyui%2Freact-editablelabel) ... Editable label with IME support
  - [ ] Alarm
  - [ ] Dice
- [x] `@kitsuyui/react-style-bulma` [![npm version](https://badge.fury.io/js/%40kitsuyui%2Freact-style-bulma.svg)](https://badge.fury.io/js/%40kitsuyui%2Freact-style-bulma) ... Bulma CSS framework with `@kitsuyui/react-components`

## License

MIT
