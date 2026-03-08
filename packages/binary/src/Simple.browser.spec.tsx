import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'

import { BrowserFixture } from '../../../vitest.browser.fixture'
import { Simple8BitString } from './Simple'

test('renders a stable eight-bit string screenshot', async () => {
  const screen = await render(
    <BrowserFixture
      label="binary fixture"
      style={{
        fontSize: '32px',
        letterSpacing: '0.2em',
      }}
    >
      <Simple8BitString value={170} />
    </BrowserFixture>,
  )

  await expect.element(screen.getByLabelText('binary fixture')).toBeVisible()
  await expect(screen.getByLabelText('binary fixture')).toMatchScreenshot('simple-8bit.png')
})
