import { useMutation } from '@apollo/client'
import { GameCardProps } from 'components/GameCard'
import {
  QueryWishlist,
  QueryWishlist_wishlists_games
} from 'graphql/generated/QueryWishlist'
import {
  MUTATION_CREATE_WISHLIST,
  MUTATION_UPDATE_WISHLIST
} from 'graphql/mutations/wishlist'
import { QUERY_WISHLIST, useQueryWishlist } from 'graphql/queries/wishlist'
import { useSession } from 'next-auth/client'
import { useMemo } from 'react'
import { createContext, useContext, useEffect, useState } from 'react'
import { gamesMapper } from 'utils/mappers'

export type WishlistContextData = {
  items: GameCardProps[]
  // isInWishlist: (id: string) => boolean
  isInWishlist: (id: string) => number
  addToWishlist: (id: string) => void
  removeFromWishlist: (id: string) => void
  loading: boolean
}

export const WishlistContextDefaultValues = {
  items: [],
  // isInWishlist: () => false,
  isInWishlist: () => 0,
  addToWishlist: () => null,
  removeFromWishlist: () => null,
  loading: false
}

export const WishlistContext = createContext<WishlistContextData>(
  WishlistContextDefaultValues
)

export type WishlistProviderProps = {
  children: React.ReactNode
}

const gameSkeleton = (id: string) => {
  return {
    __typename: 'Game',
    id: '-' + id,
    name: '',
    slug: '',
    cover: {
      __typename: 'UploadFile',
      url: ''
    },
    developers: [
      {
        __typename: 'Developer',
        name: ''
      }
    ],
    price: ''
  }
}
const WishlistProvider = ({ children }: WishlistProviderProps) => {
  const [session] = useSession()
  const [wishlistId, setWishlistId] = useState<string | null>()
  const [wishlistItems, setWishlistItems] = useState<
    QueryWishlist_wishlists_games[]
  >([])

  const [createList, { loading: loadingCreate }] = useMutation(
    MUTATION_CREATE_WISHLIST,
    {
      context: { session },
      onCompleted: (data) => {
        setWishlistItems(data?.createWishlist?.wishlist?.games || [])
        setWishlistId(data?.createWishlist?.wishlist?.id)
      }
    }
  )
  const [updateList, { loading: loadingUpdate }] = useMutation(
    MUTATION_UPDATE_WISHLIST,
    {
      context: { session },
      onCompleted: (data) => {
        setWishlistItems(data?.updateWishlist?.wishlist?.games || [])
      }
    }
  )

  const options = {
    skip: !session?.user?.email,
    context: { session },
    variables: {
      identifier: session?.user?.email as string
    }
  }

  const { data, loading: loadingQuery } = useQueryWishlist(options)

  useEffect(() => {
    setWishlistItems(data?.wishlists[0]?.games || [])
    setWishlistId(data?.wishlists[0]?.id)
  }, [data])

  const wishlistIds = useMemo(() => wishlistItems.map((game) => game.id), [
    wishlistItems
  ])

  // const isInWishlist = (id: string) =>
  //   wishlistItems.some((game) => game.id === id)

  const isInWishlist = (id: string) => {
    const index = wishlistItems.findIndex(
      (game) => String(Math.abs(Number(game.id))) === id
    )
    //Not found
    if (index === -1) return 0

    // Found optimistic response
    if (wishlistItems[index].id.startsWith('-')) {
      return -1
    }

    // Found server response
    return 1
  }

  const addToWishlist = (id: string) => {
    if (!wishlistId) {
      return createList({
        variables: { input: { data: { games: [...wishlistItems, id] } } },
        optimisticResponse: {
          createWishlist: {
            wishlist: {
              id: String(Math.round(Math.random() * -1000000)),
              games: [gameSkeleton(id)],
              __typename: 'Wishlist'
            },
            __typename: 'createWishlistPayload'
          }
        },
        update: (cache, payload) => {
          const newWishlist = payload.data.createWishlist.wishlist

          const existingWishlist = cache.readQuery<QueryWishlist>({
            query: QUERY_WISHLIST,
            ...options
          })

          if (existingWishlist && newWishlist) {
            cache.writeQuery({
              query: QUERY_WISHLIST,
              data: {
                wishlists: [newWishlist]
              },
              ...options
            })
          }
        }
      })
    }

    return updateList({
      variables: {
        input: {
          where: { id: wishlistId },
          data: { games: [...wishlistIds, id] }
        }
      },
      optimisticResponse: {
        updateWishlist: {
          wishlist: {
            id: wishlistId,
            games: [...wishlistItems, gameSkeleton(id)],
            __typename: 'Wishlist'
          },
          __typename: 'updateWishlistPayload'
        }
      }
    })
  }
  const removeFromWishlist = (id: string) => {
    return updateList({
      variables: {
        input: {
          where: { id: wishlistId },
          data: { games: wishlistIds.filter((gameId: string) => gameId !== id) }
        }
      },
      optimisticResponse: {
        updateWishlist: {
          wishlist: {
            id: wishlistId,
            games: wishlistItems.filter(({ id: gameId }) => gameId !== id),
            __typename: 'Wishlist'
          },
          __typename: 'updateWishlistPayload'
        }
      }
    })
  }

  return (
    <WishlistContext.Provider
      value={{
        items: gamesMapper(wishlistItems),
        isInWishlist,
        addToWishlist,
        removeFromWishlist,
        loading: loadingQuery || loadingCreate || loadingUpdate
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

const useWishlist = () => useContext(WishlistContext)

export { WishlistProvider, useWishlist }
