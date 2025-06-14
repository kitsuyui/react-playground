import { describe, expect, it } from 'vitest'

import { render } from '@testing-library/react'

import {
  SimpleBit,
} from './Simple'
import {
  Bits,
} from './Binary'

describe('Bits component', () => {
  it('should render bits correctly', () => {
    const value = 0b10101010
    const { asFragment } = render(<Bits value={value} length={8} bitElement={SimpleBit} />)
    expect(asFragment()).toMatchSnapshot()
    expect(asFragment().textContent).toBe('10101010')
  })
})
