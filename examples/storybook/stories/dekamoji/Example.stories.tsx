import { Dekamoji } from '@kitsuyui/react-dekamoji'
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

const DekamojiExample = ({ text }: { text: string }) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
      }}
    >
      <Dekamoji text={text} />
    </div>
  )
}

const meta: Meta<typeof DekamojiExample> = {
  title: 'Base/Dekamoji/Example',
  component: DekamojiExample,
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof DekamojiExample>

export const Default: Story = {
  args: {
    text: 'あいうえお',
  },
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
