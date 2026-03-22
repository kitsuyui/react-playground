import React from 'react'
import { useInterval } from 'react-use'

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
  const [baseElapsedMs, setBaseElapsedMs] = React.useState(0)
  const [startedAtMs, setStartedAtMs] = React.useState<number | null>(null)
  const [nowMs, setNowMs] = React.useState(Date.now())

  const refreshInterval = props.refreshInterval || 10 // default 10ms

  useInterval(() => {
    setNowMs(Date.now())
  }, running ? refreshInterval : null)

  const start = () => {
    if (running) {
      return
    }
    const currentNowMs = Date.now()
    onStart(new CustomEvent('start', {}))
    setNowMs(currentNowMs)
    setStartedAtMs(currentNowMs)
    setRunning(true)
  }

  const stop = () => {
    if (!running || startedAtMs === null) {
      return
    }
    const currentNowMs = Date.now()
    const nextElapsedMs = baseElapsedMs + (currentNowMs - startedAtMs)
    onStop(new CustomEvent('stop', {}))
    setNowMs(currentNowMs)
    setBaseElapsedMs(nextElapsedMs)
    setStartedAtMs(null)
    setRunning(false)
  }

  const toggle = () => {
    if (running) {
      stop()
    } else {
      start()
    }
  }

  const reset = () => {
    setRunning(false)
    setStartedAtMs(null)
    setBaseElapsedMs(0)
    setNowMs(Date.now())
    onReset(new CustomEvent('reset', {}))
  }

  const elapsedTime =
    running && startedAtMs !== null
      ? (baseElapsedMs + (nowMs - startedAtMs)) / 1000
      : baseElapsedMs / 1000

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
