import { useState } from 'react'
import * as S from './styles'

export type PaymentCardProps = {
  flag?: JSX.Element
  size?: 'normal' | 'large'
  number: string
  date: string
  initialName?: string
  glassmorphism?: boolean
}

const PaymentCard = ({
  flag,
  size = 'normal',
  number,
  date,
  initialName = '',
  glassmorphism = false
}: PaymentCardProps) => {
  const [name, setName] = useState(initialName)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setName(newValue)
  }
  return (
    <S.Wrapper size={size} glassmorphism={glassmorphism}>
      <S.Container>
        <S.LogoWrapper>
          <Logo />
        </S.LogoWrapper>
        <S.Contactless>
          <ContactlessIcon />
        </S.Contactless>
        <S.Number>{number}</S.Number>
        <S.Date>
          <span>Valid Thru</span>
          {date}
        </S.Date>
        <S.Name>{name}</S.Name>
        {!!flag && <S.Flag>{flag}</S.Flag>}
      </S.Container>
      {!glassmorphism && <Card />}
    </S.Wrapper>
  )
}

export default PaymentCard

const Card = () => (
  <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask
      id="mask0"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="320"
      height="200"
    >
      <path
        d="M299 0H21C9.40202 0 0 9.40202 0 21V179C0 190.598 9.40202 200 21 200H299C310.598 200 320 190.598 320 179V21C320 9.40202 310.598 0 299 0Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0)">
      <path
        d="M299 0H21C9.40202 0 0 9.40202 0 21V179C0 190.598 9.40202 200 21 200H299C310.598 200 320 190.598 320 179V21C320 9.40202 310.598 0 299 0Z"
        fill="url(#paint0_linear)"
      />
      <path
        style={{ mixBlendMode: 'soft-light' }}
        opacity="0.7"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M314 -60C284.161 47.0943 245.129 118.579 196.905 154.453C148.68 190.327 77.3787 205.01 -17 198.5V-60H314Z"
        fill="url(#paint1_linear)"
      />
      <g style={{ mixBlendMode: 'overlay', opacity: '0.4' }}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M394 -60C357.85 47.0943 310.564 118.579 252.141 154.453C193.718 190.327 107.338 205.01 -7 198.5V-60H394Z"
          fill="url(#paint2_linear)"
          style={{ mixBlendMode: 'soft-light' }}
        />
      </g>
      <path
        style={{ mixBlendMode: 'soft-light' }}
        opacity="0.6"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M232.405 -96.3776C235.31 -3.71942 219.376 64.827 184.603 109.262C149.83 153.696 87.3835 189.951 -2.73765 218.027L-77.0959 19.6107L232.405 -96.3776Z"
        fill="url(#paint3_linear)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear"
        x1="335"
        y1="-2.18234e-07"
        x2="-5.74785"
        y2="12.057"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F062C0" />
        <stop offset="1" stopColor="#F23131" />
      </linearGradient>
      <linearGradient
        id="paint1_linear"
        x1="-25.886"
        y1="123.329"
        x2="183.744"
        y2="-96.7809"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EEEEEE" />
        <stop offset="1" stopColor="#D8D8D8" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint2_linear"
        x1="-17.7652"
        y1="123.329"
        x2="186.181"
        y2="-136.1"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EEEEEE" />
        <stop offset="1" stopColor="#D8D8D8" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        id="paint3_linear"
        x1="-32.6696"
        y1="163.442"
        x2="48.726"
        y2="-95.1159"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EEEEEE" />
        <stop offset="1" stopColor="#D8D8D8" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
)

