import { Story, Meta } from '@storybook/react/types-6-0'
import Modal from '.'
import CodeField from 'components/CodeField'
import FormSignUp from 'pages/sign-up'

export default {
  title: 'Modal',
  component: Modal,
  args: {
    onClose: () => console.log('Closed'),
    isOpen: true,
    header: <h2>This is the Modal Header</h2>
  },
  argTypes: {
    onClose: { action: 'closed' },
    header: {
      type: ''
    },
    children: {
      type: ''
    }
  }
} as Meta

export const Default: Story = (args) => (
  <Modal {...args}>
    <div>This is the content of the modal.</div>
  </Modal>
)

export const TwoFactorAuthentication: Story = (args) => (
  <>
    <FormSignUp />
    <Modal {...args}>
      <CodeField size={5} label="Please enter the verification code" />
    </Modal>
  </>
)

TwoFactorAuthentication.args = {
  header: '',
  title: 'Verification Code',
  message: 'We just send a message text to: +55 (**) **** *567'
}
