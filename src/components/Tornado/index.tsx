import React, { useEffect } from 'react'
import * as S from './styles'

export type ImageProps = {
  src: string
  title?: string
  url?: string
}

export type ImageTornadoProps = {
  images: ImageProps[]
}

const ImageTornado = ({ images }: ImageTornadoProps) => {
  // const randomImage = () => images[Math.floor(Math.random() * images.length)]
  let i = 0
  const randomImage = () => {
    if (i === images.length) i = 0
    return images[i++].src
  }
  // const top = () => Math.random() * innerHeight + 88 + 'px'
  // const top = () => Math.random() * height + 'px'

  const dropImage = () => {
    const section = document.querySelector('section')
    const drop = document.createElement('span')
    const bg = `url("${randomImage()}")`
    // drop.style.top = top()
    const random = Math.random()
    const width = (796 / 2) * random
    const height = (422 / 2) * random
    drop.style.top = Math.random() * innerHeight + 'px'
    drop.style.width = width + 'px'
    drop.style.height = height + 'px'
    drop.style.backgroundImage = bg
    drop.style.backgroundRepeat = 'no-repeat'
    drop.style.backgroundSize = 'cover'
    drop.style.backgroundPosition = 'center'

    section!.appendChild(drop)

    setTimeout(() => {
      drop.remove()
    }, 12000)
  }

  useEffect(() => {
    const interval = setInterval(dropImage, 250)
    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <S.Wrapper>
      <S.Content />
    </S.Wrapper>
  )
}

export default ImageTornado

// export type CardProps = {
//   image: string
//   size: number
// }

// const Card = ({ image, size }: CardProps) => {
//   return <S.Card image={image} size={size} />
// }

// export type ContainerProps = {
//   child: React.ReactNode
// }

// const Container = ({ child }: ContainerProps) => {
//   return <S.Wrapper> </S.Wrapper>
// }
