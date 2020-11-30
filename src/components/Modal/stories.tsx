import { Story, Meta } from '@storybook/react/types-6-0'
import Modal from '.'
import CodeField from 'components/CodeField'
import { CheckCircleOutline } from '@styled-icons/material-outlined'
import { useState } from 'react'
import Button from 'components/Button'

export default {
  title: 'Modal',
  component: Modal,
  args: {
    title: 'Modal Title',
    buttonLabel: 'Button'
  },
  argTypes: {
    buttonIcon: {
      type: ''
    },
    children: {
      type: ''
    }
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story = (args) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '4rem'
        }}
      >
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} {...args}>
        <p>This is the body of the modal.</p>
      </Modal>
    </>
  )
}

export const Verification: Story = (args) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '4rem'
        }}
      >
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} {...args}>
        <CodeField size={5} legend="Please enter the verification code" />
      </Modal>
    </>
  )
}

Verification.args = {
  title: 'Verification Code',
  message: 'We just send a message text to: +55 (**) **** *567',
  buttonLabel: 'Verify',
  buttonIcon: <CheckCircleOutline />
}
