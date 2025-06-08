import { expect, it, describe } from 'vitest'

import { render } from '@testing-library/react'

import { Simple8BitString } from './Simple'

describe('render Simple8BitString', () => {
  it('should render 8-bit binary string', () => {
    const value = 0b1010
    const element = <Simple8BitString value={value} />
    const { asFragment } = render(element)
    expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      00001010
    </DocumentFragment>
  `)
  })

  it('should render all values from 0 to 255', () => {
    for (let i = 0; i < 256; i++) {
      tester(i)
    }
  })

  it('should render 0 as 00000000', () => {
    tester(0)
  })

  it('should render 255 as 11111111', () => {
    tester(255)
  })

  const tester = (value: number) => {
    const element = <Simple8BitString value={value} />
    const { container } = render(element)
    expect(container.textContent).toBe(`${value.toString(2).padStart(8, '0')}`)
  }
})
