// src/components/products/ProductListingPage.tsx
'use client';

import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useProducts } from '@/hooks/useProducts';
import ProductList from '@/components/products/ProductList';
import Filters from '@/components/products/Filters';
import Pagination from '@/components/ui/Pagination';
import LoadingState from '@/components/ui/LoadingState';
import ErrorState from '@/components/ui/ErrorState';
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

  // 1. Get client data
  const { data, isLoading, isError } = useProducts(
    Object.fromEntries(params.entries()),
    { 
      initialData: Object.keys(searchParams).length === 0 ? initialData : undefined 
    }
  );

  console.log('Params:', Object.fromEntries(params.entries()));
  console.log('Initial Data:', initialData);
  console.log('Query Data:', data);
  console.log('isLoading:', isLoading, 'isError:', isError);

  // 2. Sync URL params
  useEffect(() => {
    const newParams = new URLSearchParams(params);
    // Sincronizar solo si hay cambios reales
    if (searchParams.page !== undefined) newParams.set('page', searchParams.page.toString());
    if (searchParams.search !== undefined) newParams.set('search', searchParams.search);

    // Evitar bucles de actualización
    if (newParams.toString() !== params.toString()) {
      router.replace(`?${newParams.toString()}`, { scroll: false });
    }

  }, [searchParams, params, router]);

  // 3. Handle states
  const showLoading = isLoading && !data;
  const showError = isError && !data;
  const showResults = !isLoading && !isError && data?.products?.length;
  const showEmptyState = !isLoading && data?.products?.length === 0

  console.log('showLoading', showLoading)
  console.log('showError', showError)
  console.log('showResults', showResults)
  console.log('showEmptyState', showEmptyState)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <Filters 
            aggregations={data?.aggregations || initialData.aggregations}
            initialFilters={searchParams}
          />
        </div>
        
        <div className="lg:col-span-3">
          {showLoading && <LoadingState />}
          {showError && <ErrorState />}

          {showEmptyState && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold">No se encontraron productos</h3>
              <p className="text-gray-500 mt-2">Intenta con otros filtros</p>
            </div>
          )}
          
          {showResults && (
            <>
              <ProductList products={data.products} />
              <Pagination 
                meta={data.meta} 
                currentPage={searchParams.page || 1}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductListingPage;