# react-playground

![Coverage](https://raw.githubusercontent.com/kitsuyui/octocov-central/main/badges/kitsuyui/react-playground/coverage.svg)

## What is this?

This is a repository for practicing React.
Create React components and check them with Storybook or write tests.
It only deals with content that is closed to React. It does not handle Next.js, etc.
For Next.js, see https://github.com/kitsuyui/nextjs-playground/ .
For TypeScript, see https://github.com/kitsuyui/ts-playground/ .

# Concept

## Wrapping

If you know how to use raw HTML, you know how to use it, so wrap it as it is as much as possible.

## Block elements

If there is a size specification, display it with that size. If there is no size specification, it is interpreted as width: auto, height: auto

## Inline elements

The size is determined by the font size specification.

## Design Principles

Components in this repository should be explained in terms of ordinary Web concepts first.
That does not only mean HTML tag compatibility. A package may correspond to:

- a semantic wrapper around an HTML element
- a state provider/controller
- an interaction primitive
- a visualization primitive
- a layout/behavior primitive
- a default UI layered on top of one of the primitives above

The goal is to keep public APIs compatible with normal HTML/CSS usage whenever possible.
Visual appearance should usually be controlled by consumers.
When a package needs a default UI, that UI should remain replaceable and be layered on top of directly consumable primitives such as Context providers.

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

- [x] `@kitsuyui/react-clock` [![npm version](https://badge.fury.io/js/@kitsuyui%2Freact-clock.svg)](https://badge.fury.io/js/@kitsuyui%2Freact-clock) ... time visualization primitives and time context
- [x] `@kitsuyui/react-timer` [![npm version](https://badge.fury.io/js/@kitsuyui%2Freact-timer.svg)](https://badge.fury.io/js/@kitsuyui%2Freact-timer) ... timer state provider and replaceable default UI
- [x] `@kitsuyui/react-stopwatch` [![npm version](https://badge.fury.io/js/@kitsuyui%2Freact-stopwatch.svg)](https://badge.fury.io/js/@kitsuyui%2Freact-stopwatch) ... stopwatch state provider and replaceable default UI
- [x] `@kitsuyui/react-dekamoji` [![npm version](https://badge.fury.io/js/@kitsuyui%2Freact-dekamoji.svg)](https://badge.fury.io/js/@kitsuyui%2Freact-dekamoji) ... fit-text layout primitive
- [x] `@kitsuyui/react-wavebox` [![npm version](https://badge.fury.io/js/@kitsuyui%2Freact-wavebox.svg)](https://badge.fury.io/js/@kitsuyui%2Freact-wavebox) ... animated layout primitive with provider and sized-box exports
- [x] `@kitsuyui/react-treemap` [![npm version](https://badge.fury.io/js/@kitsuyui%2Freact-treemap.svg)](https://badge.fury.io/js/@kitsuyui%2Freact-treemap) ... treemap layout primitive
- [x] `@kitsuyui/react-measure` [![npm version](https://badge.fury.io/js/@kitsuyui%2Freact-measure.svg)](https://badge.fury.io/js/@kitsuyui%2Freact-measure) ... measurement visualization primitive plus auto-measuring wrapper
- [x] `@kitsuyui/react-textfield` [![npm version](https://badge.fury.io/js/%40kitsuyui%2Freact-textfield.svg)](https://badge.fury.io/js/%40kitsuyui%2Freact-textfield) ... semantic wrappers for text inputs with IME-aware behavior
- [x] `@kitsuyui/react-tab` [![npm version](https://badge.fury.io/js/@kitsuyui%2Freact-tab.svg)](https://badge.fury.io/js/@kitsuyui%2Freact-tab) ... interaction primitive for tabbed interfaces
- [x] `@kitsuyui/react-biticon` ... visualization primitive for 128-bit identifiers
- [x] `@kitsuyui/react-binary` ... text/bit visualization primitives
- [x] `@kitsuyui/react-zoomer` [![npm version](https://badge.fury.io/js/@kitsuyui%2Freact-zoomer.svg)](https://badge.fury.io/js/@kitsuyui%2Freact-zoomer) ... fit-within-container layout primitive plus auto-measuring wrapper
- [x] `@kitsuyui/react-hello` ... minimal semantic text wrapper example
- [ ] Alarm
- [ ] Dice

## License

MIT
