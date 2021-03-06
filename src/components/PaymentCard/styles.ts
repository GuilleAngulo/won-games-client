import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

type CardProps = {
  size?: 'normal' | 'large'
  glassmorphism?: boolean
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
    align-self: center;
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
  ${({ theme }) => css`
    width: 4rem;
    position: absolute;
    grid-column: 4/ -1;
    grid-row: 6;
    justify-self: end;
    align-self: flex-end;
    color: ${theme.colors.white};
    padding-bottom: 0.4rem;
  `}
`

const wrapperModifiers = {
  normal: (theme: DefaultTheme) => css`
    width: 32rem;
    height: 20rem;
    border-radius: 2.2rem;

    ${Flag} {
      width: 4.2rem;
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
    border-radius: 3.2rem;

    ${Container} {
      padding: ${theme.spacings.small};
    }

    ${Flag} {
      width: 7.2rem;
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
  `,
  glassmorphism: () => css`
    background: rgba(255, 255, 255, 0.1);
    border-top: 0.2rem solid rgba(255, 255, 255, 0.3);
    border-left: 0.2rem solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(5px);
  `
}

export const Wrapper = styled.div<CardProps>`
  ${({ theme, size, glassmorphism }) => css`
    position: relative;
    width: 28rem;
    height: 17.5rem;
    border-radius: 2rem;
    box-shadow: rgba(39, 77, 153, 0.2) 0px 30px 60px,
      rgba(255, 255, 255, 0.3) 0px 0px 0px 0.5px inset;
    overflow: hidden;
    ${media.greaterThan('small')`
      ${!!size && wrapperModifiers[size](theme)}
    `};
    ${glassmorphism && wrapperModifiers.glassmorphism()}
  `}
`
