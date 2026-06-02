import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import { BitIcon } from './BitIcon'
import { COLORS } from './colors'

const firstFourColorsBits = BigInt('0xe4')
const outOfRange128BitValue = BigInt('0x100000000000000000000000000000000')

describe('BitIcon', () => {
  test('renders a valid 128-bit value as an accessible SVG', () => {
    const { container } = render(<BitIcon bits={firstFourColorsBits} />)
    const svg = container.querySelector('svg')
    const rects = container.querySelectorAll('rect')

    expect(svg?.getAttribute('role')).toBe('img')
    expect(svg?.getAttribute('aria-label')).toMatch(/^BitIcon: 0123/)
    expect(rects).toHaveLength(64)

    for (const [index, color] of COLORS.entries()) {
      expect(rects[index]?.getAttribute('fill')).toBe(color)
    }
  })

  test('passes svg props through to the rendered icon', () => {
    const { container } = render(
      <BitIcon
        bits={firstFourColorsBits}
        width="1em"
        height="1em"
        className="icon"
      />
    )
    const svg = container.querySelector('svg')

    expect(svg?.getAttribute('width')).toBe('1em')
    expect(svg?.getAttribute('height')).toBe('1em')
    expect(svg?.getAttribute('class')).toBe('icon')
  })

  test('renders error message with invalid bits', () => {
    const { container } = render(<BitIcon bits={outOfRange128BitValue} />)

    expect(container.querySelector('svg')).toBeNull()
    expect(container.textContent).toBe('Invalid 128bit value')
  })
})
