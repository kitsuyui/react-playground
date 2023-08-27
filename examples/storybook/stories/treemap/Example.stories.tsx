import { Measure } from '@kitsuyui/react-measure'
import { Treemap } from '@kitsuyui/react-treemap'
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

const WeightedItems = [
  {
    weight: 4,
    element: <Measure />,
  },
  {
    weight: 3,
    element: <Measure />,
  },
  {
    weight: 2,
    element: <Measure />,
  },
  {
    weight: 1,
    element: <Measure />,
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
    docs: {
      story: {
        inline: false,
        iframeHeight: 800,
      },
    },
  },
}
