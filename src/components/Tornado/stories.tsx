import { Story, Meta } from '@storybook/react/types-6-0'
import Tornado, { ImageTornadoProps } from '.'
import imageMock from './mock'

export default {
  title: 'Experimental/Tornado',
  component: Tornado,
  args: {
    images: imageMock
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<ImageTornadoProps> = (args) => <Tornado {...args} />
