import { expect, test } from 'vitest'

import { render, screen } from '@testing-library/react'

import { AutoDekamoji, SizedDekamoji } from './dekamoji'

test('render AutoDekamoji', () => {
  render(
    <div style={{ fontSize: '16px', lineHeight: '16px' }}>
      <AutoDekamoji text="あ" />
    </div>
  )
  const element = screen.getAllByText(/あ/)
  expect(element).toHaveLength(1)
  expect(element).toMatchSnapshot()
})

test('render SizedDekamoji', () => {
  const { container } = render(
    <div style={{ fontSize: '16px', lineHeight: '16px' }}>
      <SizedDekamoji width={200} height={100} text="あ" />
    </div>
  )
  expect(container.textContent).toContain('あ')
  expect(container.firstElementChild).not.toBeNull()
})
