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

  const boustrophedonWeightedItems = () => {
    const weightedItems = [...Array(10)]
      .map((_, index) => index + 1)
      .map((index) => ({
        weight: 1.1 ** index,
        element: <div>{`Test${index}`}</div>,
      }))
    weightedItems.sort((left, right) => right.weight - left.weight)
    return weightedItems
  }

  it('renders the boustrophedon, horizontal-first layout without crashing', async () => {
    // Row-major zig-zag: alternating rows reverse the x axis (right, then left).
    const { asFragment } = render(
      <SizedTreemap
        weightedItems={boustrophedonWeightedItems()}
        verticalFirst={false}
        aspectRatio={16 / 9}
        boustrophedon={true}
        width={640}
        height={360}
      />
    )
    await userEvent.click(document.body) // Trigger any potential effects
    fireEvent.resize(window) // Simulate a resize event
    await new Promise((resolve) => setTimeout(resolve, 100)) // Wait for effects to settle
    expect(asFragment()).toMatchSnapshot()
  })

  it('renders the boustrophedon, vertical-first layout without crashing', async () => {
    // Column-major zig-zag: alternating columns reverse the y axis (down, then up).
    const { asFragment } = render(
      <SizedTreemap
        weightedItems={boustrophedonWeightedItems()}
        verticalFirst={true}
        aspectRatio={9 / 16}
        boustrophedon={true}
        width={360}
        height={640}
      />
    )
    await userEvent.click(document.body) // Trigger any potential effects
    fireEvent.resize(window) // Simulate a resize event
    await new Promise((resolve) => setTimeout(resolve, 100)) // Wait for effects to settle
    expect(asFragment()).toMatchSnapshot()
  })
})
