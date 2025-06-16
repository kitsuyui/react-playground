import React from 'react'
import { useInterval } from 'react-use'
import { calcElapsedTime } from './time'

export interface StopwatchValue {
  elapsedTime: number
  running: boolean
}

export interface StopwatchActions {
  start(): void
  stop(): void
  toggle(): void
  reset(): void
}

export type StopwatchContextValue = StopwatchValue & StopwatchActions

// TODO: Support leap second: https://github.com/kitsuyui/react-playground/issues/40
export const StopwatchContext = React.createContext<StopwatchContextValue>({
  elapsedTime: 0,
  running: false,
  start: () => { /* do nothing */ },
  stop: () => { /* do nothing */ },
  toggle: () => { /* do nothing */ },
  reset: () => { /* do nothing */ },
})

export interface StopwatchProviderProps {
  refreshInterval?: number
  children: React.ReactNode
  onStart?(event: CustomEvent): void
  onStop?(event: CustomEvent): void
  onReset?(event: CustomEvent): void
}

export const StopwatchContextProvider: React.FC<StopwatchProviderProps> = (
  props
): React.JSX.Element => {
  const { children } = props
  const emptyFn = (_event: CustomEvent) => { /* do nothing */ }
  const onStart = props.onStart ?? emptyFn
  const onStop = props.onStop ?? emptyFn
  const onReset = props.onReset ?? emptyFn
  const [running, setRunning] = React.useState(false)
  const [elapsedTimeInLap, setElapsedTimeInLap] = React.useState(0)
  const [elapsedTimeTotal, setElapsedTimeTotal] = React.useState(0)
  const [startTime, setStartTime] = React.useState(new Date())

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
