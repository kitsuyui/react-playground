import { MinimalStopwatch } from '@kitsuyui/react-stopwatch'

import type { Meta, StoryObj } from '@storybook/react-webpack5'

const meta: Meta<typeof MinimalStopwatch> = {
  title: 'Base/Stopwatch/Minimal',
  component: MinimalStopwatch,
}

export default meta
type Story = StoryObj<typeof MinimalStopwatch>

export const Default: Story = {
  args: {
    elapsedTime: 1234,
    running: false,
  },
}
