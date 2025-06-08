import { MinimalTimer } from '@kitsuyui/react-timer'

import type { Meta, StoryObj } from '@storybook/react-webpack5'

const meta: Meta<typeof MinimalTimer> = {
  title: 'Base/Timer/Minimal',
  component: MinimalTimer,
}

export default meta
type Story = StoryObj<typeof MinimalTimer>

export const Default: Story = {
  args: {
    remaining: 1234,
    running: false,
  },
}
