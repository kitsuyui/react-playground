import React from 'react'
import { useInterval } from 'react-use'

import { calcRemaining } from './time'

export interface TimerValue {
  remaining: number
  running: boolean
  vibrationEnabled: boolean
  vibrationSupported: boolean
}

export interface TimerActions {
  start(): void
  stop(): void
  toggle(): void
  reset(): void
  incrementTimerValue(value: number): void
  setTimerValue(value: number): void
  setVibrationEnabled(value: boolean): void
  toggleVibration(): void
}

export type TimerContextValue = TimerValue & TimerActions

// TODO: Support leap second: https://github.com/kitsuyui/react-playground/issues/40
export const TimerContext = React.createContext<TimerContextValue>({
  remaining: 0,
  running: false,
  vibrationEnabled: false,
  vibrationSupported: false,
  start: () => { /* do nothing */ },
  stop: () => { /* do nothing */ },
  toggle: () => { /* do nothing */ },
  reset: () => { /* do nothing */ },
  incrementTimerValue: (_value: number) => { /* do nothing */ },
  setTimerValue: (_value: number) => { /* do nothing */ },
  setVibrationEnabled: (_value: boolean) => { /* do nothing */ },
  toggleVibration: () => { /* do nothing */ },
})

export interface TimerContextProviderProps {
  refreshInterval?: number
  children: React.ReactNode
  defaultVibrationEnabled?: boolean
  vibrationPattern?: number | number[]
  onStart?(event: CustomEvent): void
  onStop?(event: CustomEvent): void
  onComplete?(event: CustomEvent): void
  onReset?(event: CustomEvent): void
}

export const TimerContextProvider: React.FC<TimerContextProviderProps> = (
  props
): React.JSX.Element => {
  const { children } = props
  const emptyFn = (_event: CustomEvent) => { /* do nothing */ }
  const onStart = props.onStart ?? emptyFn
  const onStop = props.onStop ?? emptyFn
  const onComplete = props.onComplete ?? emptyFn
  const onReset = props.onReset ?? emptyFn
  const [running, setRunning] = React.useState(false)
  const [remaining, setRemaining] = React.useState(0)
  const [targetTimeMs, setTargetTimeMs] = React.useState<number | null>(null)
  const [vibrationEnabled, setVibrationEnabled] = React.useState(
    props.defaultVibrationEnabled ?? false
  )
  const vibrationPattern = props.vibrationPattern ?? [250, 150, 250]
  const vibrationSupported = typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function'

  const refreshInterval = props.refreshInterval || 10 // default 10ms

  const getCurrentRemaining = (nowMs = Date.now()) => {
    if (!running || targetTimeMs === null) {
      return remaining
    }
    return Math.max(0, calcRemaining(new Date(targetTimeMs), new Date(nowMs)))
  }

  const notifyCompletion = () => {
    if (vibrationEnabled && vibrationSupported) {
      navigator.vibrate(vibrationPattern)
    }
    onComplete(new CustomEvent('complete', {}))
  }

  const tick = () => {
    if (!running || targetTimeMs === null) {
      return
    }
    const nextRemaining = getCurrentRemaining()
    setRemaining(nextRemaining)
    if (nextRemaining <= 0) {
      setRemaining(0)
      setRunning(false)
      setTargetTimeMs(null)
      notifyCompletion()
    }
  }

  useInterval(() => {
    tick()
  }, running ? refreshInterval : null)

  const toggle = () => {
    if (running) {
      stop()
    } else {
      start()
    }
  }

  const reset = () => {
    setRunning(false)
    setTargetTimeMs(null)
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
    const nowMs = Date.now()
    setTargetTimeMs(nowMs + remaining * 1000)
    setRunning(true)
    onStart(new CustomEvent('start', {}))
  }

  const stop = () => {
    // It can't be stopped if it is not running.
    if (!running) {
      return
    }
    setRemaining(getCurrentRemaining())
    setRunning(false)
    setTargetTimeMs(null)
    onStop(new CustomEvent('stop', {}))
  }

  return (
    <TimerContext.Provider
      value={{
        remaining,
        running,
        vibrationEnabled,
        vibrationSupported,
        toggle,
        reset,
        start,
        stop,
        setTimerValue(value: number) {
          setRunning(false)
          setTargetTimeMs(null)
          setRemaining(Math.max(0, value || 0))
        },
        incrementTimerValue(value: number) {
          const baseRemaining = getCurrentRemaining()
          setRunning(false)
          setTargetTimeMs(null)
          setRemaining(Math.max(0, baseRemaining + value))
        },
        setVibrationEnabled(value: boolean) {
          setVibrationEnabled(value)
        },
        toggleVibration() {
          setVibrationEnabled((current) => !current)
        },
      }}
    >
      {children}
    </TimerContext.Provider>
  )
}
