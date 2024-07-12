import {
  TimerContainer,
  TimerContext,
  TimerProps,
} from '@kitsuyui/react-timer'
import React, { useCallback } from 'react'
import { timeLabelString } from './timeLabelString'

import 'bulma/css/bulma.css'


export const Timer = ({ onComplete }: { onComplete?: () => void }) => {
  return (
    <TimerContainer onComplete={onComplete}>
      <TimerContext.Consumer>
        {(timer: TimerProps) => <TimerElement {...timer} />}
      </TimerContext.Consumer>
    </TimerContainer>
  )
}

export const TimerElement = (props: TimerProps) => {
  const { remaining, running } = props
  const { reset, toggle, incrementTimerValue } = props
  const timerLabel = timeLabelString(remaining)
  return (
    <div className="card">
      <div className="card-content">
        <p className="title is-family-monospace">{timerLabel}</p>
      </div>
      <footer className="card-footer">
        <AddTimeButton label="+1h" value={3600} onClick={incrementTimerValue} />
        <AddTimeButton label="+1m" value={60} onClick={incrementTimerValue} />
        <AddTimeButton label="+1s" value={1} onClick={incrementTimerValue} />
        <ResetButton onClick={reset} remaining={remaining} />
        <StartStopButton running={running} toggle={toggle} remaining={remaining} />
      </footer>
    </div>
  )
}

const AddTimeButton = (props: { label: string, value: number, onClick: (value: number) => void }) => {
  const { label, value, onClick } = props
  const clickHandler = useCallback(() => {
    onClick(value)
  }, [value, onClick])
  return (
    <FooterItemButton label={label} onClick={clickHandler} disabled={false} />
  )
}

const StartStopButton = (props: { running: boolean, toggle: () => void, remaining: number }) => {
  const { running, toggle, remaining } = props
  const disabled = remaining === 0
  const label = running ? 'Stop' : 'Start'
  return (
    <FooterItemButton
      label={label}
      onClick={toggle}
      disabled={disabled}
    />
  )
}

const ResetButton = (props: { onClick: () => void, remaining: number }) => {
  const { onClick, remaining } = props
  const alreadyReset = remaining === 0
  return (
    <FooterItemButton
      label="Reset"
      onClick={onClick}
      disabled={alreadyReset}
    />
  )
}

const FooterItemButton = (props: { label: string, disabled: boolean, onClick: () => void }) => {
  const { label, onClick, disabled } = props
  const clickHandler = useCallback((e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault()
    onClick()
  }, [onClick])
  return (
    <button className="card-footer-item is-clickable is-button" onClick={clickHandler} type="button" disabled={disabled}>
      {label}
    </button>
  )
}
