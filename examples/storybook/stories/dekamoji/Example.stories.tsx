import { Dekamoji } from '@kitsuyui/react-dekamoji'
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

const DekamojiExample = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
      }}
    >
      <Dekamoji text="あいうえお" />
    </div>
  )
}

const meta: Meta<typeof DekamojiExample> = {
  title: 'Base/Dekamoji/Example',
  component: DekamojiExample,
}

export default meta
type Story = StoryObj<typeof DekamojiExample>

export const Default: Story = {
  args: {},
  parameters: {
    layout: 'fullscreen',
    flexDirection: 'column',
  },
}
