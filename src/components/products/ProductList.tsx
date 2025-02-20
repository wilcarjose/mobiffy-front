'use client'
import React from 'react';
import { Product } from '@/types/product';
import ProductCard from '@/components/products/ProductCard';
//import LoadingGrid from '@/components/products/LoadingGrid';

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products /*, isLoading, isError*/ }: ProductListProps) => {

  // if (isLoading) {
  //   return <LoadingGrid />;
  // }

  // if (isError) {
  //   return <div>Failed to load products</div>;
  // }

  if (!products || products.length === 0) {
    return <div>No products found.</div>;
  }

  return (
    <div className="grid flex-1 gap-x-8 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard showPrevPrice product={product} key={product.slug} />
      ))}
    </div>
  );
}

export default ProductList;
