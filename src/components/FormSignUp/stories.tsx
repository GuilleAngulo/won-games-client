import { Story, Meta } from '@storybook/react/types-6-0'
import { withNextRouter } from 'storybook-addon-next-router'
import { ApolloProvider } from '@apollo/client'
import FormSignUp from '.'
import { useApollo } from 'utils/apollo'

export default {
  title: 'Form/FormSignUp',
  component: FormSignUp,
  decorators: [withNextRouter]
} as Meta

export const Default: Story = () => {
  const client = useApollo()
  return (
    <div style={{ width: 300, margin: 'auto' }}>
      <ApolloProvider client={client}>
        <FormSignUp />
      </ApolloProvider>
    </div>
  )
}
