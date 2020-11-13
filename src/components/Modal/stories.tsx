import { Story, Meta } from '@storybook/react/types-6-0'
import Modal from '.'
import CodeField from 'components/CodeField'
import FormSignUp from 'pages/sign-up'
import { CheckCircleOutline } from '@styled-icons/material-outlined'

export default {
  title: 'Modal',
  component: Modal,
  args: {
    onClose: () => console.log('Closed'),
    isOpen: true,
    title: 'Modal Title',
    buttonLabel: 'Button'
  },
  argTypes: {
    onClose: { action: 'closed' },
    buttonIcon: {
      type: ''
    },
    children: {
      type: ''
    }
  }
} as Meta

export const Default: Story = (args) => (
  <Modal {...args}>
    <p>This is the body of the modal.</p>
  </Modal>
)

export const Verification: Story = (args) => (
  <>
    <FormSignUp />
    <Modal {...args}>
      <CodeField size={5} legend="Please enter the verification code" />
    </Modal>
  </>
)

Verification.args = {
  title: 'Verification Code',
  message: 'We just send a message text to: +55 (**) **** *567',
  buttonLabel: 'Verify',
  buttonIcon: <CheckCircleOutline />
}
