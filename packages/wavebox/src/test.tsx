import { render, screen } from '@testing-library/react'
import React from 'react'

import { WaveBox } from './wavebox'

test('render Dekamoji', () => {
  render(
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
  const element = screen.getByText(/Something/)
  expect(element).not.toBeNull()
})
