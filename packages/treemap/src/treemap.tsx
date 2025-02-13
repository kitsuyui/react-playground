import React, { useEffect, useState } from 'react'
import { useMeasure } from 'react-use'
import { dividing } from '@kitsuyui/rectangle-dividing'

interface Rect {
  x: number
  y: number
  w: number
  h: number
}

type Direction = 'right' | 'down' | 'left' | 'up'

interface ContinueDirection {
  right: boolean
  down: boolean
  left: boolean
  up: boolean
}

interface RectCursor {
  index: number
  previousDirection: Direction | null
  nextDirection: Direction | null
  continueDirection: ContinueDirection
}

type RectInfo = Rect & RectCursor

interface WeightedItem {
  weight: number
  element: React.JSX.Element
}

interface RectItem {
  rect: RectInfo
  element: React.JSX.Element
}

const NULL_CONTINUE_DIRECTION = {
  right: false,
  down: false,
  left: false,
  up: false,
} as const

const NULL_RECT_INFO = {
  x: 0,
  y: 0,
  w: 0,
  h: 0,
  index: 0,
  previousDirection: null,
  nextDirection: null,
  continueDirection: NULL_CONTINUE_DIRECTION,
} as const

export const TreemapContext = React.createContext<RectInfo>(NULL_RECT_INFO)

const nextBoustrophedonDirection = (rect1: Rect, rect2: Rect): Direction => {
  if (rect1.x + rect1.w <= rect2.x) return 'right'
  if (rect1.x >= rect2.x + rect2.w) return 'left'
  if (rect1.y + rect1.h <= rect2.y) return 'down'
  if (rect1.y >= rect2.y + rect2.h) return 'up'
  return 'right'
}

const previousBoustrophedonDirection = (rect1: Rect, rect2: Rect): Direction => {
  return nextBoustrophedonDirection(rect2, rect1)
}

const rectsToRectInfos = (rects: Rect[]): RectInfo[] => {
  const rectInfos: RectInfo[] = rects.map((rect, index) => ({
    ...rect,
    index,
    previousDirection: null,
    nextDirection: null,
    continueDirection: {
      right: false,
      down: false,
      left: false,
      up: false,
    },
  }))
  for (let i = 0; i < rectInfos.length; i++) {
    const rectInfo = rectInfos[i]
    const nextRectInfo = rectInfos[i + 1]
    if (nextRectInfo) {
      rectInfo.nextDirection = nextBoustrophedonDirection(rectInfo, nextRectInfo)
      rectInfo.continueDirection[rectInfo.nextDirection] = true
      nextRectInfo.previousDirection = previousBoustrophedonDirection(
        rectInfo,
        nextRectInfo
      )
      nextRectInfo.continueDirection[nextRectInfo.previousDirection] = true
    }
  }
  return rectInfos
}


const DEFAULT_ASPECT_RATIO = 16 / 9

export const Treemap = (props: {
  weightedItems: WeightedItem[]
  verticalFirst?: boolean
  aspectRatio?: number
  boustrophedon?: boolean
}) => {
  const [ref, { width, height }] = useMeasure<HTMLDivElement>()
  const { weightedItems } = props
  const verticalFirst = props.verticalFirst ?? true
  const aspectRatio = props.aspectRatio ?? DEFAULT_ASPECT_RATIO
  const boustrophedon = props.boustrophedon ?? false
  const [inAreas, setInAreas] = useState<Rect[]>([])

  useEffect(() => {
    const rect: Rect = { x: 0, y: 0, w: width, h: height }
    const weights = new Float32Array(weightedItems.map(({ weight }) => weight))
    const ia: Rect[] = dividing(
      rect,
      weights,
      aspectRatio,
      verticalFirst,
      boustrophedon
    )
    setInAreas(
      ia.map((r) => ({ x: r.x, y: r.y, w: r.w, h: r.h }))
    )
  }, [
    width,
    height,
    weightedItems,
    aspectRatio,
    verticalFirst,
    boustrophedon,
  ])

  const rectInfos = rectsToRectInfos(inAreas)
  const items = zip(weightedItems, rectInfos).map(([item, rect]) => ({
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
      {items.map(({ element, rect }) => {
        const { x, y, w, h, index } = rect
        return (<TreemapContext.Provider value={rect} key={index}>
          <div
            key={index}
            style={{
              position: 'absolute',
              overflow: 'hidden',
              /*
               * The following pixel values are not rounded. There are two reasons for this
               * - Due to the concept of Device Pixel Ratio (DPR), 1px in CSS may not match 1px in reality
               * - Due to CSS zoom and browser zoom features, pixel values may change
               * Rounding may cause gaps in the display in these cases.
               * Therefore, I keep the pixel values as floating point numbers.
               */
              width: `${w}px`,
              height: `${h}px`,
              left: `${x}px`,
              top: `${y}px`,
            }}
          >
            {element}
          </div>
        </TreemapContext.Provider>)
      })}
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
