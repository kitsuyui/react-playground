import { SizedDekamoji } from '..'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof SizedDekamoji> = {
  title: 'Layout Primitives/Dekamoji/Primitive',
  component: SizedDekamoji,
}

export default meta
type Story = StoryObj<typeof SizedDekamoji>

export const Default: Story = {
  args: {
    text: 'あいうえお',
    width: 300,
    height: 200,
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
