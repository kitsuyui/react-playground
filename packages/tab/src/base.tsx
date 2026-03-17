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
import type React from 'react'
import { createContext, Fragment } from 'react'

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
  contentMode?: 'active-only' | 'keep-mounted'
}

export interface TabButtonContextValue {
  id: TabItemId
  onSelect: (id: TabItemId) => void
  selected: boolean
  title: TabTitle
  'aria-selected': boolean
}

const DEFAULT_TAB_BUTTON_CONTEXT: TabButtonContextValue = {
  id: '',
  onSelect: () => {},
  selected: false,
  title: '',
  'aria-selected': false,
} as const

export const TabButtonContext = createContext<TabButtonContextValue>(
  DEFAULT_TAB_BUTTON_CONTEXT
)

export interface TabContextValue {
  selectedTabId: TabItemId
  onSelect: (id: TabItemId) => void
}

const DEFAULT_TAB_CONTEXT: TabContextValue = {
  selectedTabId: '',
  onSelect: () => {},
} as const

export const TabContext = createContext<TabContextValue>(DEFAULT_TAB_CONTEXT)

export const TabUIBase = (props: TabControlProps & TabUIComponents) => {
  const {
    items,
    selectedTabId,
    onSelect,
    contentMode = 'active-only',
    TabBar,
    TabButton,
    ContentBox,
  } = props
  const activeItem = items.find((tab) => tab.id === selectedTabId)
  const content =
    contentMode === 'keep-mounted'
      ? items.map((item) => <Fragment key={item.id}>{item.content}</Fragment>)
      : activeItem?.content
  return (
    <TabContext.Provider value={{ selectedTabId, onSelect }}>
      <div role="tablist">
        <TabBar>
          {items.map((item) => (
            <TabButtonContext.Provider
              key={item.id}
              value={{
                id: item.id,
                title: item.title,
                selected: item.id === selectedTabId,
                'aria-selected': item.id === selectedTabId,
                onSelect,
              }}
            >
              <TabButton />
            </TabButtonContext.Provider>
          ))}
        </TabBar>
      </div>
      <div role="tabpanel">
        <ContentBox>{content}</ContentBox>
      </div>
    </TabContext.Provider>
  )
}
