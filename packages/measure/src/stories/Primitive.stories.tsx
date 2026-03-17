import { MeasureBase, DEFAULT_MEASURE_STYLE } from '..'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof MeasureBase> = {
  title: 'Layout Primitives/Measure/Primitive',
  component: MeasureBase,
}

export default meta
type Story = StoryObj<typeof MeasureBase>

export const Default: Story = {
  args: {
    width: 300,
    height: 200,
    styles: DEFAULT_MEASURE_STYLE,
  },
}
