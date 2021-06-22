import styled, { css, DefaultTheme } from 'styled-components'
import { opacify } from 'polished'
import media from 'styled-media-query'

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

export const Result = styled.a`
  ${({ theme }) => css`
    display: flex;
    padding: ${theme.spacings.xxsmall};
    background: ${theme.colors.lightBg};
    color: ${theme.colors.darkGray};
    height: 10rem;
    font-size: ${theme.font.sizes.small};
    cursor: pointer;
    text-decoration: none;
    border-radius: ${theme.border.radius};
    transition: background ${theme.transition.fast},
      color ${theme.transition.fast};

    &:hover {
      color: ${theme.colors.white};
      background: ${theme.colors.primary};

      * > time {
        color: ${theme.colors.lightGray};
      }
    }
  `}
`

export const Title = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  `}
`

export const Description = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const Info = styled.div`
  ${({ theme }) => css`
    padding-right: ${theme.spacings.small};
    padding-left: ${theme.spacings.xsmall};
    overflow: hidden;

    em {
      font-style: normal;
      font-weight: ${theme.font.bold};
      color: ${theme.colors.black};
      background: #fdf39a;
      border-radius: ${theme.border.radius};
    }
  `}
`

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    position: relative;
    min-width: 22rem;
    height: 100%;
  `}
`

export const Details = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacings.xxsmall};
  `}
`

export const Price = styled.strong`
  ${({ theme }) => css`
    display: inline-flex;
    font-weight: ${theme.font.bold};
    padding: 0 0.4rem;
    border-radius: ${theme.border.radius};
    background-color: ${theme.colors.secondary};
    color: ${theme.colors.white};
  `}
`

export const List = styled.ul`
  ${({ theme }) => css`
    position: absolute;
    list-style: none;
    width: 100%;
    max-height: 64rem;
    margin-top: 0.4rem;
    right: 0;
    background: ${theme.colors.lightBg};
    box-shadow: 0 0.2rem 1.6rem 0.1rem ${opacify(0.2, theme.colors.black)};
    overflow-y: auto;
    overflow-x: hidden;
    z-index: ${theme.layers.alwaysOnTop};

    ${media.lessThan('large')`
      position: fixed;
      bottom: 0;
      right: 0;
      left: 0;
    `}
  `}
`

export const ListItem = styled.li`
  ${({ theme }) => css`
    padding: 0.2rem ${theme.spacings.xxsmall};

    &:first-child {
      padding-top: ${theme.spacings.xxsmall};
    }
    &:last-child {
      padding-bottom: ${theme.spacings.xxsmall};
    }
  `}
`

export const SearchForm = styled.form`
  display: flex;
  justify-content: flex-end;
`

export const Input = styled.input<WrapperProps>`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    padding-right: ${theme.spacings.small};
    background: transparent;
    border: 0;
    outline: none;

    &::placeholder {
      color: ${theme.colors.white};
    }

    ::-webkit-search-cancel-button {
      -webkit-appearance: none;
    }

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 ${theme.spacings.small}
        ${theme.colors.lightGray} inset;
      filter: none;
      &::first-line {
        font-family: ${theme.font.family};
        font-size: ${theme.font.sizes.medium};
      }
    }
  `}
`

const inputModifiers = {
  open: (theme: DefaultTheme) => css`
    background: ${theme.colors.darkGray};
    border-color: white;
    width: 100%;
    ${Input} {
      transition: opacity ${theme.transition.default} 0.2s;
      width: 100%;
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
    }
  `,
  close: (theme: DefaultTheme) => css`
    background: none;
    border-color: transparent;
    width: 0;
    ${Input} {
      transition: opacity ${theme.transition.fast};
      width: 0;
      opacity: 0;
      pointer-events: none;
      visibility: hidden;
    }
  `
}

export const InputWrapper = styled.div<WrapperProps>`
  ${({ theme, isOpen }) => css`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 ${theme.spacings.xsmall};
    border-radius: ${theme.border.radius};
    z-index: ${theme.layers.alwaysOnTop};
    border: 0.1rem solid;
    transition: width ${theme.transition.default},
      border-color ${theme.transition.fast} 0.1s,
      background ${theme.transition.fast} 0.1s;

    ${isOpen && inputModifiers.open(theme)}
    ${!isOpen && inputModifiers.close(theme)}
  `}
`

export const Icon = styled.div`
  ${({ theme }) => css`
    display: flex;
    color: ${theme.colors.white};
    order: 1;
    cursor: pointer;

    & > svg {
      width: 2.4rem;
      height: 2.4rem;
    }
  `}
`

export const Platform = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
`

export const PlatformIcon = styled.div`
  ${({ theme }) => css`
    & > svg {
      fill: ${theme.colors.lightGray};
      width: 1.4rem;
      height: 1.4rem;
    }
  `}
`

export const ReleaseYear = styled.time`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray};
    margin: 0 ${theme.spacings.xxsmall};
  `}
`

const wrapperModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
    visibility: visible;
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isOpen }) => css`
    position: relative;
    width: 100%;

    ${Overlay} {
      transition: opacity ${theme.transition.default};
      ${isOpen && wrapperModifiers.open()}
      ${!isOpen && wrapperModifiers.close()}
    }

    ${List} {
      transform-origin: top center;
      transition: transform 0.2s ease-in, opacity ${theme.transition.default};
      transform: ${isOpen ? 'translateY(0.4rem)' : 'translateY(0)'};
      ${isOpen && wrapperModifiers.open()}
      ${!isOpen && wrapperModifiers.close()}
    }
  `}
`

export const NoResultsWrapper = styled.li`
  ${({ theme }) => css`
    height: calc(10rem + ${theme.spacings.xxsmall} + ${theme.spacings.xxsmall});
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`
export const NoResultsTitle = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
  `}
`

export const NoResultsInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: 0 ${theme.spacings.small};
  `}
`

export const NoResultsDescription = styled.p``

export const NoResultsLink = styled.a`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    text-decoration: none;
    color: ${theme.colors.primary};
    font-weight: ${theme.font.bold};
  `}
`
