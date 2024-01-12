import React from 'react'

import { zeroPad2, zeroPad3 } from './utils'

import type { TimerProps } from './types'
export type * from './types'
export * from './container'

export const toLabel = (value: number) => {
  const minutes = Math.floor(value / 60)
  const seconds = (value % 60) | 0
  const milliseconds = ((value % 1) * 1000) | 0
  return `${zeroPad2(minutes)}:${zeroPad2(seconds)}.${zeroPad3(milliseconds)}`
}

export const MinimalTimer: React.FC<TimerProps> = (props): JSX.Element => {
  const { remaining, running, incrementTimerValue, toggle, reset } = props

  return (
    <div
      style={{
        width: '6em',
        fontFamily: 'monospace',
      }}
    >
      <form>
        <span>{toLabel(remaining)}</span>
        <br />
        <button
          type="submit"
          name="incrementMinute"
          onClick={(e) => {
            e.preventDefault()
            incrementTimerValue(60)
          }}
        >
          +分
        </button>
        <button
          type="submit"
          name="incrementSecond"
          onClick={(e) => {
            e.preventDefault()
            incrementTimerValue(1)
          }}
        >
          +秒
        </button>
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
