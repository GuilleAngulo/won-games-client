import { Close } from '@styled-icons/material-outlined'
import { useEffect, useState, useCallback } from 'react'
import * as S from './styles'

export type ModalProps = {
  children?: React.ReactNode
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  onSubmit?: (value: string) => void
  title?: string
  message?: string
  buttonLabel?: string
  buttonIcon?: JSX.Element
}

const Modal = ({ isOpen, setIsOpen, children }: ModalProps) => {
  const [modal, setModal] = useState<HTMLDivElement | null>(null)

  const onDialog = useCallback((node) => {
    if (node !== null) {
      setModal(node)
    }
  }, [])

  useEffect(() => {
    if (modal == null) {
      return
    }

    modal
      .getRootNode()
      .addEventListener('keydown', handleKeyDown as EventListener, true)
    return () =>
      modal
        .getRootNode()
        .removeEventListener('keydown', handleKeyDown as EventListener, true)
  })

  function handleKeyDown(event: KeyboardEvent) {
    // if (event.defaultPrevented) {
    //   return // Do nothing if the event was already processed
    // }

    if (event.key === 'Escape') {
      setIsOpen(false)
    }
    // Avoid it being handled twice
    //event.preventDefault()
  }

  return (
    <S.Overlay isOpen={isOpen}>
      <S.Modal
        ref={onDialog}
        isOpen={isOpen}
        aria-hidden={!isOpen}
        role="dialog"
        aria-modal="true"
      >
        <S.Wrapper>
          <S.CloseButton onClick={() => setIsOpen(false)} role="button">
            <Close aria-label="Close dialog box" />
          </S.CloseButton>
          {children}
        </S.Wrapper>
      </S.Modal>
    </S.Overlay>
  )
}

export default Modal
