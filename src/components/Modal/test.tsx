import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Modal from '.'

describe('<Modal />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Modal />)
  })
})
