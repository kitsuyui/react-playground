import { Bits, SimpleBit } from '../'

import type { Meta, StoryObj } from '@storybook/react-vite'

const PrimitiveBits = () => {
  return <Bits value={0b10101010} length={8} bitElement={SimpleBit} />
}

const meta: Meta<typeof PrimitiveBits> = {
  title: 'Visualization Primitives/Binary/Primitive',
  component: PrimitiveBits,
}

export default meta
type Story = StoryObj<typeof PrimitiveBits>

export const Default: Story = {}
