import { AutoDekamoji } from '../'
import type { DekamojiImplementation } from '..'

import type { Meta, StoryObj } from '@storybook/react-vite'

type WrapControls = {
  lineBreak: 'auto' | 'loose' | 'normal' | 'strict' | 'anywhere'
  overflowWrap: 'normal' | 'break-word' | 'anywhere'
  text: string
  whiteSpace: 'normal' | 'pre' | 'pre-line' | 'pre-wrap' | 'nowrap'
  wordBreak: 'normal' | 'break-all' | 'keep-all' | 'break-word'
  implementation: DekamojiImplementation
}

const AutoExample = ({
  implementation,
  lineBreak,
  overflowWrap,
  text,
  whiteSpace,
  wordBreak,
}: WrapControls) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        lineBreak,
        overflowWrap,
        whiteSpace,
        wordBreak,
      }}
    >
      <AutoDekamoji text={text} implementation={implementation} />
    </div>
  )
}

const meta: Meta<typeof AutoExample> = {
  title: 'Layout Primitives/Dekamoji/Auto',
  component: AutoExample,
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
    text: {
      control: {
        type: 'text',
      },
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
type Story = StoryObj<typeof AutoExample>

export const Default: Story = {
  args: {
    text: 'Hello, World!',
    implementation: 'pretext',
    lineBreak: 'auto',
    overflowWrap: 'normal',
    whiteSpace: 'pre-wrap',
    wordBreak: 'normal',
  },
  parameters: {
    layout: 'fullscreen',
    flexDirection: 'column',
    docs: {
      story: {
        inline: false,
        iframeHeight: 200,
      },
    },
  },
}
