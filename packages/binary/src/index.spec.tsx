import { expect, test } from 'vitest'

import { render } from '@testing-library/react'

import { Simple8BitString } from './index'

test('render Simple8BitString', async () => {
  const value = 0b1010
  const element = render(<Simple8BitString value={value} />)
  expect(element.container.textContent).toBe('00001010')

  const value2 = 0b1111
  const element2 = render(<Simple8BitString value={value2} />)
  expect(element2.container.textContent).toBe('00001111')

  const value3 = 0b100000000 // 9bit
  const element3 = render(<Simple8BitString value={value3} />)
  expect(element3.container.textContent).toBe('00000000') // TRUNCATE 9bit -> 8bit
})
