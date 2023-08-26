import { Treemap } from '@kitsuyui/react-treemap'
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

const DummyElement = ({ color }: { color: string }) => (
  <div style={{ backgroundColor: color, height: '100%', width: '100%' }} />
)

const WeightedItems = [
  {
    weight: 4,
    element: <DummyElement color="red" />,
  },
  {
    weight: 3,
    element: <DummyElement color="green" />,
  },
  {
    weight: 2,
    element: <DummyElement color="blue" />,
  },
  {
    weight: 1,
    element: <DummyElement color="yellow" />,
  },
]

const TreemapExample = () => {
  return <Treemap weightedItems={WeightedItems} splitStrategy={'both'} />
}

const meta: Meta<typeof TreemapExample> = {
  title: 'Base/Treemap/Example',
  component: TreemapExample,
}

export default meta
type Story = StoryObj<typeof TreemapExample>

export const Default: Story = {
  args: {},
  parameters: {
    layout: 'fullscreen',
    flexDirection: 'column',
  },
}
