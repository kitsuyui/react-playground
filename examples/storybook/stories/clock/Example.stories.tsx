import {
  AnalogClock,
  ClockContainer,
  DateContext,
  DigitalClock,
} from '@kitsuyui/react-clock'
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'

const Clock = () => {
  return (
    <ClockContainer refreshInterval={10}>
      <DateContext.Consumer>
        {(date: Date) => (
          <>
            <AnalogClock timezone="Asia/Tokyo" date={date} />
            <DigitalClock timezone="Asia/Tokyo" date={date} />
            <AnalogClock
              timezone="America/New_York"
              date={date}
              step="sweep"
              face="roman"
            />
            <DigitalClock timezone="America/New_York" date={date} />
          </>
        )}
      </DateContext.Consumer>
    </ClockContainer>
  )
}

const meta: Meta<typeof Clock> = {
  title: 'Base/Clock/Example',
  component: Clock,
}

export default meta
type Story = StoryObj<typeof Clock>

export const Default: Story = {
  args: {},
}
