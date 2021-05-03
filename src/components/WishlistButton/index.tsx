import { useSession } from 'next-auth/client'

import Button, { ButtonProps } from 'components/Button'
import { useWishlist } from 'hooks/use-wishlist'

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

  const handleClick = async () => {
    return isInWishlist(id)
      ? await removeFromWishlist(id)
      : await addToWishlist(id)
  }

  const ButtonText = isInWishlist(id)
    ? 'Remove from Wishlist'
    : 'Add to Wishlist'

  if (!session) return null

  const isInWishlistNumber = isInWishlist(id)
  const isOptimistic = isInWishlistNumber === -1
  return (
    <Button
      icon={
        isInWishlistNumber ? (
          <S.FavoriteIcon aria-label={ButtonText} optimistic={isOptimistic} />
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
