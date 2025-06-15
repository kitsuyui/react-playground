import React from 'react'
import { TextArea, type TextAreaRef } from '../'

import type { Meta, StoryObj } from '@storybook/react-webpack5'

const meta: Meta<typeof TextArea> = {
  title: 'Base/TextField/TextArea/Example',
  component: TextArea,
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof TextArea>

export const Default: Story = {
  args: {
    value: 'あいうえお',
  },
}

export const WithClearButton: Story = {
  args: {
    value: 'かきくけこ',
  },
  render: (args: {
    value?: string
  }) => {
    const ref = React.useRef<TextAreaRef>(null)
    return (
      <>
        <TextArea ref={ref} {...args} />
        <button type="button" onClick={() => ref.current?.clear()}>
          Clear
        </button>
      </>
    )
  }
}
