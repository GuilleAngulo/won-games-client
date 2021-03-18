import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Email, Lock } from '@styled-icons/material-outlined'
import { signIn } from 'next-auth/client'

import Button from 'components/Button'
import TextField from 'components/TextField'

import * as S from './styles'
import { FormLink, FormWrapper } from 'components/Form'

const FormSignIn = () => {
  const [values, setValues] = useState({})

  const { push } = useRouter()

  const handleInput = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: '/'
    })

    if (result?.url) {
      return push(result?.url)
    }

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

        <Button type="submit" size="large" fullWidth>
          Sign in now
        </Button>

        <FormLink>
          Don`t have an account?{' '}
          <Link href="sign-up">
            <a>Sign up</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}
export default FormSignIn
