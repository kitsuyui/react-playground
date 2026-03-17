import { expect, test } from 'vitest'
import { render } from '@testing-library/react'

import { AutoMeasure } from './measure'

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
