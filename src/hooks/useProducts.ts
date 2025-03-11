// hooks/useProducts.ts
import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { fetchProducts } from '@/lib/api/products';
import { ProductFilters } from '@/types/product';
import { ProductsResponse } from '../types/product';

export const useProducts = (
  filters: ProductFilters,
  options?: UseQueryOptions<ProductsResponse>
) => {
  return useQuery<ProductsResponse>({
    queryKey: ['products', filters],
    queryFn: () => fetchProducts(filters),
    ...options,
    staleTime: 60 * 1000, // 30 segundos
    cacheTime: 10 * 60 * 1000, // 10 minutos
    refetchOnWindowFocus: true, // Revalida al volver a la pestaña
    refetchOnMount: true, // Revalida al montar el componente
    keepPreviousData: true
  });
};
