import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'

import { AutoMeasure } from '../../measure/src'
import { Treemap } from './treemap'

const weightedItems = [...Array(10)]
  .map((_, index) => index + 1)
  .map((index) => ({
    weight: 1.1 ** index,
    element: (
      <div
        data-treemap-cell={index}
        style={{
          height: '100%',
          position: 'relative',
          width: '100%',
        }}
      >
        <AutoMeasure />
      </div>
    ),
  }))
weightedItems.sort((left, right) => right.weight - left.weight)

test('renders a stable treemap screenshot', async () => {
  const screen = await render(
    <div
      data-testid="treemap fixture"
      style={{
        background: '#ffffff',
        height: '360px',
        overflow: 'hidden',
        position: 'relative',
        width: '640px',
      }}
    >
      <Treemap
        aspectRatio={16 / 9}
        boustrophedon={false}
        verticalFirst
        weightedItems={weightedItems}
      />
    </div>,
  )

  await expect.poll(() => document.querySelectorAll('[data-treemap-cell]').length).toBe(10)
  await expect(screen.getByTestId('treemap fixture')).toMatchScreenshot('treemap-default.png')
})
