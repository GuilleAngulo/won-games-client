import styled, { css } from 'styled-components'

export const Wrapper = styled.main``

export const Overlay = styled.div`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    z-index: ${theme.layers.alwaysOnTop};

    display: flex;
    align-content: center;
    align-items: center;
    flex-direction: column;

    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(5px);
  `}
`
export const ModalWrapper = styled.div`
  ${({ theme }) => css`
    /*width: 50%;
    height: 50%;*/
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

export const CloseButton = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    position: absolute;
    right: 0;
    top: -0.5rem;
    cursor: pointer;
    svg {
      width: 2.5rem;
    }
  `}
`
