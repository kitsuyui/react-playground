import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'

import { BrowserFixture } from '../../../../vitest.browser.fixture'
import { DigitalClock } from './index'

test('renders a stable digital clock screenshot', async () => {
  const screen = await render(
    <BrowserFixture
      label="digital clock fixture"
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
  await expect(screen.getByLabelText('digital clock fixture')).toMatchScreenshot('digital-clock.png')
})
