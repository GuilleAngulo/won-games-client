import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { MockedProvider } from '@apollo/client/testing'

import Games from '.'

import filterItemsMock from 'components/ExploreSidebar/mock'
import { gamesMock, fetchMoreMock, noGamesMock } from './mocks'
import userEvent from '@testing-library/user-event'
import apolloCache from 'utils/apolloCache'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/'
}))

jest.mock('templates/Base', () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="Mock Base">{children}</div>
    }
  }
})

jest.mock('next/link', () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
      return <div>{children}</div>
    }
  }
})

// jest.mock('components/ExploreSidebar', () => {
//   return {
//     __esModule: true,
//     default: function Mock({ children }: { children: React.ReactNode }) {
//       return <div data-testid="Mock ExploreSidebar">{children}</div>
//     }
//   }
// })

describe('<Games />', () => {
  // it('should render loading when starting the template', () => {
  //   renderWithTheme(
  //     <MockedProvider mocks={[]} addTypename={false}>
  //       <Games filterItems={filterItemsMock} />
  //     </MockedProvider>
  //   )

  //   expect(screen.getByText(/loading.../i)).toBeInTheDocument()
  // })

  it('should render sections properly', async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock]} addTypename={false}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    // expect(screen.getByText(/loading.../i)).toBeInTheDocument()

    expect(await screen.findByText(/price/i)).toBeInTheDocument()

    expect(await screen.findByText(/Sample Game/i)).toBeInTheDocument()

    // expect(screen.getByTestId('Mock GameCard')).toBeInTheDocument()

    expect(
      await screen.findByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })

  it('should render empty when no games found', async () => {
    renderWithTheme(
      <MockedProvider mocks={[noGamesMock]} addTypename={false}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(
      await screen.findByText(/we didn't find any games with this filter/i)
    ).toBeInTheDocument()
  })

  it('should render more games when show more is clicked', async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock, fetchMoreMock]} cache={apolloCache}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )
    // screen.logTestingPlaygroundURL()

    expect(await screen.findByText(/Sample Game/i)).toBeInTheDocument()

    userEvent.click(await screen.findByRole('button', { name: /show more/i }))

    expect(await screen.findByText(/Fetch More Game/i)).toBeInTheDocument()
  })

  it('should change push router when selecting a filter', async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock, fetchMoreMock]} cache={apolloCache}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )
    userEvent.click(await screen.findByRole('checkbox', { name: /windows/i }))
    userEvent.click(await screen.findByRole('checkbox', { name: /linux/i }))
    userEvent.click(await screen.findByLabelText(/low to high/i))

    expect(push).toHaveBeenCalledWith({
      pathname: '/games',
      query: { platforms: ['windows', 'linux'], sort_by: 'low-to-high' }
    })
  })
})
