import React from 'react'
import { Bits, EnhancedBitProps } from './Binary'

/**
 * SimpleBit is a simple component that displays a bit.
 * @param props
 * @returns A component that displays a bit.
 */
export const SimpleBit = (props: EnhancedBitProps): React.JSX.Element => {
  const { stand, overflow } = props
  const text = overflow ?? false ? '' : stand ? '1' : '0'
  return <>{text}</>
}

/**
 * Simple8BitString is a component that displays an 8-bit binary string.
 * @param props.value - The number to be displayed as an 8-bit binary string.
 * @returns A component that displays an 8-bit binary string.
 */
export const Simple8BitString = (props: { value: number }): React.JSX.Element => {
  return <Bits value={props.value} length={8} bitElement={SimpleBit} />
}
