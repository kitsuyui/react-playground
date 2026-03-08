import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'

import { BrowserFixture } from '../../../../vitest.browser.fixture'
import { DigitalClock } from './index'

test('renders a stable UTC digital clock screenshot', async () => {
  const screen = await render(
    <BrowserFixture
      label="digital clock default fixture"
      style={{
        fontSize: '28px',
      }}
    >
      <DigitalClock
        date={new Date('2023-01-01T10:08:42.000Z')}
        timezone="UTC"
      />
    </BrowserFixture>,
  )

  await expect.element(screen.getByText('10:08:42 AM (UTC)')).toBeVisible()
  await expect(screen.getByTestId('digital clock default fixture')).toMatchScreenshot('digital-clock-default.png')
})

test('renders a stable Tokyo digital clock screenshot', async () => {
  const screen = await render(
    <BrowserFixture
      label="digital clock tokyo fixture"
      style={{
        fontSize: '28px',
      }}
    >
      <DigitalClock
        date={new Date('2024-01-02T06:04:05.000Z')}
        timezone="Asia/Tokyo"
      />
    </BrowserFixture>,
  )

  await expect.element(screen.getByText('03:04:05 PM (Asia/Tokyo)')).toBeVisible()
  await expect(screen.getByTestId('digital clock tokyo fixture')).toMatchScreenshot('digital-clock-tokyo.png')
})
