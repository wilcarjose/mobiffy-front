import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaRegBell } from 'react-icons/fa6';
import { RiSearch2Line } from 'react-icons/ri';

import avatar from '@/images/avatar.png';
import ButtonCircle3 from '@/components/ui/commons/Button/ButtonCircle3';
import Input from '@/components/ui/commons/Input/Input';
import Logo from '@/components/ui/commons/Logo/Logo';

import MenuBar from './MenuBar';

import { useAuth } from '@/hooks/auth'
import { useState } from 'react'

import Dropdown from '@/components/ui/commons/Dropdown'
import { DropdownButton } from '@/components/ui/commons/DropdownLink'
const MainNav = ({ user = null  }) => {

  const { logout } = useAuth()

  const [open, setOpen] = useState(false)

  return (
    <div className="container flex items-center justify-between py-4">
      <div className="flex-1 lg:hidden">
        <MenuBar />
      </div>
      <div className="flex items-center gap-5 lg:basis-[60%]">
        <Logo />
        <div className="hidden w-full max-w-2xl items-center gap-5 rounded-full border border-neutral-300 py-1 pr-3 lg:flex">
          <Input
            type="text"
            className="border-transparent bg-white placeholder:text-neutral-500 focus:border-transparent"
            placeholder="try 'Nike Air Jordan'"
          />
          <RiSearch2Line className="text-2xl text-neutral-500" />
        </div>
      </div>

      <div className="flex flex-1 items-center justify-end gap-5">

        <div className="flex items-center divide-x divide-neutral-300">
          <div className="flex items-center gap-2 pl-5">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
