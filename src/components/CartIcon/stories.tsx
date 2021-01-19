import { Story, Meta } from '@storybook/react/types-6-0'
import Button from 'components/Button'
import CartIcon, { CartIconProps } from '.'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

export default {
  title: 'CartIcon',
  component: CartIcon,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story = () => <CartIcon />
export const withItems: Story<CartIconProps> = (args) => <CartIcon {...args} />

withItems.args = {
  quantity: 1
}

export const withAnimation: Story<CartIconProps> = (args) => (
  <div
    style={{
      display: 'flex',
      width: '120px',
      justifyContent: 'space-between'
    }}
  >
    <CartIcon {...args} />{' '}
    <Button size={'small'} icon={<AddShoppingCart />}>
      Añadir
    </Button>
  </div>
)
