import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'

import { BrowserFixture } from '../../../vitest.browser.fixture'
import { SimpleBitString } from './Simple'

test('renders a stable eight-bit string screenshot', async () => {
  const screen = await render(
    <BrowserFixture
      label="binary fixture"
      style={{
        fontSize: '32px',
        letterSpacing: '0.2em',
      }}
    >
      <SimpleBitString value={170} />
    </BrowserFixture>,
  )

  await expect.element(screen.getByTestId('binary fixture')).toBeVisible()
  await expect(screen.getByTestId('binary fixture')).toMatchScreenshot('simple-8bit.png')
})
