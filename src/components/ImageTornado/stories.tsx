import { Story, Meta } from '@storybook/react/types-6-0'
import ImageTornado, { ImageTornadoProps } from '.'
import imageMock from 'components/Tornado/mock'

export default {
  title: 'Experimental/ImageTornado',
  component: ImageTornado,
  args: {
    images: imageMock
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<ImageTornadoProps> = (args) => (
  <ImageTornado {...args} />
)
