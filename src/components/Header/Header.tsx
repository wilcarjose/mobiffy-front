'use client'

import type { FC } from 'react';
import React from 'react';

import { useAuth } from '@/hooks/auth'

import MainNav from './MainNav';
import TopNav from './TopNav';

export interface HeaderProps {}

const Header: FC<HeaderProps> = () => {

  const { user } = useAuth({ middleware: 'guest' })

  return (
    <div className="nc-Header sticky inset-x-0 top-0 z-50 w-full border-b border-neutral-300 bg-white">
      <TopNav />
      <MainNav user={user} />
    </div>
  );
};

export default Header;