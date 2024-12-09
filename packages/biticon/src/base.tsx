import React from 'react'
import { COLORS } from './colors'
import { applySBox128bitBigintTo128bitBigint } from './bitShuffle'


export const UUIDIcon = (props: { uuid: string }): React.JSX.Element => {
  const uuid = props.uuid
  if (!isValidUUID(uuid)) {
    return <span>Invalid UUID</span>
  }
  const bits = uuidToBigInt(uuid)
  const newBits = applySBox128bitBigintTo128bitBigint(bits)
  return <BitIcon bits={newBits} />
}

const isValidUUID = (uuid: string): boolean => {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/.test(uuid)
}

const uuidToBigInt = (uuid: string): bigint => {
  // strip if it has dashes
  const uuid_ = uuid.replace(/-/g, '')
  return BigInt(`0x${uuid_}`)
}


export const BitIcon = (props: { bits: bigint }): React.JSX.Element => {
  const bits = props.bits
  if (!is128Bit(bits)) {
    return (<span>Invalid 128bit value</span>)
  }
  const items = from128bitTo8bitArray(bits)
  const width = 64
  const height = 64
  const numOfItems = items.length
  const numOfRows = Math.ceil(Math.sqrt(numOfItems))
  const numOfCols = Math.ceil(numOfItems / numOfRows)
  const itemWidth = width / numOfCols
  const itemHeight = height / numOfRows
  const text = items.reduce((acc, item) => acc + item.toString(16), '')

  return <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg" aria-label={`BitIcon: ${text}`} role="img">
    {Array.from(items).map((item: number, index: number) => {
      const indexOfX = index % numOfCols // 0-7
      const indexOfY = Math.floor(index / numOfCols) // 0-7
      const x = indexOfX * itemWidth
      const y = indexOfY * itemHeight
      const color = valueToColor(item)
      // biome-ignore lint/suspicious/noArrayIndexKey: SVG elements require a unique key
      return <rect key={index} x={x} y={y} width={itemWidth} height={itemHeight} fill={color} />
    })}
  </svg>
}

/**
 * Convert value to color
 * @param value 0-7
 * @returns color string
 */
const valueToColor = (value: number): string => {
  return COLORS[value]
}

const is128Bit = (value: bigint): boolean => {
  return value >= BigInt(0) && value <= BigInt('0xffffffffffffffffffffffffffffffff')
}

/**
 * Convert 128bit value to int8 array
 * @param value 128bit value
 * @returns int8 array of 64 elements (0-7)
 */
export const from128bitTo8bitArray = (value: bigint): Uint8Array => {
  let value_ = value
  const bytes = new Uint8Array(64)
  for (let i = 0; i < 64; i++) {
    // take 2 bits from the value
    const bit = Number(value_ & BigInt(0b11)) // 0-3
    // shift 2 bits
    value_ >>= BigInt(2)
    bytes[i] = bit
  }
  return bytes
}
