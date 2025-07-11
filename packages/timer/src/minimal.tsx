import type React from 'react'

import { toText } from "@kitsuyui/number-time/toText"

import type { TimerContextValue } from './context'


export const MinimalTimer: React.FC<TimerContextValue> = (props): React.JSX.Element => {
  const { remaining, running, incrementTimerValue, toggle, reset } = props
  return (
    <>
      <span style={{
        width: '6em',
        fontFamily: 'monospace',
      }}>{toText(remaining)}</span>
      <button
        type="button"
        name="incrementMinute"
        onClick={(_e) => {
          incrementTimerValue(60)
        }}
      >
        +分
      </button>
      <button
        type="button"
        name="incrementSecond"
        onClick={(_e) => {
          incrementTimerValue(1)
        }}
      >
        +秒
      </button>
      <button
        type="submit"
        name="reset"
        onClick={(_e) => {
          reset()
        }}
      >
        Reset
      </button>
      <button
        type="submit"
        onClick={(_e) => {
          toggle()
        }}
      >
        {running ? 'Stop' : 'Start'}
      </button>
    </>
  )
}
