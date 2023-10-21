import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'

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
  const handleChange = jest.fn()

  // initial render
  render(<ExampleTextArea value={firstMessage} onChange={handleChange} />)
  const element = screen.getByText(firstMessage)
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
  const handleChange = jest.fn()

  // initial render
  render(<ExampleTextField value={firstMessage} onChange={handleChange} />)
  const element = screen.getByDisplayValue(firstMessage)
  expect(element).toBeInstanceOf(HTMLInputElement)
  expect(element).toHaveProperty('value', firstMessage)

  // click and type
  await userEvent.click(element)
  await userEvent.type(element, secondMessage)
  expect(element).toHaveProperty('value', firstMessage + secondMessage)
  expect(handleChange).toBeCalledTimes(secondMessage.length)
})
