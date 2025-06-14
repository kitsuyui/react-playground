import { Dekamoji } from '../../../dekamoji'
import { Measure } from '../../../measure'
import { WaveBox } from '@kitsuyui/react-wavebox'

import type { Meta, StoryObj } from '@storybook/react-webpack5'

const Example = ({
  minHeight,
  minWidth,
  maxWidth,
  maxHeight,
  heightCycle,
  widthCycle,
}: {
  minHeight: number
  minWidth: number
  maxWidth: number
  maxHeight: number
  heightCycle: number
  widthCycle: number
}) => {
  return (
    <>
      <WaveBox
        minHeight={minHeight}
        minWidth={minWidth}
        maxWidth={maxWidth}
        maxHeight={maxHeight}
        heightCycle={heightCycle}
        widthCycle={widthCycle}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'red',
          }}
        />
      </WaveBox>
      <WaveBox
        minHeight={minHeight}
        minWidth={minWidth}
        maxWidth={maxWidth}
        maxHeight={maxHeight}
        heightCycle={heightCycle}
        widthCycle={widthCycle}
      >
        <Measure />
      </WaveBox>
      <WaveBox
        minHeight={minHeight}
        minWidth={minWidth}
        maxWidth={maxWidth}
        maxHeight={maxHeight}
        heightCycle={heightCycle}
        widthCycle={widthCycle}
      >
        <Dekamoji text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      </WaveBox>
    </>
  )
}

const meta: Meta<typeof WaveBox> = {
  title: 'Base/WaveBox/Example',
  component: Example,
  argTypes: {
    minHeight: {
      control: {
        type: 'number',
      },
    },
    minWidth: {
      control: {
        type: 'number',
      },
    },
    maxWidth: {
      control: {
        type: 'number',
      },
    },
    maxHeight: {
      control: {
        type: 'number',
      },
    },
    heightCycle: {
      control: {
        type: 'number',
      },
    },
    widthCycle: {
      control: {
        type: 'number',
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof WaveBox>

export const Default: Story = {
  args: {
    minWidth: 100,
    maxWidth: 200,
    minHeight: 100,
    maxHeight: 300,
    heightCycle: 150,
    widthCycle: 100,
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
        iframeHeight: 200,
      },
    },
  },
}
