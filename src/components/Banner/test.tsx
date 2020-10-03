import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'

const props = {
  img: 'https://source.unsplash.com/user/willianjusten',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<Banner {...props} />)

    expect(
      screen.getByRole('heading', { name: /defy death/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /play the new crashlands season/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /defy death/i })).toBeInTheDocument()

    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'https://source.unsplash.com/user/willianjusten'
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a Ribbon with normal size and primary color by default', () => {
    renderWithTheme(<Banner {...props} ribbon="My ribbon" />)

    const ribbon = screen.getByText(/my ribbon/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ backgroundColor: '#F231A5' })
    expect(ribbon).toHaveStyle({ height: '3.6rem', fontSize: '1.4rem' })
  })

  it('should render a Ribbon with small size and secondary color', () => {
    renderWithTheme(
      <Banner
        {...props}
        ribbon="My ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    const ribbon = screen.getByText(/my ribbon/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })
  })
})
