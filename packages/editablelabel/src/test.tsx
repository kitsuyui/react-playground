import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React, { useState } from 'react'

import { EditableLabel } from './index'

const EditableLabelExample = () => {
  const [text, setText] = useState("Let's edit me!")
  return (
    <EditableLabel
      text={text}
      onEditComplete={(text: string) => setText(text)}
    />
  )
}

test('render EditableLabel', async () => {
  render(<EditableLabelExample />)
  // view mode (initial state)
  const element = screen.getByText("Let's edit me!")
  expect(element.textContent).toBe("Let's edit me!")
  expect(element.tagName).toBe('SPAN')

  // click to edit
  await userEvent.click(element)
  await screen.findByDisplayValue("Let's edit me!")
  const element2 = screen.getByDisplayValue("Let's edit me!")
  expect(element2.tagName).toBe('INPUT')
  await userEvent.type(element2, 'Hello World!')
  // press enter to submit
  await userEvent.type(element2, '{enter}')

  // back to view mode
  expect(element.textContent).toBe("Let's edit me!Hello World!")
  expect(element.tagName).toBe('SPAN')
})
