import { DigitalClock } from '../'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof DigitalClock> = {
  title: 'Visualization Primitives/Clock/Digital',
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

export const Styled: Story = {
  args: {
    date: new Date('2023-01-01T10:08:42Z'),
    timezone: 'UTC',
    style: {
      color: '#9a3412',
      fontFamily: 'monospace',
      letterSpacing: '0.08em',
    },
  },
}
