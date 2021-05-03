import { GameFragment } from 'graphql/fragments/game'
import { initializeApollo } from 'utils/apollo'

export function readQueryGame(id: string) {
  const client = initializeApollo()
  return client.readFragment({
    id: `Game:${id}`,
    fragment: GameFragment
  })
}
