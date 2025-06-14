import type React from 'react'

/**
 * SizedBox component that wraps its children in a div with specified width and height.
 * @param props - The properties for the SizedBox component.
 * @param props.width - The width of the box.
 * @param props.height - The height of the box.
 * @returns {React.JSX.Element} The rendered SizedBox component.
 */
export const SizedBox = (props: {
  width: number
  height: number
  children: React.ReactNode
}): React.JSX.Element => {
  const { children, width, height } = props
  return (
    <div
      style={{
        width,
        height,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {children}
    </div>
  )
}
