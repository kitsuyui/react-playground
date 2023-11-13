import React, { useEffect, useState } from 'react'
import { useMeasure } from 'react-use'

interface Rect {
  x: number
  y: number
  w: number
  h: number
}

interface WeightedItem {
  weight: number
  element: JSX.Element
}

interface RectItem {
  rect: Rect
  element: JSX.Element
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
    ;(async () => {
      if (dividing) return
      const d = await import('@kitsuyui/rectangle-dividing')
      setDividing(d)
    })()
  })

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

  const items = zip(weightedItems, inAreas).map(([item, rect]) => ({
    element: item.element,
    rect,
  }))

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
      {TreemapByRect({ items })}
    </div>
  )
}

/**
 * TreemapItemsByRect
 * @param props
 * @returns
 */
const TreemapByRect = (props: { items: RectItem[] }) => {
  const { items } = props
  return (
    <>
      {items.map(({ element, rect: { x, y, w, h } }, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            overflow: 'hidden',
            width: `${w}px`,
            height: `${h}px`,
            left: `${x}px`,
            top: `${y}px`,
          }}
        >
          {element}
        </div>
      ))}
    </>
  )
}

/**
 * zip two arrays like Python's zip()
 * @param a
 * @param b
 * @returns new array of [a[i], b[i]]
 */
const zip = <T, S>(a: T[], b: S[]): [T, S][] =>
  Array.from(Array(Math.min(b.length, a.length)), (_, i) => [a[i], b[i]])
