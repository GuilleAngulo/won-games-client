import { render, screen, waitFor } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'

import PasswordField from '.'

describe('<PasswordField />', () => {
  it('should render visibility toogle correctly', async () => {
    render(<PasswordField label="PasswordField" />)

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
