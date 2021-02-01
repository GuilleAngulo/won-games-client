import styled, { css, keyframes } from 'styled-components'
import { CardProps } from './index'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    height: 100vh;
    overflow: hidden;
    background: transparent;

    span {
      position: absolute;
      animation: ${fly} 12s linear forwards;
      opacity: 0.8;
      transition: box-shadow 0.3s;
    }
    span:hover {
      box-shadow: ${theme.colors.primary} 0px 10px 36px 0px,
        ${theme.colors.primary} 0px 0px 0px 1px;
      opacity: 1;
    }
  `}
`
export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 38rem;
    float: right;
    text-align: left;
    flex-direction: column;
    align-items: flex-end;
    margin-top: ${theme.spacings.xxlarge};
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.huge};
    margin-bottom: ${theme.spacings.xsmall};
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.light};
    margin-bottom: ${theme.spacings.medium};

    strong {
      color: ${theme.colors.primary};
    }
  `}
`

export const Link = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    font-size: ${theme.font.sizes.xlarge};
    text-decoration: none;
    color: ${theme.colors.primary};
    width: 100%;

    &:hover {
      text-decoration: underline;
    }

    > svg {
      margin-left: ${theme.spacings.xxsmall};
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
    transform: perspective(500px) rotateY(50deg) translateX(500%);
    opacity: 0;
  }
}`

export const Card = styled.span<CardProps>`
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
`
