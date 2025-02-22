import { expect, test } from 'vitest'

import { render } from '@testing-library/react'
import React from 'react'

import { WaveBox } from './wavebox'

test('render WaveBox', () => {
  const element = render(
    <WaveBox
      minHeight={100}
      minWidth={100}
      maxWidth={200}
      maxHeight={200}
      heightCycle={100}
      widthCycle={100}
    >
      {'Something'}
    </WaveBox>
  )
  expect(element).toMatchSnapshot()
})
