import type React from 'react'

export const BrowserFixture = (props: {
  children: React.ReactNode
  label: string
  style?: React.CSSProperties
}): React.JSX.Element => {
  const { children, label, style } = props
  return (
    <div
      aria-label={label}
      style={{
        background: '#ffffff',
        color: '#111111',
        display: 'inline-flex',
        fontFamily: 'monospace',
        gap: '12px',
        padding: '24px',
        ...style,
      }}
    >
      {children}
    </div>
  )
}
