import {
  DefaultStopwatch,
  StopwatchContextProvider,
  StopwatchContext,
  type StopwatchContextValue,
} from '../'

import type { Meta, StoryObj } from '@storybook/react-vite'

const Stopwatch = () => {
  return (
    <StopwatchContextProvider>
      <StopwatchContext.Consumer>
        {(context: StopwatchContextValue) => <DefaultStopwatch {...context} />}
      </StopwatchContext.Consumer>
    </StopwatchContextProvider>
  )
}

const meta: Meta<typeof Stopwatch> = {
  title: 'State Providers/Stopwatch/Composition',
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
