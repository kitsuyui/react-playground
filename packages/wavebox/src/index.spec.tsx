import { expect, describe, it } from 'vitest'

import * as module from './index'

describe('exports', () => {
  it('should export WaveBox', () => {
    expect(module).toHaveProperty('WaveBox')
  })

  it('should export WaveBox primitives', () => {
    expect(module).toHaveProperty('WaveBoxContext')
    expect(module).toHaveProperty('WaveBoxProvider')
    expect(module).toHaveProperty('SizedBox')
  })
})
