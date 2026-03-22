import { describe, expect, it } from 'vitest'

import { render } from '@testing-library/react'

import * as module from './index'
import { DefaultAlarm } from './default'

describe('exports', () => {
  it('should export alarm components', () => {
    expect(module.AlarmContextProvider).toBeTypeOf('function')
    expect(module.DefaultAlarm).toBeTypeOf('function')
  })
})

describe('DefaultAlarm', () => {
  it('renders properly', () => {
    const { asFragment } = render(
      <DefaultAlarm
        armed={false}
        notificationEnabled={false}
        notificationPermission="unsupported"
        notificationSupported={false}
        remaining={0}
        reset={() => {}}
        ringing={false}
        scheduleAfter={() => {}}
        setNotificationEnabled={() => {}}
        setTargetTimeMs={() => {}}
        stopRinging={() => {}}
        targetTimeMs={null}
        toggle={() => {}}
        toggleNotification={() => {}}
        arm={() => {}}
        disarm={() => {}}
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
