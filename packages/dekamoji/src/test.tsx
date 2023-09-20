import { render, screen } from '@testing-library/react'
import React from 'react'

import { Dekamoji } from './dekamoji'

test('render Dekamoji', () => {
  render(<Dekamoji text="あ" />)
  const element = screen.getAllByText(/あ/)
  expect(element).toHaveLength(2)
})
