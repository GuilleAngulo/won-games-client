import styled, { css, DefaultTheme, keyframes } from 'styled-components'
import media from 'styled-media-query'

type CardProps = {
  size?: 'normal' | 'large'
}

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(6, 1fr);
    width: 100%;
    height: 100%;
    position: absolute;
    padding: ${theme.spacings.xsmall};
    animation: ${fadeIn} ${theme.transition.default};
  `}
`

export const LogoWrapper = styled.div`
  grid-column: 1;
  grid-row: 1;
  justify-self: start;
  align-self: start;
  width: 6rem;
`

export const Contactless = styled.div`
  grid-column: 4/ -1;
  grid-row: 1;
  justify-self: end;
  align-self: start;
  width: 2.2rem;
`

export const Number = styled.div`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    letter-spacing: 0.2rem;
    word-spacing: 0.2rem;
    grid-column: 1 / span 4;
    grid-row: 2 / span 2;
    align-self: end;
    margin-left: ${theme.spacings.xxsmall};
  `}
`
export const Date = styled.h3`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.white};
    letter-spacing: 0.2rem;
    grid-column: 1 / -1;
    grid-row: 4 / span 2;
    align-self: end;
    margin-left: ${theme.spacings.xxsmall};

    & > span {
      text-transform: uppercase;
      font-size: 0.8rem;
      letter-spacing: 0;
      opacity: 0.7;
    }
  `}
`

export const Name = styled.h3`
  ${({ theme }) => css`
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.white};
    letter-spacing: 0.2rem;
    word-spacing: 0.3em;
    text-transform: uppercase;
    grid-column: 1 / -1;
    grid-row-start: 6;
    align-self: end;
    margin-left: ${theme.spacings.xxsmall};
  `}
`

export const Flag = styled.div`
  width: 5.4rem;
  height: 1.8rem;
  grid-column: 4/ -1;
  grid-row: 6;
  justify-self: end;
  align-self: end;
`

const wrapperModifiers = {
  normal: (theme: DefaultTheme) => css`
    width: 32rem;
    height: 20rem;

    ${Flag} {
      width: 6.75rem;
      height: 2.25rem;
    }

    ${Contactless} {
      width: 2.5rem;
    }

    ${LogoWrapper} {
      width: 7rem;
    }

    ${Name} {
      font-size: ${theme.font.sizes.small};
    }

    ${Number} {
      font-size: calc(${theme.font.sizes.medium} * 1.1);
      letter-spacing: 0.3rem;
      word-spacing: 0.3em;
    }
  `,

  large: (theme: DefaultTheme) => css`
    width: 48rem;
    height: 30rem;

    ${Container} {
      padding: ${theme.spacings.small};
    }

    ${Flag} {
      width: 7.2rem;
      height: 2.4rem;
    }

    ${Contactless} {
      width: 3.5rem;
    }

    ${LogoWrapper} {
      width: 8rem;
    }

    ${Name} {
      font-size: calc(${theme.font.sizes.xlarge} * 1.1);
    }

    ${Date} {
      font-size: ${theme.font.sizes.large};
      & > span {
        font-size: 1.1rem;
      }
    }

    ${Number} {
      font-size: calc(${theme.font.sizes.xlarge} * 1.3);
      letter-spacing: 0.4rem;
      word-spacing: 0.4em;
    }
  `
}

export const Wrapper = styled.div<CardProps>`
  ${({ theme, size }) => css`
    position: relative;
    width: 28rem;
    height: 17.5rem;
    border-radius: 32px;
    box-shadow: rgba(39, 77, 153, 0.2) 0px 30px 60px,
      rgba(255, 255, 255, 0.3) 0px 0px 0px 0.5px inset;
    ${media.greaterThan('small')`
      ${!!size && wrapperModifiers[size](theme)}
    `};
  `}
`

const fadeIn = keyframes`
from {
    opacity: 0 ;
  }

  to {
    opacity:1;
  }
`
