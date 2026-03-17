import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/react'

import { AutoMeasure } from './measure'
import { MeasureBase, DEFAULT_MEASURE_STYLE } from './base'

test('render AutoMeasure', () => {
  const element = <AutoMeasure />
  render(
    <div
      style={{
        width: '500px',
        height: '400px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {element}
    </div>
  )
  expect(element).toMatchSnapshot()
})

describe('MeasureBase', () => {
  test('renders an SVG with role="img" and aria-label containing dimensions', () => {
    const { container } = render(<MeasureBase width={300} height={200} styles={DEFAULT_MEASURE_STYLE} />)
    const svg = container.querySelector('svg[role="img"]')
    expect(svg).not.toBeNull()
    expect(svg?.getAttribute('aria-label')).toBe('300x200')
  })

  test('renders correctly for standard dimensions', () => {
    const { asFragment } = render(
      <MeasureBase width={320} height={180} styles={DEFAULT_MEASURE_STYLE} />
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders without crashing for edge dimensions (0x0)', () => {
    const { container } = render(
      <MeasureBase width={0} height={0} styles={DEFAULT_MEASURE_STYLE} />
    )
    expect(container.querySelector('svg')).not.toBeNull()
  })
})
