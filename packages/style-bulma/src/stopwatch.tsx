import {
  StopwatchContainer,
  StopwatchContext,
} from '@kitsuyui/react-stopwatch'
import React, { useCallback } from 'react'
import { timeLabelString } from './timeLabelString'

import 'bulma/css/bulma.css'

interface StopwatchProps {
  running: boolean
  elapsedTime: number
  reset: () => void
  toggle: () => void
}

export const Stopwatch = () => {
  return (
    <StopwatchContainer>
      <StopwatchContext.Consumer>
        {(stopwatch: StopwatchProps) => <StopwatchElement {...stopwatch} />}
      </StopwatchContext.Consumer>
    </StopwatchContainer>
  )
}

export const StopwatchElement = (props: StopwatchProps) => {
  const { running, elapsedTime, reset, toggle } = props
  const timeLabel = timeLabelString(elapsedTime)
  return (
    <div className="card">
      <div className="card-content">
        <p className="title is-family-monospace">{timeLabel}</p>
      </div>
      <footer className="card-footer">
        <ResetButton onClick={reset} remaining={elapsedTime} />
        <StartStopButton running={running} toggle={toggle} />
      </footer>
    </div>
  )
}

const ResetButton = (props: { onClick: () => void, remaining: number }) => {
  const { onClick, remaining } = props
  const disabled = remaining === 0
  return (
    <FooterItemButton label="Reset" onClick={onClick} disabled={disabled} />
  )
}

const StartStopButton = (props: { running: boolean, toggle: () => void }) => {
  const { running, toggle } = props
  const label = running ? 'Stop' : 'Start'
  return (
    <FooterItemButton label={label} onClick={toggle} disabled={false} />
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
