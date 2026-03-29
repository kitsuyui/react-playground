import { SizedDekamoji } from '..'
import type { DekamojiImplementation, DekamojiTextWrapProps } from '..'

import type { Meta, StoryObj } from '@storybook/react-vite'

const IMPLEMENTATIONS: DekamojiImplementation[] = ['dom', 'zoomer', 'pretext']

const SIZES = [
  { label: 'Wide', width: 320, height: 160 },
  { label: 'Square', width: 220, height: 220 },
  { label: 'Tall', width: 180, height: 280 },
]

const Comparison = ({
  text,
  lineBreak,
  overflowWrap,
  whiteSpace,
  wordBreak,
}: {
  text: string
} & DekamojiTextWrapProps) => {
  return (
    <div
      style={{
        padding: 24,
        display: 'grid',
        gap: 24,
      }}
    >
      {SIZES.map((size) => (
        <section
          key={size.label}
          style={{
            display: 'grid',
            gap: 12,
          }}
        >
          <header
            style={{
              fontFamily: 'monospace',
              fontSize: 14,
            }}
          >
            {size.label} {size.width}x{size.height}
          </header>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
              gap: 16,
            }}
          >
            {IMPLEMENTATIONS.map((implementation) => (
              <article
                key={`${size.label}-${implementation}`}
                style={{
                  display: 'grid',
                  gap: 8,
                }}
              >
                <div
                  style={{
                    fontFamily: 'monospace',
                    fontSize: 12,
                    textTransform: 'uppercase',
                  }}
                >
                  {implementation}
                </div>
                <div
                  style={{
                    width: size.width,
                    height: size.height,
                    position: 'relative',
                    border: '1px solid #999',
                    background: '#fffbe6',
                  }}
                >
                  <SizedDekamoji
                    text={text}
                    width={size.width}
                    height={size.height}
                    implementation={implementation}
                    lineBreak={lineBreak}
                    overflowWrap={overflowWrap}
                    whiteSpace={whiteSpace}
                    wordBreak={wordBreak}
                  />
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

const meta: Meta<typeof Comparison> = {
  title: 'Layout Primitives/Dekamoji/Comparison',
  component: Comparison,
  argTypes: {
    lineBreak: {
      control: {
        type: 'select',
      },
      options: ['auto', 'loose', 'normal', 'strict', 'anywhere'],
    },
    overflowWrap: {
      control: {
        type: 'select',
      },
      options: ['normal', 'break-word', 'anywhere'],
    },
    text: {
      control: {
        type: 'text',
      },
    },
    whiteSpace: {
      control: {
        type: 'select',
      },
      options: ['normal', 'pre', 'pre-line', 'pre-wrap', 'nowrap'],
    },
    wordBreak: {
      control: {
        type: 'select',
      },
      options: ['normal', 'break-all', 'keep-all', 'break-word'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Comparison>

export const Default: Story = {
  args: {
    text: 'Hello, World!',
    lineBreak: 'auto',
    overflowWrap: 'normal',
    whiteSpace: 'pre-wrap',
    wordBreak: 'normal',
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        inline: false,
        iframeHeight: 1100,
      },
    },
  },
}
