import { Story, Meta } from '@storybook/react/types-6-0'
import CartIcon from '.'

export default {
  title: 'Cart/CartIcon',
  component: CartIcon,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story = () => <CartIcon />
export const withItems: Story = (args) => (
  <div style={{ margin: '6rem' }}>
    <CartIcon {...args} />
  </div>
)

withItems.args = {
  quantity: 3
}
