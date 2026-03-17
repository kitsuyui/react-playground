import { Hello } from '../'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof Hello> = {
  title: 'Semantic Wrappers/Hello/Primitive',
  component: Hello,
}

export default meta
type Story = StoryObj<typeof Hello>

export const Default: Story = {
  args: {},
}
