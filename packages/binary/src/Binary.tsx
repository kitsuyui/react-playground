import React from 'react'

/**
 * BitProps is a type that represents the properties of a bit.
 */
export type BitProps = {
  stand: boolean
}

/**
 * EnhancedBitProps is a type that adds the following properties to BitProps.
 * - overflow: If true, this means that bit is out of range.
 * - zeroPadding: If true, this means that bit is padded with zero.
 */
export type EnhancedBitProps = BitProps & {
  overflow?: boolean
  zeroPadding?: boolean
  littleEndianBitOrder: number
  bigEndianBitOrder: number
}

export type BitElement = React.FC<EnhancedBitProps>

/**
 * Bit is a component that displays a bit.
 * This component supports the behavior of zero padding and overflow.
 * @param props
 * @returns A component that displays a bit.
 */
export const Bits = (props: {
  value: number
  bitElement: BitElement
  length?: number | undefined
}): React.JSX.Element => {
  const { value, bitElement } = props
  const bits = (value | 0).toString(2).split('')
  const bitLength = bits.length
  const length = props.length ?? bitLength
  const overflowLength = Math.max(0, bitLength - length)
  const zeroPaddingLength = Math.max(0, length - bitLength)
  const representLength = Math.max(length, bitLength)
  const elements = Array.from(Array(representLength)).map((_, index) => {
    const stand = bits[bitLength - representLength + index] === '1'
    const bigEndianBitOrder = index
    const overflow = bigEndianBitOrder < overflowLength
    const zeroPadding = bigEndianBitOrder < zeroPaddingLength
    return React.createElement(bitElement, {
      key: index,
      stand,
      overflow,
      zeroPadding,
      littleEndianBitOrder: representLength - index - 1,
      bigEndianBitOrder,
    })
  })
  return <>{elements}</>
}
