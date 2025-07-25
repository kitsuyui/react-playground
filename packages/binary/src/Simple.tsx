import type React from 'react'
import { Bits, type EnhancedBitProps } from './Binary'

/**
 * SimpleBit is a simple component that displays a bit.
 * @param props
 * @returns A component that displays a bit.
 */
export const SimpleBit = (props: EnhancedBitProps): React.JSX.Element => {
  const { stand, overflow } = props
  const baseText = stand ? '1' : '0'
  const isOverflowVisible = overflow ?? false
  const text = isOverflowVisible ? '' : baseText
  return <>{text}</>
}

export const Simple8BitString = (props: { value: number }): React.JSX.Element => {
  return <Bits value={props.value} length={8} bitElement={SimpleBit} />
}
