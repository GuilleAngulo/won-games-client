import { useState, InputHTMLAttributes } from 'react'

import * as S from './styles'

export type TextFieldProps = {
  onInputChange?: (value: string) => void
  label?: string
  initialValue?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  error?: string
  loading?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  label,
  name,
  initialValue = '',
  icon,
  iconPosition = 'left',
  disabled = false,
  error,
  loading,
  onInputChange,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInputChange && onInputChange(newValue)
  }

  const errorMessageId = `${name}_error`

  /**
   * In case of 'onInput' being an API call, use a debounce method to wait
   * instead of calling on every onChange event
   */
  return (
    <S.Wrapper disabled={disabled} hasError={!!error} isLoading={!!loading}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.Input
          type="text"
          onChange={onChange}
          value={value}
          iconPosition={iconPosition}
          disabled={disabled}
          aria-live="polite"
          aria-busy={!!loading}
          aria-invalid={!!error}
          name={name}
          {...(error ? { 'aria-describedby': errorMessageId } : {})}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </S.InputWrapper>
      {!!error && (
        <S.Error id={errorMessageId} role="alert">
          {error}
        </S.Error>
      )}
      {!!loading && <S.Loading>{loading}</S.Loading>}
    </S.Wrapper>
  )
}

export default TextField
