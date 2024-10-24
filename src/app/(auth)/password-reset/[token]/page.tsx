'use client'

import Link from 'next/link';
import React from 'react';
import { FaGoogle } from 'react-icons/fa6';

import ButtonPrimary from '@/shared/Button/ButtonPrimary';
import ButtonSecondary from '@/shared/Button/ButtonSecondary';
import FormItem from '@/shared/FormItem';
import Input from '@/shared/Input/Input';
import InputError from '@/components/InputError'

import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import AuthSessionStatus from '@/app/(auth)/AuthSessionStatus'
import { useSearchParams } from 'next/navigation'

const PasswordReset = () => {

  const searchParams = useSearchParams()

  const { resetPassword } = useAuth({ middleware: 'guest' })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [errors, setErrors] = useState([])
  const [status, setStatus] = useState(null)

  const submitForm = event => {
      event.preventDefault()

      resetPassword({
          email,
          password,
          password_confirmation: passwordConfirmation,
          setErrors,
          setStatus,
      })
  }

  useEffect(() => {
      setEmail(searchParams.get('email'))
  }, [searchParams.get('email')])
    
  return (
    <>
      {/* Session Status */}
      <AuthSessionStatus className="mb-4" status={status} />
      <div className="nc-PasswordReset" data-nc-id="PasswordReset">
        <div className="container mb-24 lg:mb-32">
          <h2 className="my-10 flex items-center justify-center text-3xl font-semibold leading-[115%] md:text-5xl md:leading-[115%]">
            Reset Password
          </h2>
          <div className="mx-auto max-w-md">
            <div className="space-y-6">
              <AuthSessionStatus className="mb-4" status={status} />
              <form onSubmit={submitForm}>
                <div className="grid gap-6">
                  <FormItem label="Email">
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={event => setEmail(event.target.value)}
                      rounded="rounded-full"
                      sizeClass="h-12 px-4 py-3"
                      placeholder="example@example.com"
                      className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
                      required
                      autoFocus
                    />
                    <InputError messages={errors.email} className="mt-2" />
                  </FormItem>
                  <FormItem label="Password">
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={event => setPassword(event.target.value)}
                      required
                      autoComplete="new-password"
                      rounded="rounded-full"
                      sizeClass="h-12 px-4 py-3"
                      className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
                    />
                    <InputError
                          messages={errors.password}
                          className="mt-2"
                    />
                  </FormItem>
                  <FormItem label="Confirm Password">
                    <Input
                      id="passwordConfirmation"
                      type="password"
                      value={passwordConfirmation}
                      onChange={event => setPasswordConfirmation(event.target.value)}
                      required
                      rounded="rounded-full"
                      sizeClass="h-12 px-4 py-3"
                      className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
                    />
                    <InputError
                      messages={errors.password_confirmation}
                      className="mt-2"
                  />
                  </FormItem>
                  <ButtonPrimary>Reset Password</ButtonPrimary>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordReset;
