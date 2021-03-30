import { Story, Meta } from '@storybook/react/types-6-0'
import Modal from '.'
import CodeField from 'components/CodeField'
import Button from 'components/Button'
import Heading from 'components/Heading'
import { CheckCircleOutline } from '@styled-icons/material-outlined'
import { useState } from 'react'

export default {
  title: 'UI/Modal',
  component: Modal,
  argTypes: {
    onSubmit: { action: 'submit' },
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
        <div>
          <Heading color="black" lineBottom lineColor="secondary">
            Verification Code
          </Heading>
          <CodeField size={5} legend="Please enter the verification code" />
          <p
            style={{
              fontSize: '1.2rem',
              color: '#2E2F42',
              paddingBottom: '0.8rem',
              marginTop: '1.2rem',
              fontStyle: 'italic'
            }}
          >
            We just send a message text to: +55 (**) **** *567
          </p>
          <Button icon={<CheckCircleOutline />} fullWidth size="large">
            Verify
          </Button>
        </div>
      </Modal>
    </>
  )
}
