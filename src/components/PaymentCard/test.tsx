import { render, screen } from '@testing-library/react'

import PaymentCard from '.'

describe('<PaymentCard />', () => {
  it('should render the heading', () => {
    const { container } = render(<PaymentCard />)

    expect(screen.getByRole('heading', { name: /PaymentCard/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
