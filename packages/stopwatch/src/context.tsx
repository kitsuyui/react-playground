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

type StopwatchEventHandler = (event: CustomEvent) => void

const resolveStopwatchHandlers = (
  props: StopwatchProviderProps,
  emptyFn: StopwatchEventHandler
) => ({
  onStart: props.onStart ?? emptyFn,
  onStop: props.onStop ?? emptyFn,
  onReset: props.onReset ?? emptyFn,
})

const resolveStopwatchRefreshInterval = (refreshInterval?: number) => {
  return refreshInterval || 10
}

const getActiveStopwatchInterval = (
  running: boolean,
  refreshInterval: number
) => {
  return running ? refreshInterval : null
}

const createStopwatchStart = (props: {
  running: boolean
  setNowMs: React.Dispatch<React.SetStateAction<number>>
  setStartedAtMs: React.Dispatch<React.SetStateAction<number | null>>
  setRunning: React.Dispatch<React.SetStateAction<boolean>>
  onStart: StopwatchEventHandler
}) => {
  return () => {
    if (props.running) return
    const currentNowMs = Date.now()
    props.onStart(new CustomEvent('start', {}))
    props.setNowMs(currentNowMs)
    props.setStartedAtMs(currentNowMs)
    props.setRunning(true)
  }
}

const createStopwatchStop = (props: {
  running: boolean
  startedAtMs: number | null
  baseElapsedMs: number
  setNowMs: React.Dispatch<React.SetStateAction<number>>
  setBaseElapsedMs: React.Dispatch<React.SetStateAction<number>>
  setStartedAtMs: React.Dispatch<React.SetStateAction<number | null>>
  setRunning: React.Dispatch<React.SetStateAction<boolean>>
  onStop: StopwatchEventHandler
}) => {
  return () => {
    if (!props.running || props.startedAtMs === null) return
    const currentNowMs = Date.now()
    const nextElapsedMs = props.baseElapsedMs + (currentNowMs - props.startedAtMs)
    props.onStop(new CustomEvent('stop', {}))
    props.setNowMs(currentNowMs)
    props.setBaseElapsedMs(nextElapsedMs)
    props.setStartedAtMs(null)
    props.setRunning(false)
  }
}

const createStopwatchToggle = (
  running: boolean,
  start: () => void,
  stop: () => void
) => {
  return () => {
    if (running) {
      stop()
      return
    }
    start()
  }
}

const createStopwatchReset = (props: {
  setRunning: React.Dispatch<React.SetStateAction<boolean>>
  setStartedAtMs: React.Dispatch<React.SetStateAction<number | null>>
  setBaseElapsedMs: React.Dispatch<React.SetStateAction<number>>
  setNowMs: React.Dispatch<React.SetStateAction<number>>
  onReset: StopwatchEventHandler
}) => {
  return () => {
    props.setRunning(false)
    props.setStartedAtMs(null)
    props.setBaseElapsedMs(0)
    props.setNowMs(Date.now())
    props.onReset(new CustomEvent('reset', {}))
  }
}

const calculateElapsedTimeSeconds = (
  running: boolean,
  startedAtMs: number | null,
  baseElapsedMs: number,
  nowMs: number
) => {
  if (running && startedAtMs !== null) {
    return (baseElapsedMs + (nowMs - startedAtMs)) / 1000
  }
  return baseElapsedMs / 1000
}

export const StopwatchContextProvider: React.FC<StopwatchProviderProps> = (
  props
): React.JSX.Element => {
  const { children } = props
  const emptyFn = (_event: CustomEvent) => { /* do nothing */ }
  const { onStart, onStop, onReset } = resolveStopwatchHandlers(props, emptyFn)
  const [running, setRunning] = React.useState(false)
  const [baseElapsedMs, setBaseElapsedMs] = React.useState(0)
  const [startedAtMs, setStartedAtMs] = React.useState<number | null>(null)
  const [nowMs, setNowMs] = React.useState(Date.now())

  const refreshInterval = resolveStopwatchRefreshInterval(props.refreshInterval)

  useInterval(() => {
    setNowMs(Date.now())
  }, getActiveStopwatchInterval(running, refreshInterval))

  const start = createStopwatchStart({
    running,
    setNowMs,
    setStartedAtMs,
    setRunning,
    onStart,
  })

  const stop = createStopwatchStop({
    running,
    startedAtMs,
    baseElapsedMs,
    setNowMs,
    setBaseElapsedMs,
    setStartedAtMs,
    setRunning,
    onStop,
  })

  const toggle = createStopwatchToggle(running, start, stop)
  const reset = createStopwatchReset({
    setRunning,
    setStartedAtMs,
    setBaseElapsedMs,
    setNowMs,
    onReset,
  })

  const elapsedTime = calculateElapsedTimeSeconds(
    running,
    startedAtMs,
    baseElapsedMs,
    nowMs
  )

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
