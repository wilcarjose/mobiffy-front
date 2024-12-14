'use client'
import React, { useState } from 'react';
import { LuFilter } from 'react-icons/lu';
import { MdOutlineFilterList, MdSearch } from 'react-icons/md';

import ProductCard from '@/components/ProductCard';
import SidebarFilters from '@/components/SideBarFilter';
import ButtonSecondary from '@/shared/Button/ButtonSecondary';
import Input from '@/shared/Input/Input';

import SectionBrands from '@/app/(site)/home/SectionBrands';
import { useProducts } from '@/hooks/products';
import { useCategories } from '@/hooks/categories';
import { useSearchParams } from 'next/navigation';

export default function ProductList() {

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { products, isLoading, isError } = useProducts({ category: selectedCategory });
  const { categories } = useCategories();

  const searchParams = useSearchParams()

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Failed to load products</div>;
  if (!products) return <div>No products found.</div>;

  return (
    <div className="">
      <div className="container relative flex flex-col lg:flex-row" id="body">
        <div className="pr-4 pt-10 lg:basis-1/3 xl:basis-1/4">
          <SidebarFilters categories={categories} onCategoryChange={setSelectedCategory}/>
        </div>
        <div className="mb-10 shrink-0 border-t lg:mx-4 lg:mb-0 lg:border-t-0" />
        <div className="relative flex-1">
            <div
                className="top-32 z-10 mb-3 items-center gap-5 space-y-5 bg-white py-10 lg:sticky lg:flex lg:space-y-0">
                <div className="flex flex-1 items-center gap-2 rounded-full border border-neutral-300 px-4">
                    <MdSearch className="text-2xl text-neutral-500"/>
                    <Input
                        type="text"
                        rounded="rounded-full"
                        placeholder="Search..."
                        sizeClass="h-12 px-0 py-3"
                        className="border-transparent bg-transparent placeholder:text-neutral-500 focus:border-transparent"
                    />
                </div>
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
            <div className="grid flex-1 gap-x-8 gap-y-10 sm:grid-cols-2 xl:grid-cols-3 ">
            {products.map((item) => (
              <ProductCard showPrevPrice product={item} key={item.slug} />
            ))}
          </div>
        </div>
      </div>

      <div className="my-24">
        <SectionBrands />
      </div>
    </div>
  );
};
