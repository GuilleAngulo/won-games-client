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

export const Visibility = styled(Icon)`
  ${({ theme }) => css`
    order: 1;
    color: ${darken(0.2, theme.colors.lightGray)};
    cursor: pointer;

    &:hover {
      color: ${theme.colors.gray};
      transition: ${theme.transition.fast};
    }
  `}
`
