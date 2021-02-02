import { renderWithTheme } from 'utils/tests/helpers'

import Page404 from '.'

import imagesMock from './mock'

describe('<Page404 />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Page404 images={imagesMock} />)
  })
})
