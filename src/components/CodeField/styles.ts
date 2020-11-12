import styled, { css, DefaultTheme } from 'styled-components'

import { CodeFieldProps } from '.'

type WrapperProps = Pick<CodeFieldProps, 'disabled'> & {
  hasError?: boolean
} & { isLoading?: boolean }

export const InputWrapper = styled.fieldset<CodeFieldProps>`
  ${({ theme, size }) => css`
    display: grid;
    grid-template-columns: repeat(${size}, 1fr);
    grid-template-rows: 1fr;
    grid-gap: 1rem;
    justify-items: start;
    margin: ${theme.spacings.xxsmall} 0;
    border: none;
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    width: 4.8rem;
    height: 4.8rem;
    font-size: ${theme.font.sizes.large};
    font-family: ${theme.font.family};
    font-weight: ${theme.font.bold};
    border: 0.2rem solid;
    border-color: ${theme.colors.primary};
    transition: background border ${theme.transition.fast};
    position: relative;
    outline: none;
    background: ${theme.colors.lightGray};
    padding: 0 ${theme.spacings.xsmall};

    &:focus-within {
      border-color: ${theme.colors.primary};
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    &:::before {
      content: '';
      display: block;
      height: 0;
      width: 0;
      padding-bottom: calc(100%);
    }
  `}
`

export const Legend = styled.legend`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`

export const Error = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.small};

    &::before {
      content: '\\d7';
      font-size: ${theme.font.sizes.large};
      padding-right: 0.4rem;
      vertical-align: middle;
    }
  `}
`

export const Loading = styled.span`
  ${({ theme }) => css`
    position: relative;
    padding-left: 2rem;
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.small};

    &::before {
      content: '';
      top: 0;
      left: 0;
      position: absolute;
      border: 0.2rem solid ${theme.colors.lightGray};
      border-left-color: ${theme.colors.primary};
      border-radius: 50%;
      width: ${theme.font.sizes.small};
      height: ${theme.font.sizes.small};
      animation: spin 1s linear infinite;
      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
    }
  `}
`

const wrapperModifiers = {
  error: (theme: DefaultTheme) => css`
    ${Legend} {
      color: ${theme.colors.red};
    }
    ${Input} {
      border-color: ${theme.colors.red};
    }
  `,
  disabled: (theme: DefaultTheme) => css`
    ${Legend},
    ${Input} {
      cursor: not-allowed;
      color: ${theme.colors.gray};

      &::placeholder {
        color: currentColor;
      }
    }
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, hasError, disabled }) => css`
    ${hasError && wrapperModifiers.error(theme)}
    ${disabled && wrapperModifiers.disabled(theme)}
  `}
`
