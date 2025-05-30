import { expect, test, vi } from 'vitest'

import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

import {
  ClearButton,
  ClearButtonProvider,
  TextAreaWithClear,
  TextFieldWithClear,
} from './ClearButtonProvider'
import { TextArea } from './TextArea'
import { TextField } from './TextField'

const ExampleTextArea = (props: {
  value: string
  onChange: (text: string) => void
}) => {
  const { value, onChange } = props
  const [text, setText] = React.useState(value)
  return (
    <TextArea
      value={text}
      onInputChunk={(text: string) => {
        setText(text)
        onChange(text)
      }}
    />
  )
}

const ExampleTextField = (props: {
  value: string
  onChange: (text: string) => void
}) => {
  const { value, onChange } = props
  const [text, setText] = React.useState(value)
  return (
    <TextField
      value={text}
      onInputChunk={(text: string) => {
        setText(text)
        onChange(text)
      }}
    />
  )
}

test('render TextArea', async () => {
  const firstMessage = 'Hello'
  const secondMessage = ', World'
  const handleChange = vi.fn()

  // initial render
  const element0 = render(<ExampleTextArea value={firstMessage} onChange={handleChange} />)
  const element = element0.getByText(firstMessage)
  expect(element).toBeInstanceOf(HTMLTextAreaElement)

  // click and type
  await userEvent.click(element)
  await userEvent.type(element, secondMessage)
  expect(element.textContent).toBe(firstMessage + secondMessage)
  expect(handleChange).toBeCalledTimes(secondMessage.length)
})

test('render TextField', async () => {
  const firstMessage = 'Hello'
  const secondMessage = ', World'
  const handleChange = vi.fn()

  // initial render
  const element0 = render(<ExampleTextField value={firstMessage} onChange={handleChange} />)
  const element = element0.getByDisplayValue(firstMessage)
  expect(element).toBeInstanceOf(HTMLInputElement)
  expect(element).toHaveProperty('value', firstMessage)

  // click and type
  await userEvent.click(element)
  await userEvent.type(element, secondMessage)
  expect(element).toHaveProperty('value', firstMessage + secondMessage)
  expect(handleChange).toBeCalledTimes(secondMessage.length)
})

test('render TextField with ClearButton', async () => {
  const firstMessage = 'Hello'
  const secondMessage = ', World'
  const handleInputChunk = vi.fn()

  // initial render
  const element0 = render(
    <ClearButtonProvider>
      <TextFieldWithClear
        value={firstMessage}
        onInputChunk={handleInputChunk}
      />
      <ClearButton>Clear</ClearButton>
    </ClearButtonProvider>
  )
  const element = element0.getByDisplayValue(firstMessage)
  expect(element).toBeInstanceOf(HTMLInputElement)
  expect(element).toHaveProperty('value', firstMessage)

  // click and type
  await userEvent.click(element)
  await userEvent.type(element, secondMessage)
  expect(element).toHaveProperty('value', firstMessage + secondMessage)
  expect(handleInputChunk).toBeCalledTimes(secondMessage.length)

  // click reset button
  const resetButton = element0.getByText('Clear')
  await userEvent.click(resetButton)
  expect(element).toHaveProperty('value', '')
  // handleInputChunk is also called when reset button is clicked.
  expect(handleInputChunk).toBeCalledTimes(secondMessage.length + 1)
})

test('render TextArea with ClearButton', async () => {
  const firstMessage = 'Hello'
  const secondMessage = ', World'
  const handleInputChunk = vi.fn()

  // initial render
  const element0 = render(
    <ClearButtonProvider>
      <TextAreaWithClear value={firstMessage} onInputChunk={handleInputChunk} />
      <ClearButton>Clear</ClearButton>
    </ClearButtonProvider>
  )

  const element = element0.getByText(firstMessage)
  expect(element).toBeInstanceOf(HTMLTextAreaElement)
  expect(element).toHaveProperty('value', firstMessage)

  // click and type
  await userEvent.click(element)
  await userEvent.type(element, secondMessage)
  expect(element).toHaveProperty('value', firstMessage + secondMessage)
  expect(handleInputChunk).toBeCalledTimes(secondMessage.length)

  // click reset button
  const resetButton = element0.getAllByText('Clear')[1]
  await userEvent.click(resetButton)
  expect(element).toHaveProperty('value', '')
  // handleInputChunk is also called when reset button is clicked.
  expect(handleInputChunk).toBeCalledTimes(secondMessage.length + 1)
})
