// src/components/ProductList.js
'use client';

import React, { useState, useEffect } from 'react';
import SidebarFilters from '@/components/SideBarFilter';
import ButtonSecondary from '@/shared/Button/ButtonSecondary';
import SearchInput from './SearchInput';
import ProductGrid from '@/components/ProductGrid';
import SectionBrands from '@/app/(site)/home/SectionBrands';
import Pagination from './Pagination';

const ProductList = ({
  initialProducts,
  aggregations,
  meta,
  selectedCategory,
  selectedBrand,
  searchTerm,
  currentPage,
  onCategoryChange,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="">
      <div className="container relative flex flex-col lg:flex-row" id="body">
        <div className="pr-4 pt-10 lg:basis-1/3 xl:basis-1/4">
          <SidebarFilters
            aggregations={aggregations}
            selectedCategory={selectedCategory}
            selectedBrand={selectedBrand}
            onCategoryChange={onCategoryChange}
          />
        </div>
        <div className="mb-10 shrink-0 border-t lg:mx-4 lg:mb-0 lg:border-t-0" />
        <div className="relative flex-1">
          <div className="top-32 z-10 mb-3 items-center gap-5 space-y-5 bg-white py-10 lg:sticky lg:flex lg:space-y-0">
            <SearchInput />
            <div className="flex items-center gap-5">
              <ButtonSecondary className="flex items-center gap-1 bg-gray">
                Filters
              </ButtonSecondary>
              <ButtonSecondary className="flex items-center gap-2 bg-gray">
                Most popular
              </ButtonSecondary>
            </div>
          </div>
          <Pagination meta={meta} />
          <div className={`transition-opacity duration-300`}>
            <ProductGrid products={initialProducts} isLoading={isLoading} isError={isError} />
          </div>
          <Pagination meta={meta} />
        </div>
      </div>
      <div className="my-24">
        <SectionBrands />
      </div>
    </div>
  );
};

export default ProductList;
