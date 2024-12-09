import React from 'react'
import { useState } from 'react'
import { useInterval } from 'react-use'

import type { StopwatchContainerProps } from './types'
export type * from './types'

// TODO: Support leap second: https://github.com/kitsuyui/react-playground/issues/40
export const StopwatchContext = React.createContext({
  elapsedTime: 0,
  running: false,
  start() {
    /* do nothing */
  },
  stop() {
    /* do nothing */
  },
  toggle() {
    /* do nothing */
  },
  reset() {
    /* do nothing */
  },
})

export const calcTimeDiff = (startTime: Date, endTime: Date) => {
  return (endTime.getTime() - startTime.getTime()) / 1000
}

const calcElapsedTime = (startTime: Date) => {
  return calcTimeDiff(startTime, new Date())
}

export const StopwatchContainer: React.FC<StopwatchContainerProps> = (
  props
): React.JSX.Element => {
  const { children } = props
  const emptyFn = (_event: CustomEvent) => {
    /* do nothing */
  }
  const onStart = props.onStart ?? emptyFn
  const onStop = props.onStop ?? emptyFn
  const onReset = props.onReset ?? emptyFn
  const [running, setRunning] = useState(false)
  const [elapsedTimeInLap, setElapsedTimeInLap] = useState(0)
  const [elapsedTimeTotal, setElapsedTimeTotal] = useState(0)
  const [startTime, setStartTime] = useState(new Date())

  const refreshInterval = props.refreshInterval || 10 // default 10ms

  useInterval(() => {
    if (running) {
      updateElapsedTime()
    }
  }, refreshInterval)

  const updateElapsedTime = () => {
    setElapsedTimeInLap(calcElapsedTime(startTime))
  }

  const moveLapToTotal = () => {
    setElapsedTimeTotal(elapsedTimeTotal + elapsedTimeInLap)
    setElapsedTimeInLap(0)
  }

  const start = () => {
    if (running) {
      return
    }
    onStart(new CustomEvent('start', {}))
    setStartTime(new Date())
    setRunning(true)
  }

  const stop = () => {
    if (!running) {
      return
    }
    onStop(new CustomEvent('stop', {}))
    updateElapsedTime()
    setRunning(false)
    moveLapToTotal()
  }

  const toggle = () => {
    if (running) {
      stop()
    } else {
      start()
    }
  }

  const reset = () => {
    if (running) {
      stop()
    }
    onReset(new CustomEvent('reset', {}))
    setElapsedTimeInLap(0)
    setElapsedTimeTotal(0)
  }

  const elapsedTime = elapsedTimeInLap + elapsedTimeTotal

  return (
    <StopwatchContext.Provider
      value={{
        elapsedTime,
        running,
        toggle,
        reset,
        start,
        stop,
      }}
    >
      {children}
    </StopwatchContext.Provider>
  )
}
