import { Nunito } from 'next/font/google'

import '@/styles/global.css';

import type { Metadata } from 'next';
import React, { Suspense } from 'react';

import Header from '@/components/ui/header/Header';
import Footer from '@/components/ui/commons/Footer/Footer';

import Loading from './loading';

const nunitoFont = Nunito({
    subsets: ['latin'],
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Mobiffy',
    icons: [
      {
        rel: 'apple-touch-icon',
        url: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/favicon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/favicon.png',
      },
      {
        rel: 'icon',
        url: '/favicon.ico',
      },
    ],
  };

const RootLayout = ({ children }) => {
    return (
        <html lang="en" className={nunitoFont.className}>
            <body className="">
                <Header />
                <Suspense fallback={<Loading />}>{children}</Suspense>
                <Footer />
            </body>
        </html>
    )
}

export default RootLayout
