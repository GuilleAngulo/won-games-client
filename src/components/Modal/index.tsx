import { Close } from '@styled-icons/material-outlined'
import { useEffect, useState, useCallback } from 'react'
import * as S from './styles'

export type ModalProps = {
  onClose?: () => void
  children?: React.ReactNode
  isOpen?: boolean
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
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
    if (event.defaultPrevented) {
      return // Do nothing if the event was already processed
    }

    if (event.key === 'Escape') {
      onClose && onClose()
    }
    // Avoid it being handled twice
    event.preventDefault()
  }

  if (!isOpen) {
    return null
  }

  return (
    isOpen && (
      <S.Overlay>
        <S.ModalWrapper ref={onDialog} role="dialog" aria-modal="true">
          <S.CloseButton onClick={onClose} role="button">
            <Close aria-label="Close dialog box" />
          </S.CloseButton>
          {children}
        </S.ModalWrapper>
      </S.Overlay>
    )
  )
}

export default Modal
