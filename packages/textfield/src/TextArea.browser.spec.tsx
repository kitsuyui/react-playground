import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'

import { BrowserFixture } from '../../../vitest.browser.fixture'
import { TextArea } from './TextArea'

test('renders a stable text area screenshot', async () => {
  const screen = await render(
    <BrowserFixture label="text area fixture">
      <TextArea
        aria-label="Notes"
        rows={4}
        style={{
          border: '1px solid #111111',
          fontFamily: 'monospace',
          fontSize: '20px',
          lineHeight: '1.5',
          padding: '12px 16px',
          width: '320px',
        }}
        value={'line one\nline two\nline three'}
      />
    </BrowserFixture>,
  )

  await expect.element(screen.getByRole('textbox', { name: 'Notes' })).toBeVisible()
  await expect(screen.getByRole('textbox', { name: 'Notes' })).toMatchScreenshot('text-area.png')
})
