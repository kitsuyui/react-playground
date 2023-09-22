import React from 'react'

import { zeroPad2, zeroPad3 } from './utils'

import type { StopwatchProps } from './types'
export type * from './types'
export * from './container'

export const toLabel = (value: number) => {
  const minutes = Math.floor(value / 60)
  const seconds = value % 60 | 0
  const milliseconds = ((value % 1) * 1000) | 0
  return `${zeroPad2(minutes)}:${zeroPad2(seconds)}.${zeroPad3(milliseconds)}`
}

export const MinimalStopwatch: React.FC<StopwatchProps> = (
  props
): JSX.Element => {
  const { elapsedTime, running, toggle, reset } = props

  return (
    <div
      style={{
        width: '6em',
        fontFamily: 'monospace',
      }}
    >
      <form>
        <span>{toLabel(elapsedTime)}</span>
        <br />
        <button
          type="submit"
          name="reset"
          onClick={(e) => {
            e.preventDefault()
            reset()
          }}
        >
          Reset
        </button>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault()
            toggle()
          }}
        >
          {running ? 'Stop' : 'Start'}
        </button>
      </form>
    </div>
  )
}
