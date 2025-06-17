import { describe, expect, it } from 'vitest'

import * as module from '.'

describe('module', () => {
  it('exports', () => {
    expect(module).toHaveProperty('MinimalStopwatch')
    expect(module).toHaveProperty('StopwatchContext')
    expect(module).toHaveProperty('StopwatchContextProvider')
  })
})
