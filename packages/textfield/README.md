# @kitsuyui/react-textfield

[![npm version](https://badge.fury.io/js/@kitsuyui%2Freact-textfield.svg)](https://badge.fury.io/js/@kitsuyui%2Freact-textfield)

This package provides a text field component for React.

It is very pure and similar with the default `<input type="text">` element and `<textarea>` element.

So you can pass the same props as those elements. (i.e. `disabled`, `placeholder`, `maxLength`, `minLength`, `required`, `pattern`, `readOnly`, `autoComplete`, `autoFocus`, `name`, `id`, `className`, `style`, ..., etc.)
This means, you can use this component as a drop-in replacement for those elements.

The big difference is that this component how to handle the events.
In default browser elements (`<input type="text">` and `<textarea>`), the `onChange` event is fired in every key press.
But when you are using IME or something special input method, the `onChange` event is fired in every key press even if the input is not completed or text conversion is not completed. (e.g. Japanese IME, Chinese IME, espanso, etc.)
This component calls the `onInput` handler `(text: string) => void` only when the input is completed or text conversion is completed. (Internally, it uses `CompositionEvent` to detect the completion of input or text conversion)

Warning: This component has no effect to prevent the re-rendering of parent component.
This means, if this component is re-created by parent component, the input may lost text conversion state.

## Demo

Storybook: https://react-playground.docs.kitsuyui.com/storybook/

## Installation

### npm

```sh
npm install @kitsuyui/react-textfield
```

### yarn

```sh
yarn add @kitsuyui/react-textfield
```

### pnpm

```sh
pnpm add @kitsuyui/react-textfield
```

## Reference

- https://maku.blog/p/cv6fpx7/
- https://gist.github.com/KurtGokhan/9aafd8e83c9bc6a2946fe2dc7f2c1d19
- https://qiita.com/pochman/items/5b69ebedf4465f93c2f1

## License

MIT
