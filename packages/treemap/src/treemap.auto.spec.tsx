import { describe, expect, it, vi } from 'vitest'

import { render } from '@testing-library/react'
import { AutoTreemap } from './treemap'

const { useMeasureMock } = vi.hoisted(() => ({
  useMeasureMock: vi.fn(),
}))

vi.mock('react-use', async () => {
  const actual = await vi.importActual<typeof import('react-use')>('react-use')
  return {
    ...actual,
    useMeasure: useMeasureMock,
  }
})

describe('AutoTreemap', () => {
  it('renders nothing before the parent has been measured', () => {
    useMeasureMock.mockReturnValue([vi.fn(), { width: 0, height: 0 }])

    const { queryByText } = render(
      <AutoTreemap
        weightedItems={[{ weight: 1, element: <div>Test</div> }]}
      />
    )

    expect(queryByText('Test')).toBeNull()
  })

  it('renders the measured layout once the parent has a size', () => {
    useMeasureMock.mockReturnValue([vi.fn(), { width: 200, height: 100 }])

    const { getByText } = render(
      <AutoTreemap
        weightedItems={[{ weight: 1, element: <div>Test</div> }]}
      />
    )

    expect(getByText('Test')).toBeTruthy()
  })
})
