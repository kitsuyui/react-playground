import React, { useMemo } from 'react'
import { createCrossLinesBySize } from './calc'


interface TextStyle {
  fontFamily: string
}

interface StrokeStyle {
  color: string
  width: number
  dasharray: number
}

export const DEFAULT_MEASURE_STYLE: MeasureStyle = {
  stroke: {
    color: 'black',
    width: 1,
    dasharray: 2,
  },
  text: {
    fontFamily: 'monospace',
  },
} as const

export interface MeasureStyle {
  stroke: StrokeStyle
  text: TextStyle
}

/**
 * MeasureBase component
 *
 * This component is a base component for Measure component.
 * It draws a rectangle, cross lines, and text.
 * It does not have any state and side effect. Pure.
 *
 * @param props.width {number}
 * @param props.height {number}
 * @param props.styles {MeasureStyle}
 * @returns
 */
export const MeasureBase = (props: { width: number, height: number, styles: MeasureStyle }): React.JSX.Element => {
  const { width, height, styles } = props
  const text = `${width}x${height}`
  const textSize = text.length
  const fontSize = Math.min(width, height) / textSize
  const [centerX, centerY] = [width / 2, height / 2]
  const stroke = styles.stroke
  const lines = useMemo(() => createCrossLinesBySize({ width, height }), [width, height])
  return (
    <svg width={width} height={height}>
      <title>{text}</title>
      <rect
        x={0}
        y={0}
        width={width}
        height={height}
        fill="none"
        stroke={stroke.color}
        strokeWidth={stroke.width}
        strokeDasharray={stroke.dasharray}
      />
      {
        lines.map((line, index) => (
          <line
            // biome-ignore lint/suspicious/noArrayIndexKey: lines are always 4 items, so no need to add key
            key={index}
            x1={line.start.x}
            y1={line.start.y}
            x2={line.end.x}
            y2={line.end.y}
            stroke={stroke.color}
            strokeWidth={stroke.width}
            strokeDasharray={stroke.dasharray}
          />
        ))
      }
      <text
        x={centerX}
        y={centerY}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={fontSize}
        fontFamily={styles.text.fontFamily}
      >
        {text}
      </text>
    </svg>
  )
}
