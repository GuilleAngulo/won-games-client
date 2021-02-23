import styled, { css, keyframes } from 'styled-components'
// import { CardProps } from './index'

export const Wrapper = styled.div`
  position: relative;
`

export const Content = styled.section`
  ${({ theme }) => css`
    overflow: hidden;
    background: transparent;
    span {
      position: absolute;
      animation: ${fly} 10s linear forwards;
      transition: box-shadow 0.3s;
      border-radius: 0.6em;
    }
    span:hover {
      box-shadow: ${`${theme.colors.primary}96`} 0px 4px 16px,
        ${`${theme.colors.primary}96`} 0px 8px 24px,
        ${`${theme.colors.primary}96`} 0px 16px 56px;
    }
  `}
`

const fly = keyframes`
  0% {
    transform: perspective(500px) rotateY(0deg) translateX(-500px);
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: perspective(500px) rotateY(90deg) translateX(500%);
    opacity: 0;
  }
`

/* export const Card = styled.span<CardProps>`
  ${({ theme, size, image }) => css`
    position: absolute;
    background-size: cover;
    animation: ${fly} 6s linear forwards;
    top: ${Math.random() * innerHeight + 'px'};
    width: 100%;
    height: 100%;
    width: ${50 + size + 'px'};
    height: ${50 + size + 'px'};
    background: ${`url(${image})`};
    background-repeat: no-repeat;
    background-size: contain;

    &:hover {
      box-shadow: ${theme.colors.primary} 0px 54px 55px,
        ${theme.colors.primary} 0px -12px 30px,
        ${theme.colors.primary} 0px 4px 6px,
        ${theme.colors.primary} 0px 12px 13px,
        ${theme.colors.primary} 0px -3px 5px;
    }
  `}
` */
