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
        <div className="relative hidden lg:block">
          <span className="absolute -top-1/4 left-3/4 aspect-square w-3 rounded-full bg-red-600" />
          <FaRegBell className="text-2xl" />
        </div>

        <div className="flex items-center divide-x divide-neutral-300">
          <div className="flex items-center gap-2 pl-5">
            {user ? (
              <>
              <ButtonCircle3 className="overflow-hidden bg-gray" size="w-10 h-10">
                <Image
                  src={avatar}
                  alt="avatar"
                  className="h-full w-full object-cover object-center"
                />
              </ButtonCircle3>
            
                <div className="hidden sm:flex sm:items-center sm:ml-6">
                  <Dropdown
                      align="right"
                      width="48"
                      trigger={
                          <button className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none transition duration-150 ease-in-out">
                              <div>{user?.name}</div>

                              <div className="ml-1">
                                  <svg
                                      className="fill-current h-4 w-4"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20">
                                      <path
                                          fillRule="evenodd"
                                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                          clipRule="evenodd"
                                      />
                                  </svg>
                              </div>
                          </button>
                      }>
                      {/* Authentication */}
                      <DropdownButton onClick={logout}>
                          Logout
                      </DropdownButton>
                  </Dropdown>
                </div>
              </>
            ) : (
              <div className="flex items-center gap-3">
                <Link href="/login" className="text-sm font-medium text-gray-700 hover:text-blue-600">
                  Login
                </Link>
                <Link href="/register" className="text-sm font-medium text-gray-700 hover:text-blue-600">
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
