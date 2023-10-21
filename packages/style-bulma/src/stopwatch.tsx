import {
  StopwatchContainer,
  StopwatchContext,
  utils,
} from '@kitsuyui/react-stopwatch'
import React from 'react'

import 'bulma/css/bulma.css'

interface StopwatchProps {
  running: boolean
  elapsedTime: number
  reset: () => void
  toggle: () => void
}

export const StopwatchElement = (props: StopwatchProps) => {
  const { running, elapsedTime, reset, toggle } = props
  const minutes = Math.floor(elapsedTime / 60)
  const seconds = elapsedTime % 60 | 0
  const milliseconds = ((elapsedTime % 1) * 1000) | 0
  const elapsedTimeStr = `${utils.zeroPad2(minutes)}:${utils.zeroPad2(
    seconds
  )}.${utils.zeroPad3(milliseconds)}`
  return (
    <div className="card">
      <div className="card-content">
        <p className="title is-family-monospace">{elapsedTimeStr}</p>
      </div>
      <footer className="card-footer">
        <span
          className={
            'card-footer-item ' + (running ? 'is-clickable' : 'disable')
          }
          onClick={reset}
        >
          Reset
        </span>
        <span className="card-footer-item is-clickable" onClick={toggle}>
          {running ? 'Stop' : 'Start'}
        </span>
      </footer>
    </div>
  )
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
