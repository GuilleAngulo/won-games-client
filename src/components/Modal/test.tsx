import { render } from 'utils/test-utils'

import Modal from '.'

const props = {
  title: 'Modal Title',
  buttonLabel: 'Button',
  isOpen: true,
  setIsOpen: () => ({})
}

describe('<Modal />', () => {
  it('should render the heading', () => {
    render(<Modal {...props} />)
  })
})
