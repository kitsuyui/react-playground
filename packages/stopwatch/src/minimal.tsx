import type React from 'react'

import { toText } from "@kitsuyui/number-time/toText"
import type { StopwatchContextValue } from './context'

/**
 * This is a minimal stopwatch component that displays the elapsed time.
 * It provides buttons to start, stop, and reset the stopwatch.
 * This is not intended to be used in production.
 * @param props
 * @returns React.JSX.Element
 */
export const MinimalStopwatch: React.FC<StopwatchContextValue> = (
  props
): React.JSX.Element => {
  const { elapsedTime, running, toggle, reset } = props
  return (
    <>
      <span style={{
        width: '6em',
        fontFamily: 'monospace',
      }}>{toText(elapsedTime)}</span>
      <button
        type="button"
        onClick={() => {
          reset()
        }}
      >
        Reset
      </button>
      <button
        type="button"
        onClick={() => {
          toggle()
        }}
      >
        {running ? 'Stop' : 'Start'}
      </button>
    </>
  )
}
