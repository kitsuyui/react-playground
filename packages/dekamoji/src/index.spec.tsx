import { expect, test } from 'vitest'

import { render, screen } from '@testing-library/react'

import { Dekamoji } from './dekamoji'

test('render Dekamoji', () => {
  render(<Dekamoji text="あ" />)
  const element = screen.getAllByText(/あ/)
  expect(element).toHaveLength(1)
  expect(element).toMatchSnapshot()
})
