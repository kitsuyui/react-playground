import {
  StopwatchContainer,
  MinimalStopwatch,
  StopwatchContext,
} from '@kitsuyui/react-stopwatch'
import React from 'react'

interface StopwatchProps {
  running: boolean
  elapsedTime: number
  start: () => void
  stop: () => void
  reset: () => void
  toggle: () => void
}

import type { Meta, StoryObj } from '@storybook/react'

const Stopwatch = () => {
  return (
    <StopwatchContainer>
      <StopwatchContext.Consumer>
        {(props: StopwatchProps) => <MinimalStopwatch {...props} />}
      </StopwatchContext.Consumer>
    </StopwatchContainer>
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
