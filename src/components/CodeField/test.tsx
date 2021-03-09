import { render, screen, waitFor } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'

import CodeField from '.'

describe('<CodeField />', () => {
  it('should render legend and with six inputs by default', () => {
    render(<CodeField legend="My Legend" />)

    expect(
      screen.getByText(/my legend/i, { selector: 'legend' })
    ).toBeInTheDocument()
    expect(screen.queryByRole('group')?.childElementCount).toBe(6)
  })

  it('should render the number of inputs passed at size prop', () => {
    render(<CodeField legend="My Legend" size={4} />)

    expect(screen.queryByRole('group')?.childElementCount).toBe(4)
  })

  it('should render a loading message if passed', () => {
    render(<CodeField legend="My Legend" loading="Loading..." />)

    expect(screen.getByText(/loading.../i)).toBeInTheDocument()
  })

  it('should render a error message if passed', () => {
    render(<CodeField legend="My Legend" error="Error message" />)

    expect(screen.getByText(/error message/i)).toBeInTheDocument()
  })

  it('should change input values when typing', async () => {
    render(<CodeField legend="My Legend" />)

    const inputs = screen.queryByRole('group')
    const firstInput = inputs?.children[0] as HTMLInputElement
    const sixInput = inputs?.children[5] as HTMLInputElement

    expect(firstInput?.nodeValue).toBe(null)
    expect(sixInput?.nodeValue).toBe(null)

    const text = '9543213'
    userEvent.type(firstInput, text)

    await waitFor(() => {
      expect(firstInput).toHaveValue(text[0])
      expect(sixInput).toHaveValue(text[5])
    })
  })
})
