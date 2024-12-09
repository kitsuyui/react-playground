import React from 'react'
import { useInterval } from 'react-use'

type Props = {
  children: React.ReactElement | React.ReactElement[] | string
  maxWidth: number
  maxHeight: number
  minWidth: number
  minHeight: number
  widthCycle: number
  heightCycle: number
}

export const WaveBox = ({
  children,
  maxWidth,
  maxHeight,
  minWidth,
  minHeight,
  widthCycle,
  heightCycle,
}: Props): React.JSX.Element => {
  const [width, setWidth] = React.useState<number>(minWidth)
  const [height, setHeight] = React.useState<number>(minHeight)
  const [t, setT] = React.useState<number>(0)

  useInterval(() => {
    setT(t + 1)
    // sine curve of min width to max width
    const w = curve(minWidth, maxWidth, widthCycle, t)
    setWidth(w)
    // cosine curve of min height to max height
    const h = curve(minHeight, maxHeight, heightCycle, t)
    setHeight(h)
  }, 10)

  return (
    <div
      style={{
        width,
        height,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {children}
    </div>
  )
}

function curve(minValue: number, maxValue: number, cycle: number, t: number) {
  const amplitude = (maxValue - minValue) / 2
  return Math.sin(t / cycle) * amplitude + amplitude + minValue
}
