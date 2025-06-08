import { Dekamoji } from '@kitsuyui/react-dekamoji'
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react-webpack5'

const meta: Meta<typeof Dekamoji> = {
  title: 'Base/Dekamoji/Example',
  component: Dekamoji,
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Dekamoji>

export const Default: Story = {
  args: {
    text: 'あいうえお',
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
