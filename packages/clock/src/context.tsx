import React from 'react'
import { useState } from 'react'
import { useInterval } from 'react-use'

export interface ClockContextProviderProps {
  children: React.ReactNode
  refreshInterval?: number
}

export type ClockContextValue = Date

export const ClockContext = React.createContext<ClockContextValue>(new Date())

export const ClockContextProvider: React.FC<ClockContextProviderProps> = (
  props
): React.JSX.Element => {
  const { children } = props
  const [date, setDate] = useState(new Date())
  const refreshInterval = props.refreshInterval || 10 // default 10ms

  // use useInterval instead of setInterval
  // https://github.com/streamich/react-use/blob/master/docs/useInterval.md
  useInterval(() => {
    setDate(new Date())
  }, refreshInterval)

  return <ClockContext.Provider value={date}>{children}</ClockContext.Provider>
}
