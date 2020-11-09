import { Story, Meta } from '@storybook/react/types-6-0'
import CodeField from '.'

export default {
  title: 'CodeField',
  component: CodeField
} as Meta

export const Default: Story = (args) => (
  <div style={{ width: 400, margin: 'auto' }}>
    <CodeField {...args} />
  </div>
)

Default.args = {
  size: 5
}
