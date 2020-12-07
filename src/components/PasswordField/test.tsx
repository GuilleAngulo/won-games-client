import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import PasswordField from '.'

describe('<PasswordField />', () => {
  it('should render visibility toogle correctly', async () => {
    renderWithTheme(<PasswordField label="PasswordField" />)

    const showPassword = screen.getByRole('img', { name: /show password/i })

    expect(showPassword).toBeInTheDocument()

    userEvent.click(showPassword)
    await waitFor(() => {
      expect(
        screen.getByRole('img', { name: /hide password/i })
      ).toBeInTheDocument()
    })
  })
})
