import React from 'react'
import { useInterval } from 'react-use'

import { calcRemainingUntil } from './time'

export interface AlarmValue {
  armed: boolean
  ringing: boolean
  remaining: number
  targetTimeMs: number | null
  notificationEnabled: boolean
  notificationSupported: boolean
  notificationPermission: NotificationPermission | 'unsupported'
}

export interface AlarmActions {
  arm(): void
  disarm(): void
  toggle(): void
  reset(): void
  stopRinging(): void
  scheduleAfter(seconds: number): void
  setTargetTimeMs(value: number): void
  setNotificationEnabled(value: boolean): void
  toggleNotification(): void
}

export type AlarmContextValue = AlarmValue & AlarmActions

export const AlarmContext = React.createContext<AlarmContextValue>({
  armed: false,
  ringing: false,
  remaining: 0,
  targetTimeMs: null,
  notificationEnabled: false,
  notificationSupported: false,
  notificationPermission: 'unsupported',
  arm: () => { /* do nothing */ },
  disarm: () => { /* do nothing */ },
  toggle: () => { /* do nothing */ },
  reset: () => { /* do nothing */ },
  stopRinging: () => { /* do nothing */ },
  scheduleAfter: (_seconds: number) => { /* do nothing */ },
  setTargetTimeMs: (_value: number) => { /* do nothing */ },
  setNotificationEnabled: (_value: boolean) => { /* do nothing */ },
  toggleNotification: () => { /* do nothing */ },
})

export interface AlarmContextProviderProps {
  refreshInterval?: number
  children: React.ReactNode
  defaultNotificationEnabled?: boolean
  onArm?(event: CustomEvent): void
  onDisarm?(event: CustomEvent): void
  onRing?(event: CustomEvent): void
  onReset?(event: CustomEvent): void
}

export const AlarmContextProvider: React.FC<AlarmContextProviderProps> = (
  props
): React.JSX.Element => {
  const { children } = props
  const emptyFn = (_event: CustomEvent) => { /* do nothing */ }
  const onArm = props.onArm ?? emptyFn
  const onDisarm = props.onDisarm ?? emptyFn
  const onRing = props.onRing ?? emptyFn
  const onReset = props.onReset ?? emptyFn
  const [armed, setArmed] = React.useState(false)
  const [ringing, setRinging] = React.useState(false)
  const [remaining, setRemaining] = React.useState(0)
  const [targetTimeMs, setTargetTimeMsState] = React.useState<number | null>(null)
  const [notificationEnabled, setNotificationEnabled] = React.useState(
    props.defaultNotificationEnabled ?? false
  )
  const armedRef = React.useRef(armed)
  const targetTimeMsRef = React.useRef<number | null>(targetTimeMs)
  const refreshInterval = props.refreshInterval ?? 100
  const notificationSupported = typeof Notification !== 'undefined'
  const notificationPermission = notificationSupported ? Notification.permission : 'unsupported'

  const getCurrentRemaining = (nowMs = Date.now()) => {
    if (targetTimeMsRef.current === null) {
      return 0
    }
    return calcRemainingUntil(targetTimeMsRef.current, nowMs)
  }

  const notifyRing = () => {
    if (notificationEnabled && notificationSupported && Notification.permission === 'granted') {
      new Notification('Alarm', {
        body: 'The scheduled alarm time has been reached.',
      })
    }
    onRing(new CustomEvent('ring', {}))
  }

  const tick = () => {
    if (!armedRef.current || targetTimeMsRef.current === null) {
      return
    }
    const nextRemaining = getCurrentRemaining()
    setRemaining(nextRemaining)
    if (nextRemaining <= 0) {
      setRemaining(0)
      armedRef.current = false
      setArmed(false)
      setRinging(true)
      notifyRing()
    }
  }

  useInterval(() => {
    tick()
  }, armed ? refreshInterval : null)

  const arm = () => {
    if (targetTimeMsRef.current === null) {
      return
    }
    setRemaining(getCurrentRemaining())
    setRinging(false)
    armedRef.current = true
    setArmed(true)
    onArm(new CustomEvent('arm', {}))
  }

  const disarm = () => {
    if (!armedRef.current) {
      return
    }
    setRemaining(getCurrentRemaining())
    armedRef.current = false
    setArmed(false)
    onDisarm(new CustomEvent('disarm', {}))
  }

  const toggle = () => {
    if (armed) {
      disarm()
    } else {
      arm()
    }
  }

  const reset = () => {
    armedRef.current = false
    targetTimeMsRef.current = null
    setArmed(false)
    setRinging(false)
    setRemaining(0)
    setTargetTimeMsState(null)
    onReset(new CustomEvent('reset', {}))
  }

  const stopRinging = () => {
    setRinging(false)
  }

  const scheduleAfter = (seconds: number) => {
    const nextTargetTimeMs = Date.now() + Math.max(0, seconds) * 1000
    targetTimeMsRef.current = nextTargetTimeMs
    armedRef.current = true
    setTargetTimeMsState(nextTargetTimeMs)
    setRemaining(Math.max(0, seconds))
    setRinging(false)
    setArmed(true)
    onArm(new CustomEvent('arm', {}))
  }

  const setTargetTimeMs = (value: number) => {
    targetTimeMsRef.current = value
    setTargetTimeMsState(value)
    setRemaining(calcRemainingUntil(value))
    setRinging(false)
  }

  return (
    <AlarmContext.Provider
      value={{
        armed,
        ringing,
        remaining,
        targetTimeMs,
        notificationEnabled,
        notificationSupported,
        notificationPermission,
        arm,
        disarm,
        toggle,
        reset,
        stopRinging,
        scheduleAfter,
        setTargetTimeMs,
        setNotificationEnabled(value: boolean) {
          setNotificationEnabled(value)
        },
        toggleNotification() {
          setNotificationEnabled((current) => !current)
        },
      }}
    >
      {children}
    </AlarmContext.Provider>
  )
}
