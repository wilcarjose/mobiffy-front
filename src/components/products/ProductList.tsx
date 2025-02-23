// src/components/ProductList.tsx
import { Product } from '@/types/product';
import ProductCard from './ProductCard';
import LoadingGrid from './LoadingGrid';

interface ProductListProps {
  products: Product[];
  isLoading?: boolean;
}

const ProductList = ({ products , isLoading }: ProductListProps) => (
  <div className="product-grid grid flex-1 gap-x-8 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
    {isLoading ? (
      <LoadingGrid />
    ) : (
      products.map((product) => (
        <ProductCard 
          key={product.slug} 
          product={product}
        />
      ))
    )}
  </div>
)

export default ProductList;
