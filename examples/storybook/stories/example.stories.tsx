import { Measure } from '@kitsuyui/react-measure'
import React from 'react'
import { useMeasure } from 'react-use'

import type { Meta, StoryObj } from '@storybook/react'

interface WeightedItem {
  weight: number
  element: JSX.Element
}

// Many random items
const WeightedItems: WeightedItem[] = Array.from({ length: 20 }, () => {})
  .map(() => ({
    weight: Math.random() * 100,
    element: <Measure />,
  }))
  .sort((a, b) => b.weight - a.weight)

type Size = {
  width: number
  height: number
}

type InArea = {
  width: number
  height: number
  x: number
  y: number
} & Size

const divideAreaVertically = (size: Size, weights: number[]) => {
  // Divide area into n parts (weights.length) by weights (big weight has big area)
  const totalWeight = weights.reduce((acc, weight) => acc + weight, 0)
  const { width, height } = size
  // split vertically only
  const inAreas = []
  let x = 0
  for (const weight of weights) {
    const itemWidth = (width * weight) / totalWeight
    inAreas.push({ width: itemWidth, height, x, y: 0 })
    x += itemWidth
  }
  return inAreas
}

const divideAreaHorizontally = (size: Size, weights: number[]) => {
  // Divide area into n parts (weights.length) by weights (big weight has big area)
  const totalWeight = weights.reduce((acc, weight) => acc + weight, 0)
  const { width, height } = size
  // split horizontally only
  const inAreas = []
  let y = 0
  for (const weight of weights) {
    const itemHeight = (height * weight) / totalWeight
    inAreas.push({ width, height: itemHeight, x: 0, y })
    y += itemHeight
  }
  return inAreas
}

const divideAreaBoth = (size: Size, weights: number[]) => {
  // Divide area into n parts (weights.length) by weights (big weight has big area)
  const { width, height } = size
  if (width === 0 || height === 0 || isNaN(width) || isNaN(height)) {
    return []
  }
  const totalWeight = weights.reduce((acc, weight) => acc + weight, 0)
  const totalArea = width * height
  const areaPerWeight = totalArea / totalWeight
  const inAreas: InArea[] = []
  let remainArea = { width, height, x: 0, y: 0 }
  const remainWeights = weights.slice() // copy
  const tobeAspectRatio = 1.78 // 16:9
  while (remainWeights.length > 0) {
    const { width, height, x, y } = remainArea
    const splitVertical = width > height
    const pickedWeights: number[] = []

    while (remainWeights.length > 0) {
      pickedWeights.push(remainWeights.shift()!)
      const pickedWeightsTotal = pickedWeights.reduce((a, b) => a + b, 0)
      const allocatedArea = pickedWeightsTotal * areaPerWeight
      const allocatedWidth = splitVertical ? allocatedArea / height : width
      const allocatedHeight = splitVertical ? height : allocatedArea / width
      if (
        Math.max(allocatedWidth, allocatedHeight * tobeAspectRatio) /
          Math.min(allocatedWidth, allocatedHeight * tobeAspectRatio) <
        pickedWeights.length + 1
      ) {
        break
      }
    }
    const pickedWeightsTotal = pickedWeights.reduce((a, b) => a + b, 0)
    const allocatedArea = pickedWeightsTotal * areaPerWeight
    const allocatedWidth = splitVertical ? allocatedArea / height : width
    const allocatedHeight = splitVertical ? height : allocatedArea / width
    const splitInAllocatedArea = allocatedWidth > allocatedHeight
    let x2 = remainArea.x
    let y2 = remainArea.y
    for (const pickedWeight of pickedWeights) {
      const w = (allocatedWidth * pickedWeight) / pickedWeightsTotal
      const h = (allocatedHeight * pickedWeight) / pickedWeightsTotal
      inAreas.push({
        width: splitInAllocatedArea ? w : allocatedWidth,
        height: splitInAllocatedArea ? allocatedHeight : h,
        x: splitInAllocatedArea ? x2 : x,
        y: splitInAllocatedArea ? y : y2,
      })
      if (splitInAllocatedArea) {
        x2 += w
      } else {
        y2 += h
      }
    }
    remainArea = {
      width: splitVertical ? width - allocatedWidth : width,
      height: splitVertical ? height : height - allocatedHeight,
      x: splitVertical ? x + allocatedWidth : x,
      y: splitVertical ? y : y + allocatedHeight,
    }
  }
  return inAreas
}

type SplitStrategy = 'vertical' | 'horizontal' | 'both'

const splitAreaByStrategy = (
  size: Size,
  weights: number[],
  splitStrategy: SplitStrategy
) => {
  if (splitStrategy === 'vertical') {
    return divideAreaVertically(size, weights)
  } else if (splitStrategy === 'horizontal') {
    return divideAreaHorizontally(size, weights)
  } else {
    return divideAreaBoth(size, weights)
  }
}

const Something = ({
  weightedItems,
  splitStrategy,
}: {
  weightedItems: WeightedItem[]
  splitStrategy: SplitStrategy
}) => {
  const [ref, { width, height }] = useMeasure()
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
        inAreas.map(({ width: itemWidth, height: itemHeight, x, y }, i) => (
          <div
            key={i}
            style={{
              width: `${itemWidth}px`,
              height: `${itemHeight}px`,
              position: 'absolute',
              overflow: 'hidden',
              left: `${x}px`,
              top: `${y}px`,
              outline: '1px solid red',
            }}
          >
            {weightedItems[i].element}
          </div>
        ))}
    </div>
  )
}

const meta: Meta<typeof Something> = {
  title: 'Something',
  component: Something,
}

export default meta
type Story = StoryObj<typeof Something>

export const Default: Story = {
  args: {
    weightedItems: WeightedItems,
    // splitStrategy: 'vertical',
    splitStrategy: 'both',
  },
  parameters: {
    layout: 'fullscreen',
  },
}
