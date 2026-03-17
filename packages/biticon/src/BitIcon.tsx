import { from128bitTo2bitArray, is128Bit } from "./bits"
import { valueToColor } from "./colors"

import type React from "react"

export type BitIconProps = React.ComponentPropsWithoutRef<'svg'> & {
  bits: bigint
}

export const BitIcon = (props: BitIconProps): React.JSX.Element => {
  const baseWidth = 64
  const baseHeight = 64
  const { bits, width = baseWidth, height = baseHeight, ...svgProps } = props
  if (!is128Bit(bits)) {
    return (<span>Invalid 128bit value</span>)
  }
  const items = from128bitTo2bitArray(bits)
  const numOfItems = items.length
  const numOfRows = Math.ceil(Math.sqrt(numOfItems))
  const numOfCols = Math.ceil(numOfItems / numOfRows)
  const itemWidth = baseWidth / numOfCols
  const itemHeight = baseHeight / numOfRows
  const text = items.reduce((acc, item) => acc + item.toString(16), '')

  return <svg width={width} height={height} viewBox={`0 0 ${baseWidth} ${baseHeight}`} xmlns="http://www.w3.org/2000/svg" aria-label={`BitIcon: ${text}`} role="img" {...svgProps}>
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
