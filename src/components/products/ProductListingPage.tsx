// src/components/products/ProductListingPage.tsx
'use client';

import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useProducts } from '@/hooks/useProducts';
import ProductList from '@/components/products/ProductList';
import Filters from '@/components/products/filters/Filters';
import Pagination from '@/components/ui/Pagination';
import LoadingState from '@/components/ui/LoadingState';
import ErrorState from '@/components/ui/ErrorState';
import SearchInput from '@/components/ui/SearchInput';
import { Product, ProductsResponse, ProductFilters } from '@/types/product';

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

  const filters = {
    page: params.get('page') || searchParams.page || '1',
    search: params.get('search') || searchParams.search || '',
    category: params.get('category') || searchParams.category || '',
    brand: params.get('brands') || searchParams.brands || '',
    specs: params.get('specs') || searchParams.specs || '',
  };

  // 1. Get client data
  const { data, isLoading, isError } = useProducts(
    filters,
    {
      initialData: initialData,
    }
  );

  // 3. Handle states
  const currentData = data || initialData;
  const showResults = currentData?.products?.length > 0;
  const showEmpty = !isLoading && !currentData?.products?.length;

  // console.log('currentData', currentData)
  // console.log('showResults', showResults)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <Filters 
            aggregations={currentData.aggregations}
            initialFilters={filters}
          />
        </div>
        
        <div className="lg:col-span-3">

          <div className="top-32 z-10 mb-3 items-center gap-5 space-y-5 bg-white py-10 lg:sticky lg:flex lg:space-y-0">
            <SearchInput />
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