import styled, { css } from 'styled-components'
import { Favorite } from '@styled-icons/material-outlined'

export type FavoriteProps = {
  isOptimistic?: boolean
}

const favoriteIconModifiers = {
  isOptimistic: () => css`
    animation: optimistic 1s ease-in-out infinite forwards;
    @keyframes optimistic {
      0%,
      100% {
        opacity: 0.4;
      }
      50% {
        opacity: 0.6;
      }
    }
  `
}

export const FavoriteIcon = styled(Favorite)<FavoriteProps>`
  ${({ isOptimistic }) => css`
    ${isOptimistic && favoriteIconModifiers.isOptimistic()};
  `}
`
