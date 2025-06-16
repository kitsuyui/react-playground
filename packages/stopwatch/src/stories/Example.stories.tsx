import {
  MinimalStopwatch,
  StopwatchContextProvider,
  StopwatchContext,
} from '../'

interface StopwatchProps {
  running: boolean
  elapsedTime: number
  start: () => void
  stop: () => void
  reset: () => void
  toggle: () => void
}

import type { Meta, StoryObj } from '@storybook/react-webpack5'

const Stopwatch = () => {
  return (
    <StopwatchContextProvider>
      <StopwatchContext.Consumer>
        {(context: StopwatchProps) => <MinimalStopwatch {...context} />}
      </StopwatchContext.Consumer>
    </StopwatchContextProvider>
  )
}

const meta: Meta<typeof Stopwatch> = {
  title: 'Base/Stopwatch/Example',
  component: Stopwatch,
}

export default meta
type Story = StoryObj<typeof Stopwatch>

export const Default: Story = {
  args: {
    onComplete: () => {
      return
    },
  },
}
