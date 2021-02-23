import styled, { css, keyframes } from 'styled-components'

export const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`

export const Content = styled.section`
  overflow: hidden;
  background: transparent;
`

const fly = keyframes`
  0% {
    transform: perspective(500px) rotateY(0deg) translateX(-800px);
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: perspective(500px) rotateY(70deg) translateX(500%);
    opacity: 0;
  }
`

export const Card = styled.div`
  ${({ theme }) => css`
    position: absolute;
    background-size: cover;
    border-radius: 0.6em;
    animation: ${fly} 9s linear forwards;
    width: 100%;
    height: 100%;
    opacity: 0.8;
    transition: box-shadow 0.3s, opacity 0.5s;

    &:hover {
      opacity: 1;
      box-shadow: ${`${theme.colors.primary}96`} 0px 4px 16px,
        ${`${theme.colors.primary}96`} 0px 8px 24px,
        ${`${theme.colors.primary}96`} 0px 16px 56px;
    }
  `}
`

// export type CardProps = {
//   src: string
//   width: number
//   height: number
// }

// export const Card = styled.span<CardProps>`
//   ${({ theme, src, width, height }) => css`
//     position: absolute;
//     background-size: cover;
//     /* animation: ${fly} 6s linear forwards; */
//     width: 100%;
//     height: 100%;

//     top: ${Math.random() * height + 'px'};
//     width: ${width / 2}px;
//     height: ${height / 2}px;
//     background-image: ${`url("${src}")`};
//     background-repeat: no-repeat;
//     background-size: cover;
//     background-position: center;

//     &:hover {
//       box-shadow: ${theme.colors.primary} 0px 54px 55px,
//         ${theme.colors.primary} 0px -12px 30px,
//         ${theme.colors.primary} 0px 4px 6px,
//         ${theme.colors.primary} 0px 12px 13px,
//         ${theme.colors.primary} 0px -3px 5px;
//     }
//   `}
// `
