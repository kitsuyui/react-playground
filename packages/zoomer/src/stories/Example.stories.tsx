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
        <Story />
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

export const Sized: Story = {
  args: {
    children: (
      <div style={{ width: '300px', height: '200px', backgroundColor: 'lightblue', borderRadius: '8px'}}>
        <div style={{ fontSize: '2em', textAlign: 'center'}}>Zoomer Example</div>
        <div>
          This content has a specified size. The Zoomer will adjust the zoom level while maintaining the aspect ratio.
          The content will be put in the center of the container.
        </div>
      </div>
    )
  },
  decorators: [
    (Story) => {
      return (
        <Story />
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


export const Unsized: Story = {
  args: {
    children: (
      <div style={{ backgroundColor: 'lightgreen', borderRadius: '8px' }}>
        <div style={{ fontSize: '2em', textAlign: 'center' }}>Zoomer Example</div>
        <div>
          This content does not have a specified size. The Zoomer will adjust the zoom level to fit within the container.
        </div>
      </div>
    )
  },
  decorators: [
    (Story) => {
      return (
        <Story />
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

