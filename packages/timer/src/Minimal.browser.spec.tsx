import { expect, test, vi } from 'vitest'
import { render } from 'vitest-browser-react'

import { BrowserFixture } from '../../../vitest.browser.fixture'
import { MinimalTimer } from './minimal'

test('renders a stable minimal timer screenshot', async () => {
  const screen = await render(
    <BrowserFixture
      label="minimal timer fixture"
      style={{
        alignItems: 'center',
      }}
    >
      <MinimalTimer
        incrementTimerValue={vi.fn()}
        remaining={1234}
        reset={vi.fn()}
        running={false}
        setTimerValue={vi.fn()}
        start={vi.fn()}
        stop={vi.fn()}
        toggle={vi.fn()}
      />
    </BrowserFixture>,
  )

  await expect.element(screen.getByRole('button', { name: 'Start' })).toBeVisible()
  await expect(screen.getByTestId('minimal timer fixture')).toMatchScreenshot('minimal-timer-default.png')
})
