'use client';
import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Input from '@/shared/Input/Input';
import { MdSearch } from 'react-icons/md';

const SearchInput = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const initialSearchTerm = searchParams.get('search') || '';
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);

  useEffect(() => {
    // Actualiza el estado si cambia el parámetro 'search' en la URL
    setSearchTerm(searchParams.get('search') || '');
  }, [searchParams]);


  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const params = new URLSearchParams(searchParams.toString());
      if (searchTerm) {
        params.set('search', searchTerm);
      } else {
        params.delete('search');
      }

      params.set('page', 1);
      router.push(`?${params.toString()}`);
    }
  };

  return (
    <div className="flex flex-1 items-center gap-2 rounded-full border border-neutral-300 px-4">
        <MdSearch className="text-2xl text-neutral-500"/>
        <Input
            type="text"
            rounded="rounded-full"
            placeholder="Search..."
            sizeClass="h-12 px-0 py-3"
            className="border-transparent bg-transparent placeholder:text-neutral-500 focus:border-transparent"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
        />
    </div>
  );
};

export default SearchInput;
