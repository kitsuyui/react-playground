import { AutoDekamoji } from '../'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof AutoDekamoji> = {
  title: 'Layout Primitives/Dekamoji/Auto',
  component: AutoDekamoji,
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
    text: {
      control: {
        type: 'text',
      },
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
type Story = StoryObj<typeof AutoDekamoji>

export const Default: Story = {
  args: {
    text: 'Hello, World!',
    implementation: 'dom',
    lineBreak: 'auto',
    overflowWrap: 'normal',
    whiteSpace: 'pre-wrap',
    wordBreak: 'normal',
  },
  decorators: [
    (Story) => {
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}
        >
          <Story />
        </div>
      )
    },
  ],
  parameters: {
    layout: 'fullscreen',
    flexDirection: 'column',
    docs: {
      story: {
        inline: false,
        iframeHeight: 200,
      },
    },
  },
}
