import { Measure } from '../'

import type { Meta, StoryObj } from '@storybook/react-vite'

const MeasureExample = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
      }}
    >
      <Measure />
    </div>
  )
}

const meta: Meta<typeof MeasureExample> = {
  title: 'Base/Measure/Example',
  component: MeasureExample,
}

export default meta
type Story = StoryObj<typeof MeasureExample>

export const Default: Story = {
  args: {},
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
