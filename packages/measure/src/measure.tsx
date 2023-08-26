import React from 'react'
import { useMeasure } from 'react-use'

export const Measure: React.FC = (): JSX.Element => {
  const [ref, { width, height }] = useMeasure<HTMLDivElement>()
  const text = `${width}x${height}`
  const textSize = text.length
  const fontSize = Math.min(width, height) / textSize
  return (
    <div
      ref={ref}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <svg width={width} height={height}>
        <line
          x1={0}
          y1={0}
          x2={width / 2}
          y2={height / 2}
          stroke="black"
          strokeWidth={1}
          strokeDasharray={2}
        />
        <line
          x1={width}
          y1={0}
          x2={width / 2}
          y2={height / 2}
          stroke="black"
          strokeWidth={1}
          strokeDasharray={2}
        />
        <line
          x1={0}
          y1={height}
          x2={width / 2}
          y2={height / 2}
          stroke="black"
          strokeWidth={1}
          strokeDasharray={2}
        />
        <line
          x1={width}
          y1={height}
          x2={width / 2}
          y2={height / 2}
          stroke="black"
          strokeWidth={1}
          strokeDasharray={2}
        />
        <text
          x={width / 2}
          y={height / 2}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={fontSize}
          fontFamily="monospace"
        >
          {text}
        </text>
      </svg>
    </div>
  )
}
