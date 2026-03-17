import type React from 'react'
import { Bits, type EnhancedBitProps } from './Binary'

export type SimpleBitProps = EnhancedBitProps

/**
 * SimpleBit is a simple component that displays a bit.
 * @param props
 * @returns A component that displays a bit.
 */
export const SimpleBit = (props: SimpleBitProps): React.JSX.Element => {
  const { stand, overflow } = props
  const baseText = stand ? '1' : '0'
  const isOverflowVisible = overflow ?? false
  const text = isOverflowVisible ? '' : baseText
  return <>{text}</>
}

export type SimpleBitStringProps = {
  value: number
  length?: number
}

export const SimpleBitString = (props: SimpleBitStringProps): React.JSX.Element => {
  return <Bits value={props.value} length={props.length ?? 8} bitElement={SimpleBit} />
}
