import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { ErrorOutline } from '@styled-icons/material-outlined'
import { signIn } from 'next-auth/client'

import Button from 'components/Button'
import PasswordField from 'components/PasswordField'

import { FormWrapper, FormLoading, FormError } from 'components/Form'
import { FieldErrors } from 'utils/validations'

const FormResetPassword = () => {
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState({ password: '', confirm_password: '' })
  const [loading, setLoading] = useState(false)
  const routes = useRouter()
  const { push, query } = routes

  const handleInput = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const errors = {}

    if (Object.keys(errors).length) {
      setFieldError(errors)
      setLoading(false)
      return
    }

    setFieldError({})

    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: `${window.location.origin}${query?.callbackUrl || ''}`
    })

    if (result?.url) {
      return push(result?.url)
    }

    setLoading(false)
    setFormError('Username or password is invalid.')
  }

  return (
    <FormWrapper>
      {!!formError && (
        <FormError>
          <ErrorOutline /> {formError}
        </FormError>
      )}
      <form onSubmit={handleSubmit}>
        <PasswordField
          name="password"
          placeholder="Password"
          error={fieldError?.password}
          onInputChange={(v) => handleInput('password', v)}
        />
        <PasswordField
          name="confirm_password"
          placeholder="Confirm password"
          error={fieldError?.confirm_password}
          onInputChange={(v) => handleInput('confirm_password', v)}
        />

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Reset Password</span>}
        </Button>
      </form>
    </FormWrapper>
  )
}
export default FormResetPassword
