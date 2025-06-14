import React from 'react'
import { useState } from 'react'
import { useInterval } from 'react-use'

import type { ClockContainerProps } from './types'

export const DateContext = React.createContext(new Date())

export const ClockContainer: React.FC<ClockContainerProps> = (
  props
): React.JSX.Element => {
  const { children } = props
  const [date, setDate] = useState(new Date())
  const refreshInterval = props.refreshInterval || 1000 // default 1 second

  // use useInterval instead of setInterval
  // https://github.com/streamich/react-use/blob/master/docs/useInterval.md
  useInterval(() => {
    setDate(new Date())
  }, refreshInterval)

  return <DateContext.Provider value={date}>{children}</DateContext.Provider>
}
