import { TextField } from '@kitsuyui/react-textfield'
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof TextField> = {
  title: 'Base/TextField/TextField/Example',
  component: TextField,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof TextField>

export const Default: Story = {
  args: {
    value: '',
    placeholder: '🔍 something',
  },
  decorators: [
    (Story) => {
      return <Story />
    },
  ],
}
