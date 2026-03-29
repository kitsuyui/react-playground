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
    lineBreak: {
      control: {
        type: 'select',
      },
      options: ['auto', 'loose', 'normal', 'strict', 'anywhere'],
    },
    overflowWrap: {
      control: {
        type: 'select',
      },
      options: ['normal', 'break-word', 'anywhere'],
    },
    whiteSpace: {
      control: {
        type: 'select',
      },
      options: ['normal', 'pre', 'pre-line', 'pre-wrap', 'nowrap'],
    },
    wordBreak: {
      control: {
        type: 'select',
      },
      options: ['normal', 'break-all', 'keep-all', 'break-word'],
    },
  },
}

export default meta
type Story = StoryObj<typeof SizedDekamoji>

export const Default: Story = {
  args: {
    text: 'Hello, World!',
    width: 300,
    height: 200,
    implementation: 'dom',
    lineBreak: 'auto',
    overflowWrap: 'normal',
    whiteSpace: 'pre-wrap',
    wordBreak: 'normal',
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
