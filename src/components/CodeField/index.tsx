import { useState, useEffect, createRef, InputHTMLAttributes } from 'react'
import * as S from './styles'

export type CodeFieldProps = {
  size?: number
  legend?: string
  disabled?: boolean
  error?: string
  loading?: string
} & InputHTMLAttributes<HTMLInputElement>

const CodeField = ({
  size = 6,
  legend,
  disabled = false,
  error,
  loading,
  ...props
}: CodeFieldProps) => {
  const [inputs, setInputs] = useState([])

  useEffect(() => {
    setInputs((inputs) =>
      [...Array(size)].map((_, i) => inputs[i] || createRef<HTMLInputElement>())
    )
  }, [size])

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    // Do nothing if the event was already processed
    if (event.defaultPrevented) {
      return
    }

    const element = event.currentTarget
    const { value } = element
    const nextInput = element.nextElementSibling as HTMLInputElement

    if (nextInput && value) {
      nextInput.focus()
      nextInput.select()
    }
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    // Do nothing if the event was already processed
    if (event.defaultPrevented) {
      return
    }

    const element = event.target as HTMLInputElement
    const { value } = element
    const { key } = event

    if (key === 'Enter') {
      const next = element.nextElementSibling as HTMLInputElement
      next?.focus()
      next?.select()
      event.preventDefault()
    }

    if (key === 'Backspace' && !value) {
      const previous = element.previousElementSibling as HTMLInputElement
      previous?.focus()
      //previous?.select()
      //Don't delete previous input
      event.preventDefault()
    }
  }

  function handlePaste(event: React.ClipboardEvent) {
    const element = event.target as HTMLInputElement
    const pastedText = event.clipboardData.getData('text')

    // If paste on first position, fill the rest (avoiding loop if pasted text length is 1 or less)
    if (!element.previousElementSibling && pastedText.length > 1) {
      inputs.forEach((input: React.RefObject<HTMLInputElement>, index) => {
        if (input.current == null) {
          return
        }
        input.current.value = pastedText[index] || ''
      })
    }
    // If the pasted code is same as digits, fill all (no matter in which position is pasted)
    if (pastedText.length === size) {
      inputs.forEach((input: React.RefObject<HTMLInputElement>, index) => {
        if (input.current == null) {
          return
        }
        input.current.value = pastedText[index]
      })
    }
  }

  return (
    <S.Wrapper disabled={disabled} hasError={!!error} isLoading={!!loading}>
      {!!legend && <S.Legend>{legend}</S.Legend>}
      <S.InputWrapper
        size={size}
        onPaste={handlePaste}
        onKeyDown={handleKeyDown}
      >
        {[...Array(size)].map((_, i) => {
          return (
            <S.Input
              ref={inputs[i]}
              key={i}
              defaultValue=""
              type="text"
              aria-posinset={i + 1}
              aria-setsize={size}
              maxLength={1}
              disabled={disabled}
              onChange={handleChange}
              //onPaste={handlePaste}
              //onKeyDown={handleKeyDown}
              {...props}
            />
          )
        })}
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
      {loading && <S.Loading>{loading}</S.Loading>}
    </S.Wrapper>
  )
}

export default CodeField
