import { AutoMeasure, MeasureStyleContext } from '..'
import type { MeasureStyle } from '..'

import type { Meta, StoryObj } from '@storybook/react-vite'

const CustomStyleExample = (props: { stroke: MeasureStyle['stroke']; text: MeasureStyle['text'] }) => (
  <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
    <MeasureStyleContext.Provider value={props}>
      <AutoMeasure />
    </MeasureStyleContext.Provider>
  </div>
)

const meta: Meta<typeof CustomStyleExample> = {
  title: 'Layout Primitives/Measure/Context',
  component: CustomStyleExample,
}

export default meta
type Story = StoryObj<typeof CustomStyleExample>

export const Default: Story = {
  args: {
    stroke: {
      color: 'blue',
      width: 2,
      dasharray: 4,
    },
    text: {
      fontFamily: 'sans-serif',
    },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        inline: false,
        iframeHeight: 200,
      },
    },
  },
}
