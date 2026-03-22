import { describe, expect, it } from 'vitest'

import { render } from '@testing-library/react'

import * as module from './index'
import { DefaultMetronome } from './default'

describe('exports', () => {
  it('should export metronome components', () => {
    expect(module.MetronomeContextProvider).toBeTypeOf('function')
    expect(module.DefaultMetronome).toBeTypeOf('function')
  })
})

describe('DefaultMetronome', () => {
  it('renders properly', () => {
    const { asFragment } = render(
      <DefaultMetronome
        beat={0}
        incrementTempo={() => {}}
        lastBeatAtMs={null}
        reset={() => {}}
        running={false}
        setTempo={() => {}}
        start={() => {}}
        stop={() => {}}
        tempo={120}
        toggle={() => {}}
      />
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