const Logo = () => (
  <svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="70 0 95 45"
    role="img"
    aria-label="Won Games"
  >
    <path
      className="text"
      fill="#FAFAFA"
      d="M79.263 12.633h-.06c-.68.1-1.2.44-1.56 1.02-.22.38-.33.78-.33 1.2 0 .1.01.2.03.3v.03l1.38 9.33c.08.54.34.99.78 1.35a2.27 2.27 0 001.77.45c.66-.1 1.17-.42 1.53-.96.26-.36.39-.77.39-1.23 0-.08-.01-.17-.03-.27l-1.38-9.33c-.08-.56-.34-1.03-.78-1.41-.42-.34-.9-.51-1.44-.51-.1 0-.2.01-.3.03zm18.78-.03c-.54 0-1.02.18-1.44.54-.44.36-.7.82-.78 1.38l-1.41 9.51c-.02.08-.03.15-.03.21 0 .52.17.98.51 1.38.36.46.84.73 1.44.81.1.02.21.03.33.03.66 0 1.21-.24 1.65-.72.3-.32.49-.7.57-1.14v-.06l1.38-9.36v-.03c.02-.1.03-.2.03-.3 0-.42-.12-.82-.36-1.2-.36-.58-.87-.92-1.53-1.02h-.06c-.1-.02-.2-.03-.3-.03zm-9.24 8.04h-.06c-.08 0-.16.01-.24.03-.36.04-.69.16-.99.36-.16.1-.3.22-.42.36-.08.08-.21.22-.39.42l-2.19 2.7c-.18.2-.42.48-.72.84-.28.34-.51.59-.69.75-.38.34-.75.58-1.11.72-.2.08-.41.14-.63.18-.14.02-.29.03-.45.03-.38 0-.74-.07-1.08-.21-.32-.12-.6-.29-.84-.51l.75 5.13v.06c.02.04.03.09.03.15.04.18.09.35.15.51.14.3.35.56.63.78.18.16.38.28.6.36.24.08.49.12.75.12h.09c.16 0 .3-.01.42-.03.46-.1.85-.32 1.17-.66l.3-.3 4.89-6.03 4.74 5.82c.24.28.39.45.45.51.38.38.83.61 1.35.69h.33c.28 0 .55-.05.81-.15.42-.18.77-.46 1.05-.84.18-.28.3-.59.36-.93v-.06l.75-5.01c-.34.3-.73.5-1.17.6-.26.08-.52.12-.78.12a2.903 2.903 0 01-1.26-.27c-.26-.12-.59-.37-.99-.75-.26-.26-.59-.65-.99-1.17l-2.52-3.06c-.14-.18-.28-.34-.42-.48-.2-.2-.39-.35-.57-.45-.3-.2-.64-.31-1.02-.33h-.09zm19.806.3c.28-.26.6-.46.96-.6.34-.14.69-.21 1.05-.21.46 0 .9.11 1.32.33.48.24.87.58 1.17 1.02a5.912 5.912 0 012.13-3.15 5.73 5.73 0 013.6-1.23c1.66 0 3.07.59 4.23 1.77 1.16 1.16 1.74 2.57 1.74 4.23 0 1.66-.58 3.08-1.74 4.26-1.16 1.16-2.57 1.74-4.23 1.74-1.34 0-2.55-.4-3.63-1.2a5.913 5.913 0 01-2.13-3.18c-.22.34-.5.63-.84.87-.5.3-1.04.45-1.62.45-.42 0-.83-.08-1.23-.24-.3-.14-.56-.32-.78-.54.5 2.42 1.71 4.42 3.63 6 1.92 1.56 4.12 2.34 6.6 2.34 1.9 0 3.65-.47 5.25-1.41 1.62-.94 2.89-2.21 3.81-3.81.94-1.62 1.41-3.38 1.41-5.28 0-1.9-.47-3.65-1.41-5.25-.92-1.62-2.19-2.9-3.81-3.84-1.6-.94-3.35-1.41-5.25-1.41-2.46 0-4.65.79-6.57 2.37-1.92 1.56-3.14 3.55-3.66 5.97zm2.01-.09c-.66 0-1.21.24-1.65.72-.24.24-.41.53-.51.87-.06.22-.09.45-.09.69 0 .22.03.43.09.63.08.28.21.53.39.75.44.56 1.03.84 1.77.84.72 0 1.3-.27 1.74-.81.22-.26.37-.54.45-.84.04-.2.06-.4.06-.6 0-.18-.02-.35-.06-.51-.08-.38-.24-.71-.48-.99a2.23 2.23 0 00-1.71-.75zm29.649-8.25c-.6 0-1.12.21-1.56.63-.46.44-.69.98-.69 1.62v6.15c.24-.28.53-.5.87-.66.42-.2.87-.3 1.35-.3h.06c.46 0 .9.1 1.32.3a2.909 2.909 0 011.05.84l9.81 11.55c.44.58 1.03.87 1.77.87.66 0 1.22-.25 1.68-.75.38-.42.57-.92.57-1.5v-6.12c-.26.26-.56.47-.9.63-.42.2-.87.3-1.35.3-.56 0-1.08-.13-1.56-.39-.34-.2-.63-.45-.87-.75l-9.87-11.67c-.22-.24-.48-.43-.78-.57a2.26 2.26 0 00-.9-.18zm13.98 0c-.62 0-1.14.21-1.56.63-.46.44-.69.98-.69 1.62v8.7c0 .42.14.8.42 1.14.44.56 1.05.84 1.83.84.54 0 1.02-.15 1.44-.45.52-.4.79-.91.81-1.53v-8.7c-.02-.7-.29-1.27-.81-1.71-.42-.36-.9-.54-1.44-.54zm-14.01 8.07c-.6 0-1.11.19-1.53.57-.44.4-.67.88-.69 1.44v8.67c0 .5.15.95.45 1.35.46.6 1.06.9 1.8.9.64 0 1.18-.23 1.62-.69.42-.42.63-.94.63-1.56v-8.67c-.02-.8-.41-1.39-1.17-1.77-.32-.16-.67-.24-1.05-.24h-.06z"
    />
  </svg>
)

const ContactlessIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 60">
    <path
      fill="none"
      stroke="#FAFAFA"
      strokeWidth="6"
      strokeLinecap="round"
      d="m35,3a50,50 0 0,1 0,50M24,8.5a39,39 0 0,1 0,39M13.5,13.55a28.2,28.5 0 0,1 0,28.5M3,19a18,17 0 0,1 0,18"
    />
  </svg>
)
