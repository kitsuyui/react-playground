import { AutoMeasure } from '../../../measure'
import { WaveBox } from '@kitsuyui/react-wavebox'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof WaveBox> = {
  title: 'Layout Primitives/WaveBox/Default Composition',
  component: WaveBox,
  argTypes: {
    minHeight: { control: { type: 'number' } },
    minWidth: { control: { type: 'number' } },
    maxWidth: { control: { type: 'number' } },
    maxHeight: { control: { type: 'number' } },
    heightCycle: { control: { type: 'number' } },
    widthCycle: { control: { type: 'number' } },
  },
}

export default meta
type Story = StoryObj<typeof WaveBox>

export const Default: Story = {
  args: {
    minWidth: 100,
    maxWidth: 200,
    minHeight: 100,
    maxHeight: 300,
    heightCycle: 900,
    widthCycle: 600,
  },
  render: (args) => (
    <WaveBox {...args}>
      <AutoMeasure />
    </WaveBox>
  ),
  decorators: [
    (Story) => (
      <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
        <Story />
      </div>
    ),
  ],
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
