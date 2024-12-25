// src/components/ProductList.js
import React from 'react';
import SidebarFilters from '@/components/SideBarFilter';
import ButtonSecondary from '@/shared/Button/ButtonSecondary';
import SearchInput from './SearchInput';
import ProductGrid from '@/components/ProductGrid';
import SectionBrands from '@/app/(site)/home/SectionBrands';
import Pagination from './Pagination';

const ProductList = ({ initialProducts, categories, selectedCategory, searchTerm, currentPage, onCategoryChange }) => {
    return (
        <div className="">
            <div className="container relative flex flex-col lg:flex-row" id="body">
                <div className="pr-4 pt-10 lg:basis-1/3 xl:basis-1/4">
                    <SidebarFilters categories={categories} selectedCategory={selectedCategory} onCategoryChange={onCategoryChange} />
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
                    <Pagination meta={initialProducts?.meta} />
                    <div className={`transition-opacity duration-300`}>
                        <ProductGrid products={initialProducts?.products} isLoading={!initialProducts} />
                    </div>
                    <Pagination meta={initialProducts?.meta} />
                </div>
            </div>
            <div className="my-24">
                <SectionBrands />
            </div>
        </div>
    );
};

export default ProductList;
