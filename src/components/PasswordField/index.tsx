import { useState } from 'react'
import { TextFieldProps } from 'components/TextField'
import { Eye as Visible, EyeSlash as NotVisible } from '@styled-icons/bootstrap'
import { Lock } from '@styled-icons/material-outlined'

import { Visibility, PasswordInput } from './styles'
import * as S from 'components/TextField/styles'

const PasswordField = ({
  label,
  name,
  initialValue = '',
  disabled = false,
  error,
  loading,
  onInputChange,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)
  const [isVisible, setisVisible] = useState(false)

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
          // type={isVisible ? 'text' : 'password'}
          isVisible={isVisible}
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
          onClick={() => setisVisible((prevState) => !prevState)}
          isEmpty={!value.length}
        >
          {isVisible ? (
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

export default PasswordField
