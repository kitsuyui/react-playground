import { EditableLabel } from '../'
import React, { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-webpack5'

const EditableLabelExample = () => {
  const [text, setText] = useState("Let's edit me!")
  return (
    <EditableLabel
      text={text}
      onEditComplete={(text: string) => setText(text)}
    />
  )
}

const meta: Meta<typeof EditableLabelExample> = {
  title: 'Base/EditableLabel/Example',
  component: EditableLabelExample,
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof EditableLabel>

export const Default: Story = {
  args: {
    text: "Let's edit me!",
  },
  decorators: [
    (Story) => {
      return <Story />
    },
  ],
}
