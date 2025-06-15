import { expect, it, describe, } from 'vitest'

import * as module from './'

describe('module', () => {
  it('should export TextField', () => {
    expect(module.TextField).toBeDefined()
    expect(module.TextField).toBeInstanceOf(Function)
  })

  it('should export TextArea', () => {
    expect(module.TextArea).toBeDefined()
    expect(module.TextArea).toBeInstanceOf(Function)
  })
})
