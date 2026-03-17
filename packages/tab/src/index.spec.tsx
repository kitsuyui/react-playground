import { cleanup, render, screen } from '@testing-library/react'
import type React from 'react'
import { useContext } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { TabButtonContext, TabContext, TabUIBase } from './index'

describe('TabUIBase', () => {
  afterEach(() => {
    cleanup()
  })

  const items = [
    { id: 't1', title: 'Tab 1', content: <div>Content 1</div> },
    { id: 't2', title: 'Tab 2', content: <div>Content 2</div> },
  ]
  const onSelect = vi.fn()
  const TabBar = ({ children }: { children: React.ReactNode }) => (
    <div data-testid="tab-bar">{children}</div>
  )
  const TabButton = () => {
    const { id, title, selected, onSelect, 'aria-selected': ariaSelected } = useContext(TabButtonContext)
    return (
      <button
        type="button"
        role="tab"
        aria-selected={ariaSelected}
        data-testid={`tab-button-${id}`}
        onClick={() => onSelect(id)}
        style={{ fontWeight: selected ? 'bold' : 'normal' }}
      >
        {title}
      </button>
    )
  }
  const ContentBox = ({ children }: { children: React.ReactNode }) => {
    const { selectedTabId } = useContext(TabContext)
    return (
      <div data-testid="content-box" data-selected-tab-id={selectedTabId}>
        {children}
      </div>
    )
  }

  it('renders only the active content by default', () => {
    render(
      <TabUIBase
        items={items}
        selectedTabId="t1"
        onSelect={onSelect}
        TabBar={TabBar}
        TabButton={TabButton}
        ContentBox={ContentBox}
      />
    )

    expect(
      screen.getByTestId('content-box').getAttribute('data-selected-tab-id')
    ).toBe('t1')
    expect(screen.getByText('Content 1')).toBeTruthy()
    expect(screen.queryByText('Content 2')).toBeNull()
  })

  describe('WAI-ARIA roles', () => {
    it('provides role="tablist" on the tab bar region', () => {
      const { container } = render(
        <TabUIBase
          items={items}
          selectedTabId="t1"
          onSelect={onSelect}
          TabBar={TabBar}
          TabButton={TabButton}
          ContentBox={ContentBox}
        />
      )
      expect(container.querySelector('[role="tablist"]')).not.toBeNull()
    })

    it('provides role="tabpanel" on the content region', () => {
      const { container } = render(
        <TabUIBase
          items={items}
          selectedTabId="t1"
          onSelect={onSelect}
          TabBar={TabBar}
          TabButton={TabButton}
          ContentBox={ContentBox}
        />
      )
      expect(container.querySelector('[role="tabpanel"]')).not.toBeNull()
    })

    it('sets aria-selected="true" on the active tab and "false" on inactive tabs', () => {
      render(
        <TabUIBase
          items={items}
          selectedTabId="t1"
          onSelect={onSelect}
          TabBar={TabBar}
          TabButton={TabButton}
          ContentBox={ContentBox}
        />
      )
      const tabs = screen.getAllByRole('tab')
      expect(tabs).toHaveLength(2)
      expect(tabs[0].getAttribute('aria-selected')).toBe('true')
      expect(tabs[1].getAttribute('aria-selected')).toBe('false')
    })
  })

  it('keeps all contents mounted when contentMode is keep-mounted', () => {
    render(
      <TabUIBase
        items={items}
        selectedTabId="t2"
        onSelect={onSelect}
        contentMode="keep-mounted"
        TabBar={TabBar}
        TabButton={TabButton}
        ContentBox={ContentBox}
      />
    )

    expect(
      screen.getByTestId('content-box').getAttribute('data-selected-tab-id')
    ).toBe('t2')
    expect(screen.getByText('Content 1')).toBeTruthy()
    expect(screen.getByText('Content 2')).toBeTruthy()
  })
})
