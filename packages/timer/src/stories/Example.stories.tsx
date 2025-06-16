import {
  MinimalTimer, TimerContextProvider, TimerContext
} from '../'
import useSound from 'use-sound'

import type { Meta, StoryObj } from '@storybook/react-webpack5'

export const OrigTimer = ({ onComplete }: { onComplete?: () => void }) => {
  return (
    <TimerContextProvider onComplete={onComplete}>
      <TimerContext.Consumer>
        {(context) => <MinimalTimer {...context} />}
      </TimerContext.Consumer>
    </TimerContextProvider>
  )
}

const Timer = () => {
  const [completeSound] = useSound('/sound_effects/24.wav', { playbackRate: 1 })
  return (
    <OrigTimer
      onComplete={() => {
        return completeSound()
      }}
    />
  )
}

const meta: Meta<typeof Timer> = {
  title: 'Base/Timer/Example',
  component: Timer,
}

export default meta
type Story = StoryObj<typeof Timer>

export const Default: Story = {
  args: {
    onComplete: () => {
      return
    },
  },
}
