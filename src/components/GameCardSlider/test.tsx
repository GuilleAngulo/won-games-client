import 'match-media-mock'
import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import items from './mock'

import GameCardSlider from '.'

describe('<GameCardSlider />', () => {
  it('should render six slides', () => {
    const { container } = renderWithTheme(<GameCardSlider items={items} />)

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(6)
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: '#030517'
    })
    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render white arrows when color is passed', () => {
    renderWithTheme(<GameCardSlider items={items} color="white" />)

    expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
      color: '#FAFAFA'
    })
    expect(screen.getByLabelText(/next games/i)).toHaveStyle({
      color: '#FAFAFA'
    })
  })
})
