import type React from 'react'

import { toText } from "@kitsuyui/number-time/toText"
import type { StopwatchContextValue } from './context'

/**
 * This is the default stopwatch UI that displays the elapsed time.
 * It provides buttons to start, stop, and reset the stopwatch.
 * @param props
 * @returns React.JSX.Element
 */
export const DefaultStopwatch: React.FC<StopwatchContextValue> = (
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
