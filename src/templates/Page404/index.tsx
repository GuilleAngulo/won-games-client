import React from 'react'
import Link from 'next/link'
import * as S from './styles'
import { Container } from 'components/Container'
import Base from 'templates/Base'
// import Empty from 'components/Empty'
import ImageTornado, { ImageProps } from 'components/Tornado'
import { ArrowGoBack } from '@styled-icons/remix-fill'

export type Page404Props = {
  images: ImageProps[]
}

const Page404 = ({ images }: Page404Props) => {
  return (
    <Base>
      <Container>
        {/* <Empty
          title="404: Not found"
          description="Oops.. this page does not exist. Go back to the store and enjoy our offers"
        /> */}
        <ImageTornado images={images} />
        <S.Content>
          <S.Title>Oops... Page not found.</S.Title>
          <S.Description>
            Go back to the store and explore thousands of <strong>games</strong>
            .
          </S.Description>
          <Link href="/" passHref>
            <S.Link>
              Go back
              <ArrowGoBack size={20} />
            </S.Link>
          </Link>
        </S.Content>
      </Container>
    </Base>
  )
}

export default Page404
