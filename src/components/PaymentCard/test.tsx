import { render } from 'utils/test-utils'

import PaymentCard from '.'

const props = {
  number: '4567 3456 5677 4332',
  date: '04/21',
  initialName: 'NICOLAS CAGE',
  flag: <span>Visa</span>
}

describe('<PaymentCard />', () => {
  it('should render the heading', () => {
    render(<PaymentCard {...props} />)
  })
})
