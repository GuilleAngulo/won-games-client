import { Story, Meta } from '@storybook/react/types-6-0'
import PasswordField from '.'

export default {
  title: 'Form/PasswordField',
  component: PasswordField,
  args: {
    label: 'Password',
    placeholder: 'Your Password'
  }
} as Meta

export const Default: Story = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <PasswordField {...args} />
  </div>
)
