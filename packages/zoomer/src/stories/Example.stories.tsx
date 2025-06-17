import { Zoomer } from '..'

import type { Meta, StoryObj } from '@storybook/react-vite'

const meta: Meta<typeof Zoomer> = {
  title: 'Base/Zoomer/Example',
  component: Zoomer,
  argTypes: {
  },
}

export default meta
type Story = StoryObj<typeof Zoomer>

export const Default: Story = {
  args: {
    children: 'あいうえお',
  },
  decorators: [
    (Story) => {
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}
        >
          <Story />
        </div>
      )
    },
  ],
  parameters: {
    layout: 'fullscreen',
    flexDirection: 'column',
    docs: {
      story: {
        inline: false,
      },
    },
  },
}

export const Complex: Story = {
  args: {
    children: (
      <div style={{ width: '300px', height: '200px', backgroundColor: 'lightblue', borderRadius: '8px' }}>
        <div style={{ fontSize: '2em', textAlign: 'center'}}>Zoomer Example</div>
        <div>
          This is an example of the Zoomer component. It automatically adjusts the zoom level of its
          children to fit within the specified width and height.
        </div>
      </div>
    )
  },
  decorators: [
    (Story) => {
      return (
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
          }}
        >
          <Story />
        </div>
      )
    }
  ],
  parameters: {
    layout: 'fullscreen',
    flexDirection: 'column',
    docs: {
      story: {
        inline: false,
      },
    },
  },
}
