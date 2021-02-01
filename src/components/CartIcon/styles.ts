import styled, { css, keyframes } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    width: 2.4rem;
    height: 2.4rem;
    position: relative;
  `}
`

export const Badge = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.secondary};
    color: ${theme.colors.white};
    font-size: 1rem;
    border-radius: 50%;
    width: 1.6rem;
    height: 1.6rem;
    position: absolute;
    top: -0.4rem;
    right: -0.4rem;
    animation: ${fadeIn} 0.4s;
    font-feature-settings: 'tnum';
    font-variant-numeric: tabular-nums;
  `}
`

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-0.6rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`
