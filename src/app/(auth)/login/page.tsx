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

const Login = () => {

  const router = useRouter()

  const { login } = useAuth({
      middleware: 'guest',
      redirectIfAuthenticated: '/dashboard',
  })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [shouldRemember, setShouldRemember] = useState(false)
  const [errors, setErrors] = useState([])
  const [status, setStatus] = useState(null)

  useEffect(() => {
      if (router.reset?.length > 0 && errors.length === 0) {
          setStatus(atob(router.reset))
      } else {
          setStatus(null)
      }
  })

  const submitForm = async event => {
      event.preventDefault()

      login({
          email,
          password,
          remember: shouldRemember,
          setErrors,
          setStatus,
      })
  }

  return (
    <div className="nc-Login" data-nc-id="Login">
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-10 flex items-center justify-center text-3xl font-semibold leading-[115%] md:text-5xl md:leading-[115%]">
          Login
        </h2>
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
                    autoComplete="current-password"
                    rounded="rounded-full"
                    sizeClass="h-12 px-4 py-3"
                    className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
                  />
                  <InputError
                        messages={errors.password}
                        className="mt-2"
                  />
                </FormItem>
                {/* Remember Me */}
                <div className="block mt-2">
                    <label
                        htmlFor="remember_me"
                        className="inline-flex items-center">
                        <input
                            id="remember_me"
                            type="checkbox"
                            name="remember"
                            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            onChange={event =>
                                setShouldRemember(event.target.checked)
                            }
                        />

                        <span className="ml-2 text-sm text-gray-600">
                            Remember me
                        </span>
                    </label>
                </div>
                <ButtonPrimary>Continue</ButtonPrimary>
              </div>
            </form>
            <div className="flex flex-col items-center justify-center gap-2">
              <Link href="/forgot-password" className="text-sm text-primary">
                Forgot password
              </Link>
              <span className="block text-center text-sm text-neutral-500">
                Don&apos;t have an account? {` `}
                <Link href="/register" className="text-primary">
                  Signup
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
