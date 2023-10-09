import { render, screen } from '@testing-library/react'
import React from 'react'

import { TextArea } from './TextArea'
import { TextField } from './TextField'

test('render TextArea', () => {
  render(<TextArea value={`あいうえお`} />)
  const element = screen.getAllByText(/あ/)
  expect(element[0]).toBeInstanceOf(HTMLTextAreaElement)
})

test('render TextField', () => {
  render(<TextField value={'あ'} placeholder={'🔍'} />)
  const element = screen.getByPlaceholderText(/🔍/)
  expect(element).toBeInstanceOf(HTMLInputElement)
})
