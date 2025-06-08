import { UUIDIcon } from '@kitsuyui/react-biticon'

import type { Meta, StoryObj } from '@storybook/react-webpack5'

const meta: Meta<typeof UUIDIcon> = {
  title: 'Base/Biticon/Simple',
  component: UUIDIcon,
}

export default meta
type Story = StoryObj<typeof UUIDIcon>

export const Default: Story = {
  args: {
    uuid: '018fc860-4d10-7b70-b012-9ca7c3525a13',
  },
}
