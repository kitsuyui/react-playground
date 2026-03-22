import { expect, test, vi } from 'vitest'
import { render } from 'vitest-browser-react'

import { BrowserFixture } from '../../../vitest.browser.fixture'
import { DefaultAlarm } from './default'

test('renders a stable default alarm screenshot', async () => {
  const screen = await render(
    <BrowserFixture label="alarm fixture">
      <DefaultAlarm
        armed={true}
        notificationEnabled={false}
        notificationPermission="unsupported"
        notificationSupported={false}
        remaining={90}
        reset={vi.fn()}
        ringing={false}
        scheduleAfter={vi.fn()}
        setNotificationEnabled={vi.fn()}
        setTargetTimeMs={vi.fn()}
        stopRinging={vi.fn()}
        targetTimeMs={Date.now() + 90_000}
        toggle={vi.fn()}
        toggleNotification={vi.fn()}
        arm={vi.fn()}
        disarm={vi.fn()}
      />
    </BrowserFixture>,
  )

  await expect.element(screen.getByText('Disarm')).toBeVisible()
  await expect(screen.getByTestId('alarm fixture')).toMatchScreenshot('default-alarm.png')
})
