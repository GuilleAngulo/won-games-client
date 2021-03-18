import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Email, Lock } from '@styled-icons/material-outlined'
import { signIn } from 'next-auth/client'

import Button from 'components/Button'
import TextField from 'components/TextField'

import * as S from './styles'
import { FormLink, FormWrapper, FormLoading } from 'components/Form'

const FormSignIn = () => {
  const [values, setValues] = useState({})
  const [loading, setLoading] = useState(false)

  const { push } = useRouter()

  const handleInput = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)

    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: '/'
    })

    if (result?.url) {
      return push(result?.url)
    }

    setLoading(false)

    //TODO ERROR HANDLE
    console.log('Email or password invalid')
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          onInputChange={(value) => handleInput('email', value)}
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          onInputChange={(value) => handleInput('password', value)}
          icon={<Lock />}
        />
        <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Sign in now</span>}
        </Button>

        <FormLink>
          Don`t have an account?
          <Link href="sign-up">
            <a>Sign up</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}
export default FormSignIn
