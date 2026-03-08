import type React from 'react'
import { useContext, useState } from 'react'
import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'

import { BrowserFixture } from '../../../vitest.browser.fixture'
import { TabButtonContext, TabUIBase, type TabItem } from './base'

const TabBar = (props: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '8px',
      }}
    >
      {props.children}
    </div>
  )
}

const TabButton = () => {
  const { id, onSelect, selected, title } = useContext(TabButtonContext)
  return (
    <button
      onClick={() => {
        onSelect(id)
      }}
      style={{
        background: selected ? '#111111' : '#f1f1f1',
        border: '1px solid #111111',
        color: selected ? '#ffffff' : '#111111',
        padding: '8px 12px',
      }}
      type="button"
    >
      {title}
    </button>
  )
}

const ContentBox = (props: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        border: '1px solid #111111',
        minHeight: '72px',
        minWidth: '240px',
        padding: '16px',
      }}
    >
      {props.children}
    </div>
  )
}

const TabExample = () => {
  const [selectedTabId, setSelectedTabId] = useState('summary')
  const items: TabItem[] = [
    {
      id: 'summary',
      title: 'Summary',
      content: <div>Overview panel</div>,
    },
    {
      id: 'details',
      title: 'Details',
      content: <div>Detailed panel</div>,
    },
  ]
  return (
    <BrowserFixture label="tab fixture">
      <TabUIBase
        ContentBox={ContentBox}
        TabBar={TabBar}
        TabButton={TabButton}
        items={items}
        onSelect={setSelectedTabId}
        selectedTabId={selectedTabId}
      />
    </BrowserFixture>
  )
}

test('renders a stable tab screenshot after selecting the second tab', async () => {
  const screen = await render(<TabExample />)

  await screen.getByRole('button', { name: 'Details' }).click()

  await expect.element(screen.getByText('Detailed panel')).toBeVisible()
  await expect(screen.getByLabelText('tab fixture')).toMatchScreenshot('tab-details.png')
})
