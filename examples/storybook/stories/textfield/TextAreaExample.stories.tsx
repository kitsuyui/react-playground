import { TextArea } from '@kitsuyui/react-textfield'
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react-webpack5'

const meta: Meta<typeof TextArea> = {
  title: 'Base/TextField/TextArea/Example',
  component: TextArea,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof TextArea>

export const Default: Story = {
  args: {
    value: 'あいうえお',
  },
  decorators: [
    (Story) => {
      return <Story />
    },
  ],
}
