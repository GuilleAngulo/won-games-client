import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Gallery from '.'
import galleryMock from './mock'

const props = {
  items: galleryMock
}

describe('<Gallery />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Gallery {...props} />)
  })
})
