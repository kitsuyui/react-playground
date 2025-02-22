import { expect, test, vi } from 'vitest'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'

import { EditableLabel } from './index'

const EditableLabelExample = (props: { onEditComplete: () => void }) => {
  const [text, setText] = useState("Let's edit me!")
  return (
    <EditableLabel
      text={text}
      onEditComplete={(text: string) => {
        setText(text)
        props.onEditComplete()
      }}
    />
  )
}

test('render EditableLabel', async () => {
  const handleEditComplete = vi.fn()
  render(<EditableLabelExample onEditComplete={handleEditComplete} />)

  const firstMessage = "Let's edit me!"
  const additionalMessage = 'Hello World!'

  // view mode (initial state)
  const element = screen.getByText(firstMessage)
  expect(element.textContent).toBe(firstMessage)
  expect(element.tagName).toBe('SPAN')

  // click to edit
  await userEvent.click(element)
  await screen.findByDisplayValue(firstMessage)
  const element2 = screen.getByDisplayValue(firstMessage)
  expect(element2.tagName).toBe('INPUT')
  await userEvent.type(element2, additionalMessage)
  expect(element2).toHaveProperty('value', firstMessage + additionalMessage)

  // press enter to submit
  await userEvent.type(element2, '{enter}')

  // back to view mode
  expect(element.textContent).toBe(firstMessage + additionalMessage)
  expect(element.tagName).toBe('SPAN')
  // onEditComplete is called
  expect(handleEditComplete).toBeCalledTimes(1)
})
