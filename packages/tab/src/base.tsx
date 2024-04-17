/**
 * Abstract Tab UI component
 *
 * This component is a base for creating tab UI components.
 * This component doesn't have any styles, positions, states, or any other details.
 * This component only provides an ideal structure for tab UI and its ReactContext.
 *
 * So, you can customize the tab UI as you want.
 * Or you can compose this component with other components and CSS modules.
 */
import React from 'react'
import { createContext } from 'react'

export type TabItemId = string
export type TabTitle = React.ReactNode | string

export interface TabItem {
  id: TabItemId
  title: TabTitle
  content: React.ReactNode
}

export interface TabUIComponents {
  TabBar: React.ComponentType<{ children: React.ReactNode }>
  TabButton: React.ComponentType
  ContentBox: React.ComponentType<{ children: React.ReactNode }>
}

export interface TabControlProps {
  items: TabItem[]
  selectedTabId: TabItemId
  onSelect: (id: TabItemId) => void
}

export interface TabButtonContextValue {
  id: TabItemId
  onSelect: (id: TabItemId) => void
  selected: boolean
  title: TabTitle
}

const DEFAULT_TAB_BUTTON_CONTEXT: TabButtonContextValue = {
  id: '',
  onSelect: () => { },
  selected: false,
  title: '',
} as const

export const TabButtonContext = createContext<TabButtonContextValue>(
  DEFAULT_TAB_BUTTON_CONTEXT,
)

export const TabUIBase = (props: TabControlProps & TabUIComponents) => {
  const { items, selectedTabId, onSelect, TabBar, TabButton, ContentBox } =
    props
  const activeItem = items.find((tab) => tab.id === selectedTabId)
  return (
    <>
      <TabBar>
        {items.map((item) => (
          <TabButtonContext.Provider
            key={item.id}
            value={{
              id: item.id,
              title: item.title,
              selected: item.id === selectedTabId,
              onSelect,
            }}
          >
            <TabButton />
          </TabButtonContext.Provider>
        ))}
      </TabBar>
      <ContentBox>{activeItem?.content}</ContentBox>
    </>
  )
}
