import { DetailedBitString } from '../../'

import type { Meta, StoryObj } from '@storybook/react-vite'

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
