import React from 'react'
import { TabContext, TabButtonContext } from '../'

import type { Meta, StoryObj } from '@storybook/react-vite'

const TabContextInspector = () => {
  const { selectedTabId } = React.useContext(TabContext)
  return (
    <div style={{ fontFamily: 'monospace', fontSize: 14 }}>
      <div>selectedTabId: {selectedTabId}</div>
    </div>
  )
}

const TabButtonContextInspector = () => {
  const { id, selected, title } = React.useContext(TabButtonContext)
  return (
    <div style={{ fontFamily: 'monospace', fontSize: 14 }}>
      <div>id: {id}</div>
      <div>selected: {String(selected)}</div>
      <div>title: {String(title)}</div>
    </div>
  )
}

const ContextExample = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem' }}>
    <div>
      <div style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>TabContext</div>
      <TabContext.Provider value={{ selectedTabId: 'settings', onSelect: () => {} }}>
        <TabContextInspector />
      </TabContext.Provider>
    </div>
    <div>
      <div style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>TabButtonContext</div>
      <TabButtonContext.Provider
        value={{ id: 'settings', selected: true, title: 'Settings', onSelect: () => {} }}
      >
        <TabButtonContextInspector />
      </TabButtonContext.Provider>
    </div>
  </div>
)

const meta: Meta<typeof ContextExample> = {
  title: 'Interaction Primitives/Tab/Context',
  component: ContextExample,
}

export default meta
type Story = StoryObj<typeof ContextExample>

export const Default: Story = {}
