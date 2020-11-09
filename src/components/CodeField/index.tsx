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

  function handleChange(ref: React.RefObject<HTMLInputElement>) {
    if (ref.current?.nextElementSibling && ref.current?.value) {
      const next = ref.current?.nextElementSibling as HTMLInputElement
      next.focus()
      next.select()
    }
  }

  function handlePaste(
    ref: React.RefObject<HTMLInputElement>,
    e: React.ClipboardEvent<HTMLInputElement>
  ) {
    if (!ref.current?.previousElementSibling) {
      const paste = e.clipboardData.getData('text')
      inputs.forEach((input: React.RefObject<HTMLInputElement>, index) => {
        input!.current!.value = paste[index] || ''
      })
    }
  }

  return (
    <S.Wrapper>
      {[...Array(size)].map((_, i) => {
        return (
          <S.Input
            ref={inputs[i]}
            key={i}
            type="text"
            maxLength={1}
            onChange={() => handleChange(inputs[i])}
            onPaste={(event) => handlePaste(inputs[i], event)}
            {...props}
          />
        )
      })}
    </S.Wrapper>
  )
}

export default CodeField
