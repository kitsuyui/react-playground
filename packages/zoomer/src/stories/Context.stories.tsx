import { useContext } from 'react'
import { AutoZoomer, ZoomerContext } from '..'

import type { Meta, StoryObj } from '@storybook/react-vite'

const ContextInspector = () => {
  const { zoom, computed } = useContext(ZoomerContext)
  return (
    <div style={{ fontFamily: 'monospace', fontSize: 14 }}>
      <div>zoom: {zoom.toFixed(4)}</div>
      <div>computed: {String(computed)}</div>
    </div>
  )
}

const ZoomerContextExample = () => (
  <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
    <AutoZoomer>
      <ContextInspector />
    </AutoZoomer>
  </div>
)

const meta: Meta<typeof ZoomerContextExample> = {
  title: 'Layout Primitives/Zoomer/Context',
  component: ZoomerContextExample,
}

export default meta
type Story = StoryObj<typeof ZoomerContextExample>

export const Default: Story = {
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
