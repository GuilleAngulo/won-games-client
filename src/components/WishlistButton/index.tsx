import { useSession } from 'next-auth/client'

import Button, { ButtonProps } from 'components/Button'
import { IsInWishlistResponse, useWishlist } from 'hooks/use-wishlist'

import { FavoriteBorder } from '@styled-icons/material-outlined'

import * as S from './styles'

export type WishlistButtonProps = {
  id: string
  hasText?: boolean
} & Pick<ButtonProps, 'size'>

const WishlistButton = ({
  id,
  hasText,
  size = 'small'
}: WishlistButtonProps) => {
  const [session] = useSession()
  const {
    isInWishlist,
    addToWishlist,
    removeFromWishlist,
    loading: loadingApollo
  } = useWishlist()

  const handleClick = () => {
    return isInWishlist(id) ? removeFromWishlist(id) : addToWishlist(id)
  }

  const ButtonText = isInWishlist(id)
    ? 'Remove from Wishlist'
    : 'Add to Wishlist'

  if (!session) return null

  const isOptimistic = isInWishlist(id) === IsInWishlistResponse.optimistic

  return (
    <Button
      icon={
        isInWishlist(id) ? (
          <S.FavoriteIcon aria-label={ButtonText} isOptimistic={isOptimistic} />
        ) : (
          <FavoriteBorder aria-label={ButtonText} />
        )
      }
      onClick={handleClick}
      minimal
      size={size}
      disabled={loadingApollo}
    >
      {hasText && ButtonText}
    </Button>
  )
}

export default WishlistButton
