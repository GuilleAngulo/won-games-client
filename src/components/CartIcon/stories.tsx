import { Story, Meta } from '@storybook/react/types-6-0'
import CardIcon, { CartIconProps } from '.'

export default {
  title: 'CardIcon',
  component: CardIcon,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story = () => <CardIcon />
export const withItems: Story<CartIconProps> = (args) => <CardIcon {...args} />

withItems.args = {
  quantity: 1
}
