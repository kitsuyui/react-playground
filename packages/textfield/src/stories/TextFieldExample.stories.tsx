import React from 'react'
import { TextField, type TextFieldRef } from '../'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof TextField> = {
  title: 'Semantic Wrappers/TextField/TextField',
  component: TextField,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof TextField>

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

export const WithClearButton: Story = {
  args: {
    value: 'かきくけこ',
  },
  render: (args: {
    value?: string
  }) => {
    const ref = React.useRef<TextFieldRef>(null)
    return (
      <>
        <TextField ref={ref} {...args} />
        <button type="button" onClick={() => ref.current?.clear()}>
          Clear
        </button>
      </>
    )
  }
}
