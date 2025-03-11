// src/components/products/ProductListingPage.tsx
'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useProducts } from '@/hooks/useProducts';
import ProductList from '@/components/products/ProductList';
import Filters from '@/components/products/filters/Filters';
import Pagination from '@/components/ui/Pagination';
import LoadingState from '@/components/ui/LoadingState';
import ErrorState from '@/components/ui/ErrorState';
import SearchInput from '@/components/ui/SearchInput';
import { ProductsResponse, ProductFilters } from '@/types/product';
import ButtonSecondary from '../ui/commons/Button/ButtonSecondary';

interface ProductListingPageProps {
  initialData: ProductsResponse;
  searchParams: ProductFilters;
}

const ProductListingPage = ({
  initialData,
  searchParams,
}: ProductListingPageProps) => {

  const router = useRouter();
  const params = useSearchParams();
  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);

  const filters = {
    page: params.get('page') || searchParams.page || '1',
    search: params.get('search') || searchParams.search || '',
    category: params.get('category') || searchParams.category || '',
    brands: params.get('brands') || searchParams.brands || '',
    specs: params.get('specs') || searchParams.specs || '',
  };

  const { data, isLoading, isError } = useProducts(filters, {
    initialData: initialData,
  });

  const currentData = data || initialData;
  const showResults = currentData?.products?.length > 0;
  const showEmpty = !isLoading && !currentData?.products?.length;

  const toggleFiltersModal = () => {
    setIsFiltersModalOpen(!isFiltersModalOpen);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1 relative">
          {/* Mobile filters */}
          <div
            className={`fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity ${
              isFiltersModalOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            } lg:hidden`}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setIsFiltersModalOpen(false);
              }
            }}
          >
            <div className="absolute bottom-0 left-0 w-full h-3/4 bg-white rounded-t-2xl p-4 overflow-y-auto">
              <Filters aggregations={currentData.aggregations} initialFilters={filters} />
            </div>
          </div>
          {/* Desktop filters */}
          <div className="lg:block hidden">
            <Filters aggregations={currentData.aggregations} initialFilters={filters} />
          </div>
        </div>
        
        <div className="lg:col-span-3">

          <div className="top-32 z-10 mb-3 items-center gap-5 space-y-5 bg-white py-10 lg:sticky lg:flex lg:space-y-0">
            <SearchInput />
            <div className="flex items-center gap-5">
              <ButtonSecondary
                onClick={toggleFiltersModal}
                className="flex items-center gap-1 bg-gray">
                Filters
              </ButtonSecondary>
              <ButtonSecondary className="flex items-center gap-2 bg-gray">
                Most popular
              </ButtonSecondary>
            </div>
          </div>
          {isLoading && <LoadingState />}
          {isError && <ErrorState />}

          {showEmpty && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold">No se encontraron productos</h3>
              <p className="text-gray-500 mt-2">Intenta con otros filtros</p>
            </div>
          )}
          
          {showResults && (
            <>
              <Pagination
                className="lg:block hidden"
                meta={currentData.meta} 
                currentPage={Number(filters.page) || 1}
              />
              <ProductList products={currentData.products} />
              <Pagination 
                meta={currentData.meta} 
                currentPage={Number(filters.page) || 1}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductListingPage;