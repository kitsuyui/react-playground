import React from 'react'
import { useState } from 'react'
import { useInterval } from 'react-use'

import type { TimerContainerProps } from './types'
export type * from './types'

// TODO: Support leap second: https://github.com/kitsuyui/react-playground/issues/40
export const TimerContext = React.createContext({
  remaining: 0,
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
  incrementTimerValue(_value: number) {
    /* do nothing */
  },
  setTimerValue(_value: number) {
    /* do nothing */
  },
})

export const calcRemaining = (targetDate: Date) => {
  return (targetDate.getTime() - new Date().getTime()) / 1000
}

export const TimerContainer: React.FC<TimerContainerProps> = (
  props
): React.JSX.Element => {
  const { children } = props
  const emptyFn = (_event: CustomEvent) => {
    /* do nothing */
  }
  const onStart = props.onStart ?? emptyFn
  const onStop = props.onStop ?? emptyFn
  const onComplete = props.onComplete ?? emptyFn
  const onReset = props.onReset ?? emptyFn
  const [running, setRunning] = useState(false)
  const [targetDate, setTargetDate] = useState(new Date())
  const [remaining, setRemaining] = useState(0)

  const refreshInterval = props.refreshInterval || 10 // default 10ms

  useInterval(() => {
    tick()
  }, refreshInterval)

  const tick = () => {
    // It can't be ticked if it is not running.
    if (running) {
      const remaining = calcRemaining(targetDate)
      setRemaining(remaining)
      if (remaining <= 0) {
        setRemaining(0)
        setRunning(false)
        onComplete(new CustomEvent('complete', {}))
      }
    }
  }

  const toggle = () => {
    if (running) {
      stop()
    } else {
      start()
    }
  }

  const reset = () => {
    // First, stop the timer if it is running.
    if (running) {
      stop()
    }
    setRemaining(0)
    onReset(new CustomEvent('reset', {}))
  }

  const start = () => {
    // It can't be started if the remaining time is 0.
    if (remaining <= 0) {
      return
    }
    // It can't be started if it is already running.
    if (running) {
      return
    }
    setTargetDate(new Date(Date.now() + remaining * 1000))
    setRunning(true)
    onStart(new CustomEvent('start', {}))
  }

  const stop = () => {
    // It can't be stopped if it is not running.
    if (!running) {
      return
    }
    setRunning(false)
    onStop(new CustomEvent('stop', {}))
  }

  return (
    <TimerContext.Provider
      value={{
        remaining,
        running,
        toggle,
        reset,
        start,
        stop,
        setTimerValue(value: number) {
          stop()
          setRemaining(value || 0)
        },
        incrementTimerValue(value: number) {
          stop()
          setRemaining(remaining + value)
        },
      }}
    >
      {children}
    </TimerContext.Provider>
  )
}
