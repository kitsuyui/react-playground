import { DefaultMetronome } from '../'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof DefaultMetronome> = {
  title: 'Default UIs/Metronome/Default',
  component: DefaultMetronome,
}

export default meta
type Story = StoryObj<typeof DefaultMetronome>

export const Default: Story = {
  args: {
    beat: 0,
    lastBeatAtMs: null,
    running: false,
    tempo: 120,
    start: () => {},
    stop: () => {},
    toggle: () => {},
    reset: () => {},
    setTempo: () => {},
    incrementTempo: () => {},
  },
}

export const Running: Story = {
  args: {
    ...Default.args,
    beat: 8,
    lastBeatAtMs: Date.now(),
    running: true,
  },
}
