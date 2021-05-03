import styled, { css } from 'styled-components'
import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'

export type FavoriteProps = {
  optimistic?: boolean
}

const optimisticModifiers = {
  optimistic: () => css`
    opacity: 0.4;
    animation: animate 1s ease-in-out infinite forwards;
    @keyframes animate {
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
  ${({ optimistic }) => css`
    opacity: 1;
    ${optimistic && optimisticModifiers.optimistic()};
  `}
`
export const FavoriteBorderIcon = styled(FavoriteBorder)<FavoriteProps>`
  ${({ optimistic }) => css`
    opacity: ${optimistic ? 0.6 : 1};
  `}
`

export const Wrapper = styled.div`
  position: relative;
`

export const ErrorWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 1.4rem;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`
