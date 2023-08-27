import React from 'react'
import { useMeasure } from 'react-use'

type Props = {
  text: string
}

export const Dekamoji: React.FC<Props> = ({ text }): JSX.Element => {
  const [ref, { width, height }] = useMeasure<HTMLDivElement>()
  const fontSize = Math.min(height, width / Math.max(text.length, 1))
  return (
    <div
      ref={ref}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
      }}
    >
      <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`}>
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize={`${fontSize}px`}
        >
          {text}
        </text>
      </svg>
    </div>
  )
}
