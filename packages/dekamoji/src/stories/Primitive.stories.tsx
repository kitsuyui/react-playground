import { SizedDekamoji } from '..'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof SizedDekamoji> = {
  title: 'Layout Primitives/Dekamoji/Primitive',
  component: SizedDekamoji,
  argTypes: {
    implementation: {
      control: {
        type: 'radio',
      },
      options: ['dom', 'zoomer', 'pretext'],
    },
  },
}

export default meta
type Story = StoryObj<typeof SizedDekamoji>

export const Default: Story = {
  args: {
    text: 'あいうえお',
    width: 300,
    height: 200,
    implementation: 'dom',
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
