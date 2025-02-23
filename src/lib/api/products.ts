// lib/api/products.ts
import { ProductFilters, ProductsResponse } from "../../types/product";
import axios from 'axios'; 

export const fetchProducts = async (
  filters: ProductFilters
): Promise<ProductsResponse> => {
  //console.log('Fetching with filters:', filters);
  try {
    const response = await axios.get('/api/products', {
      params: {
        page: filters.page || 1,
        search: filters.search,
        category: filters.category,
        brand: filters.brand,
        // ... otros parámetros
      },
    });
    //console.log('API Response:', response.data.meta);
    
    return {
      products: response.data.data, // Accedemos a data.data
      meta: response.data.meta,
      aggregations: response.data.aggregations
    };

  } catch (error) {
    console.error('API Error:', error);
    throw new Error('Error fetching products');
  }
};
