import styled, { css } from 'styled-components'

import * as ButtonStyles from 'components/Button/styles'

export const Overlay = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    z-index: ${theme.layers.alwaysOnTop};

    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(5px);
  `}
`
export const Modal = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: ${theme.border.radius};
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
  `}
`

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: flex;
    align-content: center;
    flex-direction: column;
    padding: ${theme.spacings.small};

    ${ButtonStyles.Wrapper} {
      svg {
        width: 2.4rem;
      }
    }
  `}
`

export const CloseButton = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
    svg {
      width: 2.5rem;
    }
  `}
`

export const Message = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.darkGray};
    padding-bottom: ${theme.spacings.xxsmall};
    font-style: italic;
  `}
`

export const Header = styled.div``

export const Body = styled.div`
  ${({ theme }) => css`
    padding-bottom: ${theme.spacings.xsmall};
  `}
`
