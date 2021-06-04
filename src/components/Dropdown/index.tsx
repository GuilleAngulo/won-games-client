import { MouseEvent, useState } from 'react'
import * as S from './styles'

export type DropdownProps = {
  title: React.ReactNode
  children: React.ReactNode
  arrow?: boolean
}

const Dropdown = ({ title, children, arrow = false }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Title
        onMouseDown={handleOpen}
        tabIndex={0}
        onFocus={() => setIsOpen(!isOpen)}
      >
        {title}
        {arrow && (
          <S.Chevron size={24} isOpen={isOpen} aria-label="dropdown arrow" />
        )}
      </S.Title>

      <S.Content aria-hidden={!isOpen}>{children}</S.Content>
      <S.Overlay onClick={() => setIsOpen(!isOpen)} aria-hidden={!isOpen} />
    </S.Wrapper>
  )
}
export default Dropdown
