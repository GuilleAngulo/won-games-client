import { render, screen } from '@testing-library/react'

import CodeField from '.'

describe('<CodeField />', () => {
  it('should render the heading', () => {
    const { container } = render(<CodeField />)

    expect(screen.getByRole('heading', { name: /CodeField/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
