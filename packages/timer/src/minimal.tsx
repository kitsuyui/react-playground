import type React from 'react'

import { toText } from "@kitsuyui/number-time/toText"

import type { TimerProps } from './types'
export type * from './types'
export * from './container'

export const MinimalTimer: React.FC<TimerProps> = (props): React.JSX.Element => {
  const { remaining, running, incrementTimerValue, toggle, reset } = props

  return (
    <div
      style={{
        width: '6em',
        fontFamily: 'monospace',
      }}
    >
      <form>
        <span>{toText(remaining)}</span>
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
