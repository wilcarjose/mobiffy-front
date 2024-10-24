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

const ForgotPassword = () => {

  const { forgotPassword } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/dashboard',
  })

  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState([])
  const [status, setStatus] = useState(null)

  const submitForm = event => {
    event.preventDefault()

    forgotPassword({ email, setErrors, setStatus })
  }

  return (
    <div className="nc-ForgotPassword" data-nc-id="ForgotPassword">
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-10 flex items-center justify-center text-3xl font-semibold leading-[115%] md:text-5xl md:leading-[115%]">
          Forgot Password
        </h2>
        <div className="mb-4 text-sm text-stone-500">
            Forgot your password? No problem. Just let us know your email
            address and we will email you a password reset link that
            will allow you to choose a new one.
        </div>

        {/* Session Status */}
        <AuthSessionStatus className="mb-4" status={status} />

        <div className="mx-auto max-w-md">
          <div className="space-y-6">
            <AuthSessionStatus className="mb-4" status={status} />
            <form onSubmit={submitForm}>
              <div className="grid gap-6">
                <FormItem label="Email address">
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    rounded="rounded-full"
                    sizeClass="h-12 px-4 py-3"
                    className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
                    required
                    autoFocus
                  />
                  <InputError messages={errors.email} className="mt-2" />
                </FormItem>
                <ButtonPrimary>Email Password Reset Link</ButtonPrimary>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
