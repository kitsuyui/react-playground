import {
  ResetButton,
  ResetForm,
  TextFieldWithReset,
} from '@kitsuyui/react-textfield'
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

const Something = () => {
  return (
    <ResetForm>
      <TextFieldWithReset placeholder="🔍 something" />
      <ResetButton>{'reset'}</ResetButton>
    </ResetForm>
  )
}

const meta: Meta<typeof Something> = {
  title: 'Base/TextField/Something/Example',
  component: Something,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Something>

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
