import { expect, test, describe } from 'vitest'

import { render } from '@testing-library/react'

import { Clock } from './clock'
import { Stopwatch } from './stopwatch'
import { Timer } from './timer'

describe('Clock', () => {
  test('render Clock', () => {
    render(<Clock />)
  })
})

describe('Stopwatch', () => {
  test('render Stopwatch', () => {
    const { asFragment } = render(<Stopwatch />)
    expect(asFragment()).toMatchSnapshot()
  })
})

describe('Timer', () => {
  test('render Timer', () => {
    const { asFragment } = render(<Timer />)
    expect(asFragment()).toMatchSnapshot()
  })
})
