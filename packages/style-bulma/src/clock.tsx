import {
  AnalogClock as AnalogClockOriginal,
  ClockContainer,
  ClockProps,
  DateContext,
} from '@kitsuyui/react-clock'
import React from 'react'

import 'bulma/css/bulma.css'

const ClockElement = (props: ClockProps) => {
  const { date, timezone } = props

  const time = date.toLocaleTimeString('ja-JP', {
    timeZone: timezone,
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
  return (
    <div className="card">
      <div className="card-content">
        <AnalogClockOriginal {...props} />
        <p className="title is-family-monospace">{time}</p>
      </div>
    </div>
  )
}

interface DigitalClockProps {
  timezone?: string
  refreshInterval?: number
}

export const Clock = ({
  timezone,
  refreshInterval = 10,
}: DigitalClockProps) => {
  const timezone2 = timezone || Intl.DateTimeFormat().resolvedOptions().timeZone
  return (
    <ClockContainer refreshInterval={refreshInterval}>
      <DateContext.Consumer>
        {(date: Date) => (
          <>
            <ClockElement timezone={timezone2} date={date} />
          </>
        )}
      </DateContext.Consumer>
    </ClockContainer>
  )
}

const AnalogClockElement = (props: ClockProps) => {
  return (
    <div className="block">
      <div className="columns">
        <div className="column">
          <AnalogClockOriginal {...props} />
        </div>
      </div>
    </div>
  )
}

export const AnalogClock = (props: ClockProps) => {
  return (
    <ClockContainer refreshInterval={10}>
      <DateContext.Consumer>
        {(date: Date) => (
          <>
            <AnalogClockElement {...props} date={date} />
          </>
        )}
      </DateContext.Consumer>
    </ClockContainer>
  )
}
