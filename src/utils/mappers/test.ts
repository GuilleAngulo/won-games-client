import { QueryGames_games } from 'graphql/generated/QueryGames'
import {
  QueryHome_banners,
  QueryHome_sections_freeGames_highlight
} from 'graphql/generated/QueryHome'
import { bannerMapper, gamesMapper, highlightMapper, cartMapper } from '.'

describe('bannerMapper()', () => {
  it('should return the right format when mapped', () => {
    const banner = {
      image: {
        url: '/image.jpg'
      },
      title: 'banner title',
      subtitle: 'banner subtitle',
      button: {
        label: 'button label',
        link: 'button link'
      },
      ribbon: {
        text: 'ribbon text',
        color: 'primary',
        size: 'small'
      }
    } as QueryHome_banners

    expect(bannerMapper([banner])).toStrictEqual([
      {
        img: 'http://localhost:1337/image.jpg',
        title: 'banner title',
        subtitle: 'banner subtitle',
        buttonLabel: 'button label',
        buttonLink: 'button link',
        ribbon: 'ribbon text',
        ribbonColor: 'primary',
        ribbonSize: 'small'
      }
    ])
  })
})

describe('gamesMapper()', () => {
  it('should return an empty array if there are no games', () => {
    expect(gamesMapper(null)).toStrictEqual([])
  })

  it('should return the correct format when mapped', () => {
    const game = {
      id: '1',
      name: 'game',
      developers: [
        {
          name: 'developer'
        }
      ],
      slug: 'game',
      cover: {
        url: '/image.jpg'
      },
      price: 10
    } as QueryGames_games

    expect(gamesMapper([game])).toStrictEqual([
      {
        id: '1',
        title: 'game',
        slug: 'game',
        developer: 'developer',
        img: 'http://localhost:1337/image.jpg',
        price: 10
      }
    ])
  })
})

describe('highlightMapper()', () => {
  it('should return an empty object if there are is not highlight', () => {
    expect(highlightMapper(null)).toStrictEqual({})
  })
  it('should return the correct format when mapped', () => {
    const highlight = {
      title: 'highlight',
      subtitle: 'highlight subtitle',
      background: {
        url: '/image.jpg'
      },
      floatImage: {
        url: '/image.jpg'
      },
      buttonLabel: 'button label',
      buttonLink: 'button link',
      alignment: 'left'
    } as QueryHome_sections_freeGames_highlight

    expect(highlightMapper(highlight)).toStrictEqual({
      title: 'highlight',
      subtitle: 'highlight subtitle',
      backgroundImage: 'http://localhost:1337/image.jpg',
      floatImage: 'http://localhost:1337/image.jpg',
      buttonLabel: 'button label',
      buttonLink: 'button link',
      alignment: 'left'
    })
  })
})

describe('cartMapper()', () => {
  it('should return an empty array if there is no cart items', () => {
    expect(cartMapper(undefined)).toStrictEqual([])
  })

  it('should return the correct format when mapped', () => {
    const gameItem = {
      id: '1',
      cover: {
        url: '/image.jpg'
      },
      price: 10,
      name: 'game'
    } as QueryGames_games

    expect(cartMapper([gameItem])).toStrictEqual([
      {
        id: '1',
        img: 'http://localhost:1337/image.jpg',
        price: '$10.00',
        title: 'game'
      }
    ])
  })
})
