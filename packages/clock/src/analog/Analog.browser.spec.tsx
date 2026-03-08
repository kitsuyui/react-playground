import type React from 'react'
import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'

import { BrowserFixture } from '../../../../vitest.browser.fixture'
import { AnalogClock } from './index'

const renderClock = async (
  label: string,
  props: React.ComponentProps<typeof AnalogClock>,
) => {
  return render(
    <BrowserFixture label={label}>
      <AnalogClock {...props} />
    </BrowserFixture>,
  )
}

test('renders a stable default analog clock screenshot', async () => {
  const screen = await renderClock('analog clock default fixture', {
    date: new Date('2023-01-01T10:08:42.000Z'),
    timezone: 'UTC',
    face: 'arabic',
    step: 'tick',
  })

  await expect.element(screen.getByTestId('analog clock default fixture')).toBeVisible()
  await expect(screen.getByTestId('analog clock default fixture')).toMatchScreenshot('analog-clock-default.png')
})

test('renders a stable roman analog clock screenshot', async () => {
  const screen = await renderClock('analog clock roman fixture', {
    date: new Date('2023-01-01T10:08:42.000Z'),
    timezone: 'UTC',
    face: 'roman',
    step: 'tick',
  })

  await expect.element(screen.getByTestId('analog clock roman fixture')).toBeVisible()
  await expect(screen.getByTestId('analog clock roman fixture')).toMatchScreenshot('analog-clock-roman.png')
})

test('renders a stable sweep analog clock screenshot', async () => {
  const screen = await renderClock('analog clock sweep fixture', {
    date: new Date('2023-01-01T10:08:42.000Z'),
    timezone: 'UTC',
    face: 'arabic',
    step: 'sweep',
  })

  await expect.element(screen.getByTestId('analog clock sweep fixture')).toBeVisible()
  await expect(screen.getByTestId('analog clock sweep fixture')).toMatchScreenshot('analog-clock-sweep.png')
})

test('renders a stable Tokyo analog clock screenshot', async () => {
  const screen = await renderClock('analog clock tokyo fixture', {
    date: new Date('2023-01-01T10:08:42.000Z'),
    timezone: 'Asia/Tokyo',
    face: 'arabic',
    step: 'tick',
  })

  await expect.element(screen.getByTestId('analog clock tokyo fixture')).toBeVisible()
  await expect(screen.getByTestId('analog clock tokyo fixture')).toMatchScreenshot('analog-clock-tokyo.png')
})
