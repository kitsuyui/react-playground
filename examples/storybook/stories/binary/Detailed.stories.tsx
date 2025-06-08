import { DetailedBitString } from '@kitsuyui/react-binary'

import type { Meta, StoryObj } from '@storybook/react-webpack5'

const meta: Meta<typeof DetailedBitString> = {
  title: 'Base/Binary/Detailed',
  component: DetailedBitString,
}

export default meta
type Story = StoryObj<typeof DetailedBitString>

export const Default: Story = {
  args: {
    value: 0b10101010,
    length: 7,
    showLittleEndianBitOrder: true,
    showBigEndianBitOrder: true,
  },
}
