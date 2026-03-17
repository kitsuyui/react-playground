import { DefaultTimer } from '../'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof DefaultTimer> = {
  title: 'Base/Timer/Default',
  component: DefaultTimer,
}

export default meta
type Story = StoryObj<typeof DefaultTimer>

export const Default: Story = {
  args: {
    remaining: 1234,
    running: false,
  },
}
