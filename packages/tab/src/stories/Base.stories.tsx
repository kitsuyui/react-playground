import React from 'react'
import {
  TabButtonContext,
  TabContext,
  TabUIBase,
  type TabControlProps,
  type TabUIComponents,
} from '../'

import type { Meta, StoryObj } from '@storybook/react-vite'

const items: TabControlProps['items'] = [
  {
    id: 'overview',
    title: 'Overview',
    content: <div>Overview content</div>,
  },
  {
    id: 'settings',
    title: 'Settings',
    content: <div>Settings content</div>,
  },
  {
    id: 'history',
    title: 'History',
    content: <div>History content</div>,
  },
]

const TabBar: TabUIComponents['TabBar'] = ({ children }) => (
  <div
    style={{
      display: 'flex',
      gap: '0.5rem',
      borderBottom: '1px solid #d1d5db',
      paddingBottom: '0.5rem',
    }}
  >
    {children}
  </div>
)

const TabButton: TabUIComponents['TabButton'] = () => {
  const { id, onSelect, selected, title } = React.useContext(TabButtonContext)

  return (
    <button
      type="button"
      onClick={() => onSelect(id)}
      style={{
        border: '1px solid #d1d5db',
        background: selected ? '#111827' : '#ffffff',
        color: selected ? '#ffffff' : '#111827',
        borderRadius: '999px',
        padding: '0.35rem 0.75rem',
        cursor: 'pointer',
      }}
    >
      {title}
    </button>
  )
}

const ContentBox: TabUIComponents['ContentBox'] = ({ children }) => {
  const { selectedTabId } = React.useContext(TabContext)

  return (
    <div
      style={{
        marginTop: '1rem',
        padding: '1rem',
        border: '1px solid #d1d5db',
        borderRadius: '0.75rem',
      }}
      data-selected-tab-id={selectedTabId}
    >
      {children}
    </div>
  )
}

const TabDemo = ({ contentMode = 'active-only' }: { contentMode?: TabControlProps['contentMode'] }) => {
  const [selectedTabId, setSelectedTabId] = React.useState(items[0].id)

  return (
    <TabUIBase
      items={items}
      selectedTabId={selectedTabId}
      onSelect={setSelectedTabId}
      contentMode={contentMode}
      TabBar={TabBar}
      TabButton={TabButton}
      ContentBox={ContentBox}
    />
  )
}

const meta: Meta<typeof TabDemo> = {
  title: 'Interaction Primitives/Tab/Primitive',
  component: TabDemo,
}

export default meta
type Story = StoryObj<typeof TabDemo>

export const Default: Story = {}

export const KeepMounted: Story = {
  args: {
    contentMode: 'keep-mounted',
  },
}
