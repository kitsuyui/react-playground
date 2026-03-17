import {
  AnalogClock,
  ClockContextProvider,
  ClockContext,
  DigitalClock,
} from '../'

import type { Meta, StoryObj } from '@storybook/react-vite'

const Clock = () => {
  return (
    <ClockContextProvider>
      <ClockContext.Consumer>
        {(date: Date) => (
          <>
            <AnalogClock timezone="Asia/Tokyo" date={date} />
            <DigitalClock
              timezone="Asia/Tokyo"
              date={date}
              style={{ fontFamily: 'monospace' }}
            />
            <AnalogClock
              timezone="America/New_York"
              date={date}
              step="sweep"
              face="roman"
            />
            <DigitalClock
              timezone="America/New_York"
              date={date}
              style={{ fontFamily: 'monospace' }}
            />
          </>
        )}
      </ClockContext.Consumer>
    </ClockContextProvider>
  )
}

const meta: Meta<typeof Clock> = {
  title: 'State Providers/Clock/Composition',
  component: Clock,
}

export default meta
type Story = StoryObj<typeof Clock>

export const Default: Story = {
  args: {},
}
