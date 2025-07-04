import { Measure } from '../../../measure'
import { Treemap } from '../'

import type { Meta, StoryObj } from '@storybook/react-vite'

const WeightedItems = [...Array(10)]
  .map((_, i) => i + 1)
  .map((i) => ({
    weight: 1.1 ** i,
    element: <Measure />,
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
  title: 'Base/Treemap/Example',
  component: TreemapExample,
}

export default meta
type Story = StoryObj<typeof TreemapExample>

export const Default: Story = {
  args: {
    verticalFirst: true,
    aspectRatio: 16 / 9,
    boustrophedon: false,
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
