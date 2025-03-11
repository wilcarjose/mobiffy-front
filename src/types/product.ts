// types/product.ts

import { ProductImage } from '@/types/product-image';
import { ProductSpec } from '@/types/product-spec';

export interface Product {
  id: string;
  name: string;
  slug: string;
  brand: Brand;
  image: ProductImage;
  specs: ProductSpec[];
}

export interface ProductFilters {
  search?: string;
  page?: number;
  category?: string;
  brands?: string;
  specs?: string;
}

export interface ProductsResponse {
  products: Product[];
  meta: {
    current_page: number;
    total: number;
    per_page: number;
    last_page: number;
    from: number;
    to: number;
  };
  aggregations: {
    brands: Brand[];
    categories: Category[];
    specs: Specification[];
  };
}

interface Brand {
  name: string;
  key: string;
  count: number;
  selected: boolean;
}

interface Category {
  title: Record<string, string>;
  slug: string;
  count: number;
}

interface Specification {
  name: string;
  values: SpecificationValue[];
}

interface SpecificationValue {
  key: string;
  name: string;
  count: number;
  selected: boolean;
  uom?: string;
}
