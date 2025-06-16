import { describe, expect, it } from 'vitest'

import { render, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SizedTreemap } from './treemap'

describe('SizedTreemap', () => {
  it('renders without crashing', async () => {
    const { asFragment } = render(
      <SizedTreemap weightedItems={
        [
          { weight: 4, element: <div>Test1</div> },
          { weight: 3, element: <div>Test2</div> },
          { weight: 2, element: <div>Test3</div> },
          { weight: 1, element: <div>Test4</div> },
        ]
      } verticalFirst={true} aspectRatio={1.0} boustrophedon={false} width={100} height={100} />
    )
    await userEvent.click(document.body) // Trigger any potential effects
    fireEvent.resize(window) // Simulate a resize event
    await new Promise((resolve) => setTimeout(resolve, 100)) // Wait for effects to settle
    expect(asFragment()).toMatchSnapshot()
  })
})
