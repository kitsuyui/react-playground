import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'

import { BrowserFixture } from '../../../vitest.browser.fixture'
import { DEFAULT_MEASURE_STYLE, MeasureBase } from './base'

test('renders a stable measure diagram screenshot', async () => {
  const screen = await render(
    <BrowserFixture label="measure fixture">
      <MeasureBase
        height={180}
        styles={DEFAULT_MEASURE_STYLE}
        width={320}
      />
    </BrowserFixture>,
  )

  await expect.element(screen.getByTestId('measure fixture')).toBeVisible()
  await expect(screen.getByTestId('measure fixture')).toMatchScreenshot('measure-base.png')
})
