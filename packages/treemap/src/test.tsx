import { render } from '@testing-library/react'
import React from 'react'

import { Treemap } from './treemap'

test('render Treemap', () => {
  const weightedItems = [
    {
      weight: 1,
      element: <div />,
    },
    {
      weight: 2,
      element: <div />,
    },
  ]
  const { container } = render(
    <Treemap weightedItems={weightedItems} splitStrategy={'both'} />
  )
  expect(container).toMatchSnapshot()
})
