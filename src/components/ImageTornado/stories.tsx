import { Story, Meta } from '@storybook/react/types-6-0'
import ImageTornado, { ImageTornadoProps } from '.'

export default {
  title: 'ImageTornado',
  component: ImageTornado
} as Meta

export const Default: Story<ImageTornadoProps> = (args) => (
  <ImageTornado {...args} />
)
