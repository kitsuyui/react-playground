import { AnalogClock } from '../'

import type { Meta, StoryObj } from '@storybook/react-webpack5'

const meta: Meta<typeof AnalogClock> = {
  title: 'Base/Clock/Analog',
  component: AnalogClock,
}

export default meta
type Story = StoryObj<typeof AnalogClock>

export const Default: Story = {
  args: {
    date: new Date('2023-01-01T10:08:42Z'),
    timezone: 'UTC',
    face: 'arabic',
    step: 'tick',
  },
}

export const Roman: Story = {
  args: {
    date: new Date('2023-01-01T10:08:42Z'),
    timezone: 'UTC',
    face: 'roman',
    step: 'tick',
  },
}

export const Sweep: Story = {
  args: {
    date: new Date('2023-01-01T10:08:42Z'),
    timezone: 'UTC',
    face: 'arabic',
    step: 'sweep',
  },
}

export const Tokyo: Story = {
  args: {
    date: new Date('2023-01-01T10:08:42Z'),
    timezone: 'Asia/Tokyo',
    face: 'arabic',
    step: 'tick',
  },
}
