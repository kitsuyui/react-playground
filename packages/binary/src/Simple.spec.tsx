import { describe, it, expect } from 'vitest'

import { render } from '@testing-library/react'

import {
  Simple8BitString,
  SimpleBit,
} from './Simple'

describe('Simple8BitString component', () => {
  it('should render properly with 8 bits', () => {
    const value = 0b10101010
    const { asFragment } = render(<Simple8BitString value={value} />)
    expect(asFragment()).toMatchSnapshot()
    expect(asFragment().textContent).toBe('10101010')
  })

  it('should not render overflow bits', () => {
    const value = 0b110101010
    const { asFragment } = render(<Simple8BitString value={value} />)
    expect(asFragment()).toMatchSnapshot()
    expect(asFragment().textContent).toBe('10101010')
  })
})

describe('SimpleBit component', () => {
  it('should render "1" for stand=true and overflow=false', () => {
    const { asFragment } = render(<SimpleBit stand={true} overflow={false} littleEndianBitOrder={0} bigEndianBitOrder={0} />)
    expect(asFragment()).toMatchSnapshot()
    expect(asFragment().textContent).toBe('1')
  })

  it('should not render overflow bits', () => {
    const { asFragment } = render(<SimpleBit stand={true} overflow={true} littleEndianBitOrder={0} bigEndianBitOrder={0} />)
    expect(asFragment()).toMatchSnapshot()
    expect(asFragment().textContent).toBe('')
  })

  it('should treat bit does\'t overflow by default', () => {
    const { asFragment } = render(<SimpleBit stand={true} littleEndianBitOrder={0} bigEndianBitOrder={0} />)
    expect(asFragment()).toMatchSnapshot()
    expect(asFragment().textContent).toBe('1')
  })
})
