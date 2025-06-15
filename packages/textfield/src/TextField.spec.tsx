import { expect, it, describe, vi, beforeEach } from 'vitest'

import { render, cleanup, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { TextField, type TextFieldRef } from './TextField'
import React from 'react'

const ExampleTextField = (props: {
  initialText?: string
  onChange?: (value: string) => void
  onChangeInputting?: (inputting: boolean) => void
}) => {
  const { initialText, onChange, onChangeInputting } = props
  const ref = React.useRef<TextFieldRef>(null)
  const [text, setText] = React.useState(initialText ?? '')
  return (
    <>
    <TextField
      value={text}
      ref={ref}
      onInputChunk={(chunk) => {
        setText(chunk)
        onChange?.(chunk)
      }}
      onChangeInputting={(inputting) => {
        onChangeInputting?.(inputting)
      }}
    />
    <button
      type="button"
      onClick={() => {
        ref.current?.clear()
      }}
    >
      Clear
    </button>
    </>
  )
}

beforeEach(() => {
  cleanup()
})

describe('TextField', () => {
  it('should render', () => {
    const { asFragment } = render(
      <TextField value="Hello, World!" onInputChunk={() => {}} />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('treats empty string when value is not provided', () => {
    const { asFragment } = render(
      <TextField/>
    )
    expect(asFragment()).toMatchSnapshot()
    const textfield = document.querySelector('input') as HTMLInputElement
    expect(textfield).toBeInstanceOf(HTMLInputElement)
    expect(textfield.value).toBe('')
  })

  it('should handle input', async () => {
    const handleInputChunk = vi.fn()
    const rendered = render(
      <ExampleTextField
        initialText=""
        onChange={handleInputChunk}
      />
    )
    expect(rendered.asFragment()).toMatchSnapshot()
    const TextField = rendered.getByRole('textbox') as HTMLInputElement
    expect(TextField).toBeInstanceOf(HTMLInputElement)
    expect(TextField.value).toBe('')
    await userEvent.click(TextField) // focus the TextField
    await userEvent.type(TextField, 'Hello, World!')
    expect(TextField.value).toBe('Hello, World!')
    expect(rendered.asFragment()).toMatchSnapshot()
  })

  it('should handle input with composition change events', async () => {
    const handleInputChunk = vi.fn()
    const handleInputting = vi.fn()
    const rendered = render(
      <ExampleTextField
        initialText=""
        onChange={handleInputChunk}
        onChangeInputting={handleInputting}
      />
    )
    expect(rendered.asFragment()).toMatchSnapshot()
    const TextField = rendered.getByRole('textbox') as HTMLInputElement
    expect(TextField).toBeInstanceOf(HTMLInputElement)
    expect(TextField.value).toBe('')
    await userEvent.click(TextField) // focus the TextField
    // userEvent.type does not support composition events directly,
    // so we simulate composition events manually
    expect(handleInputting).toHaveBeenCalledTimes(0)
    fireEvent.compositionStart(TextField)
    expect(handleInputting).toHaveBeenCalledTimes(1)
    fireEvent.change(TextField, { target: { value: 'Hello' } })
    expect(handleInputting).toHaveBeenCalledTimes(1)
    // When composition is in progress, TextField value is changed but not called onInputChunk
    expect(TextField.value).toBe('Hello')

    // After composition ends, the value is committed
    fireEvent.compositionEnd(TextField)
    expect(handleInputting).toHaveBeenCalledTimes(2)
    expect(TextField.value).toBe('Hello')
    expect(handleInputChunk).toHaveBeenCalledTimes(1)
    expect(handleInputChunk).toHaveBeenCalledWith('Hello')
  })

  it('clear should reset value', async () => {
    const handleInputChunk = vi.fn()
    const rendered = render(
      <ExampleTextField
        initialText="Hello, World!"
        onChange={handleInputChunk}
      />
    )
    expect(rendered.asFragment()).toMatchSnapshot()
    const TextField = rendered.getByRole('textbox') as HTMLInputElement
    expect(TextField).toBeInstanceOf(HTMLInputElement)
    expect(TextField.value).toBe('Hello, World!')
    await userEvent.click(TextField) // focus the TextField
    await userEvent.type(TextField, '2')
    expect(TextField.value).toBe('Hello, World!2')
    expect(rendered.asFragment()).toMatchSnapshot()
    const clearButton = rendered.queryByText('Clear')
    expect(clearButton).toBeInstanceOf(HTMLButtonElement)
    expect(clearButton).not.toBeNull()
    await userEvent.click(clearButton as HTMLButtonElement)
    expect(TextField.value).toBe('')
    expect(rendered.asFragment()).toMatchSnapshot()
  })
})
