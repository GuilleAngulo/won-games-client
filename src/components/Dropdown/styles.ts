import styled, { css } from 'styled-components'
import { ChevronDown } from '@styled-icons/boxicons-regular/ChevronDown'

export const Title = styled.div`
  ${({ theme }) => css`
    cursor: pointer;
    color: ${theme.colors.white};
    position: relative;
    display: flex;
    align-items: center;
    padding-right: 2.4rem;
    z-index: ${theme.layers.alwaysOnTop};

    &:focus {
      outline-offset: 0.2rem;
      outline: 0.2rem solid;
      &:not(:focus-visible) {
        outline: none;
      }
    }
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    background: ${theme.colors.white};
    color: ${theme.colors.black};
    margin-top: ${theme.spacings.small};
    position: absolute;
    right: 0;
    z-index: ${theme.layers.alwaysOnTop};
    cursor: auto;

    &::before {
      content: '';
      position: absolute;
      border-right: 1.2rem solid transparent;
      border-left: 1.2rem solid transparent;
      border-bottom: 1.2rem solid ${theme.colors.white};
      top: -1.2rem;
      right: 2.4rem;
    }
  `}
`

export const Overlay = styled.div`
  ${({ theme }) => css`
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: ${theme.layers.overlay};
  `}
`

type WrapperProps = {
  isOpen?: boolean
}

const wrapperModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0) scaleY(1);
    visibility: visible;
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(-2rem) scaleY(0);
    visibility: hidden;
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isOpen }) => css`
    position: relative;
    width: max-content;
    ${Content},
    ${Overlay} {
      transform-origin: top center;
      transition: transform 0.2s ease-in, opacity ${theme.transition.default};
      ${isOpen && wrapperModifiers.open()}
      ${!isOpen && wrapperModifiers.close()}
    }
  `}
`

const arrowModifiers = {
  open: () => css`
    transform: rotate(180deg);
  `
}

export const Chevron = styled(ChevronDown)<WrapperProps>`
  ${({ isOpen, theme }) => css`
    transition: transform ${theme.transition.default};
    transform: rotate(0);
    ${isOpen && arrowModifiers.open()};
  `}
`
