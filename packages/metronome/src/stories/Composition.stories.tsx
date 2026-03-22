import { useContext } from 'react'
import { DefaultMetronome, MetronomeContext, MetronomeContextProvider } from '../'

import type { Meta, StoryObj } from '@storybook/react-vite'

const MetronomeComposition = () => {
  const context = useContext(MetronomeContext)
  return <DefaultMetronome {...context} />
}

const Example = () => (
  <MetronomeContextProvider>
    <MetronomeComposition />
  </MetronomeContextProvider>
)

const meta: Meta<typeof Example> = {
  title: 'State Providers/Metronome/Composition',
  component: Example,
}

export default meta
type Story = StoryObj<typeof Example>

export const Default: Story = {}
