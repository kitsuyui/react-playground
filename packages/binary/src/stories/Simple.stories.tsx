import { SimpleBitString } from '@kitsuyui/react-binary'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof SimpleBitString> = {
  title: 'Base/Binary/Simple',
  component: SimpleBitString,
}

export default meta
type Story = StoryObj<typeof SimpleBitString>

export const Default: Story = {
  args: {
    value: 0b10101010,
    length: 8,
  },
}
