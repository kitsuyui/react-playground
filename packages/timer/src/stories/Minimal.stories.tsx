import { MinimalTimer } from '../'

import type { Meta, StoryObj } from '@storybook/react-vite'

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
