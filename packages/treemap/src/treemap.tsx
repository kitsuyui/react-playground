import * as dividing from '@kitsuyui/rectangle-dividing'
import React, { useMemo } from 'react'
import { useMeasure } from 'react-use'

interface WeightedItem {
  weight: number
  element: JSX.Element
}

interface Rect {
  x: number
  y: number
  w: number
  h: number
}

export const Treemap = (props: {
  weightedItems: WeightedItem[]
  verticalFirst?: boolean
  aspectRatio?: number
  boustrophedon?: boolean
}) => {
  const [ref, { width, height }] = useMeasure<HTMLDivElement>()
  const { weightedItems } = props
  const verticalFirst = props.verticalFirst ?? true
  const aspectRatio = props.aspectRatio ?? 16 / 9
  const boustrophedon = props.boustrophedon ?? false
  const inAreas: Rect[] = useMemo(() => {
    const rect: Rect = { x: 0, y: 0, w: width, h: height }
    const weights = new Float32Array(weightedItems.map(({ weight }) => weight))
    const ia: Rect[] = dividing.dividing(
      rect,
      weights,
      aspectRatio,
      verticalFirst,
      boustrophedon
    )
    return ia.map((r) => ({ x: r.x | 0, y: r.y | 0, w: r.w | 0, h: r.h | 0 }))
  }, [width, height, weightedItems, aspectRatio, verticalFirst, boustrophedon])
  return (
    <div
      ref={ref}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        overflow: 'hidden',
      }}
    >
      {inAreas &&
        inAreas.map(({ x, y, w: itemWidth, h: itemHeight }, i) => (
          <div
            key={i}
            style={{
              width: `${itemWidth}px`,
              height: `${itemHeight}px`,
              position: 'absolute',
              overflow: 'hidden',
              left: `${x}px`,
              top: `${y}px`,
            }}
          >
            {weightedItems[i].element}
          </div>
        ))}
    </div>
  )
}
