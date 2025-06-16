import { expect, test, describe, } from 'vitest'

import { render } from '@testing-library/react'

import { UUIDIcon } from './UUIDIcon'


describe('UUIDIcon', () => {
  test('renders with valid UUID', () => {
    const uuid = '123e4567-e89b-12d3-a456-426614174000'
    const { asFragment } = render(<UUIDIcon uuid={uuid} />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders error message with invalid UUID', () => {
    const uuid = 'invalid-uuid'
    const { asFragment } = render(<UUIDIcon uuid={uuid} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
