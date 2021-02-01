import { Story, Meta } from '@storybook/react/types-6-0'
import Error404, { Error404Props } from '.'
import imageMock from './mock'

export default {
  title: 'Error404',
  args: {
    images: imageMock
  },
  component: Error404
} as Meta

export const Default: Story<Error404Props> = (args) => <Error404 {...args} />
