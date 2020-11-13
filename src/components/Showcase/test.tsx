import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import highlightMock from 'components/Highlight/mock'
import gamesMock from 'components/GameCardSlider/mock'

import Showcase from '.'

const props = {
  title: 'My title',
  highlight: highlightMock,
  games: gamesMock.slice(0, 1)
}

describe('<Showcase />', () => {
  it('should render full showcase', () => {
    renderWithTheme(<Showcase {...props} />)

    expect(
      screen.getByRole('heading', { name: /my title/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: highlightMock.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: gamesMock[0].title })
    ).toBeInTheDocument()
  })

  it('should render without title', () => {
    renderWithTheme(
      <Showcase highlight={props.highlight} games={props.games} />
    )

    expect(
      screen.getByRole('heading', { name: highlightMock.title })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: gamesMock[0].title })
    ).toBeInTheDocument()

    expect(
      screen.queryByRole('heading', { name: /my title/i })
    ).not.toBeInTheDocument()
  })

  it('should render without highlight', () => {
    renderWithTheme(<Showcase title={props.title} games={props.games} />)

    expect(
      screen.getByRole('heading', { name: /my title/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: gamesMock[0].title })
    ).toBeInTheDocument()

    expect(
      screen.queryByRole('heading', { name: highlightMock.title })
    ).not.toBeInTheDocument()
  })

  it('should render without games', () => {
    renderWithTheme(
      <Showcase title={props.title} highlight={props.highlight} />
    )

    expect(
      screen.getByRole('heading', { name: /my title/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: highlightMock.title })
    ).toBeInTheDocument()

    expect(
      screen.queryByRole('heading', { name: gamesMock[0].title })
    ).not.toBeInTheDocument()
  })
})
