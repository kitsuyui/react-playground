import { expect, test } from 'vitest'
import { render } from '@testing-library/react'

import { Measure } from './measure'

test('render Measure', () => {
  const element = <Measure />
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
