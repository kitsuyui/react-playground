import { describe, expect, it } from 'vitest'

import { SizedBox } from './SizedBox'
import { render } from '@testing-library/react'

describe('SizedBox', () => {
  it('renders with specified width and height', () => {
    const { asFragment } = render(
      <SizedBox width={100} height={200}>
        <div>Test Content</div>
      </SizedBox>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
