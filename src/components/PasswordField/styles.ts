import styled, { css, DefaultTheme } from 'styled-components'
import { darken } from 'polished'

import { Icon, Input } from 'components/TextField/styles'

const passwordModifiers = {
  password: (theme: DefaultTheme) => css`
    letter-spacing: 0.17rem;
    font-weight: ${theme.font.bold};

    &::placeholder {
      letter-spacing: 0;
      font-weight: ${theme.font.normal};
    }
  `
}

export const PasswordInput = styled(Input)`
  ${({ theme, type }) => css`
    padding-left: ${theme.spacings.small};
    padding-right: ${theme.spacings.small};
    width: calc(100% - 4.4rem);
    ${type === 'password' && passwordModifiers.password(theme)}
  `}
`

const visibilityModifiers = {
  empty: () => css`
    opacity: 0;
    pointer-events: none;
  `
}

type VisibilityProps = {
  isEmpty?: boolean
}

export const Visibility = styled(Icon)<VisibilityProps>`
  ${({ theme, isEmpty }) => css`
    order: 1;
    color: ${darken(0.2, theme.colors.lightGray)};
    cursor: pointer;
    opacity: 1;
    transition: opacity ${theme.transition.default};

    &:hover {
      color: ${theme.colors.gray};
      transition: ${theme.transition.fast};
    }

    ${isEmpty && visibilityModifiers.empty()};
  `}
`
