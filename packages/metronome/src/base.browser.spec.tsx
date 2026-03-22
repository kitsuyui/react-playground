import { expect, test, vi } from 'vitest'
import { render } from 'vitest-browser-react'

import { BrowserFixture } from '../../../vitest.browser.fixture'
import { DefaultMetronome } from './default'

test('renders a stable metronome screenshot', async () => {
  const screen = await render(
    <BrowserFixture label="metronome fixture">
      <DefaultMetronome
        beat={4}
        incrementTempo={vi.fn()}
        lastBeatAtMs={null}
        reset={vi.fn()}
        running={false}
        setTempo={vi.fn()}
        start={vi.fn()}
        stop={vi.fn()}
        tempo={120}
        toggle={vi.fn()}
      />
    </BrowserFixture>,
  )

  await expect.element(screen.getByText('120 BPM / Beat 4')).toBeVisible()
  await expect(screen.getByTestId('metronome fixture')).toMatchScreenshot('default-metronome.png')
})
