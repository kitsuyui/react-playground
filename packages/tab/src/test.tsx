import { render } from '@testing-library/react'
import React, { useContext } from 'react'

import { TabUIBase, TabButtonContext } from './index'

describe('TabUIBase', () => {
  const items = [
    { id: 't1', title: 'Tab 1', content: 'Content 1' },
    { id: 't2', title: 'Tab 2', content: 'Content 2' },
  ]
  const selectedTabId = 't1'
  const onSelect = jest.fn()
  const TabBar = ({ children }: { children: React.ReactNode }) => (
    <div data-testid="tab-bar">{children}</div>
  )
  const TabButton = () => {
    const { id, title, selected, onSelect } = useContext(TabButtonContext)
    return (
      <button
        type="button"
        data-testid="tab-button"
        onClick={() => onSelect(id)}
        style={{ fontWeight: selected ? 'bold' : 'normal' }}
      >
        {title}
      </button>
    )
  }
  const ContentBox = ({ children }: { children: React.ReactNode }) => (
    <div data-testid="content-box">{children}</div>
  )

  test('tab 1 is selected', () => {
    const { getByTestId: getByTestId1 } = render(
      <TabUIBase
        items={items}
        selectedTabId={'t1'}
        onSelect={onSelect}
        TabBar={TabBar}
        TabButton={TabButton}
        ContentBox={ContentBox}
      />,
    )

    expect(getByTestId1('tab-bar')).toMatchSnapshot('tab-bar-t1')
    expect(getByTestId1('content-box')).toMatchSnapshot('content-box-t1')
  })

  test('tab 2 is selected', () => {
    const { getByTestId: getByTestId2 } = render(
      <TabUIBase
        items={items}
        selectedTabId={'t2'}
        onSelect={onSelect}
        TabBar={TabBar}
        TabButton={TabButton}
        ContentBox={ContentBox}
      />,
    )
    expect(getByTestId2('tab-bar')).toMatchSnapshot('tab-bar-t2')
    expect(getByTestId2('content-box')).toMatchSnapshot('content-box-t2')
  })
})
