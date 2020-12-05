import CardsList, { CardsListProps } from 'components/CardsList'
import Profile from 'templates/Profile'

import mockCards from 'components/PaymentOptions/mock'

export default function ProfileCards({ cards }: CardsListProps) {
  return <Profile></Profile>
}

export async function getServerSideProps() {
  return {
    props: {
      cards: mockCards
    }
  }
}
