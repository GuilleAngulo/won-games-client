import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { searchClient } from 'utils/meilisearchClient'
import {
  InstantSearch,
  Highlight,
  Configure,
  connectStateResults,
  connectSearchBox,
  connectHits
} from 'react-instantsearch-dom'
import { getImageUrl } from 'utils/getImageUrl'
import formatPrice from 'utils/format-price'

import { GameFragment_cover } from 'graphql/generated/GameFragment'

import {
  Search as SearchIcon,
  Close as CloseIcon
} from '@styled-icons/material-outlined'
import { Apple, Windows, Linux } from '@styled-icons/fa-brands'
import * as S from './styles'

const Search = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper isOpen={isOpen}>
      <InstantSearch indexName="game" searchClient={searchClient}>
        <SearchBox
          handleVisibility={() => setIsOpen(!isOpen)}
          isOpen={isOpen}
        />
        <Configure hitsPerPage={12} />
        <Results />
      </InstantSearch>
      <S.Overlay onClick={() => setIsOpen(!isOpen)} aria-hidden={!isOpen} />
    </S.Wrapper>
  )
}

export default Search

export type SearchBoxProps = {
  handleVisibility: () => void
  isOpen: boolean
  currentRefinement: string
  refine: (v: string) => void
}

const SearchBox = connectSearchBox(
  ({ handleVisibility, isOpen, currentRefinement, refine }: SearchBoxProps) => {
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
      if (isOpen && inputRef.current) {
        inputRef.current.focus()
      }
    }, [isOpen])

    return (
      <S.SearchForm role="search">
        <S.InputWrapper isOpen={isOpen}>
          <S.Input
            type="search"
            ref={inputRef}
            placeholder="Search here…"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            value={currentRefinement}
            onChange={(event) => refine(event.currentTarget.value)}
          />

          <S.Icon>
            {isOpen ? (
              <CloseIcon onClick={handleVisibility} aria-label="Close Search" />
            ) : (
              <SearchIcon onClick={handleVisibility} aria-label="Open Search" />
            )}
          </S.Icon>
        </S.InputWrapper>
      </S.SearchForm>
    )
  }
)

const Results = connectStateResults(({ searchState }) =>
  searchState?.query ? <Hits /> : null
)

type Platform = {
  name: 'windows' | 'linux' | 'mac'
}

export type GameHitProps = {
  id: string
  name: string
  short_description: string
  cover: GameFragment_cover | null
  slug: string
  price: number
  platforms: Platform[]
  release_date: string | null
}

export type HitsProps = {
  hits: GameHitProps[]
}

const Hits = connectHits(({ hits }: HitsProps) => (
  <S.List>
    {hits.length ? (
      hits.map((hit) => (
        <S.ListItem key={hit.id}>
          <Hit hit={hit} />
        </S.ListItem>
      ))
    ) : (
      <NoResults />
    )}
  </S.List>
))

const NoResults = () => (
  <S.NoResultsWrapper>
    <Image
      placeholder="empty"
      src="/img/empty.svg"
      alt="A gamer in a couch playing videogame"
      width={110}
      height={110}
    />

    <S.NoResultsInfo>
      <S.NoResultsTitle>
        <SearchIcon size={24} /> No Results Found
      </S.NoResultsTitle>
      <S.NoResultsDescription>
        Try searching another term.
      </S.NoResultsDescription>
      <Link href="/explore" passHref>
        <S.NoResultsLink>Explore all games</S.NoResultsLink>
      </Link>
    </S.NoResultsInfo>
  </S.NoResultsWrapper>
)

export type HitProps = {
  hit: GameHitProps
}

const Hit = ({ hit }: HitProps) => {
  const platformIcons = {
    linux: <Linux title="Linux" />,
    mac: <Apple title="Mac" />,
    windows: <Windows title="Windows" />
  }
  const releaseYear =
    hit.release_date && new Date(hit.release_date).getFullYear()

  return (
    <Link href={`game/${hit.slug}`} passHref>
      <S.Result>
        <S.ImageWrapper>
          <Image
            src={`${getImageUrl(hit.cover?.url)}`}
            alt={hit.name}
            layout="fill"
            objectFit="cover"
            placeholder="empty"
          />
        </S.ImageWrapper>
        <S.Info>
          <S.Title>
            <Highlight attribute="name" hit={hit} />
            {releaseYear && <S.ReleaseYear>{releaseYear}</S.ReleaseYear>}
          </S.Title>
          <S.Details>
            <S.Price>{formatPrice(hit.price)}</S.Price>
            <S.Platform>
              {hit.platforms.map((icon: Platform) => (
                <S.PlatformIcon key={`${hit.id}${icon.name}`}>
                  {platformIcons[icon.name]}
                </S.PlatformIcon>
              ))}
            </S.Platform>
          </S.Details>
          <S.Description>
            <Highlight attribute="short_description" hit={hit} />
          </S.Description>
        </S.Info>
      </S.Result>
    </Link>
  )
}
