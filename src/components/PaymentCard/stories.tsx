import { Story, Meta } from '@storybook/react/types-6-0'
import PaymentCard, { PaymentCardProps } from '.'

import Visa from './flags/Visa'

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
