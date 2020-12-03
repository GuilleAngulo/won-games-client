import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { PaymentCardProps } from '.'

type CardProps = {
  size?: 'normal' | 'large'
}

const wrapperModifiers = {
  normal: () => css`
    width: 32rem;
    height: 20rem;
  `,
  large: () => css`
    width: 48rem;
    height: 30rem;
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
      ${!!size && wrapperModifiers[size]}
    `};
  `}
`
export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-rows: 1fr 4fr 1fr;
    width: 100%;
    height: 100%;
    position: absolute;
    padding: ${theme.spacings.xsmall};
  `}
`

export const Header = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    height: fit-content;
    justify-content: space-between;
  `}
`

const flagModifiers = {
  normal: () => css`
    width: 7.2rem;
    height: 2.4rem;
  `,
  large: () => css`
    width: 7.2rem;
    height: 2.4rem;
    margin: 2.4rem;
  `
}

export const FlagWrapper = styled.div<CardProps>`
  ${({ theme, size }) => css`
    position: absolute;
    width: 5.4rem;
    height: 1.8rem;
    bottom: 0;
    right: 0;
    margin-bottom: ${theme.spacings.xsmall};
    margin-right: ${theme.spacings.xsmall};
    ${media.greaterThan('small')`
      ${!!size && flagModifiers[size]}
    `};
  `}
`

const numberwrapperModifiers = {
  normal: () => css`
    font-size: 1.6rem;
    letter-spacing: 0.4rem;
    word-spacing: 0.4em;
  `,
  large: () => css`
    font-size: 2.4rem;
    letter-spacing: 0.4rem;
    word-spacing: 0.4em;
  `
}

export const Number = styled.div<CardProps>`
  ${({ theme, size }) => css`
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    letter-spacing: 0.2rem;
    word-spacing: 0.3em;
    margin-bottom: ${theme.spacings.xsmall};
    ${media.greaterThan('small')`
      ${!!size && numberwrapperModifiers[size]}
    `};
  `}
`

const contactModifiers = {
  normal: () => css`
    width: 4.5rem;
    height: 4.5rem;
  `,
  large: () => css`
    width: 5.5rem;
    height: 5.5rem;
  `
}
export const ContactLessWrapper = styled.div<CardProps>`
  ${({ theme, size }) => css`
    color: ${theme.colors.white};
    width: 3.5rem;
    height: 3.5rem;
    ${media.greaterThan('small')`
      ${!!size && contactModifiers[size]}
    `};
  `}
`

export const LogoWrapper = styled.div`
  ${({ theme }) => css`
    width: 8rem;
    ${media.greaterThan('small')`
      width: 11rem;
    `}
  `}
`
export const Valid = styled.h3`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.white};
    letter-spacing: 0.2rem;
    margin-bottom: ${theme.spacings.medium};
    & > span {
      text-transform: uppercase;
      font-size: ${theme.font.sizes.xsmall};
      letter-spacing: 0;
      opacity: 0.7;
    }
  `}
`
export const Body = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    margin-left: ${theme.spacings.xsmall};
  `}
`

export const Name = styled.div<CardProps>`
  ${({ theme, size }) => css`
    font-family: ${theme.font.family};
    font-size: 2.2rem;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    letter-spacing: 0.2rem;
    word-spacing: 0.3em;
    text-transform: uppercase;
    margin-left: ${theme.spacings.xsmall};
  `}
`
export const Footer = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 100%;
    height: fit-content;
    justify-content: space-between;
  `}
`
