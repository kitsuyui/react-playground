import { DefaultAlarm } from '../'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof DefaultAlarm> = {
  title: 'Default UIs/Alarm/Default',
  component: DefaultAlarm,
}

export default meta
type Story = StoryObj<typeof DefaultAlarm>

export const Idle: Story = {
  args: {
    armed: false,
    ringing: false,
    remaining: 0,
    targetTimeMs: null,
    notificationEnabled: false,
    notificationSupported: true,
    notificationPermission: 'default',
    arm: () => {},
    disarm: () => {},
    toggle: () => {},
    reset: () => {},
    stopRinging: () => {},
    scheduleAfter: () => {},
    setTargetTimeMs: () => {},
    setNotificationEnabled: () => {},
    toggleNotification: () => {},
  },
}

export const Armed: Story = {
  args: {
    ...Idle.args,
    armed: true,
    remaining: 90,
    targetTimeMs: Date.now() + 90_000,
  },
}

export const Ringing: Story = {
  args: {
    ...Idle.args,
    ringing: true,
    targetTimeMs: Date.now(),
  },
}
