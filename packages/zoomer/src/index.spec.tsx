import { describe, expect, it } from 'vitest'

import { render } from '@testing-library/react'

import { AutoZoomer, SizedZoomer } from './zoomer'

describe('AutoZoomer', () => {
  it('renders without crashing', () => {
    const {container} = render(<AutoZoomer>Test</AutoZoomer>)
    expect(container.firstElementChild).not.toBeNull()
    expect(container.textContent).toContain('Test')
  })
})

describe('SizedZoomer', () => {
  it('renders without crashing', () => {
    const {container} = render(
      <SizedZoomer width={100} height={100}>
        Test
      </SizedZoomer>
    )
    expect(container.firstElementChild).not.toBeNull()
    expect(container.textContent).toContain('Test')
  })
})
