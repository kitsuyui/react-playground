import { BitIcon } from '../'

import type { Meta, StoryObj } from '@storybook/react-vite'

const PrimitiveIcon = () => {
  return <BitIcon bits={0x018fc8604d107b70b0129ca7c3525a13n} />
}

const meta: Meta<typeof PrimitiveIcon> = {
  title: 'Visualization Primitives/BitIcon/Primitive',
  component: PrimitiveIcon,
}

export default meta
type Story = StoryObj<typeof PrimitiveIcon>

export const Default: Story = {}

export const InlineSized: Story = {
  render: () => {
    return (
      <BitIcon
        bits={0x018fc8604d107b70b0129ca7c3525a13n}
        width="1em"
        height="1em"
        style={{ verticalAlign: 'text-bottom' }}
      />
    )
  },
}
