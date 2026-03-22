import { useContext } from 'react'
import { AlarmContext, AlarmContextProvider, DefaultAlarm } from '../'

import type { Meta, StoryObj } from '@storybook/react-vite'

const AlarmComposition = () => {
  const context = useContext(AlarmContext)
  return <DefaultAlarm {...context} />
}

const Example = () => (
  <AlarmContextProvider>
    <AlarmComposition />
  </AlarmContextProvider>
)

const meta: Meta<typeof Example> = {
  title: 'State Providers/Alarm/Composition',
  component: Example,
}

export default meta
type Story = StoryObj<typeof Example>

export const Default: Story = {}
