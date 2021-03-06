import { Story, Meta } from '@storybook/react/types-6-0'
import Dropdown, { DropdownProps } from '.'

export default {
  title: 'UI/Dropdown',
  component: Dropdown,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<DropdownProps> = (args) => <Dropdown {...args} />

Default.args = {
  title: 'Click here',
  children: 'content'
}

export const WithArrow: Story<DropdownProps> = (args) => <Dropdown {...args} />

WithArrow.args = {
  title: 'Click here',
  children: 'content',
  arrow: true
}
