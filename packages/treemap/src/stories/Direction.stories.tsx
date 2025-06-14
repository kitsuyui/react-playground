import { Treemap, TreemapContext } from '../'
import { useContext } from 'react'

import type { Meta, StoryObj } from '@storybook/react-webpack5'

const directionNames = ['right', 'down', 'left', 'up'] as const
type Direction = typeof directionNames[number]
const directionToString = (direction: Direction) => {
  switch (direction) {
    case 'right':
      return '→'
    case 'down':
      return '↓'
    case 'left':
      return '←'
    case 'up':
      return '↑'
  }
}

const ExampleView = () => {
  const rect = useContext(TreemapContext)
  const directionStr = rect.nextDirection ? directionToString(rect.nextDirection) : ''
  const continueBorderStyle = '1px dotted gray'
  const uncontinueBorderStyle = '2px solid black'
  return (
    <div style={{
      width: '100%',
      height: '100%',
      borderLeft: rect.continueDirection.left ? continueBorderStyle : uncontinueBorderStyle,
      borderTop: rect.continueDirection.up ? continueBorderStyle : uncontinueBorderStyle,
      borderRight: rect.continueDirection.right ? continueBorderStyle : uncontinueBorderStyle,
      borderBottom: rect.continueDirection.down ? continueBorderStyle : uncontinueBorderStyle,
    }}>
      {`(x, y): (${rect.x}, ${rect.y})`}<br />
      {`W×H: ${rect.w | 0}×${rect.h | 0}`}<br />
      {`index: ${rect.index}`}<br />
      {`previousDirection: ${rect.previousDirection}`}<br />
      {`nextDirection: ${rect.nextDirection}`}<br />
      {`direction: ${directionStr}`}<br />
    </div>
  )
}

const WeightedItems = [...Array(10)]
  .map((_, i) => i + 1)
  .map((i) => ({
    weight: 1.1 ** i,
    element: <ExampleView />,
  }))
WeightedItems.sort((a, b) => b.weight - a.weight)

const TreemapExample = (
  props: {
    verticalFirst?: boolean
    aspectRatio?: number
    boustrophedon?: boolean
  } = {
      verticalFirst: true,
      aspectRatio: 16 / 9,
      boustrophedon: false,
    }
) => {
  return <Treemap weightedItems={WeightedItems} {...props} />
}

const meta: Meta<typeof TreemapExample> = {
  title: 'Base/Treemap/Direction',
  component: TreemapExample,
}

export default meta
type Story = StoryObj<typeof TreemapExample>

export const Default: Story = {
  args: {
    verticalFirst: false,
    aspectRatio: 16 / 9,
    boustrophedon: true,
  },
  parameters: {
    layout: 'fullscreen',
    flexDirection: 'column',
    docs: {
      story: {
        inline: false,
        iframeHeight: 800,
      },
    },
  },
}
