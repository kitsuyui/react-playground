import {
  ClearButton,
  ClearButtonProvider,
  TextFieldWithClear,
} from '@kitsuyui/react-textfield'
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react-webpack5'

const ClearButtonExample = () => {
  return (
    <ClearButtonProvider>
      <TextFieldWithClear />
      <ClearButton>{'reset'}</ClearButton>
    </ClearButtonProvider>
  )
}

const meta: Meta<typeof ClearButton> = {
  title: 'Base/TextField/ClearButton/Example',
  component: ClearButtonExample,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof ClearButton>

export const Default: Story = {
  args: {
    value: '',
    placeholder: '🔍 something',
  },
  decorators: [
    (Story) => {
      return <Story />
    },
  ],
}
