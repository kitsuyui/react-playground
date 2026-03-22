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
        {ringing
          ? 'Alarm'
          : targetTimeMs === null
            ? 'No alarm'
            : `${toText(remaining)} -> ${formatAlarmTarget(targetTimeMs)}`}
      </span>
      <button
        type="button"
        onClick={() => {
          scheduleAfter(60)
        }}
      >
        +1 min
      </button>
      <button
        type="button"
        onClick={() => {
          scheduleAfter(5 * 60)
        }}
      >
        +5 min
      </button>
      <button
        type="button"
        disabled={!notificationSupported}
        onClick={() => {
          toggleNotification()
        }}
      >
        {notificationEnabled ? 'Notification On' : 'Notification Off'}
      </button>
      <button
        type="button"
        onClick={() => {
          reset()
        }}
      >
        Clear
      </button>
      {ringing
        ? (
            <button
              type="button"
              onClick={() => {
                stopRinging()
              }}
            >
              Stop Alarm
            </button>
          )
        : (
            <button
              type="button"
              disabled={targetTimeMs === null}
              onClick={() => {
                toggle()
              }}
            >
              {armed ? 'Disarm' : 'Arm'}
            </button>
          )}
    </>
  )
}
