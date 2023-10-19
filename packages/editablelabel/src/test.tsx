import { render, screen } from '@testing-library/react'
import React, { useState } from 'react'

import { EditableLabel } from './EditableLabel'

const EditableLabelExample = () => {
  const [text, setText] = useState("Let's edit me!")
  return (
    <EditableLabel
      text={text}
      onEditComplete={(text: string) => setText(text)}
    />
  )
}

test('render EditableLabel', () => {
  render(<EditableLabelExample />)
  const element = screen.getByText("Let's edit me!")
  expect(element).toBeInstanceOf(HTMLSpanElement)

  // TODO: test edit mode
})
