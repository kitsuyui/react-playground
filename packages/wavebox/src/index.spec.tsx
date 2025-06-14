import { expect, describe, it } from 'vitest'

import * as module from './index'

describe('exports', () => {
  it('should export WaveBox', () => {
    expect(module).toHaveProperty('WaveBox')
  })
})
