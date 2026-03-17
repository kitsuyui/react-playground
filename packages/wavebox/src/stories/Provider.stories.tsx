import { useContext } from 'react'
import { WaveBoxProvider, WaveBoxContext } from '@kitsuyui/react-wavebox'

import type { Meta, StoryObj } from '@storybook/react-vite'

const ContextInspector = () => {
  const { minWidth, maxWidth, minHeight, maxHeight, widthCycle, heightCycle, tick } =
    useContext(WaveBoxContext)
  return (
    <div style={{ fontFamily: 'monospace', fontSize: 14 }}>
      <div>tick: {tick}</div>
      <div>
        width: {minWidth}–{maxWidth} / {widthCycle}ms
      </div>
      <div>
        height: {minHeight}–{maxHeight} / {heightCycle}ms
      </div>
    </div>
  )
}

const ProviderExample = (props: {
  minWidth: number
  maxWidth: number
  minHeight: number
  maxHeight: number
  widthCycle: number
  heightCycle: number
}) => (
  <WaveBoxProvider {...props}>
    <ContextInspector />
  </WaveBoxProvider>
)

const meta: Meta<typeof ProviderExample> = {
  title: 'Layout Primitives/WaveBox/Provider',
  component: ProviderExample,
  argTypes: {
    minWidth: { control: { type: 'number' } },
    maxWidth: { control: { type: 'number' } },
    minHeight: { control: { type: 'number' } },
    maxHeight: { control: { type: 'number' } },
    widthCycle: { control: { type: 'number' } },
    heightCycle: { control: { type: 'number' } },
  },
}

export default meta
type Story = StoryObj<typeof ProviderExample>

export const Default: Story = {
  args: {
    minWidth: 100,
    maxWidth: 200,
    minHeight: 100,
    maxHeight: 300,
    widthCycle: 600,
    heightCycle: 900,
  },
}
