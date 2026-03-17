import { SizedZoomer } from '..'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof SizedZoomer> = {
  title: 'Layout Primitives/Zoomer/Primitive',
  component: SizedZoomer,
}

export default meta
type Story = StoryObj<typeof SizedZoomer>

export const Default: Story = {
  args: {
    width: 300,
    height: 200,
    children: 'あいうえお',
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        inline: false,
        iframeHeight: 300,
      },
    },
  },
}
