import { Story, Meta } from '@storybook/react/types-6-0'
import Error404, { ImageTornadoProps } from '.'
import imageMock from './mock'

export default {
  title: 'Error404',
  args: {
    images: imageMock
  },
  component: Error404
} as Meta

export const Default: Story<ImageTornadoProps> = (args) => (
  <Error404 {...args} />
)
