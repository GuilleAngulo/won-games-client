import { render, screen } from 'utils/test-utils'
import CartButton from '.'
import { CartContextDefaultValues } from 'hooks/use-cart'
import userEvent from '@testing-library/user-event'

describe('<CartButton />', () => {
  it('should render button as Add and call the method on click', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      isInCart: () => false,
      addToCart: jest.fn()
    }

    render(<CartButton id="1" />, { cartProviderProps })

    const button = screen.getByLabelText(/add to cart/i)
    expect(button).toBeInTheDocument()

    userEvent.click(button)
    expect(cartProviderProps.addToCart).toHaveBeenCalledWith('1')
  })

  it('should render button as Remove and call the method on click', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      isInCart: () => true,
      removeFromCart: jest.fn()
    }

    render(<CartButton id="1" />, { cartProviderProps })

    const button = screen.getByLabelText(/remove from cart/i)
    expect(button).toBeInTheDocument()

    userEvent.click(button)
    expect(cartProviderProps.removeFromCart).toHaveBeenCalledWith('1')
  })
})
