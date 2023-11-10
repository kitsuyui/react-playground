import React, { useEffect, useState } from 'react'
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
  const [inAreas, setInAreas] = useState<Rect[]>([])
  const [dividing, setDividing] = useState<
    typeof import('@kitsuyui/rectangle-dividing') | null
  >(null)

  useEffect(() => {
    if (!dividing) {
      setInAreas([])
      return
    }
    const rect: Rect = { x: 0, y: 0, w: width, h: height }
    const weights = new Float32Array(weightedItems.map(({ weight }) => weight))
    const ia: Rect[] = dividing.dividing(
      rect,
      weights,
      aspectRatio,
      verticalFirst,
      boustrophedon
    )
    setInAreas(
      ia.map((r) => ({ x: r.x | 0, y: r.y | 0, w: r.w | 0, h: r.h | 0 }))
    )
  }, [
    width,
    height,
    weightedItems,
    aspectRatio,
    verticalFirst,
    boustrophedon,
    dividing,
  ])

  useEffect(() => {
    ;(async () => {
      const dividing = await import('@kitsuyui/rectangle-dividing')
      setDividing(dividing)
    })()
  })

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
      {inAreas.length > 0 &&
        weightedItems.map(({ element }, i) => {
          if (i >= inAreas.length) return null
          const { x, y, w: itemWidth, h: itemHeight } = inAreas[i]
          return (
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
              {element}
            </div>
          )
        })}
    </div>
  )
}
