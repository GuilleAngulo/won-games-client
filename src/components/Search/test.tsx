import userEvent from '@testing-library/user-event'
import { render, screen } from 'utils/test-utils'

import Search, { SearchBoxProps } from '.'

jest.mock('next/link', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div>{children}</div>
  }
}))

jest.mock('utils/meilisearchClient', () => ({
  searchClient: jest.fn()
}))

jest.mock('react-instantsearch-dom', () => ({
  InstantSearch: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock InstantSearch">{children}</div>
  },
  Highlight: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Highlight">{children}</div>
  },
  Configure: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Configure">{children}</div>
  },

  connectStateResults: jest
    .fn()
    .mockImplementation((component) => () =>
      component({ searching: true, searchState: { query: '' } })
    ),
  connectSearchBox: jest
    .fn()
    .mockImplementation((component) => (props: SearchBoxProps) =>
      component({ ...props, currentRefinement: '', refine: jest.fn() })
    ),
  connectHits: jest
    .fn()
    .mockImplementation((component) => () => component({ hits: [] }))
}))

describe('<Search />', () => {
  it('should render a hidden input and search icon', () => {
    render(<Search />)

    expect(screen.getByPlaceholderText(/search here…/i)).toHaveStyle({
      visibility: 'hidden',
      opacity: 0
    })

    expect(screen.getByLabelText(/open search/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/close search/i)).not.toBeInTheDocument()
  })

  it('should open/close search input when clicking icons', () => {
    render(<Search />)
    const input = screen.getByPlaceholderText(/search here…/i)

    userEvent.click(screen.getByLabelText(/open search/i))

    expect(input).toHaveFocus()

    expect(input).toHaveStyle({
      visibility: 'visible',
      opacity: 1
    })

    userEvent.click(screen.getByLabelText(/close search/i))

    expect(input).toHaveStyle({
      visibility: 'hidden',
      opacity: 0
    })
  })

  it('should handle hidding search input when clicking on overlay', () => {
    render(<Search />)

    const search = screen.getByRole('search').parentElement!
    const overlay = search.nextElementSibling

    userEvent.click(screen.getByLabelText(/open search/i))

    expect(overlay).toHaveStyle({ opacity: 1 })
    expect(overlay!.getAttribute('aria-hidden')).toBe('false')

    userEvent.click(overlay!)

    expect(overlay).toHaveStyle({ opacity: 0 })
    expect(overlay!.getAttribute('aria-hidden')).toBe('true')
  })
})
