import { divide } from '@kitsuyui/js-rectangle-dividing'
import React from 'react'
import { useMeasure } from 'react-use'

interface WeightedItem {
  weight: number
  element: JSX.Element
}

type Size = {
  width: number
  height: number
}

type SplitStrategy = 'vertical' | 'horizontal' | 'both'

const splitAreaByStrategy = (
  size: Size,
  weights: number[],
  splitStrategy: SplitStrategy
) => {
  if (splitStrategy === 'vertical') {
    return divide.divideCoordinatedrectangleVertiacally(size, weights)
  } else if (splitStrategy === 'horizontal') {
    return divide.divideCoordinatedrectangleHorizontally(size, weights)
  } else {
    return divide.divideCoordinatedrectangleByAspectRatio({
      size,
      weights,
      tobeAspectRatio: 1.78, // 16:9
    })
  }
}

export const Treemap = ({
  weightedItems,
  splitStrategy = 'both',
}: {
  weightedItems: WeightedItem[]
  splitStrategy?: SplitStrategy
}) => {
  const [ref, { width, height }] = useMeasure<HTMLDivElement>()
  const inAreas = splitAreaByStrategy(
    { width, height },
    weightedItems.map(({ weight }) => weight),
    splitStrategy
  )
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
        inAreas.map(
          (
            {
              size: { width: itemWidth, height: itemHeight },
              origin: { x, y },
            },
            i
          ) => (
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
          )
        )}
    </div>
  )
}
