import type React from 'react'

import { toText } from '@kitsuyui/number-time/toText'

import type { AlarmContextValue } from './context'
import { formatAlarmTarget } from './time'

export const DefaultAlarm: React.FC<AlarmContextValue> = (props): React.JSX.Element => {
  const {
    armed,
    ringing,
    remaining,
    targetTimeMs,
    notificationEnabled,
    notificationSupported,
    toggle,
    reset,
    stopRinging,
    scheduleAfter,
    toggleNotification,
  } = props
  return (
    <>
      <span
        role={ringing ? 'alert' : 'timer'}
        aria-live={ringing ? 'assertive' : 'off'}
        aria-atomic="true"
        style={{
          fontFamily: 'monospace',
          minWidth: '9em',
        }}
      >
        {formatAlarmStatus(ringing, targetTimeMs, remaining)}
      </span>
      <button type="button" onClick={() => scheduleAfter(60)}>
        +1 min
      </button>
      <button type="button" onClick={() => scheduleAfter(5 * 60)}>
        +5 min
      </button>
      <button
        type="button"
        disabled={!notificationSupported}
        onClick={toggleNotification}
      >
        {notificationEnabled ? 'Notification On' : 'Notification Off'}
      </button>
      <button type="button" onClick={reset}>
        Clear
      </button>
      <AlarmActionButton
        ringing={ringing}
        armed={armed}
        targetTimeMs={targetTimeMs}
        stopRinging={stopRinging}
        toggle={toggle}
      />
    </>
  )
}

const formatAlarmStatus = (
  ringing: boolean,
  targetTimeMs: number | null,
  remaining: number
) => {
  if (ringing) return 'Alarm'
  if (targetTimeMs === null) return 'No alarm'
  return `${toText(remaining)} -> ${formatAlarmTarget(targetTimeMs)}`
}

const AlarmActionButton = (props: {
  ringing: boolean
  armed: boolean
  targetTimeMs: number | null
  stopRinging: () => void
  toggle: () => void
}) => {
  const { ringing, armed, targetTimeMs, stopRinging, toggle } = props

  if (ringing) {
    return (
      <button type="button" onClick={stopRinging}>
        Stop Alarm
      </button>
    )
  }

  return (
    <button type="button" disabled={targetTimeMs === null} onClick={toggle}>
      {armed ? 'Disarm' : 'Arm'}
    </button>
  )
}
