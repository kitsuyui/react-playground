import { DefaultStopwatch } from '../'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof DefaultStopwatch> = {
  title: 'Default UIs/Stopwatch/Default',
  component: DefaultStopwatch,
}

export default meta
type Story = StoryObj<typeof DefaultStopwatch>

export const Default: Story = {
  args: {
    elapsedTime: 0,
    running: false,
    toggle: () => {},
    reset: () => {},
  },
}

export const Running: Story = {
  args: {
    elapsedTime: 12345,
    running: true,
    toggle: () => {},
    reset: () => {},
  },
}
