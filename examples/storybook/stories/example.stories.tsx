import React from 'react'

import type { Meta, StoryObj } from '@storybook/react-webpack5'

const Something = () => <div>Something</div>

const meta: Meta<typeof Something> = {
  title: 'Something',
  component: Something,
}

export default meta
type Story = StoryObj<typeof Something>

export const Default: Story = {
  args: {
    bits: 0b10101010,
  },
}
