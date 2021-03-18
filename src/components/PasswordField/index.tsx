import { useState } from 'react'
import { TextFieldProps } from 'components/TextField'
import { Eye as Visible, EyeSlash as NotVisible } from '@styled-icons/bootstrap'
import { Lock } from '@styled-icons/material-outlined'

import { Visibility, PasswordInput } from './styles'
import * as S from 'components/TextField/styles'

const TextField = ({
  label,
  name,
  initialValue = '',
  disabled = false,
  error,
  loading,
  onInputChange,
  ...props
}: Omit<TextFieldProps, 'icon | iconPosition'>) => {
  const [value, setValue] = useState(initialValue)
  const [visible, setVisible] = useState(false)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInputChange && onInputChange(newValue)
  }

  return (
    <S.Wrapper disabled={disabled} hasError={!!error} isLoading={!!loading}>
      {!!label && <S.Label htmlFor={name}>{label}</S.Label>}
      <S.InputWrapper>
        <S.Icon iconPosition="left">
          <Lock />
        </S.Icon>
        <PasswordInput
          type={visible ? 'text' : 'password'}
          onChange={onChange}
          value={value}
          iconPosition="left"
          disabled={disabled}
          aria-live="polite"
          aria-busy={!!loading}
          aria-invalid={!!error}
          name={name}
          {...(label ? { id: name } : {})}
          {...props}
        />
        <Visibility
          onClick={() => setVisible((prevState) => !prevState)}
          isEmpty={!value.length}
        >
          {visible ? (
            <NotVisible aria-label="Hide password" title="Hide password" />
          ) : (
            <Visible aria-label="Show password" title="Show password" />
          )}
        </Visibility>
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
      {loading && <S.Loading>{loading}</S.Loading>}
    </S.Wrapper>
  )
}

export default TextField
