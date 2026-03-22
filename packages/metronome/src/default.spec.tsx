import { beforeEach, describe, expect, it, vi } from 'vitest'

import { cleanup, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { DefaultMetronome } from './default'

beforeEach(() => {
  cleanup()
})

describe('DefaultMetronome', () => {
  it('renders correctly', () => {
    const { asFragment } = render(
      <DefaultMetronome
        beat={0}
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
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('adjusts tempo and toggles playback', async () => {
    const incrementTempo = vi.fn()
    const toggle = vi.fn()
    const { getByText } = render(
      <DefaultMetronome
        beat={0}
        incrementTempo={incrementTempo}
        lastBeatAtMs={null}
        reset={vi.fn()}
        running={false}
        setTempo={vi.fn()}
        start={vi.fn()}
        stop={vi.fn()}
        tempo={120}
        toggle={toggle}
      />
    )

    await userEvent.click(getByText('-5 BPM'))
    await userEvent.click(getByText('+5 BPM'))
    await userEvent.click(getByText('Start'))

    expect(incrementTempo).toHaveBeenNthCalledWith(1, -5)
    expect(incrementTempo).toHaveBeenNthCalledWith(2, 5)
    expect(toggle).toHaveBeenCalledTimes(1)
  })
})
