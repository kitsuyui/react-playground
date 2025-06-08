import { DigitalClock } from '@kitsuyui/react-clock'

import type { Meta, StoryObj } from '@storybook/react-webpack5'

const meta: Meta<typeof DigitalClock> = {
  title: 'Base/Clock/Digital',
  component: DigitalClock,
}

export default meta
type Story = StoryObj<typeof DigitalClock>

export const Default: Story = {
  args: {
    date: new Date('2023-01-01T10:08:42Z'),
    timezone: 'UTC',
  },
}

export const Tokyo: Story = {
  args: {
    date: new Date('2023-01-01T10:08:42Z'),
    timezone: 'Asia/Tokyo',
  },
}
