import { InputHTMLAttributes, useState, useEffect, createRef } from 'react'
import * as S from './styles'

export type CodeFieldProps = {
  size?: number
} & InputHTMLAttributes<HTMLInputElement>

const CodeField = ({ size = 6, ...props }: CodeFieldProps) => {
  const [inputs, setInputs] = useState([])

  useEffect(() => {
    setInputs((inputs) =>
      [...Array(size)].map((_, i) => inputs[i] || createRef<HTMLInputElement>())
    )
  }, [size])

  function handleChange(event: React.ChangeEvent) {
    const element = event.target as HTMLInputElement
    const { value } = element
    const nextInput = element.nextElementSibling as HTMLInputElement

    if (nextInput && value) {
      nextInput.focus()
      nextInput.select()
    }
  }

  function handleKeyDown(event: React.KeyboardEvent) {
    const element = event.target as HTMLInputElement
    const { value } = element
    const { key } = event

    if (key === 'Enter') {
      const next = element.nextElementSibling as HTMLInputElement
      next?.focus()
      next?.select()
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
        input.current!.value = pastedText[index] || ''
      })
    }
    // If the pasted code is same as digits, fill all (no matter in which position is pasted)
    if (pastedText.length === size) {
      inputs.forEach((input: React.RefObject<HTMLInputElement>, index) => {
        input.current!.value = pastedText[index]
      })
    }
  }

  return (
    <S.InputWrapper>
      {[...Array(size)].map((_, i) => {
        return (
          <S.Input
            ref={inputs[i]}
            key={i}
            type="text"
            maxLength={1}
            onChange={handleChange}
            onPaste={handlePaste}
            onKeyDown={handleKeyDown}
            {...props}
          />
        )
      })}
    </S.InputWrapper>
  )
}

export default CodeField
