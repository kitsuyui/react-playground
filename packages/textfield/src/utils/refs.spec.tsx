import React from 'react'
import { describe, expect, it, vi } from 'vitest'
import { render } from '@testing-library/react'

import { useCombinedRefs } from './refs'

describe('useCombinedRefs', () => {
  it('assigns nodes to function and object refs', () => {
    const functionRef = vi.fn()
    const objectRef = React.createRef<HTMLInputElement>()

    const Example = () => {
      const combinedRef = useCombinedRefs<HTMLInputElement>(functionRef, objectRef)
      return <input ref={combinedRef} />
    }

    const { container } = render(<Example />)
    const input = container.querySelector('input')

    expect(functionRef).toHaveBeenCalledWith(input)
    expect(objectRef.current).toBe(input)
  })

  it('throws when a readonly ref cannot be assigned', () => {
    const readonlyRef = {}
    Object.defineProperty(readonlyRef, 'current', {
      configurable: true,
      get: () => null,
      set: () => {
        throw new TypeError('readonly')
      },
    })
    let combinedRef: ReturnType<typeof useCombinedRefs<HTMLInputElement>>

    const Example = () => {
      combinedRef = useCombinedRefs(
        readonlyRef as React.ForwardedRef<HTMLInputElement>
      )
      return null
    }

    render(<Example />)

    expect(() => combinedRef(document.createElement('input'))).toThrow(
      /Cannot assign value/
    )
  })
})
