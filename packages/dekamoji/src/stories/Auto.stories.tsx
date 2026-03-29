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
    text: {
      control: {
        type: 'text',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof AutoDekamoji>

export const Default: Story = {
  args: {
    text: 'あいうえお',
    implementation: 'dom',
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
