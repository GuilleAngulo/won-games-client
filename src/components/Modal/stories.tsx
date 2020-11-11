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
    children: <div style={{ width: '300px' }}>Relleno</div>
    //children: <CodeField size={5} label="Enter the verification code" />
  },
  argTypes: {
    onClose: { action: 'closed' }
  }
} as Meta

export const Default: Story = (args) => (
  <>
    <FormSignUp />
    <Modal {...args} />
  </>
)
