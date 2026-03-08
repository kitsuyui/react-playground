import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'

import { Hello } from './Hello'

test('renders a stable hello screenshot', async () => {
  const screen = await render(
    <div
      style={{
        background: '#ffffff',
        color: '#111111',
        display: 'inline-block',
        fontFamily: 'monospace',
        fontSize: '32px',
        padding: '24px 32px',
      }}
    >
      <Hello />
    </div>,
  )

  await expect.element(screen.getByText('Hello, world!')).toBeVisible()
  await expect(screen.getByText('Hello, world!')).toMatchScreenshot('hello-text.png')
})
