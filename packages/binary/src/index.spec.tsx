import { describe, it, expect } from 'vitest'

import { render } from '@testing-library/react'

import * as module from './index'
import {
  SimpleBit,
  Bits,
} from './index'

describe('exports', () => {
  it('should export all components', () => {
    expect(module).toHaveProperty('SimpleBit')
    expect(module).toHaveProperty('Simple8BitString')
    expect(module).toHaveProperty('Bits')
    expect(module).toHaveProperty('DetailedBit')
    expect(module).toHaveProperty('DetailedBitString')
  })
})

describe('Bits component', () => {
  it('should render bits correctly', () => {
    const value = 0b10101010
    const { asFragment } = render(<Bits value={value} length={8} bitElement={SimpleBit} />)
    expect(asFragment()).toMatchSnapshot()
    expect(asFragment().textContent).toBe('10101010')
  })
})
