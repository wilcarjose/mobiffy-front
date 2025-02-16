'use client'
import React from 'react';
import ProductCard from '@/components/ProductCard';
import LoadingGrid from '@/components/LoadingGrid';

function ProductGrid({ products, isLoading, isError }) {

  if (isLoading) {
    return <LoadingGrid />;
  }

  if (isError) {
    return <div>Failed to load products</div>;
  }

  if (!products || products.length === 0) {
    return <div>No products found.</div>;
  }

  return (
    <div className="grid flex-1 gap-x-8 gap-y-10 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((item) => (
        <ProductCard showPrevPrice product={item} key={item.slug} />
      ))}
    </div>
  );
}

export default ProductGrid;
