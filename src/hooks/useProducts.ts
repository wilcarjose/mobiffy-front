// hooks/useProducts.ts
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '@/lib/api/products';
import { ProductFilters } from '@/types/product';

export const useProducts = (filters: ProductFilters) => {
  return useQuery({
    queryKey: ['products', filters],
    queryFn: () => fetchProducts(filters),
    initialData: {
      products: [],
      meta: {
        current_page: 1,
        total: 0,
        per_page: 30,
        last_page: 1,
        from: 1,
        to: 30
      },
      aggregations: {
        brands: [],
        categories: [],
        specs: []
      }
    }, // Eliminar si no usas SSR
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000, // 5 minutos
  });
};
