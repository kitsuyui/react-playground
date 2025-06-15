import { expect, it, describe, vi, beforeEach } from 'vitest'

import { render, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { TextArea, type TextAreaRef } from './TextArea'
import React from 'react'

const ExampleTextArea = (props: {
  initialText?: string
  onChange?: (value: string) => void
}) => {
  const { initialText, onChange } = props
  const ref = React.useRef<TextAreaRef>(null)
  const [text, setText] = React.useState(initialText ?? '')
  return (
    <>
    <TextArea
      value={text}
      ref={ref}
      onInputChunk={(chunk) => {
        setText(chunk)
        onChange?.(chunk)
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

describe('TextArea', () => {
  it('should render', () => {
    const { asFragment } = render(
      <TextArea value="Hello, World!" onInputChunk={() => {}} />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('should handle input', async () => {
    const handleInputChunk = vi.fn()
    const rendered = render(
      <ExampleTextArea
        initialText=""
        onChange={handleInputChunk}
      />
    )
    expect(rendered.asFragment()).toMatchSnapshot()
    const textarea = rendered.getByRole('textbox') as HTMLTextAreaElement
    expect(textarea).toBeInstanceOf(HTMLTextAreaElement)
    expect(textarea.value).toBe('')
    await userEvent.click(textarea) // focus the textarea
    await userEvent.type(textarea, 'Hello, World!')
    expect(textarea.value).toBe('Hello, World!')
    expect(rendered.asFragment()).toMatchSnapshot()
  })

  it('clear should reset value', async () => {
    const handleInputChunk = vi.fn()
    const rendered = render(
      <ExampleTextArea
        initialText="Hello, World!"
        onChange={handleInputChunk}
      />
    )
    expect(rendered.asFragment()).toMatchSnapshot()
    const textarea = rendered.getByRole('textbox') as HTMLTextAreaElement
    expect(textarea).toBeInstanceOf(HTMLTextAreaElement)
    expect(textarea.value).toBe('Hello, World!')
    await userEvent.click(textarea) // focus the textarea
    await userEvent.type(textarea, '2')
    expect(textarea.value).toBe('Hello, World!2')
    expect(rendered.asFragment()).toMatchSnapshot()
    const clearButton = rendered.queryByText('Clear')
    expect(clearButton).toBeInstanceOf(HTMLButtonElement)
    expect(clearButton).not.toBeNull()
    await userEvent.click(clearButton as HTMLButtonElement)
    expect(textarea.value).toBe('')
    expect(rendered.asFragment()).toMatchSnapshot()
  })
})
