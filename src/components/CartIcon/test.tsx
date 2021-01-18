import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import CardIcon from '.'

describe('<CardIcon />', () => {
  it('should render without badge', () => {
    renderWithTheme(<CardIcon />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
  })

  it('should render with badge', () => {
    renderWithTheme(<CardIcon quantity={1} />)

    expect(screen.queryByLabelText(/cart items/i)).toBeInTheDocument()
    expect(screen.getByText(/1/)).toBeInTheDocument()
  })

  it('should render with badge only if positive number', () => {
    renderWithTheme(<CardIcon quantity={-1} />)

    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/-1/)).not.toBeInTheDocument()
  })
})
