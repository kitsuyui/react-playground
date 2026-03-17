import { InlineAnalogClock } from '../'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof InlineAnalogClock> = {
  title: 'Base/Clock/InlineAnalog',
  component: InlineAnalogClock,
}

export default meta
type Story = StoryObj<typeof InlineAnalogClock>

export const Default: Story = {
  args: {
    date: new Date('2023-01-01T10:08:42Z'),
    timezone: 'UTC',
  },
  render: (args) => (
    <p style={{ fontSize: '24px' }}>
      Current time <InlineAnalogClock {...args} /> in UTC
    </p>
  ),
}

export const Styled: Story = {
  args: {
    date: new Date('2024-01-02T06:04:05Z'),
    timezone: 'Asia/Tokyo',
    style: {
      color: '#c2410c',
      fontSize: '1.5em',
    },
  },
  render: (args) => (
    <p style={{ color: '#1f2937', fontSize: '20px' }}>
      Tokyo <InlineAnalogClock {...args} /> office hours
    </p>
  ),
}
