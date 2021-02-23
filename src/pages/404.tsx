import Page404Template, { Page404Props } from 'templates/Page404'

import { initializeApollo } from 'utils/apollo'
import { QUERY_GAMES } from 'graphql/queries/games'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'

export default function Page404({ images }: Page404Props) {
  return <Page404Template images={images} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 40 }
  })

  return {
    props: {
      images: data.games.map((game) => ({
        src: game.cover ? `http://localhost:1337${game.cover.url}` : '',
        title: game.name,
        url: game.slug
      }))
    }
  }
}
