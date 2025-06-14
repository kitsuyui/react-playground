import { describe, expect, it } from 'vitest'

import { render } from '@testing-library/react'

import * as module from './index'
import { Hello } from './Hello'

describe('exports', () => {
  it('should export Hello component', () => {
    expect(module.Hello).toBeDefined()
    expect(module.Hello).toBeTypeOf('function')
  })
})

describe('Hello component', () => {
  it('should render properly', () => {
    const { asFragment } = render(<Hello />)
    expect(asFragment()).toMatchSnapshot()
    expect(asFragment().querySelector('span')).toBeDefined()
    expect(asFragment().querySelector('span')?.textContent).toBe('Hello, world!')
  })
})
