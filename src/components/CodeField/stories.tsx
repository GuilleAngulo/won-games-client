import { Story, Meta } from '@storybook/react/types-6-0'
import CodeField from '.'

export default {
  title: 'CodeField',
  component: CodeField,
  args: {
    size: 6,
    legend: 'Enter the verification code',
    disabled: false
  }
} as Meta

export const Default: Story = (args) => (
  <div style={{ width: 400, margin: 'auto' }}>
    <CodeField {...args} />
  </div>
)

export const withLoading: Story = (args) => (
  <div style={{ width: 400, margin: 'auto' }}>
    <CodeField {...args} />
  </div>
)

withLoading.args = {
  loading: 'Checking code...'
}

export const withError: Story = (args) => (
  <div style={{ width: 400, margin: 'auto' }}>
    <CodeField {...args} />
  </div>
)

withError.args = {
  error: 'Wrong confirmation code...'
}
