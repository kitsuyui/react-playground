import {
  AnalogClock,
  ClockContainer,
  DateContext,
  DigitalClock,
} from '@kitsuyui/react-clock'
import {
  MinimalStopwatch,
  StopwatchContainer,
  StopwatchContext,
  StopwatchProps,
} from '@kitsuyui/react-stopwatch'
import {
  MinimalTimer,
  TimerContainer,
  TimerContext,
  TimerProps,
} from '@kitsuyui/react-timer'
import React from 'react'

export {
  AnalogClock,
  ClockContainer,
  DateContext,
  DigitalClock,
  StopwatchContainer,
  MinimalStopwatch,
  StopwatchContext,
  MinimalTimer,
  TimerContainer,
  TimerContext,
}

export const Clock = () => {
  return (
    <ClockContainer refreshInterval={10}>
      <DateContext.Consumer>
        {(date: Date) => (
          <>
            <AnalogClock timezone="Asia/Tokyo" date={date} />
            <DigitalClock timezone="Asia/Tokyo" date={date} />
          </>
        )}
      </DateContext.Consumer>
    </ClockContainer>
  )
}

export const Timer = ({ onComplete }: { onComplete?: () => void }) => {
  return (
    <TimerContainer onComplete={onComplete}>
      <TimerContext.Consumer>
        {(timer: TimerProps) => <MinimalTimer {...timer} />}
      </TimerContext.Consumer>
    </TimerContainer>
  )
}

export const Stopwatch = () => {
  return (
    <StopwatchContainer>
      <StopwatchContext.Consumer>
        {(props: StopwatchProps) => <MinimalStopwatch {...props} />}
      </StopwatchContext.Consumer>
    </StopwatchContainer>
  )
}
