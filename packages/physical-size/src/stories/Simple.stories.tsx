import { PhysicalSizeContext, PhysicalSizeProvider } from '../'

import type { Meta, StoryObj } from '@storybook/react-webpack5'

const Example = () => {
  return (
    <PhysicalSizeProvider>
      <PhysicalSizeContext.Consumer>
        {(value: { ppi: number }) => <div>{value.ppi}</div>}
      </PhysicalSizeContext.Consumer>
    </PhysicalSizeProvider>
  )
}

const meta: Meta<typeof Example> = {
  title: 'Base/PhysicalSize/Simple',
  component: Example,
}

export default meta
type Story = StoryObj<typeof Example>

export const Default: Story = {
  args: {
  },
}
