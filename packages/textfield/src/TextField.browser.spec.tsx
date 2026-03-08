import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'

import { BrowserFixture } from '../../../vitest.browser.fixture'
import { TextField } from './TextField'

test('renders a stable text field screenshot', async () => {
  const screen = await render(
    <BrowserFixture label="text field fixture">
      <TextField
        aria-label="Greeting"
        style={{
          border: '1px solid #111111',
          fontFamily: 'monospace',
          fontSize: '24px',
          padding: '12px 16px',
          width: '280px',
        }}
        value="hello browser mode"
      />
    </BrowserFixture>,
  )

  await expect.element(screen.getByRole('textbox', { name: 'Greeting' })).toBeVisible()
  await expect(screen.getByRole('textbox', { name: 'Greeting' })).toMatchScreenshot('text-field.png')
})
