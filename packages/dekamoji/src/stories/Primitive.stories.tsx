import { SizedDekamoji } from '..'
import type { DekamojiImplementation } from '..'

import type { Meta, StoryObj } from '@storybook/react-vite'

type PrimitiveExampleProps = {
  height: number
  implementation: DekamojiImplementation
  lineBreak: 'auto' | 'loose' | 'normal' | 'strict' | 'anywhere'
  overflowWrap: 'normal' | 'break-word' | 'anywhere'
  text: string
  whiteSpace: 'normal' | 'pre' | 'pre-line' | 'pre-wrap' | 'nowrap'
  width: number
  wordBreak: 'normal' | 'break-all' | 'keep-all' | 'break-word'
}

const PrimitiveExample = ({
  height,
  implementation,
  lineBreak,
  overflowWrap,
  text,
  whiteSpace,
  width,
  wordBreak,
}: PrimitiveExampleProps) => {
  return (
    <div
      style={{
        width,
        height,
        position: 'relative',
        lineBreak,
        overflowWrap,
        whiteSpace,
        wordBreak,
      }}
    >
      <SizedDekamoji
        text={text}
        width={width}
        height={height}
        implementation={implementation}
      />
    </div>
  )
}

const meta: Meta<typeof PrimitiveExample> = {
  title: 'Layout Primitives/Dekamoji/Primitive',
  component: PrimitiveExample,
  argTypes: {
    implementation: {
      control: {
        type: 'radio',
      },
      options: ['dom', 'zoomer', 'pretext'],
    },
    lineBreak: {
      control: {
        type: 'select',
      },
      options: ['auto', 'loose', 'normal', 'strict', 'anywhere'],
    },
    overflowWrap: {
      control: {
        type: 'select',
      },
      options: ['normal', 'break-word', 'anywhere'],
    },
    whiteSpace: {
      control: {
        type: 'select',
      },
      options: ['normal', 'pre', 'pre-line', 'pre-wrap', 'nowrap'],
    },
    wordBreak: {
      control: {
        type: 'select',
      },
      options: ['normal', 'break-all', 'keep-all', 'break-word'],
    },
  },
}

export default meta
type Story = StoryObj<typeof PrimitiveExample>

export const Default: Story = {
  args: {
    text: 'Hello, World!',
    width: 300,
    height: 200,
    implementation: 'pretext',
    lineBreak: 'auto',
    overflowWrap: 'normal',
    whiteSpace: 'pre-wrap',
    wordBreak: 'normal',
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        inline: false,
        iframeHeight: 300,
      },
    },
  },
}
