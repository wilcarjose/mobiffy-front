'use client'

import Link from 'next/link';
import React from 'react';
import { FaGoogle } from 'react-icons/fa6';

import ButtonPrimary from '@/components/ui/commons/Button/ButtonPrimary';
import ButtonSecondary from '@/components/ui/commons/Button/ButtonSecondary';
import FormItem from '@/components/ui/commons/FormItem';
import Input from '@/components/ui/commons/Input/Input';
import InputError from '@/components/ui/commons/InputError'

import { useAuth } from '@/hooks/auth'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import AuthSessionStatus from '@/components/auth/AuthSessionStatus'

const Register = () => {

  const { register } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/dashboard',
  })

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [errors, setErrors] = useState([])

  const submitForm = event => {
    event.preventDefault()

    register({
      name,
      email,
      password,
      password_confirmation: passwordConfirmation,
      setErrors,
    })
  }
    
  return (
    <div className="nc-Register" data-nc-id="Register">
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-10 flex items-center justify-center text-3xl font-semibold leading-[115%] md:text-5xl md:leading-[115%]">
          Register
        </h2>
        <div className="mx-auto max-w-md">
          <div className="space-y-6">
            <AuthSessionStatus className="mb-4" status={status} />
            <form onSubmit={submitForm}>
              <div className="grid gap-6">
              <FormItem label="Name">
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={event => setName(event.target.value)}
                    rounded="rounded-full"
                    sizeClass="h-12 px-4 py-3"
                    placeholder="John Doe"
                    className="border-neutral-300 bg-transparent placeholder:text-neutral-500 focus:border-primary"
                    required
                    autoFocus
                  />
                  <InputError messages={errors.name} className="mt-2" />
                </FormItem>
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
                <ButtonPrimary>Register</ButtonPrimary>
              </div>
            </form>
            <div className="flex flex-col items-center justify-center gap-2">
              <span className="block text-center text-sm text-neutral-500">
                <Link href="/login" className="text-primary">
                  Already registered? {` `}
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
