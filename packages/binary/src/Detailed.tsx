import type React from 'react'
import { Bits, type EnhancedBitProps } from './Binary'

export type DetailedBitProps = EnhancedBitProps & {
  displayLittleEndianBitOrder?: boolean | undefined
  displayBigEndianBitOrder?: boolean | undefined
}

export const DetailedBit = (props: DetailedBitProps): React.JSX.Element => {
  const { border, color, backgroundColor, text } = getDetailedBitPalette(
    props.stand,
    props.overflow,
    props.zeroPadding
  )
  const { displayLittleEndianBitOrder, displayBigEndianBitOrder } =
    getDetailedBitDisplayOptions(props)
  const margin = '0.5px'
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
      <DetailedBitLabels
        displayLittleEndianBitOrder={displayLittleEndianBitOrder}
        displayBigEndianBitOrder={displayBigEndianBitOrder}
        littleEndianBitOrder={props.littleEndianBitOrder}
        bigEndianBitOrder={props.bigEndianBitOrder}
      />
    </div>
  )
}

const getDetailedBitPalette = (
  stand: boolean,
  overflow: boolean | undefined,
  zeroPadding: boolean | undefined
) => {
  return {
    text: stand ? '1' : '0',
    border: getDetailedBitBorder(overflow, zeroPadding),
    color: stand ? '#999999' : '#cccccc',
    backgroundColor: stand ? '#000000' : '#ffffff',
  }
}

const getDetailedBitDisplayOptions = (props: DetailedBitProps) => {
  return {
    displayLittleEndianBitOrder: props.displayLittleEndianBitOrder ?? false,
    displayBigEndianBitOrder: props.displayBigEndianBitOrder ?? false,
  }
}

const getDetailedBitBorder = (
  overflow: boolean | undefined,
  zeroPadding: boolean | undefined
) => {
  if (overflow) return '1px dotted red'
  if (zeroPadding) return '1px dotted gray'
  return '1px solid #cccccc'
}

const DetailedBitLabels = (props: {
  displayLittleEndianBitOrder: boolean
  displayBigEndianBitOrder: boolean
  littleEndianBitOrder: number
  bigEndianBitOrder: number
}) => {
  const {
    displayLittleEndianBitOrder,
    displayBigEndianBitOrder,
    littleEndianBitOrder,
    bigEndianBitOrder,
  } = props

  return (
    <>
      {displayLittleEndianBitOrder ? (
        <IndexLabel index={littleEndianBitOrder} />
      ) : null}
      {displayBigEndianBitOrder ? (
        <IndexLabel index={bigEndianBitOrder} />
      ) : null}
    </>
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

export type DetailedBitStringProps = {
  value: number
  length?: number
  showLittleEndianBitOrder?: boolean | undefined
  showBigEndianBitOrder?: boolean | undefined
}

export const DetailedBitString = (props: DetailedBitStringProps): React.JSX.Element => {
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
