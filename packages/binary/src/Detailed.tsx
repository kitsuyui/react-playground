import React from 'react'
import { Bits, EnhancedBitProps } from './Binary'

export type DetailedBitProps = EnhancedBitProps & {
  displayLittleEndianBitOrder?: boolean | undefined
  displayBigEndianBitOrder?: boolean | undefined
}

export const DetailedBit = (props: DetailedBitProps): React.JSX.Element => {
  const { stand, overflow, zeroPadding } = props
  const displayLittleEndianBitOrder = props.displayLittleEndianBitOrder ?? false
  const displayBigEndianBitOrder = props.displayBigEndianBitOrder ?? false
  const text = stand ? '1' : '0'
  const border = overflow
    ? '1px dotted red'
    : zeroPadding
      ? '1px dotted gray'
      : '1px solid #cccccc'
  const margin = '0.5px'
  const color = stand ? '#999999' : '#cccccc'
  const backgroundColor = stand ? '#000000' : '#ffffff'
  const fontFamily = 'monospace'
  return (
    <div style={{ display: 'inline-block', fontFamily, margin }}>
      <div
        style={{
          color,
          backgroundColor,
          border,
        }}
      >
        {text}
      </div>
      {displayLittleEndianBitOrder && (
        <IndexLabel index={props.littleEndianBitOrder} />
      )}
      {displayBigEndianBitOrder && (
        <IndexLabel index={props.bigEndianBitOrder} />
      )}
    </div>
  )
}

const IndexLabel = (props: { index: number }): React.JSX.Element => {
  return (
    <div
      style={{
        userSelect: 'none',
        fontSize: '0.5em',
        textAlign: 'center',
        lineHeight: '1em',
      }}
    >
      {props.index}
    </div>
  )
}

export const DetailedBitString = (props: {
  value: number
  length?: number
  showLittleEndianBitOrder?: boolean | undefined
  showBigEndianBitOrder?: boolean | undefined
}): React.JSX.Element => {
  const showLittleEndianBitOrder = props.showLittleEndianBitOrder ?? false
  const showBigEndianBitOrder = props.showBigEndianBitOrder ?? false
  return (
    <Bits
      value={props.value}
      length={props.length}
      bitElement={(props) => (
        <DetailedBit
          {...props}
          displayLittleEndianBitOrder={showLittleEndianBitOrder}
          displayBigEndianBitOrder={showBigEndianBitOrder}
        />
      )}
    />
  )
}
