import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Page404 from '.'

describe('<Page404 />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Page404 />)
  })
})
