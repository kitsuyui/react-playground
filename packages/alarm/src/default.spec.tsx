import { beforeEach, describe, expect, it, vi } from 'vitest'

import { cleanup, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { DefaultAlarm } from './default'

beforeEach(() => {
  cleanup()
})

describe('DefaultAlarm', () => {
  it('renders correctly', () => {
    const { asFragment } = render(
      <DefaultAlarm
        armed={false}
        notificationEnabled={false}
        notificationPermission="unsupported"
        notificationSupported={false}
        remaining={0}
        reset={vi.fn()}
        ringing={false}
        scheduleAfter={vi.fn()}
        setNotificationEnabled={vi.fn()}
        setTargetTimeMs={vi.fn()}
        stopRinging={vi.fn()}
        targetTimeMs={null}
        toggle={vi.fn()}
        toggleNotification={vi.fn()}
        arm={vi.fn()}
        disarm={vi.fn()}
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('schedules quick presets', async () => {
    const scheduleAfter = vi.fn()
    const { getByText } = render(
      <DefaultAlarm
        armed={false}
        notificationEnabled={false}
        notificationPermission="unsupported"
        notificationSupported={false}
        remaining={0}
        reset={vi.fn()}
        ringing={false}
        scheduleAfter={scheduleAfter}
        setNotificationEnabled={vi.fn()}
        setTargetTimeMs={vi.fn()}
        stopRinging={vi.fn()}
        targetTimeMs={Date.now() + 1000}
        toggle={vi.fn()}
        toggleNotification={vi.fn()}
        arm={vi.fn()}
        disarm={vi.fn()}
      />
    )

    await userEvent.click(getByText('+1 min'))
    await userEvent.click(getByText('+5 min'))

    expect(scheduleAfter).toHaveBeenNthCalledWith(1, 60)
    expect(scheduleAfter).toHaveBeenNthCalledWith(2, 300)
  })

  it('shows a stop button while ringing', async () => {
    const stopRinging = vi.fn()
    const { getByText } = render(
      <DefaultAlarm
        armed={false}
        notificationEnabled={true}
        notificationPermission="granted"
        notificationSupported={true}
        remaining={0}
        reset={vi.fn()}
        ringing={true}
        scheduleAfter={vi.fn()}
        setNotificationEnabled={vi.fn()}
        setTargetTimeMs={vi.fn()}
        stopRinging={stopRinging}
        targetTimeMs={Date.now()}
        toggle={vi.fn()}
        toggleNotification={vi.fn()}
        arm={vi.fn()}
        disarm={vi.fn()}
      />
    )

    await userEvent.click(getByText('Stop Alarm'))
    expect(stopRinging).toHaveBeenCalledTimes(1)
  })
})
