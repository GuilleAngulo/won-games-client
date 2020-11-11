import { Close } from '@styled-icons/material-outlined'
import { useEffect, useState, useCallback } from 'react'
import Heading from 'components/Heading'
import { CheckCircleOutline } from '@styled-icons/material-outlined'
import * as S from './styles'
import Button from 'components/Button'

export type ModalProps = {
  onClose?: () => void
  children?: React.ReactNode
  isOpen?: boolean
  header?: React.ReactNode
  // title?: string
  // content?: string
  // message?: string
}

const Modal = ({
  isOpen,
  onClose,
  header,
  children
}: // title,
// content,
// message
ModalProps) => {
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
      onClose && onClose()
    }
    // Avoid it being handled twice
    //event.preventDefault()
  }

  if (!isOpen) {
    return null
  }

  return (
    isOpen && (
      <S.Overlay>
        <S.Modal ref={onDialog} role="dialog" aria-modal="true">
          <S.Wrapper>
            <S.CloseButton onClick={onClose} role="button">
              <Close aria-label="Close dialog box" />
            </S.CloseButton>
            <S.Header>{header}</S.Header>
            <S.Body>{children}</S.Body>
            {/* <Heading color="black" lineBottom lineColor="secondary">
              {title}
            </Heading>
            <S.Body>{children}</S.Body>
            <S.Message>{message}</S.Message>
            <Button icon={<CheckCircleOutline />} fullWidth size="large">
              Verify
            </Button> */}
          </S.Wrapper>
        </S.Modal>
      </S.Overlay>
    )
  )
}

export default Modal
