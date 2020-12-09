import { Story, Meta } from '@storybook/react/types-6-0'
import PaymentCard, { PaymentCardProps } from '.'

import { Visa, Mastercard } from '@styled-icons/simple-icons'

export default {
  title: 'PaymentCard',
  component: PaymentCard,
  argTypes: {
    flag: {
      type: ''
    }
  },
  args: {
    size: 'large',
    number: '4567 3456 5677 4332',
    date: '04/21',
    initialName: 'NICOLAS CAGE',
    flag: <Visa />
  },
  parameters: {
    backgrounds: {
      default: 'won-light'
    }
  }
} as Meta

export const Default: Story<PaymentCardProps> = (args) => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <PaymentCard {...args} />
  </div>
)

export const Glassmorphism: Story<PaymentCardProps> = (args) => (
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(#f00, #f0f)',
        clipPath: 'circle(60% at right 50%)'
      }}
    ></div>
    <PaymentCard {...args} />
  </div>
)

Glassmorphism.parameters = {
  backgrounds: {
    default: 'won-dark'
  }
}

Glassmorphism.args = {
  size: 'large',
  number: '4567 3456 5677 4332',
  date: '04/21',
  initialName: 'NICOLAS CAGE',
  flag: <Mastercard />,
  glassmorphism: true
}
