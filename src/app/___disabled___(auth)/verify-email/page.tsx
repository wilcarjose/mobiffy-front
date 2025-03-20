'use client'

import React from 'react';

import ButtonPrimary from '@/components/ui/commons/Button/ButtonPrimary';

import { useAuth } from '@/hooks/auth'
import { useState } from 'react'

const VerifyEmail = () => {

    const { logout, resendEmailVerification } = useAuth({
        middleware: 'auth',
        redirectIfAuthenticated: '/dashboard',
    })

    const [status, setStatus] = useState(null)
    
  return (
    <>
      <div className="nc-VerifyEmail" data-nc-id="VerifyEmail">
        <div className="container mb-24 lg:mb-32">
            <h2 className="my-10 flex items-center justify-center text-3xl font-semibold leading-[115%] md:text-5xl md:leading-[115%]">
                Verify Email
            </h2>
            <div className="mx-auto max-w-md">

                <div className="mb-4 text-sm text-stone-500">
                    Thanks for signing up! Before getting started, could you verify
                    your email address by clicking on the link we just
                    emailed to you? If you didn't receive the email, we will gladly
                    send you another.
                </div>

                {status === 'verification-link-sent' && (
                    <div className="mb-4 font-medium text-sm text-green-600">
                        A new verification link has been sent to the email address
                        you provided during registration.
                    </div>
                )}

                <div className="mt-4 flex items-center justify-between">
                    <ButtonPrimary onClick={() => resendEmailVerification({ setStatus })}>
                        Resend Verification Email
                    </ButtonPrimary>

                    <button
                        type="button"
                        className="underline text-sm text-gray-600 hover:text-gray-900"
                        onClick={logout}>
                        Logout
                    </button>
                </div>

            </div>
        </div>
      </div>
    </>
  );
};

export default VerifyEmail;
