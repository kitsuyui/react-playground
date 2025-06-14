import { describe, it, expect } from 'vitest'

import { render } from '@testing-library/react'

import {
  DetailedBit,
  DetailedBitString
} from './Detailed'


describe('DetailedBitString component', () => {
  it('should render properly with 8 bits', () => {
    const value = 0b10101010
    const { asFragment } = render(<DetailedBitString value={value} />)
    expect(asFragment()).toMatchSnapshot()
  })
})

describe('DetailedBit component', () => {
  it('should render "1" for stand=true and overflow=false', () => {
    const { asFragment } = render(<DetailedBit stand={true} overflow={false} littleEndianBitOrder={0} bigEndianBitOrder={0} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders overflow with red dotted border', () => {
    const { asFragment } = render(<DetailedBit stand={true} overflow={true} littleEndianBitOrder={0} bigEndianBitOrder={0} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders zero padding with gray dotted border', () => {
    const { asFragment } = render(<DetailedBit stand={false} overflow={false} zeroPadding={true} littleEndianBitOrder={0} bigEndianBitOrder={0} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders with little endian bit order', () => {
    const { asFragment } = render(<DetailedBit stand={true} overflow={false} littleEndianBitOrder={1} bigEndianBitOrder={0} displayBigEndianBitOrder={true} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders with big endian bit order', () => {
    const { asFragment } = render(<DetailedBit stand={true} overflow={false} littleEndianBitOrder={0} bigEndianBitOrder={1} displayLittleEndianBitOrder={true} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
