// lib/api/products.ts
import { ProductFilters, ProductsResponse } from "../../types/product";
import axios from '@/lib/utils/axios';

export const fetchProducts = async (
  filters: ProductFilters
): Promise<ProductsResponse> => {

  try {

    const validatedFilters = {
      page: Number(filters.page) || 1,
      search: filters.search || '',
      category: filters.category || '',
      brands: filters.brands?.split(',') || [],
      specs: filters.specs?.split(',') || []
    };

    const response = await axios.get('/api/ve/products', {
      params: validatedFilters
    });
    
    return {
      products: response.data.data || [],
      meta: response.data.meta || {
        current_page: 1,
        total: 0,
        per_page: 30,
        last_page: 1,
      },
      aggregations: response.data.aggregations || {
        brands: [],
        categories: [],
        specs: [],
      }
    };

  } catch (error) {
    console.error('Error detallado:', error.response?.data || error.message);
    throw new Error('Error fetching products');
  }
};
