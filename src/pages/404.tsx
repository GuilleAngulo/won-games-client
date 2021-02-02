import { Container } from 'components/Container'
// import Empty from 'components/Empty'
import Error404, { Error404Props } from 'components/Error404'
import Base from 'templates/Base'

import { initializeApollo } from 'utils/apollo'
import { QUERY_GAMES } from 'graphql/queries/games'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'

export default function Page404({ images }: Error404Props) {
  return (
    <Base>
      <Container>
        {/* <Empty
          title="404: Not found"
          description="Oops.. this page does not exist. Go back to the store and enjoy our offers"
        /> */}
        <Error404 images={images} />
      </Container>
    </Base>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 40 }
  })

  return {
    props: {
      images: data.games.map((game) =>
        game.cover ? `http://localhost:1337${game.cover.url}` : ''
      )
    }
  }
}
