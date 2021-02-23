import styled, { css } from 'styled-components'

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    width: 42rem;
    height: 70vh;
    float: right;
    text-align: left;
    flex-direction: column;
    align-items: flex-end;
    margin-top: 8rem;
    margin-right: ${theme.spacings.xxlarge};
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
