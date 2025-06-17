import { Simple8BitString } from '@kitsuyui/react-binary'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof Simple8BitString> = {
  title: 'Base/Binary/Simple',
  component: Simple8BitString,
}

export default meta
type Story = StoryObj<typeof Simple8BitString>

export const Default: Story = {
  args: {
    value: 0b10101010,
  },
}
