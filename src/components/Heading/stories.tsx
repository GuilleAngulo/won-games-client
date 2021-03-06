import { Story, Meta } from '@storybook/react/types-6-0'
import Heading, { HeadingProps } from '.'

export default {
  title: 'UI/Heading',
  component: Heading,
  argTypes: {
    children: {
      type: 'string',
      description: 'string'
    }
  }
} as Meta

export const Default: Story<HeadingProps> = (args) => <Heading {...args} />

Default.args = {
  children: 'Heading',
  color: 'black'
}
