import { describe, expect, it } from 'vitest'

import * as module from '.'

describe('module', () => {
  it('exports', () => {
    expect(module).toHaveProperty('DefaultStopwatch')
    expect(module).toHaveProperty('StopwatchContext')
    expect(module).toHaveProperty('StopwatchContextProvider')
  })
})
