'use client'
import React, { useState, useEffect } from 'react';
import { LuFilter } from 'react-icons/lu';
import { MdOutlineFilterList, MdSearch } from 'react-icons/md';

import SidebarFilters from '@/components/SideBarFilter';
import ButtonSecondary from '@/shared/Button/ButtonSecondary';
import SearchInput from './SearchInput';
import ProductGrid from '@/components/ProductGrid';

import SectionBrands from '@/app/(site)/home/SectionBrands';
import { useProducts } from '@/hooks/products';
import { useCategories } from '@/hooks/categories';
import { useRouter, useSearchParams } from 'next/navigation';
import Pagination from './Pagination';

export default function ProductList() {

  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get('page')) || 1;
  const selectedCategory = searchParams.get('category');

  const { products, isLoading, isError, meta } = useProducts({ category: selectedCategory });
  const { categories } = useCategories();
  const router = useRouter();

  console.log('meta: ', meta)
  console.log(meta)

  const handleCategoryChange = (categorySlug) => {
    const params = new URLSearchParams();
    params.set('category', categorySlug);
    params.set('page', 1); // Restablece a la página 1

    router.push(`?${params.toString()}`);
  };

  const [isFetching, setIsFetching] = useState(false);
  
  const [page, setPage] = useState(() => parseInt(searchParams.get('page')) || 1);

  useEffect(() => {
    if (isLoading) setIsFetching(true);
    else setTimeout(() => setIsFetching(false), 300); // Añade un pequeño delay
  }, [isLoading]);

  return (
    <div className="">
      <div className="container relative flex flex-col lg:flex-row" id="body">
        <div className="pr-4 pt-10 lg:basis-1/3 xl:basis-1/4">
          <SidebarFilters categories={categories} onCategoryChange={handleCategoryChange} />
        </div>
        <div className="mb-10 shrink-0 border-t lg:mx-4 lg:mb-0 lg:border-t-0" />
        <div className="relative flex-1">
            <div
                className="top-32 z-10 mb-3 items-center gap-5 space-y-5 bg-white py-10 lg:sticky lg:flex lg:space-y-0">
                <SearchInput />
                <div className="flex items-center gap-5">
                    <ButtonSecondary className="flex items-center gap-1 bg-gray">
                        <LuFilter/>
                        Filters
                    </ButtonSecondary>
                    <ButtonSecondary className="flex items-center gap-2 bg-gray">
                        Most popular
                        <MdOutlineFilterList/>
                    </ButtonSecondary>
                </div>
            </div>
            {meta && (
              <Pagination
                meta={meta}
              />
            )}
            <div className={`transition-opacity duration-300 ${isFetching ? 'opacity-50' : 'opacity-100'}`}>
              <ProductGrid products={products} isLoading={isLoading} isError={isError} />
            </div>
            {meta && (
              <Pagination
                meta={meta}
              />
            )}
        </div>
      </div>
      <div className="my-24">
        <SectionBrands />
      </div>
    </div>
  );
};
