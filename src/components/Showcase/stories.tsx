import { Story, Meta } from '@storybook/react/types-6-0'
import Showcase, { ShowcaseProps } from '.'
import highlightMock from 'components/Highlight/mock'
import gamesMock from 'components/GameCardSlider/mock'

export default {
  title: 'Elements/Showcase',
  component: Showcase,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    background: 'won-dark'
  }
} as Meta

export const Default: Story<ShowcaseProps> = (args) => <Showcase {...args} />

Default.args = {
  title: 'Most Popular',
  highlight: highlightMock,
  games: gamesMock,
  color: 'black'
}

export const WithoutHighlight: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
)

WithoutHighlight.args = {
  title: 'Most Popular',
  games: gamesMock,
  color: 'black'
}

export const WithoutGames: Story<ShowcaseProps> = (args) => (
  <Showcase {...args} />
)

WithoutGames.args = {
  title: 'Most Popular',
  highlight: highlightMock,
  color: 'black'
}
