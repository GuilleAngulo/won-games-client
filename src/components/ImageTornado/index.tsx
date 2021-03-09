import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import * as S from './styles'

const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min

const useRandomInterval = (
  callback: () => void,
  minDelay: number,
  maxDelay: number
) => {
  const timeoutId = useRef<number | null>(null)
  const savedCallback = useRef(callback)
  useEffect(() => {
    savedCallback.current = callback
  })
  useEffect(() => {
    const isEnabled =
      typeof minDelay === 'number' && typeof maxDelay === 'number'
    if (isEnabled) {
      const handleTick = () => {
        const nextTickAt = random(minDelay, maxDelay)
        timeoutId.current = window.setTimeout(() => {
          savedCallback.current()
          handleTick()
        }, nextTickAt)
      }
      handleTick()
    }
    return () => window.clearTimeout(timeoutId.current || undefined)
  }, [minDelay, maxDelay])
  const cancel = useCallback(function () {
    window.clearTimeout(timeoutId.current || undefined)
  }, [])
  return cancel
}

export type ImageProps = {
  src: string
  title?: string
  url?: string
}

const generateCard = ({ src, title, url }: ImageProps) => {
  const maxWidth = 796
  const maxHeight = 422
  const randomNumber = Math.random()
  return {
    id: String(random(1000, 9999)),
    createdAt: Date.now(),
    ariaLabel: `${title} Game Cover`,
    src,
    url,
    style: {
      top: Math.random() * maxHeight + 'px',
      width: (maxWidth / 1.5) * randomNumber,
      height: (maxHeight / 1.5) * randomNumber,
      backgroundImage: `url("${src}")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }
}

export type ImageTornadoProps = {
  images: ImageProps[]
}

const ImageTornado = ({ images }: ImageTornadoProps) => {
  const [cards, setCards] = useState(() => [generateCard(images[0])])
  const [hasMounted, setHasMounted] = useState(false)
  const [index, setIndex] = useState(1)

  useRandomInterval(
    () => {
      const card = generateCard(images[index])
      if (index === images.length - 1) {
        setIndex(0)
      } else {
        setIndex((prev) => prev + 1)
      }
      const now = Date.now()
      const nextCards = cards.filter(({ createdAt }) => {
        const delta = now - createdAt
        return delta < 12000
      })
      nextCards.push(card)
      setCards(nextCards)
    },
    250,
    350
  )

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }
  return (
    <S.Wrapper>
      <S.Content>
        {cards?.map((card) => (
          <Link href={`/game/${card.url}`} key={card.id}>
            <a>
              <S.Card
                key={card.id}
                aria-label={card.ariaLabel}
                style={card.style}
              />
            </a>
          </Link>
        ))}
      </S.Content>
    </S.Wrapper>
  )
}

export default ImageTornado
