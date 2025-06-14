import { Hello } from '../'

import type { Meta, StoryObj } from '@storybook/react-webpack5'

const meta: Meta<typeof Hello> = {
  title: 'Base/Hello',
  component: Hello,
}

export default meta
type Story = StoryObj<typeof Hello>

export const Default: Story = {
  args: {},
}
