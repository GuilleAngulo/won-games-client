import styled, { css } from 'styled-components'

export const InputWrapper = styled.main`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`

export const Input = styled.input`
  ${({ theme }) => css`
    width: 4.8rem;
    height: 4.8rem;
    font-size: ${theme.font.sizes.large};
    font-family: ${theme.font.family};
    font-weight: ${theme.font.bold};
    border: 0.2rem solid;
    border-color: ${theme.colors.lightGray};
    transition: background border ${theme.transition.fast};
    position: relative;
    outline: none;
    background: ${theme.colors.lightGray};
    padding: 0 ${theme.spacings.xsmall};
    margin: 0 ${theme.spacings.xxsmall};

    &:focus-within {
      border-color: ${theme.colors.primary};
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`
